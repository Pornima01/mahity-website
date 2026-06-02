"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define proper types for blog posts

interface BlogPost {
  id: number;
  title: string;

  image: string;

  date?: string;
  link?: string;
  tags?: string[];
}

interface BlogPostProps {
  post: BlogPost;
  index: number;
}

const BlogPost = ({ post, index }: BlogPostProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 h-64 flex flex-col relative"
      style={{
        backgroundImage: `url(${post.image})`,
        backgroundSize: "80%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay with increased opacity */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <Link
        href={post.link || `/post/${post.id}`}
        className="block h-full w-full relative z-20"
      >
        <div className="group cursor-pointer h-full flex flex-col justify-center items-center">
          <div className="p-6 flex-grow flex flex-col justify-center items-center text-center w-full">
            <div className="flex flex-col items-center gap-3 mb-3">
              <h3 className="font-bold text-2xl text-white group-hover:text-yellow-300 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>
            </div>

            {/* Tags are kept in the logic but hidden visually */}
            {post.tags && post.tags.length > 0 && (
              <div className="hidden">
                {post.tags.slice(0, 2).map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            )}

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center text-white bg-gray-500 hover:bg-gray-700` rounded-full px-4 py-2 font-bold text-sm mt-2"
            >
              <span className="mr-2">Read More</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const postsPerPage = 9;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const allPosts: BlogPost[] = [
    {
      id: 1,
      title: "Red Hat Blogs",
      image: "/images/redhat.png",
      link: "/blogs/redhat-blogs",
      tags: ["Red Hat", "Enterprise"],
    },
    {
      id: 2,
      title: "AWS Blogs",
      image: "/images/aws.png",
      link: "/blogs/aws-blogs",
      tags: ["Cloud", "AWS"],
    },
    {
      id: 3,
      title: "Access Red Hat Blogs",
      image: "/images/redhat.png",
      link: "/blogs/access-redhat-blogs",
      tags: ["Red Hat", "Access"],
    },
    {
      id: 4,
      title: "CNCF Resources Blogs",
      image: "/images/cloud-native.webp",
      link: "/blogs/cncf-resources-blogs",
      tags: ["CNCF", "Cloud Native"],
    },
    {
      id: 5,
      title: "Red Hat Developers Blogs",
      image: "/images/redhat-devloper.png",
      link: "/blogs/redhat-developers-blogs",
      tags: ["Development", "Red Hat"],
    },

    {
      id: 6,
      title: "Kdnuggets Blogs",
      image: "/images/kdnuggets-logo.png",
      link: "/blogs/kdnuggets-blogs",
      tags: ["Kdnuggets"],
    },
    {
      id: 7,
      title: "Amazon Science Blogs",
      image: "/images/amazon-science-logo.png",
      date: "05 Mar 2024",
      link: "/blogs/amazon-science-blogs",
      tags: ["Amazon Science"],
    },
    {
      id: 8,
      title: "Red Hat Research Blogs",
      image: "/images/redhat.png",
      link: "/blogs/redhat-research-blogs",
      tags: ["Research", "Red Hat"],
    },

    {
      id: 9,
      title: "CNCF Kubeweekly Blogs",
      image: "/images/cloud-native.webp",
      link: "/blogs/cncf-kubeweekly-blogs",
      tags: ["Kubernetes", "CNCF"],
    },
    // {
    //   id: 10,
    //   title: "DevOps Insights",
    //   excerpt:
    //     "In-depth analysis and practical advice on implementing DevOps practices in enterprise environments.",
    //   image: "/images/Blog Image-2.png",

    //   date: "28 Feb 2024",
    //   link: "/devops_rss",
    //   tags: ["DevOps", "CI/CD"],
    //   author: {
    //     name: "Marcus Chen",
    //     avatar: "/images/Ellipse 192.png",
    //   },
    // },
    // {
    //   id: 11,
    //   title: "GitLab Updates",
    //   excerpt:
    //     "Stay informed about the latest features, improvements, and community developments in the GitLab ecosystem.",
    //   image: "/images/Blog_7.png",

    //   date: "10 Mar 2024",
    //   link: "/gitlab_rss",
    //   tags: ["GitLab", "CI/CD"],
    //   author: {
    //     name: "Laura Smith",
    //     avatar: "/images/Ellipse 188.png",
    //   },
    // },
    // {
    //   id: 12,
    //   title: "Cloud Native News",
    //   excerpt:
    //     "The latest trends, tools, and technologies in the cloud native landscape, from containers to microservices.",
    //   image: "/images/Blog Image-4.png",

    //   date: "15 Mar 2024",
    //   link: "/cloudnative_rss",
    //   tags: ["Cloud Native", "CNCF"],
    //   author: {
    //     name: "David Wong",
    //     avatar: "/images/Ellipse 190.png",
    //   },
    // },
  ];

  const allTags = Array.from(
    new Set(allPosts.flatMap((post) => post.tags || []))
  );

  const filteredPosts = selectedTag
    ? allPosts.filter((post) => post.tags?.includes(selectedTag))
    : allPosts;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTag]);

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);

      document
        .getElementById("blog-posts")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-blue-50 to-white min-h-screen h-full flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 flex-grow w-full"
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-10 sm:mt-16 mb-10 sm:mb-20"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 pb-7 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text"
          >
            Blog: Insights & Updates
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm sm:text-base pb-8 text-gray-600 max-w-2xl mx-auto"
          >
            Explore our latest articles, tutorials, and insights on cloud
            technology, DevOps practices, and digital transformation.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mt-8"
          >
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedTag === null
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Posts
            </button>
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedTag === tag
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Blog Posts */}
        <div id="blog-posts">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex justify-between items-center mb-10"
          >
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-semibold "
            >
               {selectedTag ? `${selectedTag}` : "Latest Articles"}
            </motion.h2>
            
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTag || "all"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {currentPosts.map((post, index) => (
                <BlogPost key={post.id} post={post} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {currentPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center py-16 text-center bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-medium text-gray-700 mb-2"
              >
                No posts found
              </motion.h3>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-500 max-w-md"
              >
                We couldn`t find any posts matching your current filters. Try
                adjusting your search criteria.
              </motion.p>
              <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedTag(null)}
                className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                View All Posts
              </motion.button>
            </motion.div>
          )}
        </div>

        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center items-center flex-wrap gap-2 mt-12 mb-8 sm:mb-12"
          >
            {/* <motion.button
              whileHover={{ x: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed bg-gray-50"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </motion.button> */}

            <div className="flex gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => paginate(pageNum)}
                    className={`w-10 h-10 flex items-center justify-center rounded-md text-sm transition-all duration-300 ${
                      currentPage === pageNum
                        ? "bg-blue-600 text-white font-medium shadow-md"
                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {pageNum}
                  </motion.button>
                );
              })}

              {totalPages > 5 && currentPage < totalPages - 2 && (
                <>
                  <span className="w-10 h-10 flex items-center justify-center text-gray-600">
                    ...
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => paginate(totalPages)}
                    className="w-10 h-10 flex items-center justify-center rounded-md text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                  >
                    {totalPages}
                  </motion.button>
                </>
              )}
            </div>

            <motion.button
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                currentPage === totalPages
                  ? "text-gray-300 cursor-not-allowed bg-gray-50"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Blogs;
