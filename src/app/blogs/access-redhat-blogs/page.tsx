"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define proper types for our feed data
interface FeedItem {
  title: string;
  link: string;
  content: string;
  contentSnippet: string;
  imageUrl: string | null;
  hasImage: boolean;
}

interface Feed {
  title: string;
  items: FeedItem[];
}

const AccessRedHatRSSFeed = () => {
  const [feedData, setFeedData] = useState<Feed[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        setLoading(true);

        // Use a CORS proxy to avoid CORS issues
        const corsProxy = "https://api.allorigins.win/raw?url=";
        const feedUrl = encodeURIComponent(
          "https://access.redhat.com/blogs/759303/feed"
        );

        const response = await fetch(`${corsProxy}${feedUrl}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch RSS feed: ${response.status}`);
        }

        const xmlText = await response.text();

        // Parse the XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        // Extract RSS items
        const items = Array.from(xmlDoc.querySelectorAll("item")).map(
          (item) => {
            const title = item.querySelector("title")?.textContent || "";
            const link = item.querySelector("link")?.textContent || "";

            // Extract content/description
            let content = "";
            const contentEncoded = item.querySelector(
              "content\\:encoded, encoded"
            )?.textContent;
            const description = item.querySelector("description")?.textContent;
            content = contentEncoded || description || "";

            // Extract image if available
            let imageUrl: string | null = null;
            const mediaContent = item.querySelector("media\\:content, content");
            if (mediaContent && mediaContent.getAttribute("url")) {
              imageUrl = mediaContent.getAttribute("url");
            } else {
              // Try to extract image from content
              const tempDiv = document.createElement("div");
              tempDiv.innerHTML = content;
              const img = tempDiv.querySelector("img");
              if (
                img &&
                img.src &&
                !img.src.startsWith("data:") &&
                img.src.trim() !== ""
              ) {
                imageUrl = img.src;
              }
            }

            // Create snippet from content
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = content;
            const contentText = tempDiv.textContent || "";
            const contentSnippet = contentText.trim().substring(0, 300) + "...";

            return {
              title,
              link,
              content,
              contentSnippet,
              imageUrl,
              hasImage: !!imageUrl,
            };
          }
        );

        setFeedData([
          {
            title: "Access Red Hat",
            items: items,
          },
        ]);
      } catch (err) {
        console.error("Error in fetching RSS feeds:", err);
        setError("Failed to load RSS feeds. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchFeeds();
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const totalPages = feedData[activeTab]?.items
    ? Math.ceil(feedData[activeTab].items.length / itemsPerPage)
    : 0;

  const getCurrentItems = (): FeedItem[] => {
    if (!feedData[activeTab]?.items) return [];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return feedData[activeTab].items.slice(indexOfFirstItem, indexOfLastItem);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const truncateContent = (text: string): string => {
    if (!text) return "";

    const maxLength = 300;
    const words = text.split(" ");

    let truncatedText = "";
    for (const word of words) {
      if ((truncatedText + word).length > maxLength) break;
      truncatedText += (truncatedText ? " " : "") + word;
    }

    return truncatedText + "...";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-12 h-12 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-xl">Loading feed data...</p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="text-center text-red-500 p-8 rounded-lg bg-red-50 max-w-2xl mx-auto mt-16 shadow-lg"
      >
        <h2 className="text-2xl mb-2">Error</h2>
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Try Again
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 mb-20 mt-10">
      <AnimatePresence mode="wait">
        {feedData.map(
          (feed, index) =>
            activeTab === index && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <motion.h1
                  variants={fadeIn}
                  initial="hidden"
                  animate="show"
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-10 md:mb-12 lg:mb-16 flex items-center justify-center gap-2 md:gap-4 bg-gradient-to-r from-red-400 to-rose-500 text-transparent bg-clip-text border-2 border-red-400 px-4 md:px-6 py-3 md:py-4 rounded-lg w-fit mx-auto text-center"
                >
                  {`Blogs From ${feed.title}`}
                </motion.h1>

                {feed.items && feed.items.length > 0 ? (
                  <motion.ul className="space-y-8">
                    {getCurrentItems().map((post, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white"
                      >
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-bold text-red-600 hover:text-red-800"
                        >
                          {post.title}
                        </a>
                        <p className="text-gray-600 mt-5">
                          {truncateContent(post.contentSnippet || post.content)}
                        </p>
                        <div className="mt-5">
                          <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                          >
                            Read more →
                          </a>
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>
                ) : (
                  <motion.p className="text-center text-gray-500 p-8 bg-gray-50 rounded-lg">
                    No posts available for this feed.
                  </motion.p>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-6 flex justify-center">
                    <nav className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 mt-8">
                      {/* Previous Button */}
                      <button
                        onClick={() => paginate(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="px-2 py-1 text-xs sm:text-sm md:text-base rounded-md bg-red-50 text-red-600 disabled:opacity-50 transition-colors"
                        aria-label="Previous page"
                      >
                        <span className="hidden sm:inline">Previous</span>
                        <span className="sm:hidden">Prev</span>
                      </button>

                      {/* Page Numbers - Adaptive Display */}
                      <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                        {/* First page */}
                        {currentPage > 2 && (
                          <button
                            onClick={() => paginate(1)}
                            className="px-2 py-1 text-xs sm:text-sm md:text-base rounded-md bg-red-50 text-red-600 transition-colors"
                            aria-label="Page 1"
                          >
                            1
                          </button>
                        )}

                        {/* Ellipsis after first page */}
                        {currentPage > 3 && (
                          <span className="px-1 text-xs sm:text-sm md:text-base">
                            ...
                          </span>
                        )}

                        {/* Dynamic page numbers */}
                        {[...Array(totalPages)]
                          .map((_, i) => i + 1)
                          .filter((page) => {
                            // Show fewer pages on smaller screens
                            const visiblePages =
                              window.innerWidth < 400
                                ? 1
                                : window.innerWidth < 640
                                ? 2
                                : window.innerWidth < 768
                                ? 3
                                : 5;

                            return (
                              page >=
                                Math.max(
                                  1,
                                  currentPage - Math.floor(visiblePages / 2)
                                ) &&
                              page <=
                                Math.min(
                                  totalPages,
                                  currentPage + Math.floor(visiblePages / 2)
                                )
                            );
                          })
                          .map((page) => (
                            <button
                              key={page}
                              onClick={() => paginate(page)}
                              className={`min-w-7 sm:min-w-8 md:min-w-9 px-1 sm:px-2 md:px-3 py-1 text-xs sm:text-sm md:text-base rounded-md ${
                                currentPage === page
                                  ? "bg-red-600 text-white"
                                  : "bg-red-50 text-red-600"
                              } transition-colors`}
                              aria-label={`Page ${page}`}
                              aria-current={
                                currentPage === page ? "page" : undefined
                              }
                            >
                              {page}
                            </button>
                          ))}

                        {/* Ellipsis before last page */}
                        {currentPage < totalPages - 2 && (
                          <span className="px-1 text-xs sm:text-sm md:text-base">
                            ...
                          </span>
                        )}

                        {/* Last page */}
                        {currentPage < totalPages - 1 && (
                          <button
                            onClick={() => paginate(totalPages)}
                            className="px-2 py-1 text-xs sm:text-sm md:text-base rounded-md bg-red-50 text-red-600 transition-colors"
                            aria-label={`Page ${totalPages}`}
                          >
                            {totalPages}
                          </button>
                        )}
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={() =>
                          paginate(Math.min(totalPages, currentPage + 1))
                        }
                        disabled={currentPage === totalPages}
                        className="px-2 py-1 text-xs sm:text-sm md:text-base rounded-md bg-red-50 text-red-600 disabled:opacity-50 transition-colors"
                        aria-label="Next page"
                      >
                        <span className="hidden sm:inline">Next</span>
                        <span className="sm:hidden">Next</span>
                      </button>
                    </nav>
                  </div>
                )}
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccessRedHatRSSFeed;
