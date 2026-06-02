"use client";
import Head from "next/head";
import Image from "next/image";

interface KeyService {
  image: string;
  text: string;
}

interface ServiceOffering {
  image: string;
  title: string;
  items: string[];
}

// Key Service Propositions
const KEY_SERVICES: KeyService[] = [
  {
    image: "/images/Group 476.png",
    text: "Enterprise-Grade Data Streaming",
  },
  {
    image: "/images/Group 470.png",
    text: "Multi-Cloud & Hybrid Deployments",
  },
  {
    image: "/images/Group 478.png",
    text: "High Availability & Fault Tolerance",
  },
  {
    image: "/images/Microsoft_6.png",
    text: "Security & Compliance",
  },
];

// Service Offerings
const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    image: "/images/Group1.png",
    title: "Kafka Cluster Deployment & Configuration",
    items: [
      "Kafka Cluster Setup – Deploy Kafka on bare metal, VMs, Kubernetes, OpenShift, or cloud-native platforms.",
      "Multi-Cloud & On-Prem Deployments – Set up Kafka in AWS, Azure, GCP, or hybrid environments.",
      "Zookeeper & KRaft Mode Configuration – Deploy and optimize Kafka’s cluster coordination.",
    ],
  },
  {
    image: "/images/Group (1).png",
    title: "Kafka Security & Access Control",
    items: [
      "Authentication & Authorization – Implement SASL, OAuth, TLS, and Kerberos for secure access control.",
      "Role-Based Access Controls (RBAC) & ACLs – Define fine-grained permissions for producers and consumers.",
      "End-to-End Encryption – Secure data in transit and at rest using TLS and SSL certificates.",
    ],
  },
  {
    image: "/images/Vector.png",
    title: "Kafka Performance Tuning & Optimization",
    items: [
      "Latency & Throughput Optimization – Fine-tune message compression, batch sizes, and partitioning.",
      "Consumer & Producer Tuning – Optimize message delivery for low-latency and high-throughput processing.",
      "Cluster Load Balancing & Scaling – Implement auto-scaling and partition reassignment strategies.",
    ],
  },
  {
    image: "/images/Vector (4).png",
    title: "Kafka Observability, Monitoring & Logging",
    items: [
      "Real-Time Kafka Metrics & Dashboards – Monitor Kafka health using Prometheus, Grafana, ELK Stack, and OpenTelemetry.",
      "Distributed Tracing & Event Logging – Integrate Kafka with Jaeger, Zipkin, or Datadog for enhanced observability.",
      "Alerting & Incident Response – Set up custom alerts for broker failures, topic lags, and partition under-replication.",
    ],
  },
  {
    image: "/images/Vector (3).png",
    title: "Kafka Stream Processing & Data Integration",
    items: [
      "Kafka Streams & ksqlDB Implementation – Real-time stream processing, transformations, and event aggregation.",
      "Kafka Connect & Data Pipelines – Integrate Kafka with databases (PostgreSQL, MySQL, MongoDB), cloud storage (S3, GCS, Azure Blob), and big data frameworks (Hadoop, Spark, Flink).",
      "ETL & Data Lake Integration – Build event-driven ETL pipelines and ingest data into data lakes and warehouses.",
    ],
  },
  {
    image: "/images/Vector (2).png",
    title: "Managed Kafka Services & Enterprise Support",
    items: [
      "24/7 Kafka Cluster Monitoring & SLA-Backed Support – Continuous health checks, issue resolution, and scaling assistance.",
      "Automated Upgrades & Patch Management – Ensure Kafka remains up-to-date and secure.",
      "Disaster Recovery & Backup Solutions – Implement multi-cluster replication (MirrorMaker 2.0) and snapshot backups.",
    ],
  },
];

// Supported Workloads
const WORKLOADS: string[] = [
  "Real-Time Analytics & Event Streaming",
  "Microservices & Event-Driven Architectures",
  "Financial Services & Payment Processing",
  "IoT & Edge Computing",
  "AI & Machine Learning Pipelines",
  "E-Commerce & Customer Engagement",
];

const services = [
  {
    name: "Tyk",
    icon: "/images/Group 512.png",
    link: "/messaging/kong",
  },
  {
    name: "Kong",
    icon: "/images/Vector-1.png",
    link: "/messaging/tyk",
  },
  {
    name: "Apache MQ",
    icon: "/images/Vector-1.png",
    link: "/messaging/apach-mq",
  },
];

// Company Description
const COMPANY_DESCRIPTION: string =
  "Our Apache Kafka Services help organizations build scalable, high-performance, and real-time data streaming platforms. As an open-source software support provider, we specialize in deploying, configuring, optimizing, and managing Apache Kafka clusters for businesses that require high-throughput messaging, event-driven architectures, and real-time analytics.";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Apache Kafka - API Management & Streaming</title>
        <meta
          name="description"
          content="Apache Kafka API Management and Streaming Services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        {/* Header Section */}
        <div className="mb-20 sm:mb-32 md:mb-40 px-4 sm:px-16 lg:px-32">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="max-w-xl w-full">
              <p className="text-gray-700 text-lg sm:text-xl mb-3 sm:mb-5">
                API, Managing & Streaming
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-7">
                Apache Kafka
              </h1>
              <p className="text-gray-700 mb-6 sm:mb-10">
                {COMPANY_DESCRIPTION}
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  className="bg-[#F68A2A] hover:bg-[#f6892aea] text-white px-4 sm:px-6 py-2 rounded-md font-semibold"
                  onClick={() => (window.location.href = "/contact-us")}
                >
                  Talk to Expert
                </button>
              </div>
            </div>

            <div className="w-full md:w-auto mt-8 md:mt-0">
              <div className="shadow-xl p-5 sm:p-8 md:p-10 rounded-lg">
                <h2 className="text-xl sm:text-2xl mb-4 sm:mb-7">
                  Key Service Propositions
                </h2>
                <ul className="space-y-3 sm:space-y-4">
                  {KEY_SERVICES.map((service, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Image
                          src={service.image}
                          alt="Service icon"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base">
                        {service.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Service Offerings Section */}
        <div className="mb-8">
          <div className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: "url('/images/image 61.png')" }}
            ></div>
            <div className="px-4 sm:px-12 md:px-24 lg:px-36 relative z-10 p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font mb-8 sm:mb-10 md:mb-14">
                Service Offerings
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {SERVICE_OFFERINGS.map((service, index) => (
                  <div
                    key={index}
                    className={`p-4 sm:p-6 transition-all duration-300 hover:bg-[#F68A2A] hover:text-white group flex flex-col justify-between min-h-[280px] sm:min-h-[320px] ${
                      index === 0 ? "bg-[#F68A2A] text-white" : "bg-transpernt"
                    }`}
                  >
                    {/* Icon + Title + List */}
                    <div>
                      <div
                        className={`p-2 sm:p-3 inline-block mb-2 sm:mb-3 ${
                          index === 0
                            ? "bg-transpernt"
                            : "bg-transparent group-hover:bg-white rounded-full"
                        }`}
                      >
                        <Image
                          src={service.image}
                          alt="Service icon"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-5">
                        {service.title}
                      </h3>
                      <ul
                        className={`mb-5 sm:mb-9 space-y-3 sm:space-y-5 text-xs sm:text-sm ${
                          index === 0
                            ? "text-white"
                            : "text-gray-700 group-hover:text-white"
                        }`}
                      >
                        {service.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Supported Workloads */}
        <div className="relative">
          <div
            className="absolute inset-0 bg-contain bg-no-repeat bg-right opacity-50 md:opacity-100"
            style={{ backgroundImage: "url('/images/Rectangle 576.png')" }}
          ></div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col md:flex-row overflow-hidden">
            <div className="w-full md:w-1/2 p-4 sm:p-8 md:p-16 lg:p-32 lg:pl-40">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 mb-6 sm:mb-10 md:mb-14">
                Supported Workloads
              </h2>

              {WORKLOADS.map((workload, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-3 sm:mb-5 p-2 rounded transition duration-300 ${
                    index === 0
                      ? "bg-[#F68A2A]/25 text-[#F68A2A]"
                      : "bg-transparent text-gray-700"
                  } hover:bg-[#F68A2A]/25 hover:text-[#F68A2A]`}
                >
                  <div className="min-w-6">
                    <svg
                      className="h-4 w-4 sm:h-6 sm:w-6 text-[#F68A2A]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </div>

                  <p className="ml-2 sm:ml-4 text-sm sm:text-base transition duration-300">
                    {workload}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full md:w-1/2 h-auto flex justify-center items-center mt-6 md:mt-0 py-6 md:py-0">
              <div className="relative">
              <Image 
                  src="/images/image 20.png"
                  alt="API Worker Illustration"
                  width={500} 
                  height={300}
                  className="w-3/4 mx-auto md:ml-28"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Similar Services Section */}
        <section className="relative w-full py-8 sm:py-12 md:py-16 lg:py-10 mt-6 sm:mt-9 mb-10 sm:mb-20 px-4 sm:px-6 md:px-12 text-center">
          {/* Background Decorative Circles */}
          <div className="absolute top-[-50px] sm:top-[-70px] md:top-[-90px] left-[-30px] sm:left-[-50px] md:left-[-70px] w-16 h-16 sm:w-24 sm:h-24 md:w-48 md:h-48 bg-[#E2FFC0] rounded-full"></div>
          <div className="absolute top-[50px] sm:top-[60px] md:top-[70px] right-[-20px] sm:right-[-30px] md:right-[-50px] w-16 h-16 sm:w-24 sm:h-24 md:w-48 md:h-48 bg-[#FFE5AC] rounded-full"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800/70">
              Similar Services We Provide
            </h2>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-20">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  className="bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center hover:shadow-xl transition-all cursor-pointer"
                >
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                  />
                  <p className="text-gray-800 font-semibold text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-3">
                    {service.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
