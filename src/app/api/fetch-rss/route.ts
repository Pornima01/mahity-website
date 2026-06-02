

// import { NextRequest, NextResponse } from 'next/server';
// import Parser from 'rss-parser';
// import { JSDOM } from 'jsdom';

// // Define feed input type
// interface FeedInput {
//   url: string;
//   title: string;
// }

// // Define RSS item structure with proper types
// interface RSSItem {
//   title: string;
//   link?: string;
//   contentSnippet?: string;
//   content?: string;
//   fullContent?: string; 
//   imageUrl?: string | null;
//   hasImage: boolean;
//   isTruncated: boolean; 
//   [key: string]: unknown;
// }

// // Custom parser type to handle media content
// interface CustomItem {
//   media?: {
//     content?: Array<{ $: { url: string } }>;
//     thumbnail?: Array<{ $: { url: string } }>;
//   };
//   content?: string;
//   description?: string;
//   link?: string;
// }

// // Define output feed data type
// interface FeedData {
//   title: string;
//   items: RSSItem[];
// }

// const parser = new Parser({
//   customFields: {
//     item: [
//       ['media:content', 'media.content', { keepArray: true }],
//       ['media:thumbnail', 'media.thumbnail', { keepArray: true }],
//       ['description', 'description'],
//     ],
//   },
// });

// // Function to extract image from HTML content
// function extractImageFromContent(content: string): string | null {
//   if (!content) return null;
  
//   try {
//     const dom = new JSDOM(content);
//     const img = dom.window.document.querySelector('img');
    
//     if (img && img.src && !img.src.startsWith('data:') && img.src.trim() !== '') {
//       return img.src;
//     }
    
//     return null;
//   } catch (error) {
//     console.error('Error parsing HTML content:', error);
//     return null;
//   }
// }

// // Function to check if content is truncated
// function isContentTruncated(content: string): boolean {
//   if (!content) return false;
  
//   const truncationKeywords = [
//     'read more', 'continue reading', 'full article', 'more...',
//     'click for more', 'full story', '...', '[...]', 'continue',
//     'read full', 'read the rest'
//   ];
  
//   const lowerContent = content.toLowerCase();
//   return truncationKeywords.some(keyword => lowerContent.includes(keyword.toLowerCase()));
// }

// // Function to fetch full content from the article URL
// async function fetchFullContent(url: string): Promise<string | null> {
//   if (!url) return null;
  
//   try {
//     const response = await fetch(url);
//     const html = await response.text();
    
//     const dom = new JSDOM(html);
//     const document = dom.window.document;
    
//     // Try to find the main content
//     // This is a simplified approach - real implementation would need to be customized per site
//     const contentSelectors = [
//       'article', 
//       '.post-content', 
//       '.entry-content', 
//       '.content', 
//       'main',
//       '#content',
//       '.article-body'
//     ];
    
//     let mainContent = null;
//     for (const selector of contentSelectors) {
//       const element = document.querySelector(selector);
//       if (element) {
//         mainContent = element.innerHTML;
//         break;
//       }
//     }
    
//     return mainContent || html;
//   } catch (error) {
//     console.error('Error fetching full content:', error, url);
//     return null;
//   }
// }

// export async function POST(req: NextRequest) {
//   try {
//     const { feeds, fetchFullArticles = false } = await req.json() as { 
//       feeds: FeedInput[], 
//       fetchFullArticles?: boolean 
//     };
    
//     const results: FeedData[] = await Promise.all(
//       feeds.map(async (feed: FeedInput) => {
//         try {
//           const parsedFeed = await parser.parseURL(feed.url);
          
//           // Process each item to extract images and check for truncation
//           const processedItems: RSSItem[] = await Promise.all(parsedFeed.items.map(async (item) => {
//             let imageUrl: string | null = null;
            
//             // Try to get image from media:content or media:thumbnail
//             const customItem = item as unknown as CustomItem;
//             if (customItem.media) {
//               if (customItem.media.content && customItem.media.content.length > 0) {
//                 imageUrl = customItem.media.content[0]?.$.url || null;
//               } else if (customItem.media.thumbnail && customItem.media.thumbnail.length > 0) {
//                 imageUrl = customItem.media.thumbnail[0]?.$.url || null;
//               }
//             }
            
//             // If no media image found, try to extract from content
//             if (!imageUrl && customItem.content) {
//               imageUrl = extractImageFromContent(customItem.content);
//             }
            
//             // If still no image, try description field
//             if (!imageUrl && customItem.description) {
//               imageUrl = extractImageFromContent(customItem.description);
//             }
            
//             // Check if content is truncated
//             const content = customItem.content || customItem.description || '';
//             const isTruncated = isContentTruncated(content);
            
//             // Set the hasImage flag based on whether a valid image was found
//             const hasImage = !!imageUrl;
            
//             // Fetch full content if needed and item appears truncated
//             let fullContent = null;
//             if (fetchFullArticles && isTruncated && customItem.link) {
//               fullContent = await fetchFullContent(customItem.link);
//             }
            
//             return {
//               ...item,
//               imageUrl,
//               hasImage,
//               isTruncated,
//               fullContent: fullContent || undefined,
//             } as RSSItem;
//           }));
          
//           return {
//             title: feed.title,
//             items: processedItems || [],
//           };
//         } catch (err) {
//           console.error(`Error fetching ${feed.title}:`, err);
//           return { title: feed.title, items: [] };
//         }
//       })
//     );
    
//     return NextResponse.json(results);
//   } catch (error) {
//     console.error('Error processing RSS feeds:', error);
//     return NextResponse.json(
//       { error: 'Failed to fetch RSS feeds' },
//       { status: 500 }
//     );
//   }
// }


import { NextRequest, NextResponse } from 'next/server';
import Parser from 'rss-parser';
import { JSDOM } from 'jsdom';

interface FeedInput {
  url: string;
  title: string;
}

interface RSSItem {
  title: string;
  link?: string;
  contentSnippet?: string;
  content?: string;
  fullContent?: string; 
  imageUrl?: string | null;
  hasImage: boolean;
  isTruncated: boolean; 
  [key: string]: unknown;
}

interface CustomItem {
  media?: {
    content?: Array<{ $: { url: string } }>;
    thumbnail?: Array<{ $: { url: string } }>;
  };
  content?: string;
  description?: string;
  link?: string;
}

interface FeedData {
  title: string;
  items: RSSItem[];
}

const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'media.content', { keepArray: true }],
      ['media:thumbnail', 'media.thumbnail', { keepArray: true }],
      ['description', 'description'],
    ],
  },
});

function extractImageFromContent(content: string): string | null {
  if (!content) return null;
  try {
    const dom = new JSDOM(content);
    const img = dom.window.document.querySelector('img');
    if (img && img.src && !img.src.startsWith('data:') && img.src.trim() !== '') {
      return img.src;
    }
    return null;
  } catch (error) {
    console.error('Error parsing HTML content:', error);
    return null;
  }
}

function isContentTruncated(content: string): boolean {
  if (!content) return false;
  const truncationKeywords = [
    'read more', 'continue reading', 'full article', 'more...',
    'click for more', 'full story', '...', '[...]', 'continue',
    'read full', 'read the rest'
  ];
  const lowerContent = content.toLowerCase();
  return truncationKeywords.some(keyword => lowerContent.includes(keyword));
}

async function fetchFullContent(url: string): Promise<string | null> {
  if (!url) return null;
  try {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const contentSelectors = [
      'article', '.post-content', '.entry-content',
      '.content', 'main', '#content', '.article-body'
    ];

    for (const selector of contentSelectors) {
      const element = document.querySelector(selector);
      if (element) return element.innerHTML;
    }

    return html;
  } catch (error) {
    console.error('Error fetching full content:', error, url);
    return null;
  }
}

// ✅ Support GET for easier testing
export async function GET() {
  const feeds: FeedInput[] = [
    { url: "https://www.redhat.com/en/rss/blog", title: "Red Hat Blog" },
    { url: "https://aws.amazon.com/blogs/aws/feed/", title: "AWS Blog" },
  ];

  return handleFeeds(feeds);
}

// ✅ Keep POST for dynamic requests
export async function POST(req: NextRequest) {
  try {
    const { feeds, fetchFullArticles = false } = await req.json() as { 
      feeds: FeedInput[], 
      fetchFullArticles?: boolean 
    };
    return handleFeeds(feeds, fetchFullArticles);
  } catch (error) {
    console.error('Error processing RSS feeds:', error);
    return NextResponse.json({ error: 'Failed to fetch RSS feeds' }, { status: 500 });
  }
}

// Core logic (shared by GET + POST)
async function handleFeeds(feeds: FeedInput[], fetchFullArticles = false) {
  const results: FeedData[] = await Promise.all(
    feeds.map(async (feed: FeedInput) => {
      try {
        const parsedFeed = await parser.parseURL(feed.url);

        const processedItems: RSSItem[] = await Promise.all(parsedFeed.items.map(async (item) => {
          let imageUrl: string | null = null;
          const customItem = item as unknown as CustomItem;

          if (customItem.media) {
            if (customItem.media.content?.length) {
              imageUrl = customItem.media.content[0]?.$.url || null;
            } else if (customItem.media.thumbnail?.length) {
              imageUrl = customItem.media.thumbnail[0]?.$.url || null;
            }
          }

          if (!imageUrl && customItem.content) {
            imageUrl = extractImageFromContent(customItem.content);
          }
          if (!imageUrl && customItem.description) {
            imageUrl = extractImageFromContent(customItem.description);
          }

          const content = customItem.content || customItem.description || '';
          const isTruncated = isContentTruncated(content);
          const hasImage = !!imageUrl;

          let fullContent = null;
          if (fetchFullArticles && isTruncated && customItem.link) {
            fullContent = await fetchFullContent(customItem.link);
          }

          return {
            ...item,
            imageUrl,
            hasImage,
            isTruncated,
            fullContent: fullContent || undefined,
          } as RSSItem;
        }));

        return { title: feed.title, items: processedItems || [] };
      } catch (err) {
        console.error(`Error fetching ${feed.title}:`, err);
        return { title: feed.title, items: [] };
      }
    })
  );

  return NextResponse.json(results);
}
