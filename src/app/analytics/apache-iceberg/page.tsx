"use client";
import Image from "next/image";

export default function Home() {
  const serviceCards = [
    {
      title: "Apache Iceberg Deployment & Configuration",
      isHighlighted: false,
      items: [
        "Data Lake Table Format Implementation – Deploy Apache Iceberg as a scalable, ACID-compliant table format.",
        "Multi-Cloud & Hybrid Deployments – Configure Iceberg for AWS S3, Azure ADLS, Google Cloud Storage, HDFS, and MinIO.",
        "Metadata Management & Optimization – Tune metadata pruning, partitioning, and compaction strategies.",
        "Custom Table Format Strategies – Design Iceberg tables to handle structured, semi-structured, and unstructured data.",
      ],
    },
    {
      title: "Performance Optimization & Query Acceleration",
      isHighlighted: true,
      items: [
        "Partitioning & Predicate Pushdown – Optimize query performance with hidden partitioning and metadata pruning.",
        "Compaction & File Format Optimization – Implement Parquet, ORC, or Avro for efficient storage and query execution.",
        "Vectorized Query Execution – Enable faster analytical processing with columnar data structures.",
        "Benchmarking & Performance Tuning – Analyze and optimize query execution across Spark, Flink, and Trino.",
      ],
    },
    {
      title: "Schema Evolution & Data Versioning",
      isHighlighted: false,
      items: [
        "Schema Evolution Without Downtime – Modify table structures without breaking queries or data pipelines.",
        "Time Travel & Snapshot Isolation – Access historical data at any point in time for reproducibility and auditing.",
        "Rollback & Version Control – Restore previous table states without complex migrations or downtime.",
        "Multi-Table Transactions – Ensure ACID compliance for concurrent writes and updates.",
      ],
    },
    {
      title: "Security, Governance & Access Control",
      isHighlighted: false,
      items: [
        "Role-Based Access Control (RBAC) – Implement fine-grained permissions for data access.",
        "Data Encryption & Compliance – Secure Iceberg data with TLS encryption, masking, and GDPR/HIPAA compliance.",
        "Audit Logging & Data Lineage – Track table modifications and data usage for compliance reporting.",
        "Data Governance Integration – Connect Iceberg with Apache Ranger, AWS Lake Formation, and other governance tools.",
      ],
    },
    {
      title: "Apache Iceberg Integration & Data Processing",
      isHighlighted: false,
      items: [
        "Apache Spark, Flink & Trino Integration – Optimize Iceberg for fast, scalable analytical queries.",
        "ETL & Data Ingestion Pipelines – Design efficient batch and streaming ingestion workflows.",
        "Data Lakehouse Architecture – Unify structured and unstructured data processing in a single platform.",
        "Streaming & Change Data Capture (CDC) – Enable real-time data ingestion with Kafka, Debezium, and Flink.",
      ],
    },
    {
      title: "Managed Apache Iceberg Services & Support",
      isHighlighted: false,
      items: [
        "24/7 Monitoring & SLA-Backed Support – Ensure high availability with proactive monitoring and incident resolution.",
        "Automated Upgrades & Patch Management – Keep Apache Iceberg secure and up-to-date.",
        "Disaster Recovery & Backup Strategies – Implement snapshot replication, multi-region backups, and failover solutions.",
        "Training & Knowledge Transfer – Hands-on Apache Iceberg training for data engineering and analytics teams.",
      ],
    },
  ];

  const SupportedWorkloads = [
    "Cloud Data Lakes & Lakehouses",
    "Real-Time & Batch Analytics",
    "Machine Learning & AI Pipelines",
    "Financial Services & Risk Analysis",
    "E-Commerce & Personalization",
    "IoT & Event Streaming",
  ];

  return (
    <div className="min-h-screen">
      <main className="mx-auto py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-1">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between py-6 sm:py-8 lg:py-12 mb-8 sm:mb-10 lg:mb-12">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/images/image 20.png"
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
                Apache Iceberg
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
              Our Apache Iceberg Services help organizations manage large-scale
              analytical data with high-performance, reliability, and
              flexibility. As an open-source software support provider, we
              specialize in deploying, configuring, optimizing, and managing
              Apache Iceberg to enable efficient data lake management, time
              travel, schema evolution, and seamless integration with modern
              analytics engines.
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
                  Next-Gen Table Format for Data Lakes
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Achieve ACID-compliant, scalable, and high-performance big
                  data processing.
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
                  Multi-Engine Compatibility
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Seamlessly integrate Iceberg with Apache Spark, Trino, Presto,
                  Flink, Dremio, and Hive.
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
                  Optimized Storage & Query Performance
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Reduce query latency and storage costs with metadata pruning
                  and partitioning.
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
                  Schema Evolution & Time Travel
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Enable real-time schema changes and historical data access
                  without disruptions.
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
                  Hybrid & Multi-Cloud Support
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Deploy Iceberg on AWS, Azure, GCP, Kubernetes, and on-premises
                  environments.
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
                  Security & Governance
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Implement data encryption, access control, and compliance
                  frameworks for enterprise-grade security.
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
