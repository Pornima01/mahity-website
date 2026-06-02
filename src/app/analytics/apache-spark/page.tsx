"use client";
import Image from "next/image";

export default function Home() {
  const serviceCards = [
    {
      title: "Apache Spark Deployment & Cluster Management",
      isHighlighted: false,
      items: [
        "Distributed Cluster Setup – Deploy Spark on on-premises, Kubernetes, OpenShift, and cloud environments.",
        "Spark on Hadoop/YARN & Mesos – Configure Spark for Hadoop ecosystem (HDFS, Hive, HBase) and Mesos orchestration.",
        "Serverless Spark Deployments – Implement Databricks, AWS EMR, Google Cloud Dataproc, and Azure Synapse.",
        "Resource Management & Auto-Scaling – Optimize cluster resource allocation for performance and cost efficiency.",
      ],
    },
    {
      title: "Performance Optimization & Query Acceleration",
      isHighlighted: true,
      items: [
        "Memory & Compute Optimization – Tune executor configurations, caching, and shuffling strategies.",
        "Optimized Query Execution – Enhance Spark SQL performance with predicate pushdown, vectorization, and caching.",
        "Delta Lake & Apache Iceberg Integration – Enable time travel, schema evolution, and ACID transactions.",
        "Job Scheduling & Workload Management – Implement Apache Airflow, Oozie, or Kubernetes-native scheduling.",
      ],
    },
    {
      title: "Real-Time Data Processing & Streaming",
      isHighlighted: false,
      items: [
        "Spark Structured Streaming – Enable real-time data processing for low-latency applications.",
        "Apache Kafka, Flink & Pulsar Integration – Stream high-velocity data from event-driven architectures.",
        "Change Data Capture (CDC) Pipelines – Process real-time updates from relational and NoSQL databases.",
        "Event-Driven Microservices – Implement real-time data processing pipelines for IoT, financial services, and fraud detection.",
      ],
    },
    {
      title: "AI/ML & Advanced Analytics",
      isHighlighted: false,
      items: [
        "Machine Learning & Deep Learning Pipelines – Build AI solutions with Spark MLlib, TensorFlow, and PyTorch.",
        "Feature Engineering & Data Preprocessing – Optimize ETL workflows for AI/ML models.",
        "Graph Analytics with GraphX – Perform network analysis, recommendation systems, and fraud detection.",
        "Hyperparameter Tuning & Model Training at Scale – Enable distributed ML model training with Spark clusters.",
      ],
    },
    {
      title: "Security, Governance & Access Control",
      isHighlighted: false,
      items: [
        "Authentication & Authorization – Implement LDAP, Kerberos, OAuth, and role-based access control (RBAC).",
        "Data Encryption & Compliance – Secure Spark clusters with TLS encryption, fine-grained access control, and audit logging.",
        "Enterprise Governance & Data Lineage – Integrate with Apache Atlas, Ranger, and cloud-native data governance tools.",
        "Secure Multi-Tenant Deployments – Enable isolation and workload separation in shared Spark environments.",
      ],
    },
    {
      title: "Managed Apache Spark Services & Enterprise Support",
      isHighlighted: false,
      items: [
        "24/7 Cluster Monitoring & SLA-Backed Support – Ensure high availability with proactive monitoring and scaling.",
        "Automated Upgrades & Patch Management – Keep Apache Spark secure and up-to-date.",
        "Disaster Recovery & Backup Strategies – Implement checkpointing, multi-region replication, and failover solutions.",
        "Training & Knowledge Transfer – Hands-on Apache Spark training for developers, data engineers, and data scientists.",
      ],
    },
  ];

  const SupportedWorkloads = [
    "Big Data Analytics & ETL Pipelines",
    "Real-Time Event Streaming",
    "Machine Learning & AI Model Training",
    "Business Intelligence & Data Warehousing",
    "Graph Processing & Network Analysis",
    "Cloud-Native Data Lake & Lakehouse Architectures",
  ];

  return (
    <div className="min-h-screen">
      <main className="mx-auto py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-1">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between py-6 sm:py-8 lg:py-12 mb-8 sm:mb-10 lg:mb-12">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/images/kubernetes-hero.png"
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
                Apache Spark
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
              Our Apache Spark Services help organizations harness the power of
              distributed computing for big data processing, real-time
              analytics, and machine learning. As an open-source software
              support provider, we specialize in deploying, optimizing, and
              managing Apache Spark clusters for high-speed data processing, ETL
              pipelines, AI/ML workloads, and advanced analytics.
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
                  Lightning-Fast Data Processing
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Leverage in-memory computing for large-scale batch and
                  real-time data processing.
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
                  Scalable & Distributed Computing
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Deploy Apache Spark on Kubernetes, OpenShift, Hadoop YARN,
                  Mesos, and cloud platforms (AWS, Azure, GCP).
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
                  Multi-Language Support
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Build applications using Python (PySpark), Scala, Java, and R.
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
                  Real-Time & Streaming Analytics
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Enable low-latency data streaming with Spark Structured
                  Streaming and Apache Kafka.
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
                  AI/ML & Data Science Acceleration
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Train models with MLlib and integrate with TensorFlow,
                  PyTorch, and Scikit-Learn.
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
                  Optimized Query Performance
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Enhance query execution with Spark SQL, Delta Lake, and Apache
                  Iceberg.
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
                    src="/images/image 54.png"
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
