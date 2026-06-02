"use client";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  // Supported workloads data
  const workloads = [
    "API-Driven Microservices",
    "Event-Triggered Workflows",
    "Data Processing & Streaming",
    "AI/ML Model Serving",
    "IoT & Edge Computing Workloads",
    "Task Automation & Background Jobs",
    "Serverless CI/CD Pipelines",
  ];

  // Suggested Use Cases
  const blogData = [
    {
      image: "/images/Blog-2.png",
      title: "Enterprise API Services",
      description:
        "Deploy serverless APIs that auto-scale based on incoming traffic.",
    },
    {
      image: "/images/Blog-1.png",
      title: "Automated Business Workflows",
      description:
        "Trigger serverless workflows for approvals, notifications, and data synchronization.",
    },
    {
      image: "/images/Blog-3.png",
      title: "DevOps & CI/CD Automation",
      description:
        "Improve development efficiency with serverless pipelines for testing and deployment.",
    },
  ];

  // Services data
  const services = [
    {
      name: "Container Orchestration",
      icon: "/images/Group 512.png",
      link: "/kubernetes/container-orchestration",
    },
    {
      name: "Service Mesh",
      icon: "/images/Vector-1.png",
      link: "/kubernetes/service-mesh",
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
      title: "Event-Driven & Async Processing Capabilities",
      icon: "/images/Group-4.png",
      bgColor: "bg-white hover:bg-[#037CFF]",
      features: [
        {
          icon: "🔗",
          title: "Event-Triggered Workflows",
          description:
            "Automatically execute workloads based on events from APIs, databases, message queues, and cloud services.",
        },
        {
          icon: "📨",
          title: "Native Support for Messaging & Pub/Sub Systems",
          description:
            "Connect seamlessly with Kafka, RabbitMQ, and cloud-native event brokers.",
        },
        {
          icon: "🔌",
          title: "Flexible Event Sources & Webhooks",
          description:
            "Integrate with microservices, IoT devices, and external event sources.",
        },
      ],
    },
    {
      title: "Autoscaling, Resource Efficiency & Cost Optimization",
      icon: "/images/Group-5.png",
      bgColor: "bg-[#037CFF] text-white",
      features: [
        {
          icon: "📡 ",
          title: "Dynamic Horizontal & Vertical Autoscaling",
          description:
            "Automatically scale workloads based on traffic, events, and system metrics.",
        },
        {
          icon: "💰",
          title: "Scale-to-Zero & On-Demand Execution",
          description:
            "Reduce infrastructure costs by consuming compute resources only when needed.",
        },
        {
          icon: "🔍 ",
          title: "Predictive Scaling & Load-Based Adjustments",
          description:
            "Optimize performance and cost efficiency with AI-driven scaling decisions.",
        },
      ],
    },
    {
      title: " Security, Governance & Compliance",
      icon: "/images/icon-3.png",
      bgColor: "bg-white hover:bg-[#037CFF]",
      features: [
        {
          icon: "📜 ",
          title: "Fine-Grained Access Control & Policy Enforcement",
          description:
            " Implement role-based and policy-driven security for serverless workloads.",
        },
        {
          icon: "🔑 ",
          title: "Secure Secrets & Identity Management",
          description:
            "Protect API keys, credentials, and sensitive data with centralized secret management.",
        },
        {
          icon: "🛡️",
          title: "Built-In Monitoring, Logging & Audit Trails",
          description:
            "Ensure compliance with security best practices through observability and traceability.",
        },
      ],
    },
    {
      title: " Observability & Performance Monitoring",
      icon: "/images/Group-6.png",
      bgColor: "bg-white hover:bg-[#037CFF] hover:text-white",
      features: [
        {
          icon: "📊",
          title: "Real-Time Metrics & Logging",
          description:
            "Gain visibility into function performance, execution time, and system health.",
        },
        {
          icon: "📡 ",
          title: "Automated Alerts & Anomaly Detection",
          description:
            "Set up proactive monitoring with custom alerts for performance optimization.",
        },
        {
          icon: "📜",
          title: "Distributed Tracing & Debugging",
          description:
            "Diagnose and optimize serverless applications with end-to-end tracing.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Head>
        <title>Kubernetes Serverless / Event-Driven </title>
        <meta
          name="description"
          content="Enterprise-grade Kubernetes Serverless / Event-Driven"
        />
      </Head>

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
              Serverless / Event-Driven
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
              Our serverless Kubernetes solutions empower organizations to run
              event-driven applications with automated scaling, high
              availability, and cost efficiency. By leveraging open-source
              technologies, we provide a fully managed serverless experience
              where developers can focus on writing code without worrying about
              infrastructure, scaling, or resource management.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-60 md:h-80 lg:h-[25rem]">
              <Image
                src="/images/serverless-hero.png"
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
              title: "Event-Driven & Autoscaling Workloads",
              description:
                "Run applications that scale up and down automatically based on demand.",
              link: "/learn-more-automation",
              image: "/images/Group.png",
            },
            {
              title: "Pay-Per-Use Resource Optimization",
              description:
                " Optimize costs by consuming compute resources only when workloads are active.",
              link: "/learn-more-multicloud",
              image: "/images/Group (1).png",
            },
            {
              title: "Simplified Developer Experience",
              description:
                "Enable rapid development with built-in service discovery, request routing, and event-driven execution.",
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
                  src="/images/Group-7.png"
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
