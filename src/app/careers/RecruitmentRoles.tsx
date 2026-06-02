"use client";
import { useState } from "react";
import Link from "next/link";

const jobRoles = [
  {
    title: "Process Automation Engineer",
    description:
      "We are seeking a Process Automation Engineer with experience in Camunda BPMN to join our team...",
    link: "/careers/process-automation-engineer",
  },
  {
    title: "Kubernetes Administrator",
    description:
      "This is a full-time on-site role, located in Mumbai, for a Kubernetes Administrator. As a Kubernetes Administrator...",
    link: "/careers/kubernetes-administrator",
  },
  {
    title: "API Administrator",
    description:
      "We are looking for a skilled API Administrator with experience in API Gateway from Tyk or Kong. The ideal candidate should be proficient..",
    link: "/careers/api-administrator",
  },
  {
    title: "Automation Engineer",
    description:
      "We are seeking an experienced Automation Engineer with knowledge of Ansible and Terraform...",
    link: "/careers/automation-engineer",
  },
  {
    title: "Kafka Administrator",
    description:
      "We are looking for a Kafka Administrator to join our team. The Kafka Administrator will be responsible for...",
    link: "/careers/kafka-administrator",
  },
  {
    title: "OpenShift Administrator",
    description:
      "This is a full-time on-site role, located in Mumbai, for a Senior OpenShift Administrator. You will be responsible for managing...",
    link: "/careers/openshift-administrator",
  },
  // {
  //   title: "OpenShift Administrator1",
  //   description:
  //     "This is a full-time on-site role, located in Mumbai, for a Senior OpenShift Administrator. ..",
  //   link: "/careers/openshift-administrator1",
  // },
];

const ITEMS_PER_PAGE = 6;

const RecruitmentRoles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter jobs based on search term
  const filteredJobs = jobRoles.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedJobs = filteredJobs.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Section Title */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between mb-6 gap-4">
        {/* Title */}
        <div className="text-xl sm:text-3xl font-bold whitespace-nowrap">
          Key Recruitment Roles
        </div>

        {/* Search Inputs */}
        <div className="flex flex-wrap border-gray-300 sm:flex-nowrap items-center gap-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search Here Job Profile"
            className="border border-gray-400 px-4 py-2 rounded-md w-full sm:w-64"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedJobs.map((job, index) => (
          <div
            key={index}
            className="bg-[#565353] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <hr className="border-t border-white my-2" />
            <p className="text-gray-300 text-sm mb-4">{job.description}</p>
            <Link
              href={job.link || "#"}
              className="text-orange-300 font-semibold hover:underline"
            >
              Read Full Job Description &gt;
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center sm:justify-start mt-8 space-x-4 text-lg font-medium">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={`transition ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-[#565353] hover:text-orange-500"
            }`}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`transition ${
                currentPage === i + 1
                  ? "text-orange-500 underline font-semibold"
                  : "text-[#565353] hover:text-orange-500"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className={`transition ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-[#565353] hover:text-orange-500"
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default RecruitmentRoles;
