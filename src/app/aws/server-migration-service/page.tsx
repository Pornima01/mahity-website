import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  FaServer,
  FaShieldAlt,
  FaDatabase,
  FaCoins,
  FaCloudDownloadAlt,
} from "react-icons/fa";

const keyServices = [
  { id: 1, title: "24/7 Monitoring & Support", image: "/images/service_5.png" },
  { id: 2, title: "Security & Compliance", image: "/images/service_4.png" },
  { id: 3, title: "Cost Optimization", image: "/images/service_3.png" },
  {
    id: 4,
    title: "Automated Patching & Updates",
    image: "/images/service_2.png",
  },
];

// Similar Services data
const similarServices = [
  {
    id: 1,
    title: "AWS Managed Service",
    image: "/images/service_10.png",
    link: "/aws/managed-service",
  },
  {
    id: 2,
    title: "AWS Database Migration Service",
    image: "/images/service_7.png",
    link: "/aws/database-migration-service",
  },
  {
    id: 3,
    title: "AWS Application Migration Service",
    image: "/images/service_7.png",
    link: "/aws/application-migration-service",
  },
  {
    id: 4,
    title: "Amazon EKS Management Service",
    image: "/images/service_9.png",
    link: "/aws/eks-management-service",
  },
  {
    id: 5,
    title: "AWS HPC (High-Performance Computing) Migration",
    image: "/images/service_7.png",
    link: "/aws/hpc-migration",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <Head>
        <title>AWS Server Migration Service </title>
        <meta name="description" content="AWS Managed Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {/* Hero Section */}
        <section className="bg-white rounded-lg p-8 py-24 pb-28 mb-8  shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-8">
              <h1 className="text-3xl font-semibold text-gray-700 mb-4">
                AWS Server Migration Service
              </h1>

              <p className="text-gray-600 mb-4">
                We help businesses seamlessly migrate their on-premises and
                cloud-based servers to AWS with AWS Server Migration Service
                (AWS SMS). Our experts ensure a secure, automated, and
                low-downtime migration process, allowing organizations to move
                workloads without disrupting business operations.
              </p>

              <a href="/contact-us" className="inline-block">
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                  Talk to Expert
                </button>
              </a>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative w-full h-64 md:h-72">
                <Image
                  src="/images/service_1.png"
                  alt="AWS Cloud Management Illustration"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Offerings Section */}
        <div
          className="bg-blue-50 h-full -mt-8 max-w-9xl py-12 px-4 md:px-8 lg:px-16 relative"
          style={{
            backgroundImage: "url('/images/service_background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-medium text-gray-700 mb-10">
              Service Offerings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Migration Readiness Assessment  */}
              <div className="bg-white p-8 flex flex-col md:border-r-2 md:border-b-2 border-blue-400">
                <div className="flex items-center mb-6">
                  <div className="text-blue-300 mr-4">
                    <FaServer size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-700">
                    Migration Readiness Assessment
                  </h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Infrastructure and workload analysis to determine
                      migration feasibility.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Cost estimation and total cost of ownership (TCO)
                      comparison.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Compatibility check for AWS EC2 instance types and
                      networking.
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Risk assessment and compliance evaluation.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Migration Strategy & Planning  */}
              <div className="bg-[rgb(229,236,250)] p-8 flex flex-col  md:border-r-2 md:border-b-2 border-blue-400">
                <div className="flex items-center mb-6">
                  <div className="text-blue-300 mr-4">
                    <FaShieldAlt size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-700">
                    Migration Strategy & Planning
                  </h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Define migration approach: Lift-and-Shift, Rehost,
                      Replatform, or Refactor.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Identify dependencies and create a migration roadmap.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Security, compliance, and high availability (HA/DR)
                      planning.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      AWS Landing Zone setup for a scalable cloud foundation.
                    </span>
                  </li>
                </ul>
              </div>

              {/*AWS SMS Setup & Configuration  */}
              <div className="bg-white p-8 flex flex-col md:border-b-2  border-blue-400">
                <div className="flex items-center mb-6">
                  <div className="text-blue-300 mr-4">
                    <FaCoins size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-700">
                    AWS SMS Setup & Configuration
                  </h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Deploy AWS Server Migration Service (SMS) for automated
                      migration.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Configure replication settings and schedule migration
                      waves.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Setup IAM roles, security groups, and networking
                      configurations.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Incremental data replication to ensure zero downtime
                      cutover.
                    </span>
                  </li>
                </ul>
              </div>

              {/*  End-to-End Server Migration Execution  */}
              <div className="bg-rgb(229, 236, 250) p-8 flex flex-col md:border-r-2 border-blue-400">
                <div className="flex items-center mb-6">
                  <div className="text-blue-300 mr-4">
                    <FaCloudDownloadAlt size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-700">
                    End-to-End Server Migration Execution
                  </h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Migrate physical and virtual servers from VMware, Hyper-V,
                      Azure, or other clouds.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Optimize compute resources for cost-effective AWS EC2
                      instances.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Performance testing and validation before cutover.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Seamless switchover with rollback plans for risk
                      mitigation.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Post-Migration Optimization & Support  */}
              <div className="bg-white p-8 flex flex-col md:border-r-2 border-blue-400">
                <div className="flex items-center mb-6">
                  <div className="text-blue-300 mr-4">
                    <FaDatabase size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-700">
                    Post-Migration Optimization & Support
                  </h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Fine-tune AWS EC2 instances for performance and cost
                      efficiency.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Implement backup, monitoring, and security best practices.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Ongoing support and managed services for AWS
                      infrastructure.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Automation and DevOps enablement for continuous
                      improvement.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <section className="mb-24 mt-32 mx-6 md:mx-12 lg:mx-24">
            <h2 className="text-3xl font-medium text-gray-700 text-center mb-12">
              Key Service Propositions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {keyServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center"
                >
                  <div className="w-12 h-12 mb-3 relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={48}
                      height={48}
                      className="text-orange-500"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-700 text-center">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="bg-blue-50 -mb-8 py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            {/* Similar Services */}
            <section className="mb-16 px-6 md:px-12 lg:px-28">
              <h2 className="text-3xl font-medium text-gray-700 text-center mb-12">
                Similar Services We Provide
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4 rounded-3xl">
                {similarServices.map((service) => (
                  <a
                    key={service.id}
                    href={service.link}
                    className="no-underline"
                  >
                    <div className="bg-white py-10 rounded-3xl shadow-sm p-8 flex flex-col items-center transition-all duration-300 hover:shadow-md cursor-pointer">
                      <div className="w-12 h-12 mb-4 relative">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={48}
                          height={48}
                        />
                      </div>
                      <h3 className="text-sm font-medium text-gray-700 text-center">
                        {service.title}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <div className="flex justify-center">
              <a href="/contact-us">
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                  Talk to Expert
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
