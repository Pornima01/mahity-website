"use client";
import React from "react";
import { Card, CardContent } from "../../ui/card";
import {
  FaClock,
  FaDollarSign,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import Image from "next/image";

const services = [
  {
    img: "/images/service_10.png",
    title: "Google Cost Management & Optimization",
    link: "/gcp/cost-management",
  },
  {
    img: "/images/service_8.png",
    title: "Google Kubernetes Service (GKE) Migration",
    link: "/gcp/kubernetes-service",
  },
  {
    img: "/images/service_7.png",
    title: "Managed Services",
    link: "/gcp/managed-services",
  },
  {
    img: "/images/service_9.png",
    title: "Google Application Migration Service",
    link: "/gcp/application-migration",
  },
  {
    img: "/images/service_8.png",
    title: "Google HPC (High-Performance Computing) Migration Service",
    link: "/gcp/hpc-migration",
  },
];

const googleDatabaseMigration = () => {
  return (
    <>
      <section className="relative bg-white min-h-[70vh] py-12 px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 md:w-96 md:h-96 bg-red-100 rounded-full mix-blend-multiply opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 md:w-96 md:h-96 bg-yellow-100 rounded-full mix-blend-multiply opacity-50" />

        <div className="max-w-2xl text-center relative z-10 px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Google Database Migration Service
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            As a trusted Google Cloud Partner, we provide end-to-end database
            migration services to help businesses seamlessly transition their
            databases to Google Cloud with minimal downtime and zero data loss.
            Our experts handle everything from assessment and planning to
            execution, optimization, and post-migration support, ensuring a
            smooth migration to Cloud SQL, BigQuery, Firestore, Spanner, and
            other GCP databases.{" "}
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
            <button
              className="bg-orange-500 text-white px-6 py-3 md:py-2 rounded-lg shadow-md hover:bg-orange-600 transition"
              onClick={() => (window.location.href = "/contact-us")}
            >
              Talk to Expert
            </button>
          </div>
        </div>
      </section>

      <div className="bg-white">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center justify-center p-8 min-h-screen gap-12 md:gap-16">
          {/* Left Section - Illustration */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2">
            <Image
              src="/images/image 44.png"
              alt="Illustration"
              width={450}
              height={300}
              className="mb-4"
            />
          </div>

          {/* Right Section - Key Service Propositions */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left -mt-14">
            <h2 className="text-2xl font-semibold ">
              Key Service Propositions
            </h2>
            <div className="space-y-4 w-full max-w-md mt-4">
              <Card className="flex items-center p-4 border border-gray-200 shadow-md w-full">
                <FaClock className="text-blue-500 text-2xl mr-4" />
                <CardContent className="p-0">
                  {" "}
                  Zero Downtime Migrations
                </CardContent>
              </Card>

              <Card className="flex items-center p-4 border border-gray-200 shadow-md w-full">
                <FaDollarSign className="text-green-500 text-2xl mr-4" />
                <CardContent className="p-0">
                  {" "}
                  End-to-End Migration Support
                </CardContent>
              </Card>

              <Card className="flex items-center p-4 border border-gray-200 shadow-md w-full">
                <FaShieldAlt className="text-yellow-500 text-2xl mr-4" />
                <CardContent className="p-0">
                  {" "}
                  Security & Compliance{" "}
                </CardContent>
              </Card>

              <Card className="flex items-center p-4 border border-gray-200 shadow-md w-full">
                <FaChartLine className="text-purple-500 text-2xl mr-4" />
                <CardContent className="p-0">
                  Heterogeneous & Homogeneous Migrations{" "}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Second Section - Background Service Offerings */}
        <section
          className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 bg-cover bg-center -mt-20"
          style={{ backgroundImage: "url('/images/Rectangle517.png')" }} // Change to your background image
        >
          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-white bg-opacity-80"></div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800">
              Service Offerings
            </h2>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {/* Card 1 */}
              <div className="group bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-400 transition transform hover:-translate-y-2 cursor-pointer text-left">
                <div className="flex rounded-full p-2 w-12 h-12 border-4 border-blue-400">
                  <Image
                    src="/images/Group.png"
                    alt="Security & Compliance"
                    width={60}
                    height={60}
                    className="mb-0 rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Database Assessment & Migration Planning
                </h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>✔ Current environment analysis & dependency mapping</li>
                  <li>
                    ✔ Migration strategy selection – Lift & shift,
                    re-platforming, or modernization
                  </li>
                  <li>✔ Schema conversion & compatibility assessment</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="group bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-400 transition transform hover:-translate-y-2 cursor-pointer text-left">
                <div className="flex justify-center items-center bg-blue-500 rounded-full p-2 w-12 h-12">
                  <Image
                    src="/images/Vector.png"
                    alt="Cloud Infrastructure Management"
                    width={60}
                    height={60}
                    className="mb-0"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Fully Managed Database Migration
                </h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>
                    ✔ Homogeneous migrations (MySQL, PostgreSQL, SQL Server to
                    Cloud SQL)
                  </li>
                  <li>
                    ✔ Heterogeneous migrations (Oracle, MongoDB, and other
                    databases to GCP)
                  </li>
                  <li>✔ Zero-downtime live replication & cutover planning</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="group bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-400 transition transform hover:-translate-y-2 cursor-pointer text-left">
                <div className="flex justify-center items-center rounded-full p-2 w-12 h-12 border-4 border-blue-400">
                  <Image
                    src="/images/Group 470.png"
                    alt="Cost & Performance Optimization"
                    width={40}
                    height={40}
                    className="mb-0"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Modernization & Optimization
                </h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>✔ Refactoring databases for performance & scalability</li>
                  <li>✔ Optimized indexing, partitioning & query tuning</li>
                  <li>
                    ✔ Cloud-native enhancements for auto-scaling & high
                    availability
                  </li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="group bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-400 transition transform hover:-translate-y-2 cursor-pointer text-left">
                <div className="flex justify-center items-center rounded-full p-2 w-12 h-12 border-4 border-blue-400">
                  <Image
                    src="/images/Group 470.png"
                    alt="Cost & Performance Optimization"
                    width={40}
                    height={40}
                    className="mb-0"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Security & Compliance Assurance
                </h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>✔ End-to-end encryption & data masking</li>
                  <li>✔ IAM roles, access control & audit logging</li>
                  <li>
                    ✔ Regulatory compliance (HIPAA, GDPR, PCI-DSS, ISO 27001)
                  </li>
                </ul>
              </div>

              {/* Card 5 */}
              <div className="group bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-400 transition transform hover:-translate-y-2 cursor-pointer text-left">
                <div className="flex justify-center items-center rounded-full p-2 w-12 h-12 border-4 border-blue-400">
                  <Image
                    src="/images/Group 470.png"
                    alt="Cost & Performance Optimization"
                    width={40}
                    height={40}
                    className="mb-0"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Post-Migration Support & Performance Tuning
                </h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>✔ Database health monitoring & proactive optimization</li>
                  <li>✔ High availability & disaster recovery strategies</li>
                  <li>✔ Ongoing support & cost monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="relative bg-gradient-to-b from-orange-50 to-white">
          {/* SVG Curve */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg
              className="relative block w-full h-[150px] md:h-[200px] lg:h-[250px]"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFF7F5" // Light background color
                fillOpacity="1"
                d="M0,192L48,186.7C96,181,192,171,288,144C384,117,480,75,576,69.3C672,64,768,96,864,138.7C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>

          {/* Services Section */}
          <div className="relative container mx-auto px-6 py-20">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
              Similar Services We Provide
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  className="bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-200 hover:shadow-2xl transition-shadow duration-300 block" // Added 'block' to make the entire card clickable
                >
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <Image
                      src={service.img}
                      alt={service.title}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-gray-600 font-medium">{service.title}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="relative bg-orange-50 py-10 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
              {/* Left Image */}
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/images/image 65.png"
                  alt="Help Illustration"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              {/* Right Content */}
              <div className="text-center md:text-left">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Have any questions?
                </h2>
                <button
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-orange-600 transition"
                  onClick={() => (window.location.href = "/contact-us")}
                >
                  Talk to Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default googleDatabaseMigration;
