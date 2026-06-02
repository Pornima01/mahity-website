"use client";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function Home() {
  // Supported workloads data
  const workloads = [
    "Kubernetes & OpenShift-Based Applications",
    "Hybrid & Multi-Cloud Deployments",
    "Edge & IoT Workloads",
    "AI/ML & Big Data Applications",
    "Regulated & Security-Critical Industries",
    "Microservices & Service Mesh Replacements",
  ];

  const services = [
    {
      title: "Cilium Deployment & Configuration",
      details: [
        "Enterprise-Grade Cilium Deployment – Install and configure Cilium in Kubernetes, OpenShift, and cloud-native environments.",
        "Cilium CNI Implementation – Replace traditional CNIs like Calico, Flannel, or Weave with Cilium for better performance.",
        "Multi-Cluster & Multi-Cloud Networking – Enable seamless pod-to-pod communication across AWS, Azure, GCP, and on-prem data centers.",
      ],
      icon: "/images/Icon-1.png",
      iconBg: "bg-white border border-[#DA81D5] border-[2px]",
      bgColor: "hover:bg-[#DA81D5] hover:text-white",
      textColor: "text-gray-700",
    },
    {
      title: "Advanced Network Security & Zero Trust",
      details: [
        "Identity-Based Network Policies – Implement L3/L4/L7 policies based on Kubernetes identities instead of IP addresses.",
        "Zero-Trust Microsegmentation – Restrict unauthorized traffic between workloads.",
        "DDoS Protection & Security Hardening – Defend against network attacks using eBPF-powered security enforcement.",
      ],
      icon: "/images/icon-2.png",
      iconBg: "bg-white border border-[#DA81D5] border-[2px]",
      bgColor: "bg-[#DA81D5]",
      textColor: "text-white",
    },
    {
      title: "Observability & Network Monitoring with Hubble",
      details: [
        "Hubble Deployment & Configuration – Set up Hubble for real-time network visibility and troubleshooting.",
        "Flow Logging & Traffic Analysis – Gain insights into network behavior with detailed flow logs.",
        "Security Auditing & Compliance Reporting – Track network activity for compliance with PCI-DSS, HIPAA, and SOC 2.",
      ],
      icon: "/images/icon-3.png",
      iconBg: "bg-white border border-[#DA81D5] border-[2px]",
      bgColor: "hover:bg-[#DA81D5] hover:text-white",
      textColor: "text-gray-700",
    },
    {
      title: "Performance Optimization & Scalability",
      details: [
        "Optimized Network Latency & Throughput – Reduce overhead with eBPF-based packet processing.",
        "Fine-Tuned Load Balancing – Configure high-performance L4 and L7 load balancing with Cilium.",
        "Cluster-Aware Service Routing – Ensure efficient service discovery and routing across multiple Kubernetes clusters.",
      ],
      icon: "/images/icon-4.png",
      iconBg: "bg-white border border-[#DA81D5] border-[2px]",
      bgColor: "hover:bg-[#DA81D5] hover:text-white",
      textColor: "text-gray-700",
    },
  ];

  return (
    <div>
      <Head>
        <title>Cilium Services</title>
        <meta
          name="description"
          content="Mahity's Cilium Services provide enterprises with advanced networking, security, and observability for Kubernetes and cloud-native environments"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 lg:w-5/12 mb-8 md:mb-0 px-4 md:px-6 lg:px-14 lg:pr-8 relative z-10">
            <h1 className="text-3xl md:text-4xl text-gray-800 mb-8 md:mb-16 font-semibold">
              Cilium
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 md:-mt-8">
              Our Cilium Services provide enterprises with advanced networking,
              security, and observability for Kubernetes and cloud-native
              environments.
            </p>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 mt-2 sm:mt-3 rounded-md transition duration-300"
              onClick={() => (window.location.href = "/contact-us")}
            >
              Talk to Expert
            </button>
          </div>

          <div className="w-full md:w-1/2 lg:w-7/12 relative">
            <div className="relative h-64 sm:h-80 md:h-[400px] w-full">
              <Image
                src="/images/Group 516.png"
                alt="Cilium Services Illustration"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>

        {/* Key Service Offerings */}
        <div className="w-full bg-[#FFF8FF] relative py-8 sm:py-10 pb-12 sm:pb-16 overflow-hidden">
          <section className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 text-center md:text-left">
                Service Offerings
              </h2>
            </div>

            {/* Grid for tablet and larger screens */}
            <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-6 ${service.bgColor} ${service.textColor} transition-all duration-300 h-full flex flex-col`}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 ${service.iconBg} rounded-full mb-3 sm:mb-4`}
                  >
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={24}
                      height={24}
                    />
                  </div>
                  <h3 className="font-bold text-sm md:text-base mb-2">
                    {service.title}
                  </h3>
                  <ul className="text-xs space-y-3 sm:space-y-4 mt-3 sm:mt-5">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="leading-tight">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Slider for mobile screens */}
            <div className="sm:hidden">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                className="pb-8"
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className={`p-5 shadow-md ${service.bgColor} ${service.textColor} transition-all duration-300 h-full flex flex-col`}
                    >
                      <div
                        className={`flex items-center justify-center w-12 h-12 ${service.iconBg} rounded-full mb-4`}
                      >
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={24}
                          height={24}
                        />
                      </div>
                      <h3 className="font-semibold text-sm mb-2">
                        {service.title}
                      </h3>
                      <ul className="text-xs space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="leading-tight">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex justify-center mt-6 sm:mt-8">
              <div className="flex space-x-1">
                <span className="h-2 w-2 rounded-full bg-[#DA81D5]"></span>
                <span className="h-2 w-2 rounded-full bg-gray-300"></span>
              </div>
            </div>
          </section>
        </div>

        {/* Supported Workloads Section */}
        <section className="w-full py-6 sm:py-8 px-4 md:px-6 lg:px-10 bg-white mb-10 sm:mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-6 sm:mb-8 md:mb-12">
              Supported Workloads
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10">
              {/* Left Side - Workloads List */}
              <div className="w-full lg:w-1/2">
                <div className="rounded-lg">
                  {workloads.map((workload, index) => (
                    <div
                      key={index}
                      className={`flex items-center p-2 md:p-3 rounded-md transition-all duration-300 cursor-pointer text-sm md:text-base ${
                        index === 0
                          ? "bg-[#DA81D5]/25 text-[#DA81D5] font-medium"
                          : "hover:bg-[#DA81D5]/25 hover:text-[#DA81D5]"
                      }`}
                    >
                      <div className="w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center text-[#DA81D5]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="sm:w-[18px] sm:h-[18px]"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <p className="ml-2 text-gray-700 hover:text-[#DA81D5]">
                        {workload}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
                <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-2xl -mt-8 sm:-mt-12 lg:-mt-16">
                  <Image
                    src="/images/image 56.png"
                    alt="Supported Workloads Illustration"
                    width={750}
                    height={650}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Services */}
        <section className="bg-[#FFF8FF] py-8 sm:py-10 md:py-14">
          <div className="container mx-auto px-4 sm:px-10 md:px-20 pb-10 sm:pb-16 md:pb-20">
            <h2 className="text-2xl sm:text-2xl md:text-3xl text-gray-800 mb-6 sm:mb-8 mt-6 sm:mt-10">
              Similar Services
            </h2>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-6 lg:pr-26">
                <p className="text-gray-700 font-medium mb-4">
                  We offer expert consulting in cloud management,
                  containerization, DevSecOps, and data management, helping
                  businesses optimize and secure their IT infrastructure.
                </p>
              </div>

              <div className="w-full md:w-1/2 flex justify-center md:-mt-16 lg:-mt-28">
                <a
                  href="/sdn/calico"
                  style={{ display: "block" }}
                >
                  <div className="text-center">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto">
                      <Image
                        src="/images/Group 515.png"
                        alt="Calico Logo"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
