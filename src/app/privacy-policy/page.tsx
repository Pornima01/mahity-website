"use client";
import React, { useEffect, useState, useRef, JSX } from "react";
import {
  motion,
  useScroll,
  useInView,
  useSpring,
  useTransform,
} from "framer-motion";

export default function PrivacyPolicy(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const progressBar = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    setIsLoaded(true);

    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e: Event) => {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const sectionInView = sectionRefs.map((ref) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useInView(ref, { once: false, amount: 0.3 })
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.7,
      },
    },
  };

  const sectionVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
       type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 w-full overflow-hidden relative">
      {/* Fixed progress bar at the top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-yellow-400  z-50"
        style={{ width: progressBar, originX: "0%" }}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
          className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 space-y-8 sm:space-y-12 border border-gray-100"
        >
          {/* Header with special animation */}
          <motion.div
            variants={headerVariants}
            className="border-b border-gray-200 pb-6"
          >
            <motion.h1
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-bold"
              animate={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
              animate={{ opacity: [0, 1] }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              At Mahity, Systems Pvt Ltd, we value and respect your privacy and
              are fully committed to protecting it. This Privacy Policy outlines
              our comprehensive practices regarding the collection, use, and
              disclosure of your information when you utilize our cloud-native
              services.
            </motion.p>
          </motion.div>

          {/* Sections with ref-based animations */}
          <motion.section className="space-y-8 sm:space-y-12">
            {/* Section 1 */}
            <motion.div
              ref={sectionRefs[0]}
              id="section-1"
              variants={sectionVariants}
              initial="hidden"
              animate={sectionInView[0] ? "visible" : "hidden"}
              className="space-y-4"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center">
                <motion.span
                  className="inline-block w-8 h-8 mr-2 bg-blue-500 text-white rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  1
                </motion.span>
                Information Collection
              </h2>
              <p className="text-sm sm:text-base text-gray-600 ml-10">
                We collect several types of information for various purposes to
                provide and enhance our services to you. This may include:
              </p>
              <motion.div
                variants={cardContainerVariants}
                initial="hidden"
                animate={sectionInView[0] ? "visible" : "hidden"}
                className="space-y-4 ml-10"
              >
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-blue-500 transition-all duration-300"
                >
                  <h3 className="text-md sm:text-lg font-medium text-gray-900">
                    Personal Data
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">
                    Information such as your name, email address, phone number,
                    and any other details you voluntarily provide through
                    surveys or contact forms.
                  </p>
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-purple-500 transition-all duration-300"
                >
                  <h4 className="text-md sm:text-lg font-medium text-gray-900">
                    Usage Data
                  </h4>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">
                    Information about your interaction with our services,
                    including your IP address, browser type, pages visited, time
                    and date of visit, and other diagnostic data.
                  </p>
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-indigo-500 transition-all duration-300"
                >
                  <h5 className="text-md sm:text-lg font-medium text-gray-900">
                    Tracking & Cookies Data
                  </h5>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">
                    Data collected using cookies and similar tracking
                    technologies to monitor activity and improve user
                    experience.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              ref={sectionRefs[1]}
              id="section-2"
              variants={sectionVariants}
              initial="hidden"
              animate={sectionInView[1] ? "visible" : "hidden"}
              className="space-y-4"
            >
              <h6 className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center">
                <motion.span
                  className="inline-block w-8 h-8 mr-2 bg-purple-500 text-white rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  2
                </motion.span>
                Cookies and IP-Based Tracking
              </h6>
              <p className="text-sm sm:text-base text-gray-600 ml-10 bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
                We utilize cookies and similar tracking technologies to monitor
                activities on our services. Cookies are files with a small
                amount of data, including an anonymous unique identifier. You
                can configure your browser to refuse all cookies or to alert you
                when a cookie is being sent. However, declining cookies may
                limit your ability to use certain parts of our services.
              </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              ref={sectionRefs[2]}
              id="section-3"
              variants={sectionVariants}
              initial="hidden"
              animate={sectionInView[2] ? "visible" : "hidden"}
              className="space-y-4"
            >
              <div className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center">
                <motion.span
                  className="inline-block w-8 h-8 mr-2 bg-indigo-500 text-white rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  3
                </motion.span>
                Links to Other Sites
              </div>
              <p className="text-sm sm:text-base text-gray-600 ml-10 bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-500">
                Our services may include links to external sites that are not
                operated by us. If you click on a third-party link, you will be
                directed to that site. We strongly recommend reviewing the
                Privacy Policy of each site you visit.
              </p>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              ref={sectionRefs[3]}
              id="section-4"
              variants={sectionVariants}
              initial="hidden"
              animate={sectionInView[3] ? "visible" : "hidden"}
              className="space-y-4"
            >
              <div className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center">
                <motion.span
                  className="inline-block w-8 h-8 mr-2 bg-blue-500 text-white rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  4
                </motion.span>
                Processing of Information
              </div>
              <p className="text-sm sm:text-base text-gray-600 ml-10">
                The information we collect from you may be used in the following
                ways:
              </p>
              <motion.div
                variants={cardContainerVariants}
                initial="hidden"
                animate={sectionInView[3] ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ml-10"
              >
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    y: -10,
                  }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-5 rounded-lg border border-blue-200 transition-all duration-300"
                >
                  <div className="text-md sm:text-lg font-medium text-gray-900">
                    To Personalize Your Experience
                  </div>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">
                    Enhance your interaction with our services.
                  </p>
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    y: -10,
                  }}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-5 rounded-lg border border-purple-200 transition-all duration-300"
                >
                  <div className="text-md sm:text-lg font-medium text-gray-900">
                    To Improve Our Services
                  </div>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">
                    Continuously improve the functionality and features.
                  </p>
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    y: -10,
                  }}
                  className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 sm:p-5 rounded-lg border border-indigo-200 transition-all duration-300"
                >
                  <div className="text-md sm:text-lg font-medium text-gray-900">
                    To Enhance Customer Service
                  </div>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">
                    Provide better support and service to our users.
                  </p>
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    y: -10,
                  }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-5 rounded-lg border border-blue-200 transition-all duration-300"
                >
                  <div className="text-md sm:text-lg font-medium text-gray-900">
                    To Send Periodic Emails
                  </div>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">
                    Provide updates, newsletters, and communications.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              ref={sectionRefs[4]}
              id="section-5"
              variants={sectionVariants}
              initial="hidden"
              animate={sectionInView[4] ? "visible" : "hidden"}
              className="space-y-4"
            >
              <div className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center">
                <motion.span
                  className="inline-block w-8 h-8 mr-2 bg-purple-500 text-white rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  5
                </motion.span>
                Security
              </div>
              <p className="text-sm sm:text-base text-gray-600 ml-10 bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
                The security of your data is paramount to us. However, please be
                aware that no method of transmission over the Internet or
                electronic storage is 100% secure. While we strive to use
                commercially acceptable measures to protect your personal data,
                we cannot guarantee its absolute security.
              </p>
            </motion.div>

            {/* Section 6 */}
            <motion.div
              ref={sectionRefs[5]}
              id="section-6"
              variants={sectionVariants}
              initial="hidden"
              animate={sectionInView[5] ? "visible" : "hidden"}
              className="space-y-4"
            >
              <div className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center">
                <motion.span
                  className="inline-block w-8 h-8 mr-2 bg-indigo-500 text-white rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  6
                </motion.span>
                Changes to This Privacy Policy
              </div>
              <p className="text-sm sm:text-base text-gray-600 ml-10 bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-500">
                We may update our Privacy Policy periodically. We will notify
                you of any changes by posting the new Privacy Policy on this
                page. You are advised to review this Privacy Policy regularly
                for any modifications.
              </p>
            </motion.div>
          </motion.section>

          {/* Footer */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="border-t border-gray-200 pt-6 mt-8"
          >
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm sm:text-base text-gray-700">
                By using our services, you consent to our Privacy Policy. If you
                have any questions or concerns about this Privacy Policy, please
                contact us.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
