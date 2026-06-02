// "use client";

// import Image from "next/image";
// import { BsWhatsapp } from "react-icons/bs";
// import { MdLocationOn } from "react-icons/md";
// import myImage from "../../../public/images/ContactUs .png";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// function ContactUs() {
//   // const router = useRouter();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contactNumber: "",
//     reason: "",
//     description: "",
//   });
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<{
//     success?: boolean;
//     message?: string;
//   }>({});

//   // Check URL hash on component mount
//   useEffect(() => {
//     if (window.location.hash === "#formsubmitted") {
//       setIsFormSubmitted(true);
//     }
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (errors[name]) {
//       setErrors((prev) => {
//         const newErrors = { ...prev };
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
//   };

//   const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData((prev) => ({ ...prev, reason: e.target.value }));

//     if (errors.reason) {
//       setErrors((prev) => {
//         const newErrors = { ...prev };
//         delete newErrors.reason;
//         return newErrors;
//       });
//     }
//   };

//   const handleClearForm = () => {
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       contactNumber: "",
//       reason: "",
//       description: "",
//     });
//     setErrors({});
//     setSubmitStatus({});
//   };

//   const router = useRouter();
//   const handleBackToHome = () => {
//     window.history.replaceState({}, document.title, window.location.pathname);
//     setIsFormSubmitted(false);
//     router.push("/");
//   };

//   const validateForm = () => {
//     const newErrors: { [key: string]: string } = {};

//     if (!formData.firstName.trim())
//       newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }

//     if (!formData.reason) {
//       newErrors.reason = "Please select a reason";
//     }

//     if (!formData.description.trim()) {
//       newErrors.description = "Description is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     if (!validateForm()) return;

//     setIsSubmitting(true);
//     setSubmitStatus({});

//     try {
//       console.log("Submitting form data:", formData);

//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//         cache: "no-store",
//       });

//       const result = await response.json();
//       console.log("API response:", result);

//       if (response.ok && result.success) {
//         // Clear form data
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           contactNumber: "",
//           reason: "",
//           description: "",
//         });

//         // Update URL with hash
//         window.history.pushState(
//           {},
//           document.title,
//           window.location.pathname + "#formsubmitted"
//         );

//         // Show thank you page
//         setIsFormSubmitted(true);

//         setSubmitStatus({
//           success: true,
//           message:
//             "Your message has been sent successfully! Thank you for contacting us.",
//         });
//       } else {
//         throw new Error(result.message || "Something went wrong");
//       }
//     } catch (error: unknown) {
//       console.error("❌ Form Submission Error:", error);
//       setSubmitStatus({
//         success: false,
//         message:
//           error instanceof Error
//             ? error.message
//             : "There was an error submitting the form. Please try again.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   // Render Thank You Page with Advanced Animations
//   if (isFormSubmitted) {
//     return (
//       <div className="bg-gradient-to-br from-[#FFEABA]/20 via-[#FFE4A3]/40 to-[#FFCF70]/70 min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {/* Small Floating Particles */}
//           <div className="absolute top-20 left-10 w-4 h-4 bg-white/40 rounded-full animate-float-slow"></div>
//           <div className="absolute top-40 right-20 w-3 h-3 bg-orange-300/50 rounded-full animate-float-medium"></div>
//           <div className="absolute bottom-32 left-20 w-5 h-5 bg-yellow-300/40 rounded-full animate-float-fast"></div>
//           <div className="absolute top-60 left-1/3 w-3 h-3 bg-red-300/50 rounded-full animate-float-slow"></div>
//           <div className="absolute bottom-20 right-10 w-4 h-4 bg-orange-200/60 rounded-full animate-float-medium"></div>
//           <div className="absolute top-32 right-1/3 w-3 h-3 bg-pink-300/40 rounded-full animate-float-fast"></div>
//           <div className="absolute bottom-40 left-10 w-4 h-4 bg-yellow-400/45 rounded-full animate-float-slow"></div>
//           <div className="absolute top-16 left-1/2 w-2 h-2 bg-red-400/50 rounded-full animate-float-medium"></div>
//           <div className="absolute bottom-16 right-1/2 w-3 h-3 bg-orange-400/40 rounded-full animate-float-fast"></div>

//           {/* Large Animated Gradient Orbs with Enhanced Movement */}
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-200/25 to-yellow-200/25 rounded-full blur-3xl animate-pulse-slow animate-drift-1"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse-slower animate-drift-2"></div>
//           <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-pink-200/15 to-yellow-200/15 rounded-full blur-3xl animate-pulse-slow animate-drift-3 transform -translate-x-1/2 -translate-y-1/2"></div>
//           <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 rounded-full blur-2xl animate-pulse-slower animate-drift-4"></div>
//           <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-r from-red-300/18 to-pink-300/18 rounded-full blur-2xl animate-pulse-slow animate-drift-5"></div>
//           <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-r from-orange-300/22 to-yellow-300/22 rounded-full blur-3xl animate-pulse-slower animate-drift-6"></div>
//           <div className="absolute bottom-1/3 left-1/3 w-88 h-88 bg-gradient-to-r from-pink-300/16 to-red-300/16 rounded-full blur-3xl animate-pulse-slow animate-drift-7"></div>
//         </div>

//         <div className="max-w-2xl mx-auto text-center relative z-10">
//           {/* Main Thank You Card */}
//           <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 md:p-12 border border-white/50 relative overflow-hidden animate-slide-up-fade">
//             {/* Success Icon with Animation */}
//             <div className="flex justify-center mb-6">
//               <div className="relative">
//                 {/* Animated Success Circle */}
//                 <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-scale-in shadow-lg">
//                   <svg
//                     className="w-10 h-10 text-white animate-check-draw"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="3"
//                       d="M5 13l4 4L19 7"
//                     ></path>
//                   </svg>
//                 </div>

//                 {/* Ripple Effect */}
//                 <div className="absolute inset-0 bg-green-400/30 rounded-full animate-ripple"></div>
//                 <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ripple-delayed"></div>
//               </div>
//             </div>

//             <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 animate-text-shimmer">
//               Thank You!
//             </h1>

//             <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-delayed">
//               🎉 We have received your message successfully!
//               <br />
//               <span className="text-orange-600 font-medium">
//                 Our team will get in touch with you shortly.
//               </span>
//             </p>

//             {/* Enhanced Back Button */}
//             <button
//               onClick={handleBackToHome}
//               className="group relative px-10 py-4 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl animate-bounce-in"
//             >
//               {/* Button Background Animation */}
//               <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//               {/* Button Content */}
//               <span className="relative z-10 flex items-center justify-center gap-2">
//                 <svg
//                   className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M10 19l-7-7m0 0l7-7m-7 7h18"
//                   ></path>
//                 </svg>
//                 Back to Home Page
//               </span>

//               {/* Shine Effect */}
//               <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
//             </button>

//             {/* Decorative Elements */}
//             <div className="absolute top-4 right-4 text-yellow-400/30 animate-spin-slow">
//               <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//               </svg>
//             </div>

//             <div className="absolute bottom-4 left-4 text-orange-400/30 animate-bounce-gentle">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Custom CSS Animations */}
//         <style jsx>{`
//           @keyframes float-slow {
//             0%,
//             100% {
//               transform: translateY(0px) rotate(0deg);
//             }
//             50% {
//               transform: translateY(-20px) rotate(180deg);
//             }
//           }

//           @keyframes float-medium {
//             0%,
//             100% {
//               transform: translateY(0px) rotate(0deg);
//             }
//             50% {
//               transform: translateY(-15px) rotate(90deg);
//             }
//           }

//           @keyframes float-fast {
//             0%,
//             100% {
//               transform: translateY(0px) rotate(0deg);
//             }
//             50% {
//               transform: translateY(-10px) rotate(360deg);
//             }
//           }

//           @keyframes slide-up-fade {
//             0% {
//               transform: translateY(50px);
//               opacity: 0;
//             }
//             100% {
//               transform: translateY(0);
//               opacity: 1;
//             }
//           }

//           @keyframes scale-in {
//             0% {
//               transform: scale(0);
//               opacity: 0;
//             }
//             50% {
//               transform: scale(1.1);
//             }
//             100% {
//               transform: scale(1);
//               opacity: 1;
//             }
//           }

//           @keyframes check-draw {
//             0% {
//               stroke-dasharray: 0 50;
//               opacity: 0;
//             }
//             50% {
//               opacity: 1;
//             }
//             100% {
//               stroke-dasharray: 50 0;
//               opacity: 1;
//             }
//           }

//           @keyframes ripple {
//             0% {
//               transform: scale(1);
//               opacity: 0.6;
//             }
//             100% {
//               transform: scale(2);
//               opacity: 0;
//             }
//           }

//           @keyframes ripple-delayed {
//             0% {
//               transform: scale(1);
//               opacity: 0.4;
//             }
//             100% {
//               transform: scale(2.5);
//               opacity: 0;
//             }
//           }

//           @keyframes text-shimmer {
//             0% {
//               background-position: -200% center;
//             }
//             100% {
//               background-position: 200% center;
//             }
//           }

//           @keyframes fade-in-delayed {
//             0% {
//               opacity: 0;
//               transform: translateY(20px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           @keyframes bounce-in {
//             0% {
//               transform: scale(0.3);
//               opacity: 0;
//             }
//             50% {
//               transform: scale(1.05);
//             }
//             70% {
//               transform: scale(0.9);
//             }
//             100% {
//               transform: scale(1);
//               opacity: 1;
//             }
//           }

//           @keyframes pulse-slow {
//             0%,
//             100% {
//               opacity: 0.3;
//               transform: scale(1);
//             }
//             50% {
//               opacity: 0.6;
//               transform: scale(1.1);
//             }
//           }

//           @keyframes drift-1 {
//             0%,
//             100% {
//               transform: translate(0, 0) rotate(0deg);
//             }
//             25% {
//               transform: translate(30px, -20px) rotate(90deg);
//             }
//             50% {
//               transform: translate(-20px, -40px) rotate(180deg);
//             }
//             75% {
//               transform: translate(-30px, 20px) rotate(270deg);
//             }
//           }

//           @keyframes drift-2 {
//             0%,
//             100% {
//               transform: translate(0, 0) rotate(0deg);
//             }
//             33% {
//               transform: translate(-40px, 30px) rotate(120deg);
//             }
//             66% {
//               transform: translate(20px, -30px) rotate(240deg);
//             }
//           }

//           @keyframes drift-3 {
//             0%,
//             100% {
//               transform: translate(-50%, -50%) rotate(0deg);
//             }
//             20% {
//               transform: translate(calc(-50% + 25px), calc(-50% - 35px))
//                 rotate(72deg);
//             }
//             40% {
//               transform: translate(calc(-50% - 35px), calc(-50% + 15px))
//                 rotate(144deg);
//             }
//             60% {
//               transform: translate(calc(-50% + 15px), calc(-50% + 35px))
//                 rotate(216deg);
//             }
//             80% {
//               transform: translate(calc(-50% + 35px), calc(-50% - 15px))
//                 rotate(288deg);
//             }
//           }

//           @keyframes drift-4 {
//             0%,
//             100% {
//               transform: translate(0, 0) scale(1) rotate(0deg);
//             }
//             50% {
//               transform: translate(-25px, 40px) scale(1.1) rotate(180deg);
//             }
//           }

//           @keyframes drift-5 {
//             0%,
//             100% {
//               transform: translate(0, 0) scale(1) rotate(0deg);
//             }
//             33% {
//               transform: translate(35px, -25px) scale(0.9) rotate(120deg);
//             }
//             66% {
//               transform: translate(-15px, 30px) scale(1.05) rotate(240deg);
//             }
//           }

//           @keyframes drift-6 {
//             0%,
//             100% {
//               transform: translate(0, 0) rotate(0deg);
//             }
//             25% {
//               transform: translate(-30px, -35px) rotate(90deg);
//             }
//             50% {
//               transform: translate(40px, -15px) rotate(180deg);
//             }
//             75% {
//               transform: translate(20px, 35px) rotate(270deg);
//             }
//           }

//           @keyframes drift-7 {
//             0%,
//             100% {
//               transform: translate(0, 0) scale(1) rotate(0deg);
//             }
//             16% {
//               transform: translate(20px, -30px) scale(0.95) rotate(60deg);
//             }
//             33% {
//               transform: translate(-25px, -20px) scale(1.05) rotate(120deg);
//             }
//             50% {
//               transform: translate(-35px, 25px) scale(0.9) rotate(180deg);
//             }
//             66% {
//               transform: translate(-10px, 40px) scale(1.1) rotate(240deg);
//             }
//             83% {
//               transform: translate(30px, 15px) scale(0.95) rotate(300deg);
//             }
//           }

//           @keyframes spin-slow {
//             from {
//               transform: rotate(0deg);
//             }
//             to {
//               transform: rotate(360deg);
//             }
//           }

//           @keyframes bounce-gentle {
//             0%,
//             100% {
//               transform: translateY(0);
//             }
//             50% {
//               transform: translateY(-5px);
//             }
//           }

//           .animate-float-slow {
//             animation: float-slow 6s ease-in-out infinite;
//           }

//           .animate-float-medium {
//             animation: float-medium 4s ease-in-out infinite;
//           }

//           .animate-float-fast {
//             animation: float-fast 3s ease-in-out infinite;
//           }

//           .animate-slide-up-fade {
//             animation: slide-up-fade 0.8s ease-out forwards;
//           }

//           .animate-scale-in {
//             animation: scale-in 0.6s ease-out 0.3s forwards;
//             transform: scale(0);
//           }

//           .animate-check-draw {
//             animation: check-draw 0.8s ease-out 0.8s forwards;
//             stroke-dasharray: 0 50;
//           }

//           .animate-ripple {
//             animation: ripple 1.5s ease-out 0.8s infinite;
//           }

//           .animate-ripple-delayed {
//             animation: ripple-delayed 1.5s ease-out 1.3s infinite;
//           }

//           .animate-text-shimmer {
//             background-size: 200% auto;
//             animation: text-shimmer 3s ease-in-out 1s infinite;
//           }

//           .animate-fade-in-delayed {
//             animation: fade-in-delayed 0.8s ease-out 1.2s forwards;
//             opacity: 0;
//           }

//           .animate-bounce-in {
//             animation: bounce-in 0.8s ease-out 1.5s forwards;
//             transform: scale(0);
//           }

//           .animate-pulse-slow {
//             animation: pulse-slow 4s ease-in-out infinite;
//           }

//           .animate-pulse-slower {
//             animation: pulse-slower 6s ease-in-out infinite;
//           }

//           .animate-spin-slow {
//             animation: spin-slow 8s linear infinite;
//           }

//           @keyframes pulse-slower {
//             0%,
//             100% {
//               opacity: 0.2;
//               transform: scale(1);
//             }
//             50% {
//               opacity: 0.4;
//               transform: scale(1.05);
//             }
//           }

//           .animate-drift-1 {
//             animation: drift-1 12s ease-in-out infinite;
//           }

//           .animate-drift-2 {
//             animation: drift-2 15s ease-in-out infinite;
//           }

//           .animate-drift-3 {
//             animation: drift-3 18s ease-in-out infinite;
//           }

//           .animate-drift-4 {
//             animation: drift-4 10s ease-in-out infinite;
//           }

//           .animate-drift-5 {
//             animation: drift-5 14s ease-in-out infinite;
//           }

//           .animate-drift-6 {
//             animation: drift-6 16s ease-in-out infinite;
//           }

//           .animate-bounce-gentle {
//             animation: bounce-gentle 2s ease-in-out infinite;
//           }
//         `}</style>
//       </div>
//     );
//   }

//   // Render Original Form
//   return (
//     <>
//       {/* Hero section */}
//       <div className="md:ml-6 md:mr-24 rounded-[22px] md:py-12 px-4 md:pl-8 flex items-center mt-10 md:mt-8 flex-col lg:flex-row">
//         <div className="text-black lg:w-1/2 mb-20  text-center lg:text-left">
//           <div>
//             <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
//               Which is the longest path?
//             </h1>
//             <p className="text-lg md:text-2xl lg:text-3xl mb-5 mt-10 md:mb-8">
//               The path between knowing and doing.
//             </p>
//             <div className="space-y-4">
//               <p className="text-gray-600 text-lg lg:text-xl md:text-base mt-6">
//                 If you have a question, comment, or suggestion, please send us a
//                 message – we love to hear from you
//               </p>
//             </div>

//             {/* Mail section */}
//             <div className="grid md:grid-cols-3 gap-6 mt-12">
//               {/* 1st mail */}
//               <div className="flex justify-center items-center">
//                 {/* Outer Wrapper */}
//                 <div className="relative transition-transform duration-500 hover:scale-105">
//                   {/* Mailbox Image */}
//                   <Image
//                     src="/images/Mail-symbol.png"
//                     alt="Mailbox"
//                     height={300}
//                     width={300}
//                     className="w-[250px] md:w-[350px] h-[150px] md:h-[219px]"
//                   />

//                   {/* Text Overlay */}
//                   <div className="py-3 mt-5 px-5 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white shadow-md rounded-md p-2 transition-transform duration-500 hover:scale-105">
//                     <p className="text-gray-600 font-semibold">
//                       Sales related queries
//                     </p>
//                     <hr />
//                     <a
//                       href="mailto:ask@mahity.com"
//                       className="text-gray-800 font-bold"
//                     >
//                       ask@mahity.com
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* 2nd mail */}
//               <div className="flex justify-center items-center transition-transform duration-500 hover:scale-105">
//                 {/* Outer Wrapper */}
//                 <div className="relative">
//                   {/* Mailbox Image */}
//                   <Image
//                     src="/images/Mail-symbol.png"
//                     alt="Mailbox"
//                     height={300}
//                     width={300}
//                     className="w-[250px] md:w-[350px] h-[150px] md:h-[219px]"
//                   />

//                   {/* Text Overlay */}
//                   <div className="py-3 mt-4 px-2 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white shadow-md rounded-md p-2 transition-transform duration-500 hover:scale-105">
//                     <p className="text-gray-600 font-semibold">
//                       Support related queries
//                     </p>
//                     <hr />
//                     <a
//                       href="mailto:support@mahity.com"
//                       className="text-gray-800 font-bold"
//                     >
//                       support@mahity.com
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* 3rd mail */}
//               <div className="flex justify-center items-center transition-transform duration-500 hover:scale-105">
//                 {/* Outer Wrapper */}
//                 <div className="relative">
//                   {/* Mailbox Image */}
//                   <Image
//                     src="/images/Mail-symbol.png"
//                     alt="Mailbox"
//                     height={300}
//                     width={300}
//                     className="w-[250px] md:w-[350px] h-[150px] md:h-[219px]"
//                   />

//                   {/* Text Overlay */}
//                   <div className="py-3 mt-4 px-2 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white shadow-md rounded-md p-2 transition-transform duration-500 hover:scale-105">
//                     <p className="text-gray-600 font-semibold">
//                       Career related queries
//                     </p>
//                     <hr />
//                     <a
//                       href="mailto:careers@mahity.com"
//                       className="text-gray-800 font-bold"
//                     >
//                       careers@mahity.com
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Image section */}
//         <div className="lg:w-1/2 flex justify-center lg:justify-end lg:mt-0 -mt-14 pb-24 w-full">
//           <div className="relative w-full max-w-[600px]">
//             <Image
//               src={myImage}
//               alt="MAHITY"
//               width={600}
//               height={200}
//               className="w-full transition-transform duration-500 hover:scale-105"
//               priority
//             />
//           </div>
//         </div>
//       </div>

//       {/* Form section */}
//       <div className="px-4 md:px-6 lg:px-12 md:py-12 md:mt-8">
//         <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 ">
//           <div className="w-full lg:w-1/2 px-4 py-4">
//             <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-7">
//               Complaints or Queries
//             </h2>

//             <p className="text-gray-600 mb-6 text-sm md:text-base">
//               Mistakes do sometimes happen. When they do, we commit to being
//               open and transparent and to addressing any disputes as fairly as
//               possible.
//             </p>

//             <div className="border border-orange-400 p-4 rounded-lg">
//               <p className="text-sm md:text-base text-gray-600">
//                 <span className="font-semibold">Note*</span>
//                 <br />
//                 Mahity does not charge any fees for job applications or
//                 processing. Please be cautious of fraudsters and do not fall for
//                 any scams. If you encounter suspicious activity, report it to us
//                 immediately via mail –{" "}
//                 <a
//                   href="mailto:careers@mahity.com"
//                   className="text-blue-600 hover:underline"
//                 >
//                   careers@mahity.com
//                 </a>
//               </p>
//             </div>

//             <div>
//               {/* WhatsApp */}
//               <div className="flex items-center justify-center lg:justify-start mt-8 mb-4">
//                 <span className="text-4xl text-green-600 -ml-7 lg:ml-1">
//                   <BsWhatsapp />
//                 </span>
//                 <a
//                   href="https://wa.me/+919930624489"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="ml-2 text-gray-600 font-bold hover:underline transition-transform duration-500 hover:scale-105"
//                 >
//                   Text Us On{" "}
//                   <span className="text-blue-500 font-bold">WhatsApp</span>
//                 </a>
//               </div>

//               <div className="mb-8 flex items-center justify-center lg:justify-start">
//                 <span className="text-black text-4xl ml-1 mt-2">
//                   <MdLocationOn />
//                 </span>
//                 <p className="ml-2 mt-4 text-gray-600 text-lg md:text-xl">
//                   <a
//                     href="https://www.google.com/maps/dir//G-Square+Business+Park,+1102,+opposite+Sanpada+Railway+Station,+Sector+30A,+Navi+Mumbai,+Maharashtra+400703/@19.0663741,72.9258786,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7c1ef91c8aa23:0x4275d7eab2b55e38!2m2!1d73.0082803!2d19.0663924?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-blue-500 transition-colors"
//                   >
//                     <b>G-SQUARE BUSINESS PARK,</b> 1102,
//                     <br />
//                     Opp. Sanpada Railway Station Road, Sector 30A,
//                     <br />
//                     Vashi, Navi Mumbai, Maharashtra 400703
//                   </a>
//                 </p>
//               </div>

//               <div className="mb-8 flex items-center justify-center lg:justify-start">
//                 <span className="text-black text-4xl ml-1 mt-2">
//                   <MdLocationOn />
//                 </span>
//                 <p className="ml-2 mt-4 text-gray-600 text-lg md:text-xl">
//                   <a
//                     href="https://www.google.com/maps/place/30+N+Gould+St+STE+R,+Sheridan,+WY+82801,+USA/@44.7964167,-106.9556713,17z/data=!3m1!4b1!4m6!3m5!1s0x5335faa8d8b8e7e7:0x1234567890abcdef!8m2!3d44.7964167!4d-106.9556713!16s%2Fg%2F11c0qq0qq0"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-blue-500 transition-colors"
//                   >
//                     <b>MAHITY SYSTEMS LLC</b>
//                     <br />
//                     SPENCER SCHNEIER SOLE MBR 30 N GOULD ST STE R
//                     <br />
//                     SHERIDAN WY 82801
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="w-full lg:w-1/2">
//             <form
//               className="space-y-4 mb-14 lg:mt-0 -mt-5 shadow-2xl px-4 md:px-6 py-6 md:py-8 border border-gray-400/50 rounded-lg transition-transform duration-500 hover:scale-105"
//               onSubmit={handleSubmit}
//             >
//               <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
//                 Leave Us a Message
//               </h3>

//               {submitStatus.message && !submitStatus.success && (
//                 <div className="p-3 rounded-lg bg-red-100 text-red-700">
//                   {submitStatus.message}
//                 </div>
//               )}

//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="flex-1">
//                   <label className="block text-base text-gray-600 mb-1">
//                     First name
//                     {errors.firstName && (
//                       <span className="text-red-500 ml-1">*</span>
//                     )}
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     placeholder="John"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className={`bg-gray-200 w-full px-4 py-2 rounded-lg border ${
//                       errors.firstName ? "border-red-500" : ""
//                     } focus:ring-2 focus:ring-purple-400`}
//                   />
//                   {errors.firstName && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.firstName}
//                     </p>
//                   )}
//                 </div>
//                 <div className="flex-1">
//                   <label className="block text-base text-gray-600 mb-1">
//                     Last name
//                     {errors.lastName && (
//                       <span className="text-red-500 ml-1">*</span>
//                     )}
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     placeholder="Doe"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className={`bg-gray-200 w-full px-4 py-2 rounded-lg border ${
//                       errors.lastName ? "border-red-500" : ""
//                     } focus:ring-2 focus:ring-purple-400`}
//                   />
//                   {errors.lastName && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.lastName}
//                     </p>
//                   )}
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-base text-gray-600 mb-1">
//                   Email
//                   {errors.email && <span className="text-red-500 ml-1">*</span>}
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="johndoe@gmail.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`bg-gray-200 w-full px-4 py-2 rounded-lg border ${
//                     errors.email ? "border-red-500" : ""
//                   } focus:ring-2 focus:ring-purple-400`}
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                 )}
//               </div>
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">
//                   Contact Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="contactNumber"
//                   placeholder="123-456-7890"
//                   value={formData.contactNumber}
//                   onChange={handleChange}
//                   className="bg-gray-200 w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-400"
//                 />
//               </div>
//               <div>
//                 <label className="block text-base text-gray-600 mb-2">
//                   Reason
//                   {errors.reason && (
//                     <span className="text-red-500 ml-1">*</span>
//                   )}
//                 </label>
//                 <div className="space-y-2">
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       id="reasonGeneral"
//                       name="reason"
//                       value="General"
//                       checked={formData.reason === "General"}
//                       onChange={handleRadioChange}
//                       className="form-radio text-purple-400"
//                     />
//                     <span className="ml-2">General</span>
//                   </label>
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       id="reasonComplaint"
//                       name="reason"
//                       value="Complaint"
//                       checked={formData.reason === "Complaint"}
//                       onChange={handleRadioChange}
//                       className="form-radio text-purple-400"
//                     />
//                     <span className="ml-2">Complaint</span>
//                   </label>
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       id="reasonJob"
//                       name="reason"
//                       value="Job"
//                       checked={formData.reason === "Job"}
//                       onChange={handleRadioChange}
//                       className="form-radio text-purple-400"
//                     />
//                     <span className="ml-2">Job</span>
//                   </label>
//                 </div>
//                 {errors.reason && (
//                   <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
//                 )}
//               </div>
//               <div>
//                 <label className="block text-base text-gray-600 mb-2">
//                   Description
//                   {errors.description && (
//                     <span className="text-red-500 ml-1">*</span>
//                   )}
//                 </label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   placeholder="Please describe your inquiry..."
//                   value={formData.description}
//                   onChange={handleChange}
//                   className={`bg-gray-200 w-full px-4 py-2 rounded-lg border ${
//                     errors.description ? "border-red-500" : ""
//                   } focus:ring-2 focus:ring-purple-400 h-32`}
//                 ></textarea>
//                 {errors.description && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.description}
//                   </p>
//                 )}
//               </div>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70"
//                 >
//                   {isSubmitting ? "Submitting..." : "Submit"}
//                 </button>

//                 <button
//                   type="button"
//                   onClick={handleClearForm}
//                   className="w-full sm:w-auto px-6 py-2 text-orange-600 hover:text-gray-900 transition-colors"
//                 >
//                   Clear form
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ContactUs;




"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    reason: "", 
    description: "", 
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    
    if (window.location.hash === "#formsubmitted") {
      setIsFormSubmitted(true);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBackToForm = () => {
    window.history.replaceState({}, document.title, window.location.pathname);
    setIsFormSubmitted(false);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) 
      newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (formData.contactNumber.trim()) {
      const digitsOnly = formData.contactNumber.replace(/\D/g, "");
      
      if (digitsOnly.length < 10) {
        newErrors.contactNumber = "Phone number must have at least 10 digits";
      } else if (digitsOnly.length > 15) {
        newErrors.contactNumber = "Phone number is too long";
      }
      
      const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/;
      if (!phoneRegex.test(formData.contactNumber.trim())) {
        newErrors.contactNumber = "Please enter a valid phone number";
      }
    }

    if (!formData.reason) {
      newErrors.reason = "Please select a reason";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      
      const submitData = {
        
        firstName: formData.firstName.trim(),
        
        
        lastName: formData.lastName.trim(),
        
        email: formData.email.trim(),
        
        
        contactNumber: formData.contactNumber.trim() || "Not Provided",
        
      
        reason: formData.reason,
        
        description: formData.description.trim(),
        
       
      };

      console.log("✅ Submitting correct data format:", submitData);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
        cache: "no-store",
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Clear form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contactNumber: "",
          reason: "",
          description: "",
        });

        window.history.pushState(
          {},
          document.title,
          window.location.pathname + "#formsubmitted"
        );

        setIsFormSubmitted(true);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error: unknown) {
      console.error("Form Submission Error:", error);
      setSubmitStatus({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "There was an error submitting the form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes checkmark {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-bounceIn {
          animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        .form-background {
          position: relative;
          background-image: url('/images/contact-us-bg.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .form-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
      `}</style>

      {/* Contact Form Section with Background Image */}
      <div className="form-background px-4 md:px-6 lg:px-12 py-8 md:py-12 flex justify-center overflow-hidden">
        <div 
          className="w-full max-w-3xl relative z-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out'
          }}
        >
          {/* Header */}
          <div 
            className="text-center mb-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
              transition: 'all 0.8s ease-out 0.2s'
            }}
          >
            <h2 className="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Contact Our Sales Team
            </h2>

            <p className="text-gray-700 text-base md:text-lg font-medium">
              Ready to transform your business? Let us discuss your cloud journey.
            </p>
          </div>

          {/* Form Container */}
          <div
            className="space-y-4 shadow-2xl px-4 md:px-8 py-6 md:py-10 border border-gray-400/50 rounded-lg bg-white backdrop-blur-sm hover:shadow-3xl transition-all duration-500"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.95)',
              transition: 'all 0.8s ease-out 0.4s'
            }}
          >
            {/* Thank You Message */}
            {isFormSubmitted ? (
              <div className="text-center py-12 animate-bounceIn">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{
                        strokeDasharray: 100,
                        strokeDashoffset: 0,
                        animation: 'checkmark 0.5s ease-out 0.3s backwards'
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Thank You!
                </h3>

                <p className="text-lg text-gray-600 mb-2">
                  We have received your message successfully!
                </p>
                <p className="text-lg text-orange-600 font-medium mb-8">
                  Our team will get in touch with you shortly.
                </p>

                <button
                  onClick={handleBackToForm}
                  className="px-10 py-4 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-2xl"
                >
                  Back to Contact Form
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-semibold text-left">
                  Get Started Today
                </h3>
                <p className="text-gray-600 text-left pb-4">
                  Fill out the form below and our sales team will contact you within 24 hours.
                </p>

                {submitStatus.message && !submitStatus.success && (
                  <div className="p-3 rounded-lg bg-red-100 text-red-700 border border-red-300 animate-fadeInUp">
                    {submitStatus.message}
                  </div>
                )}

                {/* First and Last Name */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 group">
                    <label className="block text-base text-gray-600 mb-1 transition-colors duration-300 group-focus-within:text-sky-600 font-medium">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`bg-gray-100 w-full px-4 py-3 rounded-lg border-2 ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      } focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-300 hover:shadow-md outline-none`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1 animate-fadeInUp">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="flex-1 group">
                    <label className="block text-base text-gray-600 mb-1 transition-colors duration-300 group-focus-within:text-sky-600 font-medium">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`bg-gray-100 w-full px-4 py-3 rounded-lg border-2 ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      } focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-300 hover:shadow-md outline-none`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1 animate-fadeInUp">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 group">
                    <label className="block text-base text-gray-600 mb-1 transition-colors duration-300 group-focus-within:text-sky-600 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`bg-gray-100 w-full px-4 py-3 rounded-lg border-2 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-300 hover:shadow-md outline-none`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 animate-fadeInUp">
                        {errors.email}
                      </p>
                    )}
                    {!errors.email && formData.email && (
                      <p className="text-green-500 text-xs mt-1">
                        ✓ Email format looks good
                      </p>
                    )}
                  </div>
                  <div className="flex-1 group">
                    <label className="block text-base text-gray-600 mb-1 transition-colors duration-300 group-focus-within:text-sky-600 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className={`bg-gray-100 w-full px-4 py-3 rounded-lg border-2 ${
                        errors.contactNumber ? "border-red-500" : "border-gray-300"
                      } focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-300 hover:shadow-md outline-none`}
                    />
                    {errors.contactNumber && (
                      <p className="text-red-500 text-sm mt-1 animate-fadeInUp">
                        {errors.contactNumber}
                      </p>
                    )}
                  </div>
                </div>

                {/* Interest Dropdown */}
                <div className="group">
                  <label className="block text-base text-gray-600 mb-2 transition-colors duration-300 group-focus-within:text-sky-600 font-medium">
                    What are you interested in? *
                  </label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, reason: e.target.value }))
                    }
                    className={`bg-gray-100 w-full px-4 py-3 rounded-lg border-2 ${
                      errors.reason ? "border-red-500" : "border-gray-300"
                    } focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-300 hover:shadow-md outline-none`}
                  >
                    <option value="" hidden>Select an option</option>
                    <option value="Cloud Migration">Cloud Migration</option>
                    <option value="AI & ML">AI & Machine Learning</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="App Modernization">Application Modernization</option>
                    <option value="Security">Security & Compliance</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.reason && (
                    <p className="text-red-500 text-sm mt-1 animate-fadeInUp">
                      {errors.reason}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-base text-gray-600 mb-2 transition-colors duration-300 group-focus-within:text-sky-600 font-medium">
                    Message *
                  </label>
                  <textarea
                    name="description"
                    placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                    value={formData.description}
                    onChange={handleChange}
                    className={`bg-gray-100 w-full px-4 py-3 rounded-lg border-2 ${
                      errors.description ? "border-red-500" : "border-gray-300"
                    } focus:border-sky-500 focus:ring-4 focus:ring-sky-100 h-32 transition-all duration-300 hover:shadow-md outline-none resize-none`}
                  ></textarea>
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1 animate-fadeInUp">
                      {errors.description}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-orange-600 via-yellow-600 to-pink-600 text-white font-bold rounded-lg hover:from-orange-700 hover:via-yellow-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl gradient-animate"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <span className="inline-block w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-4 md:px-6 lg:px-12 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Information */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-7">
              Complaints or Queries
            </h2>

            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Mistakes do sometimes happen. When they do, we commit to being
              open and transparent and to addressing any disputes as fairly as
              possible.
            </p>

            <div className="border border-orange-400 p-4 rounded-lg mb-8">
              <p className="text-sm md:text-base text-gray-600">
                <span className="font-semibold">Note*</span>
                <br />
                Mahity does not charge any fees for job applications or
                processing. Please be cautious of fraudsters and do not fall for
                any scams. If you encounter suspicious activity, report it to us
                immediately via mail –{" "}
                <a
                  href="mailto:careers@mahity.com"
                  className="text-blue-600 hover:underline"
                >
                  careers@mahity.com
                </a>
              </p>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center justify-start mb-6">
              <span className="text-4xl text-green-600">
                <BsWhatsapp />
              </span>
              <a
                href="https://wa.me/+919930624489"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-gray-600 font-bold hover:underline"
              >
                Text Us On{" "}
                <span className="text-blue-500 font-bold">WhatsApp</span>
              </a>
            </div>

            {/* Location 1 */}
            <div className="mb-6 flex items-start">
              <span className="text-black text-4xl mt-2">
                <MdLocationOn />
              </span>
              <p className="ml-3 text-gray-600 text-base md:text-lg">
                <a
                  href="https://www.google.com/maps/dir//G-Square+Business+Park,+1102,+opposite+Sanpada+Railway+Station,+Sector+30A,+Navi+Mumbai,+Maharashtra+400703/@19.0663741,72.9258786,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7c1ef91c8aa23:0x4275d7eab2b55e38!2m2!1d73.0082803!2d19.0663924?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  <b>G-SQUARE BUSINESS PARK,</b> 1102,
                  <br />
                  Opp. Sanpada Railway Station Road, Sector 30A,
                  <br />
                  Vashi, Navi Mumbai, Maharashtra 400703
                </a>
              </p>
            </div>

            {/* Location 2 */}
            <div className="mb-6 flex items-start">
              <span className="text-black text-4xl mt-2">
                <MdLocationOn />
              </span>
              <p className="ml-3 text-gray-600 text-base md:text-lg">
                <a
                  href="https://www.google.com/maps/place/30+N+Gould+St+STE+R,+Sheridan,+WY+82801,+USA/@44.7964167,-106.9556713,17z/data=!3m1!4b1!4m6!3m5!1s0x5335faa8d8b8e7e7:0x1234567890abcdef!8m2!3d44.7964167!4d-106.9556713!16s%2Fg%2F11c0qq0qq0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  <b>MAHITY SYSTEMS LLC</b>
                  <br />
                  SPENCER SCHNEIER SOLE MBR 30 N GOULD ST STE R
                  <br />
                  SHERIDAN WY 82801
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Email Card */}
          <div className="w-full lg:w-1/2 flex items-center justify-center py-12">
            <div className="relative p-8">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[500px] h-[500px] bg-gradient-to-br from-orange-200/60 via-yellow-200/60 to-orange-200/60 rounded-full blur-3xl"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[420px] h-[420px] bg-gradient-to-br from-orange-100/30 via-yellow-100/30 to-orange-100/30 rounded-full"></div>
              </div>

              <div className="flex flex-wrap justify-center gap-8 relative z-10">
                <div className="flex justify-center items-center transition-transform duration-500 hover:scale-110">
                  <div className="relative max-w-[320px]">
                    <Image
                      src="/images/mail-bg.png"
                      alt="Mailbox"
                      height={180}
                      width={300}
                      className="h-auto"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 text-center bg-white shadow-xl rounded-xl p-4 w-[200px]">
                      <p className="text-gray-600 font-semibold text-sm">
                        Sales related queries
                      </p>
                      <hr className="my-2" />
                      <a
                        href="mailto:ask@mahity.com"
                        className="text-gray-800 font-bold text-base hover:text-blue-600"
                      >
                        ask@mahity.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;