"use client";
import Image from "next/image";

export default function Home() {
  const serviceCards = [
    {
      title: "Apache Debezium Deployment & Configuration",
      isHighlighted: false,
      items: [
        "On-Premises & Cloud Deployments – Deploy Debezium on Kubernetes, OpenShift, AWS, Azure, and GCP.",
        "Kafka-Integrated CDC Pipelines – Configure Debezium with Apache Kafka, Confluent Cloud, and Redpanda.",
        "Standalone Debezium & Embedded Mode – Enable lightweight CDC integration without Kafka using embedded Debezium.",
        "Connector Configuration & Tuning – Optimize Debezium connectors for MySQL, PostgreSQL, MongoDB, Oracle, SQL Server, and Cassandra.",
      ],
    },
    {
      title: "Real-Time Data Streaming & Replication",
      isHighlighted: true,
      items: [
        "Change Data Streaming for Analytics & BI – Sync real-time data from transactional databases to data lakes and warehouses.",
        "Data Replication Across Multi-Region Databases – Implement active-active and active-passive replication strategies.",
        "Streaming ETL & Data Lake Integration – Enable CDC pipelines into Delta Lake, Snowflake, BigQuery, Redshift, and Apache Iceberg.",
        "Event-Driven Microservices – Trigger real-time updates in event-driven architectures using Kafka, Pulsar, and Kinesis.",
      ],
    },
    {
      title: "Performance Optimization & High Availability",
      isHighlighted: false,
      items: [
        "Parallel Execution & Task Scheduling – Optimize CeleryExecutor, KubernetesExecutor, and DaskExecutor for distributed task execution.",
        "Auto-Scaling & Load Balancing – Tune Airflow to automatically scale worker nodes based on demand.",
        "Task Caching & Smart Retries – Reduce redundant execution with intelligent task skipping and retry policies.",
        "Performance Benchmarking – Analyze DAG execution times and optimize for efficiency.",
      ],
    },
    {
      title: "Security, Governance & Compliance",
      isHighlighted: false,
      items: [
        "RBAC & Access Controls – Implement role-based access control for data security.",
        "Data Masking & Filtering – Apply field-level filtering and transformation to protect sensitive data.",
        "Encrypted Data Streaming – Secure data in transit with TLS encryption.",
        "GDPR & HIPAA Compliance – Ensure data governance, audit logging, and regulatory compliance.",
      ],
    },
    {
      title: "Apache Debezium Integration with Data & Cloud Platforms",
      isHighlighted: false,
      items: [
        "Big Data & Streaming Services – Integrate with Apache Flink, Spark Streaming, and KSQL for real-time analytics.",
        "Data Warehouses & Lakehouses – Sync CDC events with Snowflake, BigQuery, Redshift, and Apache Iceberg.",
        "Event Brokers & Messaging Systems – Connect with Apache Kafka, Pulsar, AWS SQS, and Google Pub/Sub.",
        "CI/CD & DevOps Automation – Automate Debezium deployments with Terraform, Helm, and ArgoCD.",
      ],
    },
    {
      title: "Managed Apache Debezium Services & Enterprise Support",
      isHighlighted: false,
      items: [
        "24/7 Monitoring & Incident Response – Ensure high availability with proactive monitoring and issue resolution.",
        "Disaster Recovery & Backup Strategies – Implement multi-region failover and log-based recovery mechanisms.",
        "Automated Upgrades & Patch Management – Keep Debezium secure and up to date.",
        "Training & Knowledge Transfer – Hands-on Debezium training for data engineers, DevOps, and architects.",
      ],
    },
  ];

  const SupportedWorkloads = [
    "Database Change Data Capture (CDC)",
    "Data Replication & Syncing",
    "Real-Time Event-Driven Architectures",
    "ETL & Data Warehousing",
    "IoT & Log Processing",
    "AI/ML Model Training",
  ];

  return (
    <div className="min-h-screen">
      <main className="mx-auto py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-1">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between py-6 sm:py-8 lg:py-12 mb-8 sm:mb-10 lg:mb-12">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/images/image 21.png"
                alt="Big Data Analytics Illustration"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 sm:mb-8 lg:mb-14">
              Big Data & Analytics
            </h1>

            <div className="flex items-center justify-center md:justify-start mb-6 sm:mb-8 lg:mb-10">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Apache Debezium
              </h2>
              <Image
                src="/images/image 71.png"
                alt="Apache Ignite Logo"
                width={40}
                height={40}
                className="ml-2 sm:ml-3 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              />
            </div>

            <p className="text-gray-600 mb-8 sm:mb-10 lg:mb-14 text-sm sm:text-base lg:text-lg max-w-lg mx-auto md:mx-0">
              Our Apache Debezium Services help businesses capture, stream, and
              sync real-time database changes across distributed systems. As an
              open-source software support provider, we specialize in deploying,
              optimizing, and managing Debezium for Change Data Capture (CDC),
              event-driven architectures, real-time analytics, and data
              replication across hybrid cloud environments.
            </p>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md transition duration-300 text-sm sm:text-base"
              onClick={() => (window.location.href = "/contact-us")}
            >
              Talk to Expert
            </button>
          </div>
        </section>

        {/* Key Service Propositions */}
        <section className="mb-12  sm:mb-14 lg:mb-16 bg-gradient-to-b from-white to-[#FFE1FD] py-8 sm:py-10 lg:py-20 lg:px-40">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl py-4 sm:py-6 font-semibold text-gray-800 mb-8 sm:mb-12 lg:mb-16 text-center">
            Key Service Propositions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mx-4 sm:mx-8 lg:mx-12 px-2 sm:px-4 lg:px-8 py-2 sm:py-4">
            {/* Card 1 */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 lg:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 border-2 border-purple-200 bg-white shadow-xl rounded-lg flex items-center justify-center">
                <Image
                  src="/images/Group9 (6).png"
                  alt="Placeholder"
                  width={24}
                  height={24}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-700 mb-1 sm:mb-2">
                  Real-Time Change Data Capture (CDC)
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Orchestrate data pipelines, ETL jobs, and ML workflows across
                  hybrid environments.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 lg:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 border-2 border-purple-200 bg-white shadow-xl rounded-lg flex items-center justify-center">
                <Image
                  src="/images/Group9 (5).png"
                  alt="Placeholder"
                  width={24}
                  height={24}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-700 mb-1 sm:mb-2">
                  Seamless Database Replication
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Capture row-level changes from MySQL, PostgreSQL, MongoDB, SQL
                  Server, Oracle, and more.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 lg:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 border-2 border-purple-200 bg-white shadow-xl rounded-lg flex items-center justify-center">
                <Image
                  src="/images/Group9 (4).png"
                  alt="Placeholder"
                  width={24}
                  height={24}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-700 mb-1 sm:mb-2">
                  Event-Driven Architecture Enablement
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Integrate Debezium with Apache Kafka, Pulsar, AWS Kinesis, and
                  Google Pub/Sub.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 lg:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 border-2 border-purple-200 bg-white shadow-xl rounded-lg flex items-center justify-center">
                <Image
                  src="/images/Group9 (3).png"
                  alt="Placeholder"
                  width={24}
                  height={24}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-700 mb-1 sm:mb-2">
                  Reliable & Scalable Data Streaming
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Enable fault-tolerant, low-latency, and distributed data
                  processing.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 lg:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 border-2 border-purple-200 bg-white shadow-xl rounded-lg flex items-center justify-center">
                <Image
                  src="/images/Group9 (2).png"
                  alt="Placeholder"
                  width={24}
                  height={24}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-700 mb-1 sm:mb-2">
                  Schema Evolution & Versioning
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Automatically track database schema changes without breaking
                  downstream consumers.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 lg:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 border-2 border-purple-200 bg-white shadow-xl rounded-lg flex items-center justify-center">
                <Image
                  src="/images/Group9 (1).png"
                  alt="Placeholder"
                  width={24}
                  height={24}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-700 mb-1 sm:mb-2">
                  Cloud-Native & Kubernetes Ready
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Deploy on Kubernetes, OpenShift, AWS, Azure, GCP, and hybrid
                  cloud environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Offerings */}
        <section className="mb-12 sm:mb-14 lg:mb-16 mt-10 sm:mt-14 lg:mt-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-8 sm:mb-12 lg:mb-16 pl-4 sm:pl-8 md:pl-16 lg:pl-32">
            Service Offerings
          </h2>

          {/* Service Cards Grid */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-9">
              {serviceCards.map((card, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-lg overflow-hidden p-3 sm:p-4 transition-all duration-300 group h-full 
                  ${
                    index === 1
                      ? "bg-[#E49EDD] text-white"
                      : "hover:bg-[#E49EDD] hover:text-white"
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col mb-2 sm:mb-3">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-black flex items-center justify-center 
                      transition-all duration-300 bg-white"
                    >
                      <Image
                        src="/images/Group9 (8).png"
                        alt="Icon"
                        width={24}
                        height={24}
                        className="w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 group-hover:bg-white p-1 rounded-full"
                      />
                    </div>
                    <h3 className="mt-3 sm:mt-4 font-bold text-base sm:text-lg mb-3 sm:mb-4">
                      {card.title}
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-3 sm:space-y-5">
                    {card.items.map((item, itemIndex) => {
                      const [title, description] = item.split(" – ");
                      return (
                        <div key={itemIndex} className="text-xs sm:text-sm">
                          <p>{title} –</p>
                          <p>{description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Workloads */}
        <section className="w-full py-8 sm:py-10 lg:py-14 mt-10 sm:mt-14 lg:mt-20 px-4 md:px-6 lg:px-10 bg-white mb-8 sm:mb-12 lg:mb-16 rounded-lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-6 sm:mb-8 md:mb-12">
              Supported Workloads
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10">
              {/* Left Side - Workloads List */}
              <div className="w-full lg:w-1/2">
                <div className="rounded-lg">
                  {SupportedWorkloads.map((workload, index) => (
                    <div
                      key={index}
                      className={`flex items-center p-2 md:p-3 rounded-md transition-all duration-300 cursor-pointer text-xs sm:text-sm md:text-base ${
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
                          className="w-3 h-3 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]"
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
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl -mt-4 sm:-mt-8 lg:-mt-16 xl:-mt-32">
                  <Image
                    src="/images/image 44.png"
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
      </main>
    </div>
  );
}
