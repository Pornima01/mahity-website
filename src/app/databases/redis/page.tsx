"use client";
import Head from "next/head";
import Image from "next/image";

interface Button {
  text: string;
  color: string;
}

interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface HeroContentType {
  title: string;
  subtitle: string;
  description: string;
  buttons: Button[];
  image: HeroImage;
}

interface ServicePropositionCard {
  icon: string;
  title: string;
  description: string;
}

interface ServicePropositionsType {
  title: string;
  cards: ServicePropositionCard[];
}

interface ServiceItem {
  image: string;
  title: string;
  textColor: string;
  items: string[];
}

interface ServiceOfferingsType {
  title: string;
  services: ServiceItem[];
}

interface Workload {
  title: string;
  description: string;
}

interface SupportedWorkloadsType {
  title: string;
  workloads: Workload[];
}

export default function Home() {
  // Hero Section Content
  const heroContent: HeroContentType = {
    title: "Redis",
    subtitle: "Database",
    description:
      "Our Redis services empower businesses to deploy, optimize, and manage high-performance caching, real-time analytics, and in-memory databases using Redis.",
    buttons: [
      {
        text: "Talk to Expert",
        color: "bg-[#F68A2A] hover:bg-orange-500 text-white",
      },
    ],
    image: {
      src: "/images/Group 520.png",
      alt: "Redis visualization dashboard",
      width: 500,
      height: 300,
    },
  };

  // Key Service Propositions Content
  const servicePropositions: ServicePropositionsType = {
    title: "Key Service Propositions",
    cards: [
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "High-Performance Caching",
        description: "From initial setup to deployment, we handle everything",
      },
      {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Real-Time Data Processing",
        description: "Tailored solutions to meet your business needs",
      },
      {
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
        title: "Scalable & Highly Available Architecture",
        description: "Works flawlessly with Google Sheets, BigQuery, and more",
      },
      {
        icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
        title: "Multi-Cloud & On-Prem Deployment",
        description: "Reduce manual effort and improve efficiency",
      },
      {
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        title: "Robust Security & Access Control",
        description: "Built with enterprise-grade security and best practices",
      },
      {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Performance & High Availability",
        description:
          "We provide continuous monitoring, training, and enhancements.",
      },
    ],
  };

  // Service Offerings Content
  const serviceOfferings: ServiceOfferingsType = {
    title: "Service Offerings",
    services: [
      {
        image: "/images/icon-7.png",
        title: "Redis Deployment & Configuration",
        textColor: "text-blue-500",
        items: [
          "Enterprise-Ready Redis Setup – Deploy Redis as a cache, database, or message broker.",
          "Clustered & Replicated Architecture – Implement Redis Sentinel, Redis Cluster, and sharding for high availability.",
          "Redis on Kubernetes & Cloud – Optimize Redis deployments for Kubernetes (K8s), OpenShift, AWS ElastiCache, and Azure Cache for Redis.services,",
        ],
      },
      {
        image: "/images/icon-8.png",
        title: "Caching & Performance Optimization",
        textColor: "text-white",
        items: [
          "Low-Latency Caching Strategies – Implement write-through, write-back, and read-through caching.",
          "Query Optimization & Expiry Management – Optimize TTL policies for session storage, leaderboards, and caching layers.",
          "Compression & Serialization Techniques – Improve efficiency using JSON, MessagePack, or Protocol Buffers.",
        ],
      },
      {
        image: "/images/icon-9.png",
        title: "High Availability & Disaster Recovery",
        textColor: "text-blue-500",
        items: [
          "Redis Sentinel Configuration – Set up automatic failover and leader election for high availability.",
          "Multi-Region & Multi-Cloud Deployment – Deploy Redis across multiple availability zones for disaster recovery.",
          "Automated Backup & Restore Strategies – Enable scheduled backups and point-in-time recovery.",
        ],
      },
      {
        image: "/images/icon-10.png",
        title: "Security Hardening & Compliance",
        textColor: "text-blue-500",
        items: [
          "Role-Based Access Control (RBAC) & Authentication – Secure Redis with ACLs, password authentication, and token-based access.",
          "TLS Encryption & Secure Data Transmission – Implement SSL/TLS encryption for Redis connections.",
          "DDoS & Attack Mitigation – Prevent unauthorized access, command spoofing, and brute-force attacks",
        ],
      },
      {
        image: "/images/icon-11.png",
        title: "Advanced Use Cases & Real-Time Data Processing",
        textColor: "text-blue-500",
        items: [
          "Event-Driven Architectures & Pub/Sub Messaging – Use Redis for real-time notifications, event streaming, and chat applications.",
          "Redis Streams for Data Pipelines – Process real-time logs, analytics, and message queues efficiently.",
          "AI/ML Feature Store & Session Storage – Cache frequently accessed ML models and user sessions",
        ],
      },
      {
        image: "/images/icon-7.png",
        title: "Managed Redis Support, Training & Consulting",
        textColor: "text-blue-500",
        items: [
          "24/7 Monitoring & Incident Response – Continuous monitoring with real-time alerting and performance diagnostics.",
          "Custom Redis Module Development – Extend Redis functionality with custom Lua scripts and modules",
          "Developer Training & Knowledge Transfer – Train teams on Redis best practices, security, and scaling strategies",
        ],
      },
    ],
  };

  // Supported Workloads Content
  const supportedWorkloads: SupportedWorkloadsType = {
    title: "Supported Workloads",
    workloads: [
      {
        title: "Web & Mobile Applications",
        description:
          "Improve user experience with fast session caching, rate limiting, and API acceleration",
      },
      {
        title: "E-Commerce & Personalization",
        description:
          "Enable recommendation engines, cart caching, and real-time inventory tracking",
      },
      {
        title: "Gaming & Leaderboards",
        description:
          "Use Redis for real-time scoring, matchmaking, and player session storage",
      },
      {
        title: "Financial Services & Trading Platforms",
        description:
          "Power high-frequency trading, fraud detection, and risk analysis",
      },
      {
        title: "AI/ML & Data Science",
        description:
          "Speed up feature stores, real-time inference, and ML model serving",
      },
      {
        title: "IoT & Streaming Applications",
        description:
          "Optimize real-time data processing, telemetry ingestion, and event-driven architectures",
      },
    ],
  };

  // Similar Services We Provide
  const services = [
    {
      name: "MariaDB",
      icon: "/images/Group 512.png",
      link: "/databases/mariadb",
    },
    {
      name: "MongoDB",
      icon: "/images/Vector-1.png",
      link: "/databases/mongodb",
    },
    {
      name: "Postgres",
      icon: "/images/Vector-1.png",
      link: "/databases/postgres",
    },
    {
      name: "Cockroach",
      icon: "/images/Vector-1.png",
      link: "/databases/cockroachdb",
    },
  ];

  // Component functions to render different card types
  const renderServicePropositionCard = (
    card: ServicePropositionCard,
    index: number
  ) => (
    <div
      key={index}
      className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow flex flex-col h-full"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 flex items-center justify-center border border-gray-200 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={card.icon}
          />
        </svg>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-black/70 mb-2 sm:mb-4">
        {card.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 flex-grow">
        {card.description}
      </p>
    </div>
  );

  const renderServiceOfferingCard = (service: ServiceItem, index: number) => (
    <div
      key={index}
      className={`p-4 sm:p-6 shadow-sm transition-all ${
        index === 1
          ? "bg-black text-white"
          : "bg-white hover:bg-black hover:text-white"
      }`}
    >
      <div className="flex items-start mb-4 sm:mb-6">
        <div
          className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4"
          style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
        >
          <Image
            src={service.image}
            alt={service.title}
            width={30} 
            height={30} 
            className="w-7 h-7 sm:w-9 sm:h-9 object-contain"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-base sm:text-lg md:text-xl font-bold">
            {service.title}
          </h3>
        </div>
      </div>

      <ul
        className={`text-xs sm:text-sm space-y-4 sm:space-y-6 transition-all ${
          index === 1 ? "text-white" : "text-gray-600 hover:text-white"
        }`}
      >
        {service.items.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );

  const renderWorkloadCard = (workload: Workload, index: number) => (
    <div
      key={index}
      className="flex items-start space-x-3 p-3 sm:p-4 border border-gray-200 rounded-2xl sm:rounded-3xl bg-white hover:shadow-lg transition-shadow ml-5 sm:ml-10"
    >
      <div className="-mt-1 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#59ba36"
        >
          <path d="m345.33-60-76-129.33-148.66-31.34 16-147.33L40-480l96.67-111.33-16-147.34L269.33-770l76-130L480-839.33 614.67-900l76.66 130 148 31.33-16 147.34L920-480l-96.67 112 16 147.33-148 31.34L614.67-60 480-120.67 345.33-60Zm29.34-86.67L480-191.33l108 44.66 63.33-98.66L766-274l-11.33-116.67L833.33-480l-78.66-91.33L766-688l-114.67-26.67L586-813.33l-106 44.66-108-44.66-63.33 98.66L194-688l11.33 116.67L126.67-480l78.66 89.33L194-272l114.67 26.67 66 98.66ZM480-480Zm-42.67 136L664-569.33 615.33-616l-178 176.67-92-94L296-484.67 437.33-344Z" />
        </svg>
      </div>
      <div>
        <h3 className="font-bold text-sm sm:text-base text-gray-800 mb-1 sm:mb-2">
          {workload.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">
          {workload.description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Mahity - Redis Services</title>
        <meta name="description" content="Mahity Redis Database Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-14 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 sm:mb-8 md:mb-0">
            <div className="text-base sm:text-base md:text-lg uppercase mb-2 sm:mb-4 md:mb-7">
              {heroContent.subtitle}
            </div>
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-10">
              {heroContent.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-10">
              {heroContent.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              {heroContent.buttons.map((button, index) => (
                <button
                  key={index}
                  className={`${button.color} px-4 py-2 sm:px-6 sm:py-3 rounded font-semibold text-sm sm:text-base`}
                  onClick={() => (window.location.href = "/contact-us")}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 mt-6 sm:mt-8 md:mt-0">
            <div className="rounded overflow-hidden">
              <Image
                src={heroContent.image.src}
                alt={heroContent.image.alt}
                width={heroContent.image.width}
                height={heroContent.image.height}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Service Propositions */}
      <section
        className="py-8 sm:py-12 md:py-16 lg:py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/image 62.png')" }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-12">
            {servicePropositions.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {servicePropositions.cards.map(renderServicePropositionCard)}
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 md:mb-20">
            {serviceOfferings.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
            {serviceOfferings.services.map(renderServiceOfferingCard)}
          </div>
        </div>
      </section>

      {/* Supported Workloads */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div
          className="absolute -left-10 -bottom-8 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px]"
          style={{
            background:
              "radial-gradient(circle, rgba(192,128,255,0.6) 10%, rgba(255,255,255,0) 70%)",
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 md:mb-14">
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-0">
              {supportedWorkloads.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
            {supportedWorkloads.workloads.slice(0, 2).map(renderWorkloadCard)}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
            {supportedWorkloads.workloads.slice(2, 4).map(renderWorkloadCard)}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {supportedWorkloads.workloads.slice(4, 8).map(renderWorkloadCard)}
          </div>
        </div>
      </section>

      {/* Similar Services Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 mt-6 sm:mt-9 mb-12 sm:mb-20 px-4 sm:px-6 md:px-12 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800/70">
            Similar Services We Provide
          </h2>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-20">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col items-center hover:shadow-xl transition-all cursor-pointer"
              >
                <Image
                  src={service.icon}
                  alt={service.name}
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
                <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg mt-2 sm:mt-3">
                  {service.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
