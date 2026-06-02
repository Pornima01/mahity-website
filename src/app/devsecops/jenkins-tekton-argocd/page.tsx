"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// Services data
const services = [
  {
    title: "Jenkins / Tekton / ArgoCD Deployment & Configuration",
    details: [
      "Security Scanning Integration – Embed SAST (SonarQube), DAST (ZAP), SCA (Snyk), and IaC security (KICS) into pipelines.",
      "Policy Enforcement & Compliance Audits – Ensure SOC 2, PCI-DSS, GDPR, and HIPAA compliance.",
      "Automated Rollback & Failure Recovery – Implement auto-remediation and rollback strategies for failed deployments.",
    ],
    icon: "/images/Icon-1.png",
    iconBg: "bg-white border border-[#87a2cf] border-[2px]",
    bgColor: "hover:bg-[#87a2cf] hover:text-white",
    textColor: "text-gray-700",
  },
  {
    title: "CI/CD Pipeline Design & Automation",
    details: [
      "Continuous Integration (CI) Pipelines – Automate build, test, and artifact creation across multiple programming languages.",
      "Automated Testing & Code Quality Checks – Integrate unit tests, functional tests, and static code analysis.",
      "Continuous Deployment (CD) & GitOps Pipelines – Implement declarative GitOps workflows with ArgoCD.",
    ],
    icon: "/images/icon-2.png",
    iconBg: "bg-white border border-[#87a2cf] border-[2px]",
    bgColor: "bg-[#87a2cf]",
    textColor: "text-white",
  },
  {
    title: "Security & Compliance-Integrated DevSecOps",
    details: [
      "Security Scanning Integration – Embed SAST (SonarQube), DAST (ZAP), SCA (Snyk), and IaC security (KICS) into pipelines.",
      "Policy Enforcement & Compliance Audits – Ensure SOC 2, PCI-DSS, GDPR, and HIPAA compliance.",
      "Automated Rollback & Failure Recovery – Implement auto-remediation and rollback strategies for failed deployments.",
    ],
    icon: "/images/icon-3.png",
    iconBg: "bg-white border border-[#87a2cf] border-[2px]",
    bgColor: "hover:bg-[#87a2cf] hover:text-white",
    textColor: "text-gray-700",
  },
  {
    title: "GitOps-Based Deployment with ArgoCD",
    details: [
      "Declarative Application Management – Implement GitOps workflows using ArgoCD for Kubernetes deployments.",
      "Multi-Cluster & Multi-Tenant Support – Manage workloads across multiple Kubernetes clusters.",
      "Sync & Drift Detection – Continuously monitor and reconcile desired vs. actual application states.",
    ],
    icon: "/images/icon-4.png",
    iconBg: "bg-white border border-[#87a2cf] border-[2px]",
    bgColor: "hover:bg-[#87a2cf] hover:text-white",
    textColor: "text-gray-700",
  },
];

const propositions = [
  {
    id: 1,
    title: "End-to-End CI/CD Pipeline Automation",
    description:
      "Implement continuous integration, testing, and deployment workflows.",
    icon: "/images/Group.png",
  },
  {
    id: 2,
    title: "GitOps-Driven Deployments",
    description: "Enable declarative and automated deployments with ArgoCD.",
    icon: "/images/Group (1).png",
  },
  {
    id: 3,
    title: "Cloud-Native CI/CD with Tekton",
    description: "Build scalable and Kubernetes-native CI/CD pipelines.",
    icon: "/images/Vector.png",
  },
  {
    id: 4,
    title: "Jenkins as a Service",
    description:
      "Deploy and optimize Jenkins for enterprise-scale software delivery.",
    icon: "/images/Group (1).png",
  },
];

const similarServices = [
  {
    name: "ZAP (DAST)",
    icon: "/images/Group 512.png",
    link: "/devsecops/zap-dast",
  },
  {
    name: "Sonarqube (SAST)",
    icon: "/images/Vector-1.png",
    link: "/devsecops/sonarqube-sast",
  },
  {
    name: "Synk (SCA)",
    icon: "/images/Vector-1.png",
    link: "/devsecops/snyk-sca",
  },
  {
    name: "WebScarab (IAST)",
    icon: "/images/Vector-1.png",
    link: "/devsecops/webscarab-iast",
  },
  {
    name: "KICS (IAC)",
    icon: "/images/Vector-1.png",
    link: "/devsecops/kics-iac",
  },
];

const workloads = [
  "Microservices & Kubernetes Applications",
  "Web & Mobile Applications",
  "APIs & Backend Services",
  "Cloud-Native & Serverless Deployments",
  "Enterprise Software & SaaS Platforms",
  "Security & Compliance-Sensitive Environments",
];

export default function CiliumServicesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 lg:w-5/12 mb-8 md:mb-0 px-4 md:px-6 lg:px-14 lg:pr-8 relative z-10">
          <h1 className="text-sm text-blue-400 md:text-lg mb-7">DevSecOps</h1>
          <h1 className="text-3xl md:text-4xl text-gray-800 mb-8 md:mb-20 font-semibold">
            Jenkins / Tekton / ArgoCD
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-10 md:-mt-8">
            Our CI/CD Automation Services empower organizations to streamline
            software delivery pipelines using Jenkins, Tekton, and ArgoCD. As an
            open-source software support provider, we specialize in deploying,
            integrating, and optimizing these tools to enable scalable, secure,
            and automated DevOps workflows.
          </p>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 mt-2 sm:mt-3 rounded-md transition duration-300"
            onClick={() => (window.location.href = "/contact-us")}
          >
            Talk to Expert
          </button>
        </div>
        <div className="w-full md:w-1/2 lg:w-7/12 relative mt-10 -mb-36 sm:mt-6 md:mt-0">
          <div className="relative h-64 sm:h-80 md:h-[400px] w-full">
            <Image
              src="/images/Group-7.png"
              alt="Cilium Services Illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      <div className="relative py-52 px-4 md:px-8 overflow-hidden">
        {/* Background shape */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/Rectangle 49.png"
            alt="Background shape"
            fill
            className="object-cover"
            quality={75}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 p-4 md:p-6">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="pt-0 sm:pt-8 md:pt-16 lg:pt-36 bg-opacity-80 rounded-lg mb-8 lg:mb-0 lg:max-w-xl">
              <h2 className="text-3xl md:text-4xl mb-4 md:mb-7 font-bold text-gray-700">
                Key Service Propositions
              </h2>
              <p className="text-gray-600">
                As an open-source software support provider, we help
                organizations integrate, optimize, and manage Jenkins / Tekton / ArgoCD for real-time
                security assessments, vulnerability detection, and compliance
                validation in DevSecOps workflows.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full lg:max-w-3xl">
              {propositions.map((prop) => (
                <div
                  key={prop.id}
                  className="bg-white rounded-lg shadow-sm flex flex-col p-4 md:p-6"
                >
                  <div className="mb-3 md:mb-5">
                    <Image
                      src={prop.icon}
                      alt={`${prop.title} icon`}
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3 md:mb-5">
                    {prop.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-7 flex-grow">
                    {prop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Service Offerings */}
      <div className="w-full relative py-8 sm:py-10 pb-12 sm:pb-16 overflow-hidden">
        <section className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-12">
            <h2 className="text-3xl mb-12 sm:text-3xl md:text-4xl text-gray-700 text-center md:text-left">
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
              <span className="h-2 w-2 rounded-full bg-[#87a2cf]"></span>
              <span className="h-2 w-2 rounded-full bg-gray-300"></span>
            </div>
          </div>
        </section>
      </div>

      {/* Supported Workloads Section */}
      <section className="w-full py-6 sm:py-8 px-4 md:px-6 lg:px-10 mb-10 sm:mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-6 sm:mb-8 md:mb-12 text-center md:text-left w-full md:w-3/4 lg:w-2/3 xl:w-1/2 ml-auto">
            Supported Workloads
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10">
            {/* Left Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative mt-6 lg:mt-0 bg-transparent">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-2xl -mt-8 sm:-mt-12 lg:-mt-16">
                <Image
                  src="/images/image 56.png"
                  alt="Supported Workloads Illustration"
                  width={750}
                  height={650}
                  className="rounded-2xl bg-transparent"
                />
              </div>
            </div>

            {/* Right Side - Workloads List */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-lg">
                {workloads.map((workload, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-2 md:p-3 rounded-md transition-all duration-300 cursor-pointer text-sm md:text-base ${
                      index === 0
                        ? "bg-[#87a2cf]/25 text-[#87a2cf] font-medium"
                        : "hover:bg-[#87a2cf]/25 hover:text-[#87a2cf]"
                    }`}
                  >
                    <div className="w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center text-[#87a2cf]">
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
                    <p className="ml-2 text-gray-700 hover:text-[#87a2cf]">
                      {workload}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Services Section */}
      <section className="w-full py-20 mt-9 px-6 md:px-12 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800/70">
            Similar Services We Provide
          </h2>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mt-10">
            {similarServices.map((service, index) => (
              <a key={index} href={service.link} className="no-underline">
                <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-between h-40 hover:shadow-xl transition-all cursor-pointer">
                  <div className="flex items-center justify-center w-16 h-16">
                    <Image
                      src={service.icon}
                      alt={service.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-800 font-semibold text-center mt-2 line-clamp-2">
                    {service.name}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="my-20">
            <button
              className="bg-[#F68A2A] hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all"
              onClick={() => (window.location.href = "/contact-us")}
            >
              Talk to Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
