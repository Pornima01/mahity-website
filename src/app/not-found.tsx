
"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Custom404() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(5);

  // Handle mouse movement for interactive background effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({
      x: (e.clientX / window.innerWidth) * 20 - 10,
      y: (e.clientY / window.innerHeight) * 20 - 10,
    });
  };

  // Countdown timer for redirection
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (count > 0) {
      timer = setTimeout(() => setCount((prev) => prev - 1), 4000);
    } else {
      window.location.href = "/";
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [count]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-teal-800 overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      <Head>
        <title>404 | Page Not Found</title>
        <meta name="description" content="Oops! The page you're looking for doesn't exist." />
      </Head>

      {/* Animated Floating Background Elements */}
      <div className="absolute w-full h-full overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 120 + 60;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10 backdrop-blur-lg shadow-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: Math.random() * 8 + 3 }}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
              }}
            />
          );
        })}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-lg w-full px-8 py-12 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 text-center transform transition-all duration-300 hover:scale-105"
        style={{ transform: `translate(${position.x * 0.5}px, ${position.y * 0.5}px)` }}
      >
        <motion.div
          className="text-8xl mb-6 inline-block"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          👻
        </motion.div>

        <motion.h1
          className="text-6xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          404
        </motion.h1>
        <h2 className="text-2xl font-semibold text-white mb-6">Page Not Found</h2>

        <motion.p
          className="text-white/80 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Oops! The page you’re looking for has vanished into the digital void.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link href="/">
            <motion.span
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full text-white font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-110 shadow-lg cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              Go Home
            </motion.span>
          </Link>
          <motion.button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-white/20 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            Go Back
          </motion.button>
        </div>

        <motion.div
          className="mt-8 text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Redirecting to home in <span className="font-bold text-white">{count}</span> seconds...
        </motion.div>
      </motion.div>
    </div>
  );
}
