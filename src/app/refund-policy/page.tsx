
// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useInView,
//   useSpring,
//   useTransform,
// } from "framer-motion";

// export default function RefundPolicy() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const { scrollYProgress } = useScroll();
//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   });

//   const progressBar = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

//   useEffect(() => {
//     setIsLoaded(true);

//     // Add smooth scrolling to anchor links
//     document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//       anchor.addEventListener("click", (e) => {
//         e.preventDefault();
//         const href = anchor.getAttribute("href");
//         if (href) {
//           const targetElement = document.querySelector(href);
//           if (targetElement) {
//             targetElement.scrollIntoView({
//               behavior: "smooth",
//             });
//           }
//         }
//       });
//     });

//     return () => {
//       document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//         anchor.removeEventListener("click", () => {});
//       });
//     };
//   }, []);

//   const eligibilityCriteria = [
//     "Refund Window: Refunds are available within 7 days of the original purchase date.",
//     "Content Access Limit: Refunds can only be processed if you have viewed less than 25% of the course material.",
//     "Non-refundable Fees: Please note that any internet handling fees or payment transaction charges associated with your purchase will not be refunded.",
//   ];

//   const nonRefundableCases = [
//     "If you have accessed more than 25% of the course content.",
//     "If you request a refund beyond the 7-day window from the purchase date.",
//   ];

//   // Create refs for each section for animation triggers
//   const sectionRefs = [
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//   ];
  
//   // Check when each section is in view
//   const sectionInView = sectionRefs.map((ref) =>
    
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useInView(ref, { once: false, amount: 0.3 })
//   );

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const headerVariants = {
//     hidden: { y: -100, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         duration: 0.7,
//       },
//     },
//   };

//   const sectionVariants = {
//     hidden: { x: -50, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         duration: 0.6,
//       },
//     },
//   };

//   const cardContainerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 150,
//         damping: 20,
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
//       {/* Fixed progress bar at the top */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-yellow-400  z-50"
//         style={{ width: progressBar, originX: "0%" }}
//       />

//       <div className="max-w-8xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         <motion.div
//           initial="hidden"
//           animate={isLoaded ? "visible" : "hidden"}
//           variants={containerVariants}
//           className="bg-white rounded-lg shadow-lg p-6 sm:p-8 space-y-8 border border-gray-100"
//         >
//           {/* Header Section with animation */}
//           <motion.div
//             variants={headerVariants}
//             className="border-b border-gray-200 pb-6"
//           >
//             <motion.h1
//               className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-3xl font-bold sm:text-4xl"
//               animate={{ opacity: [0, 1], y: [20, 0] }}
//               transition={{ delay: 0.5, duration: 0.7 }}
//             >
//               Refund Policy
//             </motion.h1>
//             <motion.p
//               className="mt-4 text-gray-600 leading-relaxed"
//               animate={{ opacity: [0, 1] }}
//               transition={{ delay: 0.8, duration: 0.7 }}
//             >
//               Thank you for choosing Mahity for your learning journey!
//             </motion.p>
//           </motion.div>

//           {/* Introduction */}
//           <motion.div
//             ref={sectionRefs[0]}
//             variants={sectionVariants}
//             initial="hidden"
//             animate={sectionInView[0] ? "visible" : "hidden"}
//             className="prose max-w-none text-gray-600"
//           >
//             <p className="leading-relaxed">
//               At Mahity, we are committed to delivering top-tier online courses that empower you{" "}
//               to meet your professional and personal learning aspirations. We understand that{" "}
//               sometimes a course might not meet your expectations, and we want to ensure your{" "}
//               experience is as seamless and supportive as possible. That&apos;s why we have designed{" "}
//               a comprehensive refund and cancellation policy to safeguard your interests.
//             </p>
//           </motion.div>

//           {/* Main Refund Policy */}
//           <motion.div
//             ref={sectionRefs[1]}
//             variants={sectionVariants}
//             initial="hidden"
//             animate={sectionInView[1] ? "visible" : "hidden"}
//             className="bg-blue-50 p-6 rounded-lg"
//             whileHover={{
//               scale: 1.02,
//               boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//             }}
//             transition={{ duration: 0.3 }}
//           >
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Refund Policy</h2>
//             <p className="text-gray-600 leading-relaxed">
//               If you&apos;re not completely satisfied with a course you&apos;ve enrolled in, you can request{" "}
//               a full refund within <span className="font-semibold">7 days of purchase</span>, provided{" "}
//               that you have not accessed more than <span className="font-semibold">25% of the course content</span>.
//               To initiate a refund, simply reach out to our support team at{" "}
//               <span className="font-semibold">learn@mahity.com</span> with your order information and a brief explanation{" "}
//               of your refund request. We aim to process all valid refund requests within 10 business days.
//             </p>
//           </motion.div>

//           {/* Eligibility Criteria */}
//           <motion.div
//             ref={sectionRefs[2]}
//             variants={sectionVariants}
//             initial="hidden"
//             animate={sectionInView[2] ? "visible" : "hidden"}
//             className="space-y-4"
//           >
//             <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
//               <motion.span
//                 className="inline-block w-8 h-8 mr-2 bg-blue-500 text-white rounded-full flex items-center justify-center"
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 1 }}
//               >
//                 1
//               </motion.span>
//               Eligibility for Refunds
//             </h3>
//             <motion.ul
//               variants={cardContainerVariants}
//               className="space-y-3"
//             >
//               {eligibilityCriteria.map((criterion, index) => (
//                 <motion.li 
//                   key={index} 
//                   variants={cardVariants}
//                   whileHover={{
//                     scale: 1.03,
//                     boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
//                   }}
//                   className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 transition-all duration-300"
//                 >
//                   <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-600" />
//                   <p className="text-gray-600">{criterion}</p>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </motion.div>

//           {/* Non-refundable Cases */}
//           <motion.div
//             ref={sectionRefs[3]}
//             variants={sectionVariants}
//             initial="hidden"
//             animate={sectionInView[3] ? "visible" : "hidden"}
//             className="space-y-4"
//           >
//             <h4 className="text-2xl font-semibold text-gray-900 flex items-center">
//               <motion.span
//                 className="inline-block w-8 h-8 mr-2 bg-red-500 text-white rounded-full flex items-center justify-center"
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 1 }}
//               >
//                 2
//               </motion.span>
//               When Refunds Are Not Available
//             </h4>
//             <motion.ul
//               variants={cardContainerVariants}
//               className="space-y-3"
//             >
//               {nonRefundableCases.map((item, index) => (
//                 <motion.li 
//                   key={index} 
//                   variants={cardVariants}
//                   whileHover={{
//                     scale: 1.03,
//                     boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
//                   }}
//                   className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border-l-4 border-red-500 transition-all duration-300"
//                 >
//                   <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-red-500" />
//                   <p className="text-gray-600">{item}</p>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </motion.div>

//          {/* Cancellation Notice */}
//         <motion.div
//           className="bg-gray-100 p-6 rounded-lg border-l-4 border-red-500 ml-4"
//           whileHover={{
//             scale: 1.02,
//             boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           <p className="text-gray-600">
//             Even if you don&apos;t qualify for a refund, you have the option to cancel your enrollment
//             at any point. By canceling your enrollment, you will lose access to the course content,
//             courseware, practice tests, and any supplementary materials associated with the course.
//           </p>
//         </motion.div>

//           {/* How to Request Section */}
//           <motion.div
//             ref={sectionRefs[5]}
//             variants={sectionVariants}
//             initial="hidden"
//             animate={sectionInView[5] ? "visible" : "hidden"}
//             className="space-y-4"
//           >
//             <h5 className="text-2xl font-semibold text-gray-900 flex items-center">
//               <motion.span
//                 className="inline-block w-8 h-8 mr-2 bg-indigo-500 text-white rounded-full flex items-center justify-center"
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 1 }}
//               >
//                 3
//               </motion.span>
//               How to Request a Refund or Cancel Enrollment
//             </h5>
//             <motion.div
//               variants={cardVariants}
//               className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500"
//               whileHover={{
//                 scale: 1.03,
//                 boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               <p className="text-gray-600">
//                 To request a refund or cancel your enrollment, please contact our support team at{" "}
//                 <span className="font-medium">learn@mahity.com</span> with your order number and{" "}
//                 relevant details. Our dedicated support staff will guide you through the process{" "}
//                 and confirm your request.
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* Policy Updates */}
//           <motion.div
//             ref={sectionRefs[5]}
//             variants={sectionVariants}
//             initial="hidden"
//             animate={sectionInView[5] ? "visible" : "hidden"}
//             className="space-y-4"
//           >
//             <h6 className="text-2xl font-semibold text-gray-900 flex items-center">
//               <motion.span
//                 className="inline-block w-8 h-8 mr-2 bg-blue-500 text-white rounded-full flex items-center justify-center"
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 1 }}
//               >
//                 4
//               </motion.span>
//               Policy Updates and Amendments

//             </h6>
//             <motion.div
//               variants={cardVariants}
//               className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500"
//               whileHover={{
//                 scale: 1.02,
//                 boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               <p className="text-gray-600 ">
//                 Mahity reserves the right to revise, modify, or update this refund and cancellation{" "}
//                 policy as needed to align with industry standards and internal processes. Any changes{" "}
//                 to the policy will be promptly posted on our website and will become effective{" "}
//                 immediately upon publication. We encourage you to review our policies periodically to{" "}
//                 stay informed of any updates.
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* Why Mahity Section */}
//           <motion.div
//             variants={sectionVariants}
//             initial="hidden"
//             animate={isLoaded ? "visible" : "hidden"}
//             className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg space-y-4 border-l-4 border-purple-500 ml-5"
//             whileHover={{
//               scale: 1.02,
//               boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//             }}
//           >
//             <div className="text-2xl font-semibold text-gray-900">Why Mahity?</div>
//             <p className="text-gray-600">
//               At Mahity, your satisfaction is our priority. We strive to create a learning{" "}
//               experience that&apos;s not only engaging but also reliable and transparent. Our policies{" "}
//               are designed to uphold fairness and clarity, ensuring that you feel confident and{" "}
//               supported throughout your educational journey with us. Whether you&apos;re exploring the{" "}
//               latest in cloud-native technologies, mastering Kubernetes, or diving deep into{" "}
//               other innovative cloud solutions, Mahity is here to help you succeed.
//             </p>
//           </motion.div>

//           {/* Contact Footer */}
//           <motion.div
//             variants={sectionVariants}
//             initial="hidden"
//             animate={isLoaded ? "visible" : "hidden"}
//             className="border-t border-gray-200 pt-6 mt-8"
//           >
//             <motion.div
//               className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100"
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//             >
//               <p className="text-gray-600">
//                 If you have any questions or require assistance, our team is here to help.{" "}
//                 Don&apos;t hesitate to reach out at <span className="font-medium">learn@mahity.com</span> for{" "}
//                 any queries related to our courses, policies, or platform assistance.
//               </p>
//               <p className="mt-4 text-gray-600">
//                 Thank you for being a valued learner with Mahity. We look forward to supporting{" "}
//                 your growth and helping you achieve your learning goals with confidence.
//               </p>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }