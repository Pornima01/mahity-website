// import React from "react";
// import ReviewSlider from "@/app/careers/ReviewSlider";
// import RecruitmentRoles from "@/app/careers/RecruitmentRoles";
// import Image from "next/image";

// const Careers = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <div className="relative bg-black h-screen flex items-center justify-center">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Image
//             src="/images/Group-14.png"
//             alt="A professional team working together"
//             width={800}
//             height={600}
//             className="object-contain max-w-full max-h-full"
//           />
//         </div>

//         <div className="relative z-10 text-center text-white px-6 sm:px-8 w-full sm:w-[600px] mx-auto">
//           <h1 className="text-xl sm:text-4xl md:text-5xl font-bold mb-6">
//             Work at Mahity
//           </h1>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-[#F68A2A]">
//             Shape the Future With Us
//           </h2>
//           <p className="text-lg sm:text-xl mb-6">
//             Your journey starts here. At Mahity, we’re dedicated to helping you
//             grow, innovate, and succeed. Discover opportunities that align with
//             your goals and aspirations.
//           </p>
//           {/* <button className="mt-6 sm:mt-8 border border-orange-500 text-white font-semibold px-6 sm:px-8 py-3 rounded-md hover:bg-[#d97706] transition duration-300">
//             Browse Jobs
//           </button> */}
//         </div>
//       </div>

//       {/* Our Values Section */}
//       <div className="py-16 bg-gray-100">
//         <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
//           {/* Left Column - Company Values */}
//           <section className="w-full md:w-3/4 lg:w-2/3 mb-8 md:mb-0">
//             <h3 className="text-3xl font-bold text-[#333] mb-4">Our Values</h3>

//             <div className="flex flex-col space-y-12">
//               {/* First Card - Mobile */}
//               <div className="bg-white shadow-lg p-4 rounded-lg flex flex-col items-center text-center md:hidden">
//                 <Image
//                   src="/images/image-36.png"
//                   alt="Innovation"
//                   width={800}
//                   height={600}
//                   className="w-28 h-28 mb-4 transition-transform duration-300 transform scale-100 hover:scale-90 hover:shadow-lg"
//                 />
//                 <p className="text-gray-700 max-w-md">
//                   At Mahity, we navigate the complexities of cloud computing and
//                   modern infrastructure. Our team specializes in deploying and
//                   managing containerized applications using Kubernetes Services
//                   across AWS, Google Cloud, and Microsoft Azure.
//                 </p>
//               </div>

//               {/* First Row - Desktop */}
//               <div className="hidden md:flex items-center text-left">
//                 <Image
//                   src="/images/image-36.png"
//                   alt="Innovation"
//                   width={800}
//                   height={600}
//                   className="w-40 h-40 md:w-48 md:h-40 mr-6 transition-transform duration-300 transform scale-100 hover:scale-90 hover:shadow-lg"
//                 />
//                 <p className="text-gray-700">
//                   At Mahity, we navigate the complexities of cloud computing and
//                   modern infrastructure. Our team specializes in deploying and
//                   managing containerized applications using Kubernetes Services
//                   across AWS, Google Cloud, and Microsoft Azure.
//                 </p>
//               </div>

//               {/* Second Card - Mobile */}
//               <div className="bg-white shadow-lg p-4 rounded-lg flex flex-col items-center text-center md:hidden">
//                 <Image
//                   src="/images/image-37.png"
//                   alt="Technology"
//                   width={800}
//                   height={600}
//                   className="w-28 h-28 mb-4 transition-transform duration-300 transform scale-100 hover:scale-90 hover:shadow-lg"
//                 />
//                 <p className="text-gray-700 max-w-md">
//                   We ensure data security and scalability with our expertise in
//                   MariaDB, Redis, Apache Kafka, and Postgres. We also support
//                   startups in developing technology-enabled services with tools
//                   like Dapr, Istio Service Mesh, Keycloak, and Kogito for
//                   business automation.
//                 </p>
//               </div>

//               {/* Second Row - Desktop */}
//               <div className="hidden md:flex items-center flex-row-reverse text-left">
//                 <Image
//                   src="/images/image-37.png"
//                   alt="Technology"
//                   width={800}
//                   height={600}
//                   className="w-40 h-40 md:w-48 md:h-40 ml-6 transition-transform duration-300 transform scale-100 hover:scale-90 hover:shadow-lg"
//                 />
//                 <p className="text-gray-700">
//                   We ensure data security and scalability with our expertise in
//                   MariaDB, Redis, Apache Kafka, and Postgres. We also support
//                   startups in developing technology-enabled services with tools
//                   like Dapr, Istio Service Mesh, Keycloak, and Kogito for
//                   business automation.
//                 </p>
//               </div>

//               {/* Third Card - Mobile */}
//               <div className="bg-white shadow-lg p-4 rounded-lg flex flex-col items-center text-center md:hidden">
//                 <Image
//                   src="/images/image-38.png"
//                   alt="Empowerment"
//                   width={800}
//                   height={600}
//                   className="w-28 h-28 mb-4 transition-transform duration-300 transform scale-100 hover:scale-90 hover:shadow-lg"
//                 />
//                 <p className="text-gray-700 max-w-md">
//                   Our mission is to be both a reliable partner to our customers
//                   and an employer of choice, focusing on people as much as
//                   technology. We believe that successful companies are
//                   ‘people-ready.’
//                 </p>
//               </div>

//               {/* Third Row - Desktop */}
//               <div className="hidden md:flex items-center text-left">
//                 <Image
//                   src="/images/image-38.png"
//                   alt="Empowerment"
//                   width={800}
//                   height={600}
//                   className="w-40 h-40 md:w-52 md:h-44 mr-6 transition-transform duration-300 transform scale-100 hover:scale-90 hover:shadow-lg"
//                 />
//                 <p className="text-gray-700">
//                   Our mission is to be both a reliable partner to our customers
//                   and an employer of choice, focusing on people as much as
//                   technology. We believe that successful companies are
//                   ‘people-ready.’
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* Right Column - Review Slider */}
//           <ReviewSlider />
//         </div>
//       </div>

//       <div className="py-16  bg-rose-50 ">
//         <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
//           {/* Left Section */}

//           <div className="flex justify-center p-8">
//             <div className="max-w-fit rounded-lg overflow-hidden  ">
//               <Image
//                 src="/images/Group 505.png"
//                 alt="Your main image description"
//                 width={800}
//                 height={600}
//                 className="w-auto h-auto"
//               />
//             </div>
//           </div>

//           {/* Right Section */}

//           <div className="w-full md:w-1/2 text-left">
//             <p className="text-gray-700 mb-4">
//               Empower your passions with Mahity. Join us to innovate and create
//               a smarter, more connected world.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-4 mb-16">
//               <a
//                 href="/contact-us"
//                 className="py-2 px-10 border border-orange-500 text-black rounded transition-colors hover:bg-orange-500 hover:text-white"
//               >
//                 Join Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="py-16 bg-gray-100">
//         <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
//           {/* Left Section */}

//           <RecruitmentRoles />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Careers;


"use client"
import React from "react";
import ReviewSlider from "./ReviewSlider";
import RecruitmentRoles from "./RecruitmentRoles";
import CareerForm from "./career-form";
import Image from "next/image";

const Careers = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="relative min-h-screen flex items-center justify-center py-12">
       
        <div className="absolute inset-0">
          <Image
            src="/images/job-form-bg.png"
            alt="A professional team working together"
            fill
            className="object-cover"
            priority
          />
        
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
          {/* Hero Content */}
          <div className="text-center text-white mb-12">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-bold mb-6">
              Work at Mahity
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-[#F68A2A]">
              Shape the Future With Us
            </h2>
            <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto">
              Your journey starts here. At Mahity, we&apos;re dedicated to helping you
              grow, innovate, and succeed. Discover opportunities that align with
              your goals and aspirations.
            </p>
          </div>

          {/* Embedded Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Apply Now
              </h3>
              <p className="text-gray-600">
                Take the first step towards your career at Mahity. Fill out the form
                 below and we&apos;ll be in touch.
              </p>
            </div>
            
           
            <CareerForm />
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
         
          <section className="w-full md:w-3/4 lg:w-2/3 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold text-[#333] mb-4">Our Values</h3>

            <div className="flex flex-col space-y-12">
              {/* First Card - Mobile */}
              <div className="bg-white shadow-lg p-4 rounded-lg flex flex-col items-center text-center md:hidden">
                <Image
                  src="/images/image-36.png"
                  alt="Innovation"
                  width={800}
                  height={600}
                  className="w-28 h-28 mb-4 transition-transform duration-300 transform scale-100 hover:scale-90 hover:shadow-lg"
                />
                <p className="text-gray-700 max-w-md">
                  At Mahity, we navigate the complexities of cloud computing and
                  modern infrastructure. Our team specializes in deploying and
                  managing containerized applications using Kubernetes Services
                  across AWS, Google Cloud, and Microsoft Azure.
                </p>
              </div>

              {/* First Row - Desktop */}
              <div className="hidden md:flex items-center text-left">
                <Image
                  src="/images/image-36.png"
                  alt="Innovation"
                  width={800}
                  height={600}
                  className="w-40 h-40 md:w-48 md:h-40 mr-6 transition-transform duration-300 transform scale-100 hover:scale-90 hover:shadow-lg"
                />
                <p className="text-gray-700">
                  At Mahity, we navigate the complexities of cloud computing and
                  modern infrastructure. Our team specializes in deploying and
                  managing containerized applications using Kubernetes Services
                  across AWS, Google Cloud, and Microsoft Azure.
                </p>
              </div>

              {/* Second Card - Mobile */}
              <div className="bg-white shadow-lg p-4 rounded-lg flex flex-col items-center text-center md:hidden">
                <Image
                  src="/images/image-37.png"
                  alt="Technology"
                  width={800}
                  height={600}
                  className="w-28 h-28 mb-4 transition-transform duration-300 transform scale-100 hover:scale-90 hover:shadow-lg"
                />
                <p className="text-gray-700 max-w-md">
                  We ensure data security and scalability with our expertise in
                  MariaDB, Redis, Apache Kafka, and Postgres. We also support
                  startups in developing technology-enabled services with tools
                  like Dapr, Istio Service Mesh, Keycloak, and Kogito for
                  business automation.
                </p>
              </div>

              {/* Second Row - Desktop */}
              <div className="hidden md:flex items-center flex-row-reverse text-left">
                <Image
                  src="/images/image-37.png"
                  alt="Technology"
                  width={800}
                  height={600}
                  className="w-40 h-40 md:w-48 md:h-40 ml-6 transition-transform duration-300 transform scale-100 hover:scale-90 hover:shadow-lg"
                />
                <p className="text-gray-700">
                  We ensure data security and scalability with our expertise in
                  MariaDB, Redis, Apache Kafka, and Postgres. We also support
                  startups in developing technology-enabled services with tools
                  like Dapr, Istio Service Mesh, Keycloak, and Kogito for
                  business automation.
                </p>
              </div>

              {/* Third Card - Mobile */}
              <div className="bg-white shadow-lg p-4 rounded-lg flex flex-col items-center text-center md:hidden">
                <Image
                  src="/images/image-38.png"
                  alt="Empowerment"
                  width={800}
                  height={600}
                  className="w-28 h-28 mb-4 transition-transform duration-300 transform scale-100 hover:scale-90 hover:shadow-lg"
                />
                <p className="text-gray-700 max-w-md">
                  Our mission is to be both a reliable partner to our customers
                  and an employer of choice, focusing on people as much as
                  technology. We believe that successful companies are
                  people-ready.
                </p>
              </div>

              {/* Third Row - Desktop */}
              <div className="hidden md:flex items-center text-left">
                <Image
                  src="/images/image-38.png"
                  alt="Empowerment"
                  width={800}
                  height={600}
                  className="w-40 h-40 md:w-52 md:h-44 mr-6 transition-transform duration-300 transform scale-100 hover:scale-90 hover:shadow-lg"
                />
                <p className="text-gray-700">
                  Our mission is to be both a reliable partner to our customers
                  and an employer of choice, focusing on people as much as
                  technology. We believe that successful companies are
                  people-ready.
                </p>
              </div>
            </div>
          </section>

          {/* Right Column - Review Slider */}
          <ReviewSlider />
        </div>
      </div>

      <div className="py-16 bg-rose-50">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <div className="flex justify-center p-8">
            <div className="max-w-fit rounded-lg overflow-hidden">
              <Image
                src="/images/Group 505.png"
                alt="Your main image description"
                width={800}
                height={600}
                className="w-auto h-auto"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 text-left">
            <p className="text-gray-700 mb-4">
              Empower your passions with Mahity. Join us to innovate and create
              a smarter, more connected world.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-4 mb-16">
              <a
                href="#apply"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="py-2 px-10 border border-orange-500 text-black rounded transition-colors hover:bg-orange-500 hover:text-white"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <RecruitmentRoles />
        </div>
      </div>
    </>
  );
};

export default Careers;