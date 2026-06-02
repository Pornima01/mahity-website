
"use client"
import Image from "next/image";

export default function Home() {
  const services = [
    {
      title: "Azure Cost Analysis & Reporting ",
      icon: "/images/Microsoft_9.png",
      items: [
        "Real-time cost dashboards & analytics ",
        "Forecasting & budget tracking ",
        "Cost anomaly detection & alerts ",
      ],
    },
    {
      title: "Workload Rightsizing & Optimization ",
      icon: "/images/Microsoft_11.png",
      items: [
        "Identify underutilized or oversized resources ",
        "Automated scaling recommendations ",
        "Optimize VM families, disks, and databases ",
      ],
    },
    {
      title: "Reserved Instance (RI) & Savings Plan Strategy ",
      icon: "/images/Microsoft_12.png",
      items: [
        "Evaluate RI vs. Pay-As-You-Go for maximum savings ",
        "Optimization of Spot VMs and Savings Plans ",
        "Reserved Instance purchase & management ",
      ],
    },
    {
      title: "Azure Hybrid Benefits & Licensing Optimization ",
      icon: "/images/Microsoft_10.png",
      items: [
        "Cost savings on Windows & SQL Server workloads ",
        "License portability strategies ",
        "Software Assurance benefits utilization ",
      ],
    },
    {
      title: "FinOps Advisory & Cost Governance ",
      icon: "/images/Microsoft_13.png",
      items: [
        "Establish cost governance frameworks ",
        "Policy enforcement using Azure Cost Management + Power BI ",
        "Tagging, budgeting, and chargeback models ",
      ],
    },
    {
      title: "Automation & AI-Powered Cost Optimization ",
      icon: "/images/Microsoft_13.png",
      items: [
        "Automated resource scheduling for non-production workloads ",
        "AI-driven recommendations for cost savings  ",
        "Policy-based auto-scaling & shutdown  ",
      ],
    },
    {
      title: "Security & Compliance Cost Optimization ",
      icon: "/images/Microsoft_13.png",
      items: [
        "Cost-efficient security & backup strategies ",
        "Compliance-aligned cost reduction techniques  ",
        "Azure Policy for governance and cost control ",
      ],
    },
  ];

  // Similar Services data
  const similarServices = [
    {
      id: 1,
      title: "Azure Database Migration Service",
      image: "/images/service_10.png",
      link: "/azure/database-migration-service",
    },
    {
      id: 2,
      title: "Azure Kubernetes Service (AKS) Migration",
      image: "/images/service_7.png",
      link: "/azure/kubernetes-service-migration",
    },
    {
      id: 3,
      title: "Azure Site Recovery (ASR)",
      image: "/images/service_7.png",
      link: "/azure/site-recovery",
    },
    {
      id: 4,
      title: "Azure Managed Services",
      image: "/images/service_10.png",
      link: "/azure/managed-services",
    },
    {
      id: 5,
      title: "Sentinel Migration",
      image: "/images/service_7.png",
      link: "/azure/sentinel-migration",
    },
    {
      id: 6,
      title: "HPC (High-Performance Computing) Migration",
      image: "/images/service_7.png",
      link: "/azure/hpc-migration",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-400 ">
      <main className="container mx-auto px-4 ">
        <div className=" rounded-lg overflow-hidden mb-12">
          <div className="flex flex-col md:flex-row">
            <div className="w-full  h-2/5 md:w-1/2 p-8  md:p-12 flex flex-col justify-center relative">
              <h1 className="absolute top-16 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-gray-700 font-semibold bg-opacity-70 w-full py-2 rounded-md text-center sm:text-left">
                Cost Management & Optimization
              </h1>

              <div className="relative  w-full md:h-40">
                <Image
                  src="/images/MicrosoftAzure_1.png"
                  alt="Azure Cloud Illustration"
                  className="object-contain"
                  width={500}
                  height={200}
                />
              </div>
            </div>

            <div
              className="w-full  md:w-1/2 p-4 sm:px-8 md:p-12 flex flex-col justify-center text-white"
              style={{
                background:
                  "linear-gradient(to bottom, rgb(53, 182, 236), #60a5fa)",
              }}
            >
              {/* Image positioned at the top - Hidden on small screens */}
              <div className="absolute top-72 left-1/6 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                <Image
                  src="/images/MicrosoftAzure_2.png"
                  alt="Azure Cloud Illustration"
                  width={450}
                  height={300}
                  className="object-contain w-40 md:w-48 md:-mt-6 "
                />
              </div>

              {/* Content */}
              <p className="text-xl sm:mb-6 md:mt-8 text-white font-bold md:ml-28 ">
                Our Azure Cost Management & Optimization Service helps
                organizations take control of their cloud spending while
                ensuring optimal performance. As an Azure partner, we provide
                expert guidance, actionable insights, and automated cost-saving
                strategies to help you optimize your cloud investment.
              </p>

              <div className="flex justify-center md:justify-start mt-6 md:ml-28">
                <button
                  onClick={() => (window.location.href = "/contact-us")}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md w-max transition duration-300"
                >
                  Talk to Expert
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" pb-24 pt-20 ">
            <h2 className="text-4xl font-bold text-gray-700 mb-4">
              Key Service Propositions
            </h2>
            <ul className="list-disc ml-3 pb-6 list-inside mt-4 space-y-2">
              <li>
                Cost Visibility & Transparency – Gain a clear understanding of
                your Azure costs with real-time monitoring and detailed
                reporting.{" "}
              </li>
              <li>
                Spend Optimization & Governance – Implement best practices for
                budgeting, rightsizing, and cost governance to prevent overages.
              </li>
              <li>
                Automated Cost Savings – Leverage automation and AI-driven
                insights to identify and eliminate waste.
              </li>
              <li>
                Pricing & Commitment Optimization – Optimize Reserved Instances
                (RI), Savings Plans, and Spot instances for maximum cost
                efficiency.{" "}
              </li>
              <li>
                FinOps Enablement – Align cloud financial operations with
                business goals through continuous cost monitoring and
                forecasting.
              </li>
              <li>
                Security & Compliance Aligned with Cost – Ensure your cloud
                costs remain optimized without compromising security or
                compliance.{" "}
              </li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className=" p-3 rounded-lg">
                  <Image
                    src="/images/Microsoft_3.png"
                    alt="Monitoring Icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl  font-bold text-gray-700">
                    24/7 Monitoring & Support
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className=" p-3 rounded-lg">
                  <Image
                    src="/images/Microsoft_4.png"
                    alt="Cost Icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-700">
                    Cost Optimization
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className=" p-3 rounded-lg">
                  <Image
                    src="/images/Microsoft_5.png"
                    alt="Security Icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-700">
                    Security & Compliance
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className=" p-3 rounded-lg">
                  <Image
                    src="/images/Microsoft_6.png"
                    alt="Scalability Icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-700">
                    Scalability & Performance
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className=" p-3 rounded-lg">
                  <Image
                    src="/images/Microsoft_7.png"
                    alt="Automation Icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-700">
                    Automation & DevOps
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className=" p-3 rounded-lg">
                  <Image
                    src="/images/Microsoft_8.png"
                    alt="Disaster Recovery Icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl  text-gray-700 font-bold">
                    Disaster Recovery & Backup
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium text-gray-700 mb-12">
            Service Offerings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 flex flex-col h-full"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex-shrink-0 mr-4">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={50}
                      height={50}
                      className="w-10 h-10 text-blue-600 mt-2"
                    />
                  </div>
                  <h3 className="text-lg  text-gray-700 font-bold">
                    {service.title}
                  </h3>
                </div>

                <ul className="mt-4 space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex">
                      <span className="text-blue-400 mr-2">•</span>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Similar service we provide section  */}

        <section className="mb-8 mx-4 sm:mx-12 md:mx-20 lg:mx-28 px-4 sm:px-6 md:px-12 lg:px-28 pt-28">
          <h2 className="text-3xl text-gray-700 font-bold text-center mb-12">
            Similar Services We Provide
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 relative">
            {/* Left side illustration */}
            <div
              className="absolute left-0 top-1/4 transform -translate-y-1/2 hidden md:block"
              style={{ marginLeft: "-80px" }}
            >
              <Image
                src="/images/Microsoft_14.png"
                alt="Technician Illustration"
                width={400}
                height={500}
                className="object-contain pr-36"
              />
            </div>

            {/* Service cards */}
            {similarServices.map((service) => (
              <div
                key={service.id}
                className="bg-white py-6 rounded-3xl shadow-sm p-4 flex flex-col items-center mx-auto w-full max-w-xs cursor-pointer hover:shadow-md transition-all"
                onClick={() => (window.location.href = service.link)}
              >
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
            ))}
          </div>
        </section>

        <div className=" pb-24 px-4 md:px-12 lg:px-24 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between pt-8 md:pt-24 relative">
              {/* Left side illustration */}
              <div className="w-full md:w-1/2 relative mb-10 md:mb-0 flex justify-center md:justify-start">
                <Image
                  src="/images/Microsoft_15.png"
                  alt="People working with technology"
                  width={800}
                  height={700}
                  className="object-contain"
                />
              </div>

              {/* Right side content */}
              <div className="w-full  md:w-1/2 space-y-8 flex flex-col items-center md:items-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-700">
                  Have any questions?
                </h1>
                <button
                  onClick={() => (window.location.href = "/contact-us")}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md w-max transition duration-300"
                >
                  Talk to Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
