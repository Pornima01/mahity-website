"use client";
import React from "react";
import Hero from "../components/hero";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <OurOfferingsSection />
      <CloudNativeSection />
      <BlogAndCTASection />
      <EducationKubernetes />
    </div>
  );
};

const services = [
  { title: "Adopting Openshift Plus for Payment Hub solutions", image: "/images/Adopting Openshift Plus for Payment Hub solutions.png" },
  { title: "Adopting Payment Hub", image: "/images/Adopting Payment Hub.png" },
  { title: "Adoption of Linux for Mobile Banking", image: "/images/Adoption of Linux for Mobile Banking.png" },
  { title: "Adoption of OpenShift for Finlite Solution", image: "/images/Adoption of OpenShift for Finlite Solution.png" },
  { title: "Advanced Cluster Management for OpenShift", image: "/images/Advanced Cluster Management for OpenShift.png" },
  { title: "Deployment and Integration of OpenShift Plus for Cash Management", image: "/images/Deployment and Integration of OpenShift Plus for Cash Management.png" },
  { title: "Deployment and Integration of OpenShift Plus for CRM", image: "/images/Deployment and Integration of OpenShift Plus for CRM.png" },
  { title: "Deployment and Integration of OpenShift Plus for eKuber Solution", image: "/images/Deployment and Integration of OpenShift Plus for eKuber Solution.png" },
  { title: "Deployment of OpenShift Virtualization for your KYC solutions", image: "/images/Deployment of OpenShift Virtualization for your KYC solutions.png" },
  { title: "Deployment of ROSA for KYC Solution", image: "/images/Deployment of ROSA for KYC Solution.png" },
  { title: "Edge Computing", image: "/images/Edge Computing.png" },
  { title: "Enabled UPI adoption on OpenShift", image: "/images/Enabled UPI adoption on OpenShift.png" },
  { title: "Implementation of OpenShift Plus for ePAY Solution", image: "/images/Implementation of OpenShift Plus for ePAY Solution.png" },
  { title: "Kafka with Geo-Replication for Financial Applications", image: "/images/Kafka with Geo-Replication for Financial Applications.png" },
  { title: "Modernize UPI with OpenShift", image: "/images/Modernize UPI with OpenShift.png" },
  { title: "Ran MLOps effectively, using Red Hat OpenShift", image: "/images/Ran MLOps effectively, using Red Hat OpenShift.png" },
  { title: "Red Hat OpenShift for implementation of Advanced Cash Management Solutions", image: "/images/Red Hat OpenShift for implementation of Advanced Cash Management Solutions.png" },
  { title: "Red Hat OpenShift Pipelines", image: "/images/Red Hat OpenShift Pipelines.png" },
  { title: "VM Migration to OpenShift", image: "/images/VM Migration to OpenShift.png" },
  // { title: "Service 20", image: "/images/slider-20.png" },
];

const offerings = [
  { name: "Amazon Web Service", icon: "/images/aws.png" },
  { name: "Google Cloud Platform", icon: "/images/cloud.png" },
  { name: "Microsoft Azure", icon: "/images/azure.png" },
  { name: "RedHat Hybrid Cloud", icon: "/images/redhat.png" },
];

const CloudNativeSection = () => {
  return (
    <div className="w-full bg-gray-50 relative pb-10 overflow-hidden">
      {/* Decorative Animated Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute hidden lg:block md:block right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-[#f9feb2] rounded-full -mr-28 -mt-14 opacity-30 z-0"
      />

      <section className="max-w-6xl mx-auto px-6 relative z-10 py-12">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 mt-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            <span className="text-[#8191DA]">Cloud Native</span> &
            <span className="text-[#8191DA]"> Open Source</span> Managed
            Services
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Learn how our experts can help you modernize cloud infrastructure
            and truly be cloud native.
          </p>
        </motion.div>

        {/* Mobile Slider - Navigation arrows removed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:hidden"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={false}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper services-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-4">
                  <div className="bg-white rounded-lg shadow-lg h-48 w-full flex items-center justify-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={200}
                      height={150}
                      className="rounded-lg transition-all duration-300"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Desktop Slider - Navigation arrows removed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="hidden lg:block"
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={false}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper services-swiper-desktop py-10"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-4">
                  <div className="bg-white rounded-lg shadow-lg h-64 w-full flex items-center justify-center relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="rounded-lg transition-all duration-300"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Custom Styles for Swiper - Removed arrow styling */}
        <style jsx global>{`
          .swiper {
            width: 100%;
            height: 100%;
            margin-left: auto;
            margin-right: auto;
          }

          .swiper-slide {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .services-swiper .swiper-pagination-bullet-active,
          .services-swiper-desktop .swiper-pagination-bullet-active {
            background-color: #8191da;
            width: 14px !important;
            height: 14px !important;
          }

          .services-swiper .swiper-pagination,
          .services-swiper-desktop .swiper-pagination {
            position: relative;
            margin-top: 30px;
          }
        `}</style>
      </section>
    </div>
  );
};

const OurOfferingsSection = () => {
  return (
    <section
      className="relative py-16  pb-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Group 500.png')" }}
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10 px-6 lg:px-12">
        {/* Heading */}
        <div className="relative inline-block mb-12">
          <Image
            src="/images/Group 483.png"
            alt="Decorative Lines"
            width={450}
            height={300}
            className="absolute top-6 lg:-top-4 -left-12 w-12 h-14 hidden md:block"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl md:pt-10 lg:pt-0 font-semibold text-gray-800">
            Our Offerings
          </h1>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-10">
          {offerings.map((offer, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center shadow-lg hexagon">
                <Image
                  src={offer.icon}
                  alt={offer.name}
                  width={64}
                  height={64}
                  className="hexagon-img"
                />
              </div>
              <p className="mt-4 font-medium text-gray-700 text-sm sm:text-base md:text-lg text-center">
                {offer.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hexagonal Style */}
      <style jsx>{`
        .hexagon {
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          background: #88cbca;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hexagon:hover {
          transform: scale(1.1);
          box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.4);
        }

        .hexagon-img {
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
        }
      `}</style>
    </section>
  );
};

// const blogData = [
//   {
//     image: "/images/Blog-1.png",
//     title: "Enterprise & SMB Analytics",
//     description: "Improve decision-making with data-driven insights",
//   },
//   {
//     image: "/images/Blog-2.png",
//     title: "Supply Chain & Inventory Management",
//     description: "Real-time tracking of stock and logistics",
//   },
//   {
//     image: "/images/Blog-3.png",
//     title: "Sales & Marketing Performance",
//     description: "Monitor campaigns, lead conversions, and sales trends",
//   },
// ];

const BlogAndCTASection = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12">
      {/* Blog Section */}
      {/* <div>
        <h3 className="text-orange-500 text-xl md:text-2xl font-semibold mb-8 ml-4 sm:ml-6 md:ml-10">
          Blogs
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogData.map((blog, index) => (
            <div key={index} className="overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                width={300}
                height={150}
                className="h-56 w-full object-contain"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800">
                  {blog.title}
                </h4>
                <p className="text-gray-700 mt-1 text-sm md:text-base">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="mt-16 bg-purple-100/20 rounded-xl p-6 sm:p-8 text-center relative bg-[url('/images/Group-bg-1.png')] bg-cover bg-center bg-no-repeat">
        <div className="p-6 md:p-10 rounded-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900/70">
            Accelerate AI Adoption with Kubernetes & <br /> Open Source
            Expertise of Mahity
          </h3>
          <div className="flex justify-center">
            <a
              href="/contact-us"
              className="mt-6 sm:mt-8 bg-[#F68A2A] text-white font-semibold px-6 sm:px-8 py-3 rounded-md hover:bg-[#E57D1D] transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const EducationKubernetes = () => {
  return (
    <div className="px-4 md:px-16 lg:px-32 bg-[url('/images/image69.png')] bg-cover bg-center bg-no-repeat bg-black/27">
      {/* Kubernetes Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="mt-16 md:w-1/2 flex justify-center">
          <div className="p-8 flex justify-center items-center">
            <Image
              src="/images/Group 499.png"
              width={400}
              height={400}
              alt="Kubernetes Icon"
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-9 text-center md:text-left">
          <h4 className="text-3xl font-bold text-gray-800 mb-7">
            We Also Offer
          </h4>
          <p className=" text-lg text-gray-800 mt-2">
            We provide enterprise-grade Kubernetes orchestration using
            open-source solutions to simplify cluster lifecycle management,
            automate infrastructure provisioning, and enhance multi-cloud and
            hybrid deployments.
          </p>
        </div>
      </div>

      {/* Supported Workloads Section */}
      <div className="mt-12 py-12 pb-36 rounded-lg">
        <h5 className="text-3xl mb-14 ml-20 font-semibold">
          Supported Workloads
        </h5>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-6 md:px-16 lg:px-32">
          {[
            {
              title: "Web & Mobile Applications",
              desc: "Improve user experience with fast session caching, rate limiting, and API acceleration.",
            },
            {
              title: "E-Commerce & Personalization",
              desc: "Enable recommendation engines, cart caching, and real-time inventory tracking.",
            },
            {
              title: "Gaming & Leaderboards",
              desc: "Use Redis for real-time scoring, matchmaking, and player session storage.",
            },
            {
              title: "Financial Services & Trading Platforms",
              desc: "Power high-frequency trading, fraud detection, and risk analysis.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg  border border-gray-200 flex items-start gap-5"
            >
              {/* Icon Container */}
              <div className=" -mt-2 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#59ba36"
                >
                  <path d="m345.33-60-76-129.33-148.66-31.34 16-147.33L40-480l96.67-111.33-16-147.34L269.33-770l76-130L480-839.33 614.67-900l76.66 130 148 31.33-16 147.34L920-480l-96.67 112 16 147.33-148 31.34L614.67-60 480-120.67 345.33-60Zm29.34-86.67L480-191.33l108 44.66 63.33-98.66L766-274l-11.33-116.67L833.33-480l-78.66-91.33L766-688l-114.67-26.67L586-813.33l-106 44.66-108-44.66-63.33 98.66L194-688l11.33 116.67L126.67-480l78.66 89.33L194-272l114.67 26.67 66 98.66ZM480-480Zm-42.67 136L664-569.33 615.33-616l-178 176.67-92-94L296-484.67 437.33-344Z" />
                </svg>
              </div>

              {/* Content Section */}
              <div>
                <h6 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h6>
                <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
