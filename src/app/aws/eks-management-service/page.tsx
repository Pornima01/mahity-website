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
  {
    id: 1,
    title: "Microservices Applications",
    image: "/images/service_5.png",
  },
  {
    id: 2,
    title: "AI/ML & Data Processing",
    image: "/images/service_4.png",
  },
  {
    id: 3,
    title: "Hybrid & Multi-Cloud Deployments",
    image: "/images/service_3.png",
  },
  {
    id: 4,
    title: "Serverless Kubernetes",
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
    title: "AWS Server Migration Service",
    image: "/images/service_7.png",
    link: "/aws/server-migration-service",
  },
  {
    id: 4,
    title: "AWS Application Migration Service",
    image: "/images/service_9.png",
    link: "/aws/application-migration-service",
  },

  {
    id: 5,
    title: "AWS HPC (High-Performance Computing) Migration",
    image: "/images/service_7.png",
    link: "/aws/hpc-migration",
  },
];

export default function awsApplicationMigrationService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <Head>
        <title>AWS Application Migration Service </title>
        <meta name="description" content="AWS Managed Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {/* Hero Section */}
        <section className="bg-white rounded-lg p-8 py-24 pb-28 mb-8  shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-8">
              <h1 className="text-3xl font-semibold text-gray-700 mb-4">
                Amazon EKS Management Service
              </h1>

              <p className="text-gray-600 mb-4">
                We help businesses deploy, manage, and optimize their Amazon
                Elastic Kubernetes Service (Amazon EKS) environments. Our
                end-to-end EKS management services ensure that your Kubernetes
                workloads run securely, efficiently, and at scale, freeing your
                teams to focus on application development rather than
                infrastructure management.
              </p>

              <p className="text-gray-600 mb-6">
                With our certified AWS and Kubernetes experts, we offer
                automated deployments, security hardening, performance tuning,
                and continuous monitoring for mission-critical Kubernetes
                workloads on AWS.
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
              <div className="bg-white p-8 flex flex-col md:border-r-2 md:border-b-2 border-blue-400">
                <div className="flex items-center mb-6">
                  <div className="text-blue-300 mr-4">
                    <FaServer size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-700">
                    EKS Cluster Setup & Configuration
                  </h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Design and deploy Kubernetes clusters tailored to your
                      workloads.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Set up worker nodes with EC2, Fargate, or Spot Instances.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Configure IAM roles, VPC networking, and security groups.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Enable Auto Scaling, Load Balancers, and Service Mesh (AWS
                      App Mesh, Istio).
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[rgb(229,236,250)] p-8 flex flex-col  md:border-r-2 md:border-b-2 border-blue-400">
                <div className="flex items-center mb-6">
                  <div className="text-blue-300 mr-4">
                    <FaShieldAlt size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-700">
                    Security & Compliance Hardening
                  </h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Implement RBAC (Role-Based Access Control) for access
                      management.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Secure Kubernetes workloads with IAM, Secrets Manager, and
                      KMS encryption.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Vulnerability scanning for container images with AWS
                      Inspector.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Enforce security policies with AWS GuardDuty, WAF, and
                      Security Hub.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 flex flex-col md:border-b-2  border-blue-400">
                <div className="flex items-center mb-6">
                  <div className="text-blue-300 mr-4">
                    <FaCoins size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-700">
                    CI/CD & DevOps Automation
                  </h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Automate deployments with GitOps, ArgoCD, and Flux.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Integrate CI/CD pipelines using GitHub Actions, Jenkins,
                      and CodePipeline.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Infrastructure as Code (IaC) implementation with Terraform
                      or AWS CloudFormation.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Enable blue-green and canary deployments for zero-downtime
                      releases.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-rgb(229, 236, 250) p-8 flex flex-col md:border-r-2 border-blue-400">
                <div className="flex items-center mb-6">
                  <div className="text-blue-300 mr-4">
                    <FaCloudDownloadAlt size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-700">
                    Monitoring, Logging & Performance Optimization
                  </h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Real-time cluster monitoring with AWS CloudWatch,
                      Prometheus, and Grafana.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Log aggregation using Fluentd, OpenSearch, and AWS
                      CloudTrail.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Application performance tuning with distributed tracing
                      (AWS X-Ray, Jaeger).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Cost optimization by right-sizing compute, storage, and
                      networking.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 flex flex-col md:border-r-2 border-blue-400">
                <div className="flex items-center mb-6">
                  <div className="text-blue-300 mr-4">
                    <FaDatabase size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-700">
                    High Availability & Disaster Recovery
                  </h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Deploy multi-region and multi-AZ EKS clusters for failover
                      protection.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Implement backup & disaster recovery strategies using AWS
                      Backup, Velero.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Configure self-healing workloads with Kubernetes health
                      checks.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Automate recovery workflows to ensure business continuity.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 flex flex-col md:border-r-2 border-blue-400">
                <div className="flex items-center mb-6">
                  <div className="text-blue-300 mr-4">
                    <FaDatabase size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-700">
                    Ongoing EKS Support & Managed Services
                  </h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      24/7 monitoring and incident response for production
                      clusters.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Proactive patching, upgrades, and lifecycle management.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Kubernetes best practices & governance enforcement.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1 flex-shrink-0 text-xs">
                      ●
                    </span>
                    <span className="text-gray-600">
                      Regular security audits and performance optimizations.
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
