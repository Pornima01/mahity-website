"use client";

import Image from "next/image";

export default function Home() {
  // Supported workloads data
  const workloads = [
    "Microservices-Based Applications",
    "API Gateway & Ingress Traffic Control",
    "Hybrid & Multi-Cloud Workloads",
    "High-Performance & Low-Latency Applications",
    "Edge Computing & IoT Workloads",
    "AI/ML & Data Pipelines",
    "Enterprise SaaS & Multi-Tenant Platforms",
  ];

  // Suggested Use Cases
  const blogData = [
    {
      image: "/images/Blog-2.png",
      title: "Canary & Blue-Green Deployments",
      description:
        "Reduce risk in application releases with controlled rollout strategies.",
    },
    {
      image: "/images/Blog-3.png",
      title: "Regulatory Compliance & Auditing",
      description:
        "Enforce security policies for financial, healthcare, and government applications.",
    },
    {
      image: "/images/Blog-1.png",
      title: "Intelligent Traffic Routing for High Availability",
      description:
        "Improve application uptime with dynamic failover and load balancing.",
    },
  ];

  // Services data
  const services = [
    {
      name: "Serverless / Event-Driven",
      icon: "/images/Group 512.png",
      link: "/kubernetes/serverless-event-driven",
    },
    {
      name: "Container Orchestration",
      icon: "/images/Vector-1.png",
      link: "/kubernetes/container-orchestration",
    },
    {
      name: "Virtualization",
      icon: "/images/Vector-1.png",
      link: "/kubernetes/virtualization",
    },
    {
      name: "Machine Learning & AI",
      icon: "/images/Vector-1.png",
      link: "/kubernetes/machine-learning-ai",
    },
  ];

  const serviceData = [
    {
      title: "Traffic Control & Load Balancing",
      icon: "/images/Group-8.png",
      bgColor: "bg-white hover:bg-[#037CFF]",
      features: [
        {
          icon: "📡 ",
          title: "Service Discovery & Intelligent Routing",
          description:
            "Automatically execute workloads based on events from APIs, databases, message queues, and cloud services.",
        },
        {
          icon: "🔀",
          title: "Traffic Shaping & Canary Deployments",
          description:
            "Enable A/B testing, blue-green deployments, and gradual feature rollouts.",
        },
        {
          icon: "🚦",
          title: "Rate Limiting, Circuit Breakers & Retry Policies",
          description:
            "Prevent cascading failures and improve application stability.",
        },
      ],
    },
    {
      title: "Multi-Cluster, Multi-Cloud & Hybrid Connectivity",
      icon: "/images/icon-2.png",
      bgColor: "bg-[#037CFF] text-white",
      features: [
        {
          icon: "🔗",
          title: "Secure Cross-Cluster Communication",
          description:
            "Connect microservices across multiple Kubernetes clusters securely.",
        },
        {
          icon: "☁",
          title: "Multi-Cloud Service Mesh",
          description:
            "Deploy workloads seamlessly across different cloud providers while maintaining security and performance.",
        },
        {
          icon: "📡 ",
          title: "Edge & Hybrid Cloud Integration",
          description:
            "Extend service mesh capabilities to edge computing and on-premise environments.",
        },
      ],
    },
    {
      title: "Secure Service-to-Service Communication",
      icon: "/images/Icon-1.png",
      bgColor: "bg-white hover:bg-[#037CFF]",
      features: [
        {
          icon: "🔒",
          title: "End-to-End Encryption with Mutual TLS (mTLS)",
          description:
            "Encrypt all communication between microservices to prevent data interception.",
        },
        {
          icon: "🔑 ",
          title: "Zero-Trust Security Model",
          description:
            " Implement authentication and authorization at the service level, enforcing least-privilege policies.",
        },
        {
          icon: "📜 ",
          title: "Identity & Certificate Management",
          description:
            "Automate certificate issuance, rotation, and lifecycle management.",
        },
      ],
    },
    {
      title: "Governance, Policy Enforcement & Access Control",
      icon: "/images/icon-3.png",
      bgColor: "bg-white hover:bg-[#037CFF] hover:text-white",
      features: [
        {
          icon: "🚀",
          title: "Role-Based & Policy-Driven Service Access",
          description:
            "Define access control rules based on workload identity and policies.",
        },
        {
          icon: "🔒",
          title: "Fine-Grained API Authorization",
          description:
            "Control which services can communicate with each other using declarative policies.",
        },
        {
          icon: "🛡️",
          title: "Service-Level Security & Compliance Audits",
          description:
            "Track and enforce security posture across all microservices.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block border-2 border-blue-500 rounded px-4 py-2 mb-10 -mt-40">
              <span className="text-blue-600 text-xl md:text-2xl font-medium">
                Kubernetes
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-8">
              Service Mesh
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
              Our service mesh solutions for Kubernetes provide secure,
              resilient, and highly observable networking for
              microservices-based applications. By leveraging open-source
              technologies, we enable fine-grained traffic control, zero-trust
              security, automatic service discovery, observability, and workload
              resiliency across cloud-native environments.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-60 md:h-80 lg:h-[25rem]">
              <Image
                src="/images/image 49.png"
                alt="Kubernetes Orchestration"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Service Propositions */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6 sm:mb-8 md:mb-12 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 text-center sm:text-left mb-4 sm:mb-0 w-full sm:w-auto">
            Key Service Propositions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {[
            {
              title: "Decoupling Application Logic from Networking",
              description:
                " Offload networking complexity from developers to the service mesh.",
              link: "/learn-more-automation",
              image: "/images/Group.png",
            },
            {
              title: "Automatic Service Discovery & Load Balancing",
              description:
                "Ensure high availability with service-aware, real-time traffic routing.",
              link: "/learn-more-multicloud",
              image: "/images/Group (1).png",
            },
            {
              title: "Multi-Cluster & Multi-Cloud Support",
              description:
                "Connect workloads across multiple clusters and cloud providers securely.",
              link: "/learn-more-networking",
              image: "/images/Vector.png",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                <div className="p-3 rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Service Offerings */}
      <section
        className="mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-10 md:py-16 md:pb-24 lg:pb-40 mb-8 sm:mb-12"
        id="see-more"
        style={{ backgroundImage: "url('/images/Rectangle 496.png')" }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 sm:mb-12 md:mb-20 md:mt-16 lg:mt-32 text-center sm:text-left">
          Detailed Service Offerings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Service Cards */}
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`border rounded-lg shadow-sm p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-[#037CFF] group bg-white/70`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 overflow-hidden border-2 border-[#037CFF] bg-white group-hover:border-white">
                <Image
                  src={service.icon}
                  alt="Icon"
                  width={450}
                  height={300}
                  className="object-contain w-6 h-6 sm:w-7 sm:h-7"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 group-hover:text-white">
                {service.title}
              </h3>
              <div className="p-0 sm:p-1">
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-2 sm:space-x-3"
                    >
                      <span className="text-base sm:text-lg pt-0.5 group-hover:text-white flex-shrink-0">
                        {feature.icon}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-800 group-hover:text-white">
                        <strong>{feature.title}</strong> – {feature.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Supported Workloads Section */}
      <section className="w-full py-8 px-4 md:px-6 lg:px-10 bg-white mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-8 md:mb-12">
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
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700 hover:text-[#037CFF]">
                      {workload}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-2xl lg:max-w-2xl -mt-16">
                <Image
                  src="/images/Hero-image.png"
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

      {/* Blog Section */}
      <section className="bg-[#F1F8FF] mx-auto px-4 sm:px-6 md:px-12 lg:px-32 py-32">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 text-center md:text-left mb-4 md:mb-0">
            Suggested Use Cases
          </h2>
        </div>

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
              <div className="p-10">
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
      </section>

      {/* Similar Services Section */}
      <section className="w-full py-12 mt-9 px-6 md:px-12 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800/70">
            Similar Services We Provide
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-9 mb-20 max-w-3xl mx-auto">
            We offer expert consulting in cloud management, containerization,
            DevSecOps, and data management, helping businesses optimize and
            secure their IT infrastructure.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link} // Use the link from the service object
                className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center hover:shadow-xl transition-all block" // Added 'block' to make the entire card clickable
              >
                <Image
                  src={service.icon}
                  alt={service.name}
                  width={50}
                  height={50}
                />
                <p className="text-gray-800 font-semibold mt-3">
                  {service.name}
                </p>
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
