// "use client";
// import React, { useState, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ChevronDown, Menu, X } from "lucide-react";
// import { useEffect } from "react";
// import { usePathname } from "next/navigation";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [activeService, setActiveService] = useState<string | null>(null);

//   const [isAWSOpen, setIsAWSOpen] = useState(false);
//   const [isOpenSourceOpen, setIsOpenSourceOpen] = useState(false);

//   const [isAzureOpen, setIsAzureOpen] = useState(false);
//   const [isGoogleCloudOpen, setIsGoogleCloudOpen] = useState(false);
//   const [isRedHat, setIsRedHat] = useState(false);
//   const [isEducation, setIsEducation] = useState(false);
//   const [isBIAutomation, setIsBIAutomation] = useState(false);

//   const [isKubernetes, setIsKubernetes] = useState(false);
//   const [isDefinedNetwork, setIsDefinedNetwork] = useState(false);
//   const [isDevOps, setIsDevOps] = useState(false);
//   const [isDatabases, setIsDatabases] = useState(false);
//   const [isApi, setIsApi] = useState(false);
//   const [isBigData, setIsBigData] = useState(false);

//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   const openSourceRef = useRef<HTMLDivElement>(null);

//   const handleServiceHover = (service: string) => {
//     setActiveService(service);
//   };

//   const handleServiceClick = () => {
//     setIsDropdownOpen((prev) => !prev);
//     setIsOpenSourceOpen(false);
//   };

//   const handleOpenServiceClick = () => {
//     setIsOpenSourceOpen((prev) => !prev);
//     setIsDropdownOpen(false);
//   };

//   const handleSubServiceClick = () => {
//     setIsDropdownOpen(false);
//     setIsOpenSourceOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node) &&
//         openSourceRef.current &&
//         !openSourceRef.current.contains(event.target as Node)
//       ) {
//         setIsDropdownOpen(false);
//         setIsOpenSourceOpen(false);
//       }

//       if (
//         openSourceRef.current &&
//         !openSourceRef.current.contains(event.target as Node)
//       ) {
//         setIsOpenSourceOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const pathname = usePathname();
//   const [initialLoad, setInitialLoad] = useState(true);

//   useEffect(() => {
//     if (initialLoad) {
//       setInitialLoad(true);
//       return;
//     }

//     setIsDropdownOpen(true);
//     setIsOpenSourceOpen(false);
//   }, [initialLoad, pathname]);

//   return (
//     <header className="w-full bg-white shadow-sm py-4 border-b border-black/30">
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <div className="flex items-center">
//           <Link href="/" className="flex items-center">
//             <div className="relative h-16 w-48">
//               <Image
//                 src="/images/Mahity-logo.png"
//                 alt="MAHITY Logo"
//                 width={600}
//                 height={600}
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </Link>
//         </div>

//         <nav className="hidden md:flex items-center">
//           <ul className="flex space-x-12">
//             <li>
//               <Link
//                 href="/"
//                 className="text-gray-800 px-2 py-1 transition-colors duration-300 hover:text-orange-500 border-b-0 hover:border-b-2 hover:border-orange-500"
//               >
//                 Home
//               </Link>
//             </li>

//             <li
//               className="relative"
//               ref={dropdownRef as unknown as React.RefObject<HTMLLIElement>}
//             >
//               <button
//                 onClick={handleServiceClick}
//                 className="text-gray-800 transition-colors duration-300 hover:text-orange-500 border-b-0 hover:border-b-2 hover:border-orange-500"
//               >
//                 Services
//               </button>

//               {isDropdownOpen && (
//                 <div className="absolute -left-28 mt-2 bg-gradient-to-b from-white to-purple-100 shadow-lg border rounded-md p-4 w-96 z-50">
//                   <div className="w-full">
//                     {/* Education & Learning */}
//                     <div
//                       className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
//                         activeService === "ed" ? "bg-white" : ""
//                       }`}
//                       onMouseEnter={() => handleServiceHover("ed")}
//                     >
//                       <h3 className="font-semibold text-purple-400 text-xl flex items-center">
//                         Education & Learning
//                       </h3>
//                       {/* <p className="text-sm text-gray-700">
//                         Empower your workforce and educational institutions with
//                         Microsoft Learning Pathways and Microsoft Viva
//                       </p> */}
//                     </div>

//                     {/* BI & Automation */}

//                     <div
//                       className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
//                         activeService === "bi" ? "bg-white" : ""
//                       }`}
//                       onMouseEnter={() => handleServiceHover("bi")}
//                     >
//                       <h3 className="font-semibold text-purple-400 text-xl flex items-center">
//                         BI & Automation
//                       </h3>
//                       {/* <p className="text-sm text-gray-700">
//                         We help businesses unlock the power of data
//                         visualization and no-code application development
//                       </p> */}
//                     </div>

//                     <div
//                       className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
//                         activeService === "aws" ? "bg-white" : ""
//                       }`}
//                       onMouseEnter={() => handleServiceHover("aws")}
//                     >
//                       <h1 className="font-semibold text-purple-400 text-xl flex items-center">
//                         Amazon Web Services
//                       </h1>
//                       {/* <p className="text-sm text-gray-700">
//                         We provide end-to-end AWS Managed Services (AMS) to help
//                         businesses optimize, secure.
//                       </p> */}
//                     </div>

//                     {/*  Red Hat Hybrid Cloud*/}

//                     <div
//                       className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
//                         activeService === "redhat" ? "bg-white" : ""
//                       }`}
//                       onMouseEnter={() => handleServiceHover("redhat")}
//                     >
//                       <h3 className="font-semibold text-purple-400 text-xl flex items-center">
//                         Red Hat Hybrid Cloud
//                       </h3>
//                       {/* <p className="text-sm text-gray-700">
//                         Our Red Hat OpenShift Management Services provide
//                         end-to-end support for enterprises looking to deploy
//                       </p> */}
//                     </div>

//                     {/* Microsoft Azure */}
//                     <div
//                       className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
//                         activeService === "azure" ? "bg-white" : ""
//                       }`}
//                       onMouseEnter={() => handleServiceHover("azure")}
//                     >
//                       <h3 className="font-semibold text-purple-400 text-xl flex items-center">
//                         Microsoft Azure
//                       </h3>
//                       {/* <p className="text-sm text-gray-700">
//                         As a trusted Microsoft Azure Partner, we provide
//                         comprehensive Azure Managed Services.
//                       </p> */}
//                     </div>

//                     {/* Google Cloud Platform */}

//                     <div
//                       className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
//                         activeService === "gcp" ? "bg-white" : ""
//                       }`}
//                       onMouseEnter={() => handleServiceHover("gcp")}
//                     >
//                       <h3 className="font-semibold text-purple-400 text-xl flex items-center">
//                         Google Cloud Platform
//                       </h3>
//                       {/* <p className="text-sm text-gray-700">
//                         As a trusted Google Cloud Partner, we provide end-to-end
//                         managed services
//                       </p> */}
//                     </div>
//                   </div>

//                   {/* Secondary Menu (Appears to the Right) */}

//                   {activeService === "ed" && (
//                     <div className="absolute top-0 left-full  w-96 bg-white shadow-md border rounded-md p-3 z-50">
//                       <ul className="space-y-2">
//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/learning/microsoft-viva"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Microsoft Learning Pathways and Viva
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/learning/google-classroom"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Google Classroom and Assignments
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>
//                       </ul>
//                     </div>
//                   )}

//                   {activeService === "aws" && (
//                     <div className="absolute top-0 left-full w-96 bg-white shadow-md border rounded-md p-3 z-50">
//                       <ul className="space-y-2">
//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/aws/managed-service"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             AWS Managed Service
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/aws/database-migration-service"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             AWS Database Migration Service
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/aws/server-migration-service"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             AWS Server Migration Service
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/aws/application-migration-service"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             AWS Application Migration Service
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/aws/eks-management-service"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Amazon EKS Management Service
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/aws/hpc-migration"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             AWS HPC (High-performance Computing) Migration
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>
//                       </ul>
//                     </div>
//                   )}

//                   {activeService === "azure" && (
//                     <div className="absolute top-0 left-full w-96 bg-white shadow-md border rounded-md p-3 z-50">
//                       <ul className="space-y-2">
//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/azure/managed-services"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Azure Managed Services
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/azure/database-migration-service"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Azure Database Migration Service
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/azure/kubernetes-service-migration"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Azure Kubernetes Service (AKS) Migration
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/azure/site-recovery"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Azure Site Recovery (ASR)
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/azure/cost-management-optimization"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Cost Management & Optimization
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/azure/sentinel-migration"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Sentinel Migration
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/azure/hpc-migration"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             HPC (High-Performance Computing) Migration
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>
//                       </ul>
//                     </div>
//                   )}

//                   {activeService === "gcp" && (
//                     <div className="absolute top-0 left-full w-96 bg-white shadow-md border rounded-md p-3 z-50">
//                       <ul className="space-y-2">
//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/gcp/managed-services"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Managed Services
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>
//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/gcp/cost-management"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Google Cost Management & Optimization
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>
//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           {/* <Link
//                             href="/googleCloudPlatform/googleKubernetesService "
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Google Kubernetes Service (GKE) Migration
//                           </Link> */}
//                           <Link
//                             href="/gcp/kubernetes-service"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Google Kubernetes Service (GKE) Migration
//                           </Link>

//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>
//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/gcp/database-migration"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Google Database Migration Service
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/gcp/application-migration"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Google Application Migration Service
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/gcp/hpc-migration"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Google HPC (High-Performance Computing) Migration
//                             Service
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>
//                       </ul>
//                     </div>
//                   )}

//                   {activeService === "redhat" && (
//                     <div className="absolute top-0 left-full  w-96 bg-white shadow-md border rounded-md p-3 z-50">
//                       <ul className="space-y-2">
//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/red-hat/openshift-managemnet"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Red Hat OpenShift Management
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/red-hat/multi-cluster-management"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Multi-Cluster Management
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/red-hat/kubernetes-security"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Kubernetes Security
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/red-hat/enterprise-container-registry"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Enterprise Container Registry
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/red-hat/openshift-virtualization"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             OpenShift Virtualization
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>
//                       </ul>
//                     </div>
//                   )}

//                   {activeService === "education" && (
//                     <div className="absolute top-0 left-full  w-96 bg-white shadow-md border rounded-md p-3 z-50">
//                       <ul className="space-y-2">
//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <li className="text-purple-400 font-semibold text-lg">
//                             Microsoft Learning Pathways and Viva
//                           </li>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <li className="text-purple-400 font-semibold text-lg">
//                             Google Classroom and Assignments
//                           </li>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>
//                       </ul>
//                     </div>
//                   )}

//                   {activeService === "bi" && (
//                     <div className="absolute top-0 left-full  w-96 bg-white shadow-md border rounded-md p-3 z-50">
//                       <ul className="space-y-2">
//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/bi/looker-studio"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Google Looker Studio and AppSheet
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/bi/microsoft-azure-power-bi-power-apps"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Microsoft Azure Power BI and Power Apps
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </li>

//             <li
//               ref={openSourceRef as unknown as React.RefObject<HTMLLIElement>}
//               className="relative"
//             >
//               <button
//                 onClick={handleOpenServiceClick}
//                 className="text-gray-800  transition-colors duration-300 hover:text-orange-500 border-b-0 hover:border-b-2 hover:border-orange-500"
//               >
//                 OpenSource
//               </button>

//               {isOpenSourceOpen && (
//                 <div className="absolute -left-40 mt-2 bg-gradient-to-b from-white to-purple-100 shadow-lg border rounded-md p-4 w-96 z-50">
//                   {/* Main OpenSource Menu */}
//                   <div className="w-full">
//                     {/* Kubernetes */}
//                     <div
//                       className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
//                         activeService === "kubernetes" ? "bg-white" : ""
//                       }`}
//                       onMouseEnter={() => handleServiceHover("kubernetes")}
//                     >
//                       <div className="font-semibold text-purple-400 text-xl flex items-center">
//                         Kubernetes
//                       </div>

//                       {/* <p className="text-sm text-gray-700">
//                         We provide enterprise-grade Kubernetes orchestration
//                         using open-source solutions to simplify cluster
//                         lifecycle management
//                       </p> */}
//                     </div>

//                     {/* Software Defined Network */}
//                     <div
//                       className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
//                         activeService === "sdn" ? "bg-white" : ""
//                       }`}
//                       onMouseEnter={() => handleServiceHover("sdn")}
//                     >
//                       <div className="font-semibold text-purple-400 text-xl flex items-center">
//                         Software Defined Network
//                       </div>

//                       {/* <p className="text-sm text-gray-700">
//                         As a trusted Microsoft Azure partner, we provide
//                         comprehensive Azure Managed Services
//                       </p> */}
//                     </div>

//                     {/* DevSecOps */}
//                     <div
//                       className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
//                         activeService === "devsecops" ? "bg-white" : ""
//                       }`}
//                       onMouseEnter={() => handleServiceHover("devsecops")}
//                     >
//                       <h3 className="font-semibold text-purple-400 text-xl flex items-center">
//                         DevSecOps
//                       </h3>
//                       {/* <p className="text-sm text-gray-700">
//                         As a trusted Google Cloud partner, we provide end-to-end
//                         managed services
//                       </p> */}
//                     </div>

//                     {/* Databases */}
//                     <div
//                       className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
//                         activeService === "databases" ? "bg-white" : ""
//                       }`}
//                       onMouseEnter={() => handleServiceHover("databases")}
//                     >
//                       <h3 className="font-semibold text-purple-400 text-xl flex items-center">
//                         Databases
//                       </h3>
//                       {/* <p className="text-sm text-gray-700">
//                         Our Red Hat OpenShift Management Services provide
//                         end-to-end support for enterprises looking to deploy
//                       </p> */}
//                     </div>

//                     {/* API, Messaging & Streaming */}
//                     <div
//                       className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
//                         activeService === "api" ? "bg-white" : ""
//                       }`}
//                       onMouseEnter={() => handleServiceHover("api")}
//                     >
//                       <h3 className="font-semibold text-purple-400 text-xl flex items-center">
//                         API, Messaging & Streaming
//                       </h3>
//                       {/* <p className="text-sm text-gray-700">
//                         Empower your workforce and educational institutions with
//                         Microsoft Learning Pathways and Microsoft Viva
//                       </p> */}
//                     </div>

//                     {/* Big Data & Analytics */}
//                     <div
//                       className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
//                         activeService === "bigdata" ? "bg-white" : ""
//                       }`}
//                       onMouseEnter={() => handleServiceHover("bigdata")}
//                     >
//                       <h3 className="font-semibold text-purple-400 text-xl flex items-center">
//                         Big Data & Analytics
//                       </h3>
//                       {/* <p className="text-sm text-gray-700">
//                         We help businesses unlock the power of data
//                         visualization and no-code application development
//                       </p> */}
//                     </div>
//                   </div>

//                   {/* Secondary Menu for Kubernetes (Appears to the Right) */}
//                   {activeService === "kubernetes" && (
//                     <div className="absolute top-0 left-full  w-96 bg-white shadow-md border rounded-md p-3 z-50">
//                       <ul className="space-y-2">
//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/kubernetes/container-orchestration"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Container Orchestration
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/kubernetes/serverless-event-driven"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Serverless / Event-Driven
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/kubernetes/service-mesh"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Service Mesh
//                           </Link>

//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/kubernetes/virtualization"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Virtualization
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/kubernetes/machine-learning-ai"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Machine Learning and AI
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>
//                       </ul>
//                     </div>
//                   )}

//                   {activeService === "sdn" && (
//                     <div className="absolute top-0 left-full  w-96 bg-white shadow-md border rounded-md p-3 z-50">
//                       <ul className="space-y-2">
//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/sdn/calico"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Calico
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/sdn/cilium"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Cilium
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>
//                       </ul>
//                     </div>
//                   )}

//                   {activeService === "devsecops" && (
//                     <div className="absolute top-0 left-full  w-96 bg-white shadow-md border rounded-md p-3 z-50">
//                       <ul className="space-y-2">
//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/devsecops/zap-dast"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             ZAP (DAST)
//                           </Link>

//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/devsecops/sonarqube-sast"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               Sonarqube (SAST)
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/devsecops/webscarab-iast"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               WebScarab (IAST)
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/devsecops/snyk-sca"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               Snyk (SCA)
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/devsecops/kics-iac"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               KICS (IAC)
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/devsecops/jenkins-tekton-argocd"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               Jenkins / Tekton / ArgoCD
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>
//                       </ul>
//                     </div>
//                   )}

//                   {activeService === "databases" && (
//                     <div className="absolute top-0 left-full w-96 bg-white shadow-md border rounded-md p-3 z-50">
//                       <ul className="space-y-2">
//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/databases/redis"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               Redis
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/databases/mariadb"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               MariaDB
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/databases/mongodb"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               MongoDB
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/databases/postgres"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               Postgres
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="hover:bg-gray-100 rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/databases/cockroachdb"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               CockroachDB
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>
//                       </ul>
//                     </div>
//                   )}

//                   {activeService === "api" && (
//                     <div className="absolute top-0 left-full w-96 bg-white shadow-md border rounded-md p-3 z-50">
//                       <ul className="space-y-2">
//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/messaging/tyk"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               Tyk
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/messaging/kong"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               Kong
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/messaging/apache-kafka"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               Apache Kafka
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/messaging/apach-mq"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               Apach MQ
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>
//                       </ul>
//                     </div>
//                   )}

//                   {activeService === "bigdata" && (
//                     <div className="absolute top-0 left-full w-96 bg-white shadow-md border rounded-md p-3 z-50">
//                       <ul className="space-y-2">
//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/analytics/apache-ignite"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               Apache Ignite
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/analytics/apache-iceberg"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               Apache Iceberg
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/analytics/apache-spark"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               Apache Spark
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/analytics/apache-airflow"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               Apache Airflow
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="hover:bg-gray-100  rounded-md">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <Link
//                               href="/analytics/apache-debezium"
//                               className="text-purple-400 font-semibold text-lg"
//                               onClick={handleSubServiceClick}
//                             >
//                               Apache Debezium
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </li>

//             <li>
//               <Link
//                 href="/careers"
//                 className="text-gray-800 hover:text-orange-500 border-b-0 hover:border-b-2 hover:border-orange-500 transition-colors px-1 py-1"
//               >
//                 Careers
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         <div className="hidden md:flex items-center space-x-6">
//           <Link
//             href="/contact-us/"
//             className="px-5 py-2 border border-gray-300 rounded-sm bg-orange-500 hover:bg-orange-600 hover:text-white text-white transition-transforms hover:scale-110"
//           >
//             Contact Us
//           </Link>
//         </div>

//         <button
//           className="md:hidden text-gray-600"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* ------- Mobile Menu ------- */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white py-4 px-4">
//           <ul className="flex flex-col space-y-4">
//             <li>
//               <Link
//                 href="/"
//                 className="text-gray-800 hover:text-orange-500 border-b-0 hover:border-b-2 hover:border-orange-500 transition-colors block py-2"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Home
//               </Link>
//             </li>

//             <li>
//               <button
//                 onClick={handleServiceClick}
//                 className="text-gray-800 hover:text-orange-500 border-b-0 hover:border-b-2 hover:border-orange-500 transition-colors px-1 py-1 flex items-center"
//               >
//                 Services <ChevronDown size={16} className="ml-1" />
//               </button>
//               {isDropdownOpen && (
//                 <div ref={dropdownRef} className="ml-4 mt-2 space-y-2">
//                   <div className="p-2 border-l-2 border-purple-200">
//                     <button
//                       onClick={() => setIsAWSOpen(!isAWSOpen)}
//                       className="font-semibold text-purple-400 text-lg flex items-center"
//                     >
//                       Amazon Web Service
//                     </button>
//                     {/* <p className="text-sm text-gray-700">
//                       We provide end-to-end AWS Managed Services (AMS)
//                     </p> */}

//                     {isAWSOpen && (
//                       <div className="ml-4 mt-2 space-y-2">
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <div onClick={() => setIsMenuOpen(false)}>
//                               <Link
//                                 href="/aws/managed-service"
//                                 className="text-purple-400 font-semibold text-lg"
//                               >
//                                 AWS Managed Service
//                               </Link>
//                             </div>

//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <div onClick={() => setIsMenuOpen(false)}>
//                               <Link
//                                 href="/aws/database-migration-service"
//                                 className="text-purple-400 font-semibold text-lg"
//                               >
//                                 AWS Database Migration Service
//                               </Link>
//                             </div>

//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <div onClick={() => setIsMenuOpen(false)}>
//                               <Link
//                                 href="/aws/server-migration-service"
//                                 className="text-purple-400 font-semibold text-lg"
//                               >
//                                 AWS Server Migration Service
//                               </Link>
//                             </div>

//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div className="hover:bg-gray-100 p-2 rounded-md">
//                             <div onClick={() => setIsMenuOpen(false)}>
//                               <Link
//                                 href="/aws/application-migration-service"
//                                 className="text-purple-400 font-semibold text-lg"
//                               >
//                                 AWS Application Migration Service
//                               </Link>
//                             </div>

//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="hover:bg-gray-100 p-2 rounded-md">
//                           <Link
//                             href="/aws/eks-management-service"
//                             className="text-purple-400 font-semibold text-lg"
//                             onClick={handleSubServiceClick}
//                           >
//                             Amazon EKS Management Service
//                           </Link>
//                           {/* <p className="text-sm text-gray-700">
//                             We provide end-to-end AWS Managed Services.
//                           </p> */}
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md "
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/aws/hpc-migration"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               AWS HPC (High-performance Computing) Migration
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div className="p-2 border-l-2 border-purple-200">
//                     <button
//                       onClick={() => setIsAzureOpen(!isAzureOpen)}
//                       className="font-semibold text-purple-400 text-lg flex items-center"
//                     >
//                       Microsoft Azure
//                     </button>
//                     {/* <p className="text-sm text-gray-700">
//                       We provide end-to-end AWS Managed Services (AMS)
//                     </p> */}

//                     {isAzureOpen && (
//                       <div className="ml-4 mt-2 space-y-2">
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/azure/managed-services"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Azure Managed Services
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/azure/database-migration-service"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Azure Database Migration Service
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/azure/kubernetes-service-migration"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Azure Kubernetes Service (AKS) Migration
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/azure/site-recovery"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Azure Site Recovery (ASR)
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/azure/cost-management-optimization"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Cost Management & Optimization
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/azure/sentinel-migration"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Sentinel Migration
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/azure/hpc-migration"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               HPC (High-Performance Computing) Migration
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* Google Cloud Platform */}

//                   <div className="p-2 border-l-2 border-purple-200">
//                     <button
//                       onClick={() => setIsGoogleCloudOpen(!isGoogleCloudOpen)}
//                       className="font-semibold text-purple-400 text-lg flex items-center"
//                     >
//                       Google Cloud Platform
//                     </button>
//                     {/* <p className="text-sm text-gray-700">
//                       We provide end-to-end AWS Managed Services (AMS)
//                     </p> */}

//                     {isGoogleCloudOpen && (
//                       <div className="ml-4 mt-2 space-y-2">
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/gcp/managed-services"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Managed Services
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/gcp/cost-management"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Google Cost Management & Optimization
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/gcp/kubernetes-service"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Google Kubernetes Service (GKE) Migration
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/gcp/database-migration"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Google Database Migration Service
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/gcp/application-migration"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Google Application Migration Service
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/gcp/hpc-migration"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Google HPC (High-Performance Computing) Migration
//                               Service
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/*Red hat */}

//                   <div className="p-2 border-l-2 border-purple-200">
//                     <button
//                       onClick={() => setIsRedHat(!isRedHat)}
//                       className="font-semibold text-purple-400 text-lg flex items-center"
//                     >
//                       Red Hat Hybrid Cloud
//                     </button>
//                     {/* <p className="text-sm text-gray-700">
//                       We provide end-to-end AWS Managed Services (AMS)
//                     </p> */}

//                     {isRedHat && (
//                       <div className="ml-4 mt-2 space-y-2">
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/red-hat/openshift-managemnet"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Red Hat OpenShift Management
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/red-hat/multi-cluster-management"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Multi-Cluster Management
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/red-hat/enterprise-container-Registry"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Enterprise Container Registry
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/red-hat/openshift-virtualization"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               OpenShift Virtualization
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/red-hat/kubernetes-security"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Kunernetes Security
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* Education & Learning   */}
//                   <div className="p-2 border-l-2 border-purple-200">
//                     <button
//                       onClick={() => setIsEducation(!isEducation)}
//                       className="font-semibold text-purple-400 text-lg flex items-center"
//                     >
//                       Education & Learning
//                     </button>
//                     {/* <p className="text-sm text-gray-700">
//                       We provide end-to-end AWS Managed Services (AMS)
//                     </p> */}

//                     {isEducation && (
//                       <div className="ml-4 mt-2 space-y-2">
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/learning/microsoft-viva"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Microsoft Learning Pathways and Viva
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/learning/google-classroom"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Google Classroom and Assignments
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* BI & Automation   */}
//                   <div className="p-2 border-l-2 border-purple-200">
//                     <button
//                       onClick={() => setIsBIAutomation(!isBIAutomation)}
//                       className="font-semibold text-purple-400 text-lg flex items-center"
//                     >
//                       BI & Automation
//                     </button>
//                     {/* <p className="text-sm text-gray-700">
//                       We provide end-to-end AWS Managed Services (AMS)
//                     </p> */}

//                     {isBIAutomation && (
//                       <div className="ml-4 mt-2 space-y-2">
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/bi/looker-studio"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Google Looker Studio and AppSheet
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/bi/microsoft-azure-power-bi-power-apps"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Microsoft Azure Power BI and Power Apps
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide end-to-end AWS Managed Services.
//                             </p> */}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </li>

//             <li>
//               <button
//                 onClick={() => {
//                   setIsOpenSourceOpen(!isOpenSourceOpen);
//                 }}
//                 className="text-gray-800 hover:text-orange-500 border-b-0 hover:border-b-2 hover:border-orange-500 transition-colors px-1 py-1 flex items-center"
//               >
//                 OpenSource <ChevronDown size={16} className="ml-1" />
//               </button>

//               {isOpenSourceOpen && (
//                 <div ref={openSourceRef} className="ml-4 mt-2 space-y-2">
//                   <div className="p-2 border-l-2 border-purple-200">
//                     <button
//                       onClick={() => setIsKubernetes(!isKubernetes)}
//                       className="font-semibold text-purple-400 text-lg flex items-center"
//                     >
//                       Kubernetes
//                     </button>
//                     {/* <p className="text-sm text-gray-700">
//                       We provide End-to-end AWS managed services
//                     </p> */}

//                     {isKubernetes && (
//                       <div className="ml-4 mt-2 space-y-2">
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/kubernetes/container-orchestration"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Container Orchestration
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/kubernetes/serverless-event-driven"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Serverless / Event-Driven
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/kubernetes/service-mesh"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Service Mesh
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/kubernetes/virtualization"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Virtualization
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/kubernetes/machine-learning-ai"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Machine Learning and AI
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* Other Open Source services */}

//                   <div className="p-2 border-l-2 border-purple-200">
//                     <button
//                       onClick={() => setIsDefinedNetwork(!isDefinedNetwork)}
//                       className="font-semibold text-purple-400 text-lg flex items-center"
//                     >
//                       Software Defined Network
//                     </button>
//                     {/* <p className="text-sm text-gray-700">
//                       We provide enterprise-grade Kubernetes orchestration
//                     </p> */}

//                     {isDefinedNetwork && (
//                       <div className="ml-4 mt-2 space-y-2">
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/sdn/cilium"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Cilium
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/sdn/calico"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Calico
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div className="p-2 border-l-2 border-purple-200">
//                     <button
//                       onClick={() => setIsDevOps(!isDevOps)}
//                       className="font-semibold text-purple-400 text-lg flex items-center"
//                     >
//                       DevSecOps
//                     </button>
//                     {/* <p className="text-sm text-gray-700">
//                       End-to-end managed services
//                     </p> */}

//                     {isDevOps && (
//                       <div className="ml-4 mt-2 space-y-2">
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/devsecops/zap-dast"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               ZAP (DAST)
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/devsecops/sonarqube-sast"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Sonarqube (SAST)
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/devsecops/webscarab-iast"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               WebScarab (IAST)
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/devsecops/snyk-sca"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Snyk (SCA)
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/devsecops/kics-iac"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               KICS (IAC)
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/devsecops/jenkins-tekton-argocd"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Jenkins / Tekton / ArgoCD
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div className="p-2 border-l-2 border-purple-200">
//                     <button
//                       onClick={() => setIsDatabases(!isDatabases)}
//                       className="font-semibold text-purple-400 text-lg flex items-center"
//                     >
//                       Databases
//                     </button>
//                     {/* <p className="text-sm text-gray-700">
//                       End-to-end support for enterprises
//                     </p> */}

//                     {isDatabases && (
//                       <div className="ml-4 mt-2 space-y-2">
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/databases/redis"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Redis
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/databases/mariadb"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               MariaDB
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/databases/mongodb"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               MongoDB
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/databases/postgres"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Postgres
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/databases/cockroachdb"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               CockroachDB
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div className="p-2 border-l-2 border-purple-200">
//                     <button
//                       onClick={() => setIsApi(!isApi)}
//                       className="font-semibold text-purple-400 text-lg flex items-center"
//                     >
//                       API, Messaging & Streaming
//                     </button>
//                     {/* <p className="text-sm text-gray-700">
//                       Microsoft Learning Pathways and Microsoft Viva
//                     </p> */}

//                     {isApi && (
//                       <div className="ml-4 mt-2 space-y-2">
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/messaging/tyk"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Tyk
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/messaging/kong"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Kong
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/messaging/apache-kafka"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Apache Kafka
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/messaging/apach-mq"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Apach MQ
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div className="p-2 border-l-2 border-purple-200">
//                     <button
//                       onClick={() => setIsBigData(!isBigData)}
//                       className="font-semibold text-purple-400 text-lg flex items-center"
//                     >
//                       Big Data & Analytics
//                     </button>
//                     {/* <p className="text-sm text-gray-700">
//                       Power of data visualization and application development
//                     </p> */}

//                     {isBigData && (
//                       <div className="ml-4 mt-2 space-y-2">
//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/analytics/apache-ignite"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Apache Ignite
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/analytics/apache-iceberg"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Apache Iceberg
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/analytics/apache-spark"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Apache Spark
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/analytics/apache-airflow"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Apache Airflow
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>

//                         <div className="p-2 border-l-2 border-purple-100">
//                           <div
//                             className="hover:bg-gray-100 p-2 rounded-md"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             <Link
//                               href="/analytics/apache-debezium"
//                               className="text-purple-400 font-semibold text-lg"
//                             >
//                               Apache Debezium
//                             </Link>
//                             {/* <p className="text-sm text-gray-700">
//                               We provide End-to-end AWS managed services
//                             </p> */}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </li>

//             <li>
//               <Link
//                 href="/careers"
//                 className="text-gray-800 hover:text-orange-500 border-b-0 hover:border-b-2 hover:border-orange-500 transition-colors block py-2"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Careers
//               </Link>
//             </li>

//             <li className="pt-4 border-t border-gray-100 mt-2">
//               <Link
//                 href="/contact-us/"
//                 className="inline-block px-5 py-2 border border-1 border-gray-600 rounded text-gray-800 transition-all duration-300 ease-in-out
//                 hover:bg-orange-300 hover:shadow-lg hover:border-gray-800 hover:scale-105"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Contact Us
//               </Link>
//             </li>

//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Copy, Check } from "lucide-react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { MdOutlineSupportAgent } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);

  const [isAWSOpen, setIsAWSOpen] = useState(false);
  const [isOpenSourceOpen, setIsOpenSourceOpen] = useState(false);

  const [isAzureOpen, setIsAzureOpen] = useState(false);
  const [isGoogleCloudOpen, setIsGoogleCloudOpen] = useState(false);
  const [isRedHat, setIsRedHat] = useState(false);
  const [isEducation, setIsEducation] = useState(false);
  const [isBIAutomation, setIsBIAutomation] = useState(false);

  const [isKubernetes, setIsKubernetes] = useState(false);
  const [isDefinedNetwork, setIsDefinedNetwork] = useState(false);
  const [isDevOps, setIsDevOps] = useState(false);
  const [isDatabases, setIsDatabases] = useState(false);
  const [isApi, setIsApi] = useState(false);
  const [isBigData, setIsBigData] = useState(false);

  // Support dropdown state
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const openSourceRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  const handleServiceHover = (service: string) => {
    setActiveService(service);
  };

  const handleServiceClick = () => {
    setIsDropdownOpen((prev) => !prev);
    setIsOpenSourceOpen(false);
  };

  const handleOpenServiceClick = () => {
    setIsOpenSourceOpen((prev) => !prev);
    setIsDropdownOpen(false);
  };

  const handleSubServiceClick = () => {
    setIsDropdownOpen(false);
    setIsOpenSourceOpen(false);
  };

  // Copy to clipboard functions
  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        openSourceRef.current &&
        !openSourceRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setIsOpenSourceOpen(false);
      }

      if (
        openSourceRef.current &&
        !openSourceRef.current.contains(event.target as Node)
      ) {
        setIsOpenSourceOpen(false);
      }

      // Close support dropdown when clicking outside
      if (
        supportRef.current &&
        !supportRef.current.contains(event.target as Node)
      ) {
        setIsSupportOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const pathname = usePathname();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(true);
      return;
    }

    setIsDropdownOpen(true);
    setIsOpenSourceOpen(false);
  }, [initialLoad, pathname]);

  return (
    <header className="w-full bg-white shadow-sm py-4 border-b border-black/30">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-48">
              <Image
                src="/images/Mahity-logo.png"
                alt="MAHITY Logo"
                width={600}
                height={600}
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-12">
            <li>
              <Link
                href="/"
                className="text-gray-800 px-2 py-1 transition-colors duration-300 hover:text-orange-500 border-b-0 hover:border-b-2 hover:border-orange-500"
              >
                Home
              </Link>
            </li>

            <li
              className="relative"
              ref={dropdownRef as unknown as React.RefObject<HTMLLIElement>}
            >
              <button
                onClick={handleServiceClick}
                className="text-gray-800 transition-colors duration-300 hover:text-orange-500 border-b-0 hover:border-b-2 hover:border-orange-500"
              >
                Services
              </button>

              {isDropdownOpen && (
                <div className="absolute -left-28 mt-2 bg-gradient-to-b from-white to-purple-100 shadow-lg border rounded-md p-4 w-96 z-50">
                  <div className="w-full">
                    {/* Education & Learning */}
                    <div
                      className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
                        activeService === "ed" ? "bg-white" : ""
                      }`}
                      onMouseEnter={() => handleServiceHover("ed")}
                    >
                      <h3 className="font-semibold text-purple-400 text-xl flex items-center">
                        Education & Learning
                      </h3>
                    </div>

                    {/* BI & Automation */}

                    <div
                      className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
                        activeService === "bi" ? "bg-white" : ""
                      }`}
                      onMouseEnter={() => handleServiceHover("bi")}
                    >
                      <h3 className="font-semibold text-purple-400 text-xl flex items-center">
                        BI & Automation
                      </h3>
                    </div>

                    <div
                      className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
                        activeService === "aws" ? "bg-white" : ""
                      }`}
                      onMouseEnter={() => handleServiceHover("aws")}
                    >
                      <h1 className="font-semibold text-purple-400 text-xl flex items-center">
                        Amazon Web Services
                      </h1>
                    </div>

                    {/*  Red Hat Hybrid Cloud*/}

                    <div
                      className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
                        activeService === "redhat" ? "bg-white" : ""
                      }`}
                      onMouseEnter={() => handleServiceHover("redhat")}
                    >
                      <h3 className="font-semibold text-purple-400 text-xl flex items-center">
                        Red Hat Hybrid Cloud
                      </h3>
                    </div>

                    {/* Microsoft Azure */}
                    <div
                      className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
                        activeService === "azure" ? "bg-white" : ""
                      }`}
                      onMouseEnter={() => handleServiceHover("azure")}
                    >
                      <h3 className="font-semibold text-purple-400 text-xl flex items-center">
                        Microsoft Azure
                      </h3>
                    </div>

                    {/* Google Cloud Platform */}

                    <div
                      className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
                        activeService === "gcp" ? "bg-white" : ""
                      }`}
                      onMouseEnter={() => handleServiceHover("gcp")}
                    >
                      <h3 className="font-semibold text-purple-400 text-xl flex items-center">
                        Google Cloud Platform
                      </h3>
                    </div>
                  </div>

                  {/* Secondary Menu (Appears to the Right) */}

                  {activeService === "ed" && (
                    <div className="absolute top-0 left-full  w-96 bg-white shadow-md border rounded-md p-3 z-50">
                      <ul className="space-y-2">
                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/learning/microsoft-viva"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Microsoft Learning Pathways and Viva
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/learning/google-classroom"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Google Classroom and Assignments
                          </Link>
                        </div>
                      </ul>
                    </div>
                  )}

                  {activeService === "aws" && (
                    <div className="absolute top-0 left-full w-96 bg-white shadow-md border rounded-md p-3 z-50">
                      <ul className="space-y-2">
                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/aws/managed-service"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            AWS Managed Service
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/aws/database-migration-service"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            AWS Database Migration Service
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/aws/server-migration-service"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            AWS Server Migration Service
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/aws/application-migration-service"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            AWS Application Migration Service
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/aws/eks-management-service"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Amazon EKS Management Service
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/aws/hpc-migration"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            AWS HPC (High-performance Computing) Migration
                          </Link>
                        </div>
                      </ul>
                    </div>
                  )}

                  {activeService === "azure" && (
                    <div className="absolute top-0 left-full w-96 bg-white shadow-md border rounded-md p-3 z-50">
                      <ul className="space-y-2">
                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/azure/managed-services"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Azure Managed Services
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/azure/database-migration-service"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Azure Database Migration Service
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/azure/kubernetes-service-migration"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Azure Kubernetes Service (AKS) Migration
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/azure/site-recovery"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Azure Site Recovery (ASR)
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/azure/cost-management-optimization"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Cost Management & Optimization
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/azure/sentinel-migration"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Sentinel Migration
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/azure/hpc-migration"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            HPC (High-Performance Computing) Migration
                          </Link>
                        </div>
                      </ul>
                    </div>
                  )}

                  {activeService === "gcp" && (
                    <div className="absolute top-0 left-full w-96 bg-white shadow-md border rounded-md p-3 z-50">
                      <ul className="space-y-2">
                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/gcp/managed-services"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Managed Services
                          </Link>
                        </div>
                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/gcp/cost-management"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Google Cost Management & Optimization
                          </Link>
                        </div>
                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/gcp/kubernetes-service"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Google Kubernetes Service (GKE) Migration
                          </Link>
                        </div>
                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/gcp/database-migration"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Google Database Migration Service
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/gcp/application-migration"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Google Application Migration Service
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/gcp/hpc-migration"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Google HPC (High-Performance Computing) Migration
                            Service
                          </Link>
                        </div>
                      </ul>
                    </div>
                  )}

                  {activeService === "redhat" && (
                    <div className="absolute top-0 left-full  w-96 bg-white shadow-md border rounded-md p-3 z-50">
                      <ul className="space-y-2">
                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/red-hat/openshift-managemnet"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Red Hat OpenShift Management
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/red-hat/multi-cluster-management"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Multi-Cluster Management
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/red-hat/kubernetes-security"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Kubernetes Security
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/red-hat/enterprise-container-registry"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Enterprise Container Registry
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/red-hat/openshift-virtualization"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            OpenShift Virtualization
                          </Link>
                        </div>
                      </ul>
                    </div>
                  )}

                  {activeService === "education" && (
                    <div className="absolute top-0 left-full  w-96 bg-white shadow-md border rounded-md p-3 z-50">
                      <ul className="space-y-2">
                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <li className="text-purple-400 font-semibold text-lg">
                            Microsoft Learning Pathways and Viva
                          </li>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <li className="text-purple-400 font-semibold text-lg">
                            Google Classroom and Assignments
                          </li>
                        </div>
                      </ul>
                    </div>
                  )}

                  {activeService === "bi" && (
                    <div className="absolute top-0 left-full  w-96 bg-white shadow-md border rounded-md p-3 z-50">
                      <ul className="space-y-2">
                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/bi/looker-studio"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Google Looker Studio and AppSheet
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/bi/microsoft-azure-power-bi-power-apps"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Microsoft Azure Power BI and Power Apps
                          </Link>
                        </div>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </li>

            <li
              ref={openSourceRef as unknown as React.RefObject<HTMLLIElement>}
              className="relative"
            >
              <button
                onClick={handleOpenServiceClick}
                className="text-gray-800  transition-colors duration-300 hover:text-orange-500 border-b-0 hover:border-b-2 hover:border-orange-500"
              >
                OpenSource
              </button>

              {isOpenSourceOpen && (
                <div className="absolute -left-40 mt-2 bg-gradient-to-b from-white to-purple-100 shadow-lg border rounded-md p-4 w-96 z-50">
                  {/* Main OpenSource Menu */}
                  <div className="w-full">
                    {/* Kubernetes */}
                    <div
                      className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
                        activeService === "kubernetes" ? "bg-white" : ""
                      }`}
                      onMouseEnter={() => handleServiceHover("kubernetes")}
                    >
                      <div className="font-semibold text-purple-400 text-xl flex items-center">
                        Kubernetes
                      </div>
                    </div>

                    {/* Software Defined Network */}
                    <div
                      className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
                        activeService === "sdn" ? "bg-white" : ""
                      }`}
                      onMouseEnter={() => handleServiceHover("sdn")}
                    >
                      <div className="font-semibold text-purple-400 text-xl flex items-center">
                        Software Defined Network
                      </div>
                    </div>

                    {/* DevSecOps */}
                    <div
                      className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
                        activeService === "devsecops" ? "bg-white" : ""
                      }`}
                      onMouseEnter={() => handleServiceHover("devsecops")}
                    >
                      <h3 className="font-semibold text-purple-400 text-xl flex items-center">
                        DevSecOps
                      </h3>
                    </div>

                    {/* Databases */}
                    <div
                      className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
                        activeService === "databases" ? "bg-white" : ""
                      }`}
                      onMouseEnter={() => handleServiceHover("databases")}
                    >
                      <h3 className="font-semibold text-purple-400 text-xl flex items-center">
                        Databases
                      </h3>
                    </div>

                    {/* API, Messaging & Streaming */}
                    <div
                      className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
                        activeService === "api" ? "bg-white" : ""
                      }`}
                      onMouseEnter={() => handleServiceHover("api")}
                    >
                      <h3 className="font-semibold text-purple-400 text-xl flex items-center">
                        API, Messaging & Streaming
                      </h3>
                    </div>

                    {/* Big Data & Analytics */}
                    <div
                      className={`hover:bg-white p-2 rounded-md my-2 cursor-pointer ${
                        activeService === "bigdata" ? "bg-white" : ""
                      }`}
                      onMouseEnter={() => handleServiceHover("bigdata")}
                    >
                      <h3 className="font-semibold text-purple-400 text-xl flex items-center">
                        Big Data & Analytics
                      </h3>
                    </div>
                  </div>

                  {/* Secondary Menu for Kubernetes (Appears to the Right) */}
                  {activeService === "kubernetes" && (
                    <div className="absolute top-0 left-full  w-96 bg-white shadow-md border rounded-md p-3 z-50">
                      <ul className="space-y-2">
                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/kubernetes/container-orchestration"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Container Orchestration
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/kubernetes/serverless-event-driven"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Serverless / Event-Driven
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/kubernetes/service-mesh"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Service Mesh
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/kubernetes/virtualization"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Virtualization
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/kubernetes/machine-learning-ai"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Machine Learning and AI
                          </Link>
                        </div>
                      </ul>
                    </div>
                  )}

                  {activeService === "sdn" && (
                    <div className="absolute top-0 left-full  w-96 bg-white shadow-md border rounded-md p-3 z-50">
                      <ul className="space-y-2">
                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/sdn/calico"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Calico
                          </Link>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/sdn/cilium"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Cilium
                          </Link>
                        </div>
                      </ul>
                    </div>
                  )}

                  {activeService === "devsecops" && (
                    <div className="absolute top-0 left-full  w-96 bg-white shadow-md border rounded-md p-3 z-50">
                      <ul className="space-y-2">
                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/devsecops/zap-dast"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            ZAP (DAST)
                          </Link>
                        </div>

                        <div className="">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/devsecops/sonarqube-sast"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              Sonarqube (SAST)
                            </Link>
                          </div>
                        </div>

                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/devsecops/webscarab-iast"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              WebScarab (IAST)
                            </Link>
                          </div>
                        </div>

                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/devsecops/snyk-sca"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              Snyk (SCA)
                            </Link>
                          </div>
                        </div>

                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/devsecops/kics-iac"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              KICS (IAC)
                            </Link>
                          </div>
                        </div>

                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/devsecops/jenkins-tekton-argocd"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              Jenkins / Tekton / ArgoCD
                            </Link>
                          </div>
                        </div>
                      </ul>
                    </div>
                  )}

                  {activeService === "databases" && (
                    <div className="absolute top-0 left-full w-96 bg-white shadow-md border rounded-md p-3 z-50">
                      <ul className="space-y-2">
                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/databases/redis"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              Redis
                            </Link>
                          </div>
                        </div>

                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/databases/mariadb"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              MariaDB
                            </Link>
                          </div>
                        </div>

                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/databases/mongodb"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              MongoDB
                            </Link>
                          </div>
                        </div>

                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/databases/postgres"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              Postgres
                            </Link>
                          </div>
                        </div>

                        <div className="hover:bg-gray-100 rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/databases/cockroachdb"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              CockroachDB
                            </Link>
                          </div>
                        </div>
                      </ul>
                    </div>
                  )}

                  {activeService === "api" && (
                    <div className="absolute top-0 left-full w-96 bg-white shadow-md border rounded-md p-3 z-50">
                      <ul className="space-y-2">
                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/messaging/tyk"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              Tyk
                            </Link>
                          </div>
                        </div>

                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/messaging/kong"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              Kong
                            </Link>
                          </div>
                        </div>

                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/messaging/apache-kafka"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              Apache Kafka
                            </Link>
                          </div>
                        </div>

                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/messaging/apach-mq"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              Apach MQ
                            </Link>
                          </div>
                        </div>
                      </ul>
                    </div>
                  )}

                  {activeService === "bigdata" && (
                    <div className="absolute top-0 left-full w-96 bg-white shadow-md border rounded-md p-3 z-50">
                      <ul className="space-y-2">
                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/analytics/apache-ignite"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              Apache Ignite
                            </Link>
                          </div>
                        </div>

                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/analytics/apache-iceberg"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              Apache Iceberg
                            </Link>
                          </div>
                        </div>

                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/analytics/apache-spark"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              Apache Spark
                            </Link>
                          </div>
                        </div>

                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/analytics/apache-airflow"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              Apache Airflow
                            </Link>
                          </div>
                        </div>

                        <div className="hover:bg-gray-100  rounded-md">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <Link
                              href="/analytics/apache-debezium"
                              className="text-purple-400 font-semibold text-lg"
                              onClick={handleSubServiceClick}
                            >
                              Apache Debezium
                            </Link>
                          </div>
                        </div>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </li>

            <li>
              <Link
                href="/careers"
                className="text-gray-800 hover:text-orange-500 border-b-0 hover:border-b-2 hover:border-orange-500 transition-colors px-1 py-1"
              >
                Careers
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center space-x-6 -mr-6">
          <Link
            href="/contact-us/"
            className="px-5 py-2 border border-gray-300 rounded-sm bg-orange-500 hover:bg-orange-600 hover:text-white text-white transition-transforms hover:scale-110"
          >
            Contact Us
          </Link>

          {/* Support Dropdown */}
          <div className="relative" ref={supportRef}>
            <button
              onClick={() => setIsSupportOpen(!isSupportOpen)}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-orange-500 transition-all duration-300 hover:scale-110 group"
              title="Support"
            >
              <MdOutlineSupportAgent className="w-9 h-9 text-gray-700 group-hover:text-white/70 transition-colors" />
            </button>

            {isSupportOpen && (
              <div className="absolute -right-10 mt-2 w-80 sm:w-80 max-w-[calc(100vw-2rem)] bg-white shadow-lg border rounded-md p-3 sm:p-4 z-[9999] transform sm:translate-x-0 -translate-x-[calc(100%-3rem)]">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  Contact Support
                </h3>

                {/* Email Section */}
                <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-gray-50 rounded-md">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <p className="text-xs text-gray-500 mb-1">Email</p>
                      <p className="text-xs sm:text-sm font-medium text-gray-800 break-all">
                        support@mahity.com
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard("support@mahity.com", "email")
                      }
                      className="p-1.5 sm:p-2 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                      title="Copy email"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone Section */}
                <div className="p-2 sm:p-3 bg-gray-50 rounded-md">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 mb-1">Phone</p>
                      <p className="text-xs sm:text-sm font-medium text-gray-800">
                        8291624489
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard("8291624489", "phone")}
                      className="p-1.5 sm:p-2 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                      title="Copy phone number"
                    >
                      {copiedPhone ? (
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ------- Mobile Menu ------- */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href="/"
                className="text-gray-800 hover:text-orange-500 border-b-0 hover:border-b-2 hover:border-orange-500 transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <button
                onClick={handleServiceClick}
                className="text-gray-800 hover:text-orange-500 border-b-0 hover:border-b-2 hover:border-orange-500 transition-colors px-1 py-1 flex items-center"
              >
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              {isDropdownOpen && (
                <div ref={dropdownRef} className="ml-4 mt-2 space-y-2">
                  <div className="p-2 border-l-2 border-purple-200">
                    <button
                      onClick={() => setIsAWSOpen(!isAWSOpen)}
                      className="font-semibold text-purple-400 text-lg flex items-center"
                    >
                      Amazon Web Service
                    </button>

                    {isAWSOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        <div className="p-2 border-l-2 border-purple-100">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <div onClick={() => setIsMenuOpen(false)}>
                              <Link
                                href="/aws/managed-service"
                                className="text-purple-400 font-semibold text-lg"
                              >
                                AWS Managed Service
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="p-2 border-l-2 border-purple-100">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <div onClick={() => setIsMenuOpen(false)}>
                              <Link
                                href="/aws/database-migration-service"
                                className="text-purple-400 font-semibold text-lg"
                              >
                                AWS Database Migration Service
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="p-2 border-l-2 border-purple-100">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <div onClick={() => setIsMenuOpen(false)}>
                              <Link
                                href="/aws/server-migration-service"
                                className="text-purple-400 font-semibold text-lg"
                              >
                                AWS Server Migration Service
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="p-2 border-l-2 border-purple-100">
                          <div className="hover:bg-gray-100 p-2 rounded-md">
                            <div onClick={() => setIsMenuOpen(false)}>
                              <Link
                                href="/aws/application-migration-service"
                                className="text-purple-400 font-semibold text-lg"
                              >
                                AWS Application Migration Service
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="hover:bg-gray-100 p-2 rounded-md">
                          <Link
                            href="/aws/eks-management-service"
                            className="text-purple-400 font-semibold text-lg"
                            onClick={handleSubServiceClick}
                          >
                            Amazon EKS Management Service
                          </Link>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md "
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/aws/hpc-migration"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              AWS HPC (High-performance Computing) Migration
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-2 border-l-2 border-purple-200">
                    <button
                      onClick={() => setIsAzureOpen(!isAzureOpen)}
                      className="font-semibold text-purple-400 text-lg flex items-center"
                    >
                      Microsoft Azure
                    </button>

                    {isAzureOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/azure/managed-services"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Azure Managed Services
                            </Link>
                          </div>
                        </div>
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/azure/database-migration-service"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Azure Database Migration Service
                            </Link>
                          </div>
                        </div>
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/azure/kubernetes-service-migration"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Azure Kubernetes Service (AKS) Migration
                            </Link>
                          </div>
                        </div>
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/azure/site-recovery"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Azure Site Recovery (ASR)
                            </Link>
                          </div>
                        </div>
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/azure/cost-management-optimization"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Cost Management & Optimization
                            </Link>
                          </div>
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/azure/sentinel-migration"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Sentinel Migration
                            </Link>
                          </div>
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/azure/hpc-migration"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              HPC (High-Performance Computing) Migration
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Google Cloud Platform */}

                  <div className="p-2 border-l-2 border-purple-200">
                    <button
                      onClick={() => setIsGoogleCloudOpen(!isGoogleCloudOpen)}
                      className="font-semibold text-purple-400 text-lg flex items-center"
                    >
                      Google Cloud Platform
                    </button>

                    {isGoogleCloudOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/gcp/managed-services"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Managed Services
                            </Link>
                          </div>
                        </div>
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/gcp/cost-management"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Google Cost Management & Optimization
                            </Link>
                          </div>
                        </div>
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/gcp/kubernetes-service"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Google Kubernetes Service (GKE) Migration
                            </Link>
                          </div>
                        </div>
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/gcp/database-migration"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Google Database Migration Service
                            </Link>
                          </div>
                        </div>
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/gcp/application-migration"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Google Application Migration Service
                            </Link>
                          </div>
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/gcp/hpc-migration"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Google HPC (High-Performance Computing) Migration
                              Service
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/*Red hat */}

                  <div className="p-2 border-l-2 border-purple-200">
                    <button
                      onClick={() => setIsRedHat(!isRedHat)}
                      className="font-semibold text-purple-400 text-lg flex items-center"
                    >
                      Red Hat Hybrid Cloud
                    </button>

                    {isRedHat && (
                      <div className="ml-4 mt-2 space-y-2">
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/red-hat/openshift-managemnet"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Red Hat OpenShift Management
                            </Link>
                          </div>
                        </div>
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/red-hat/multi-cluster-management"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Multi-Cluster Management
                            </Link>
                          </div>
                        </div>
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/red-hat/enterprise-container-Registry"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Enterprise Container Registry
                            </Link>
                          </div>
                        </div>
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/red-hat/openshift-virtualization"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              OpenShift Virtualization
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/red-hat/kubernetes-security"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Kunernetes Security
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Education & Learning   */}
                  <div className="p-2 border-l-2 border-purple-200">
                    <button
                      onClick={() => setIsEducation(!isEducation)}
                      className="font-semibold text-purple-400 text-lg flex items-center"
                    >
                      Education & Learning
                    </button>

                    {isEducation && (
                      <div className="ml-4 mt-2 space-y-2">
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/learning/microsoft-viva"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Microsoft Learning Pathways and Viva
                            </Link>
                          </div>
                        </div>
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/learning/google-classroom"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Google Classroom and Assignments
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* BI & Automation   */}
                  <div className="p-2 border-l-2 border-purple-200">
                    <button
                      onClick={() => setIsBIAutomation(!isBIAutomation)}
                      className="font-semibold text-purple-400 text-lg flex items-center"
                    >
                      BI & Automation
                    </button>

                    {isBIAutomation && (
                      <div className="ml-4 mt-2 space-y-2">
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/bi/looker-studio"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Google Looker Studio and AppSheet
                            </Link>
                          </div>
                        </div>
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/bi/microsoft-azure-power-bi-power-apps"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Microsoft Azure Power BI and Power Apps
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>

            <li>
              <button
                onClick={() => {
                  setIsOpenSourceOpen(!isOpenSourceOpen);
                }}
                className="text-gray-800 hover:text-orange-500 border-b-0 hover:border-b-2 hover:border-orange-500 transition-colors px-1 py-1 flex items-center"
              >
                OpenSource <ChevronDown size={16} className="ml-1" />
              </button>

              {isOpenSourceOpen && (
                <div ref={openSourceRef} className="ml-4 mt-2 space-y-2">
                  <div className="p-2 border-l-2 border-purple-200">
                    <button
                      onClick={() => setIsKubernetes(!isKubernetes)}
                      className="font-semibold text-purple-400 text-lg flex items-center"
                    >
                      Kubernetes
                    </button>

                    {isKubernetes && (
                      <div className="ml-4 mt-2 space-y-2">
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/kubernetes/container-orchestration"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Container Orchestration
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/kubernetes/serverless-event-driven"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Serverless / Event-Driven
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/kubernetes/service-mesh"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Service Mesh
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/kubernetes/virtualization"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Virtualization
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/kubernetes/machine-learning-ai"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Machine Learning and AI
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Other Open Source services */}

                  <div className="p-2 border-l-2 border-purple-200">
                    <button
                      onClick={() => setIsDefinedNetwork(!isDefinedNetwork)}
                      className="font-semibold text-purple-400 text-lg flex items-center"
                    >
                      Software Defined Network
                    </button>

                    {isDefinedNetwork && (
                      <div className="ml-4 mt-2 space-y-2">
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/sdn/cilium"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Cilium
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/sdn/calico"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Calico
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-2 border-l-2 border-purple-200">
                    <button
                      onClick={() => setIsDevOps(!isDevOps)}
                      className="font-semibold text-purple-400 text-lg flex items-center"
                    >
                      DevSecOps
                    </button>

                    {isDevOps && (
                      <div className="ml-4 mt-2 space-y-2">
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/devsecops/zap-dast"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              ZAP (DAST)
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/devsecops/sonarqube-sast"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Sonarqube (SAST)
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/devsecops/webscarab-iast"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              WebScarab (IAST)
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/devsecops/snyk-sca"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Snyk (SCA)
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/devsecops/kics-iac"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              KICS (IAC)
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/devsecops/jenkins-tekton-argocd"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Jenkins / Tekton / ArgoCD
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-2 border-l-2 border-purple-200">
                    <button
                      onClick={() => setIsDatabases(!isDatabases)}
                      className="font-semibold text-purple-400 text-lg flex items-center"
                    >
                      Databases
                    </button>

                    {isDatabases && (
                      <div className="ml-4 mt-2 space-y-2">
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/databases/redis"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Redis
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/databases/mariadb"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              MariaDB
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/databases/mongodb"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              MongoDB
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/databases/postgres"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Postgres
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/databases/cockroachdb"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              CockroachDB
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-2 border-l-2 border-purple-200">
                    <button
                      onClick={() => setIsApi(!isApi)}
                      className="font-semibold text-purple-400 text-lg flex items-center"
                    >
                      API, Messaging & Streaming
                    </button>

                    {isApi && (
                      <div className="ml-4 mt-2 space-y-2">
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/messaging/tyk"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Tyk
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/messaging/kong"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Kong
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/messaging/apache-kafka"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Apache Kafka
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/messaging/apach-mq"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Apach MQ
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-2 border-l-2 border-purple-200">
                    <button
                      onClick={() => setIsBigData(!isBigData)}
                      className="font-semibold text-purple-400 text-lg flex items-center"
                    >
                      Big Data & Analytics
                    </button>

                    {isBigData && (
                      <div className="ml-4 mt-2 space-y-2">
                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/analytics/apache-ignite"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Apache Ignite
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/analytics/apache-iceberg"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Apache Iceberg
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/analytics/apache-spark"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Apache Spark
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/analytics/apache-airflow"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Apache Airflow
                            </Link>
                          </div>
                        </div>

                        <div className="p-2 border-l-2 border-purple-100">
                          <div
                            className="hover:bg-gray-100 p-2 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              href="/analytics/apache-debezium"
                              className="text-purple-400 font-semibold text-lg"
                            >
                              Apache Debezium
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link
                href="/careers"
                className="text-gray-800 hover:text-orange-500 border-b-0 hover:border-b-2 hover:border-orange-500 transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
            </li>

            <li className="pt-4 border-t border-gray-100 mt-2">
              <div className="flex items-center gap-6">
                <Link
                  href="/contact-us/"
                  className="inline-block px-5 py-2 border border-1 border-gray-600 rounded text-gray-800 transition-all duration-300 ease-in-out 
      hover:bg-orange-300 hover:shadow-lg hover:border-gray-800 hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>

                {/* Support Dropdown for Mobile */}
                <div className="relative">
                  <button
                    onClick={() => setIsSupportOpen(!isSupportOpen)}
                    className="flex px-1 py-1 items-center justify-center text-gray-800 border border-1 border-gray-600 rounded-full hover:text-orange-500 transition-colors"
                    title="Support"
                  >
                    <MdOutlineSupportAgent className="w-8 h-8" />
                  </button>

                  {isSupportOpen && (
                    <div className="fixed left-4 right-4 mt-2 bg-white shadow-lg border rounded-md p-3 z-[9999] max-w-sm mx-auto">
                      <h3 className="text-base font-semibold text-gray-800 mb-2">
                        Contact Support
                      </h3>

                      {/* Email Section */}
                      <div className="mb-3 p-2 bg-gray-50 rounded-md">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0 overflow-hidden">
                            <p className="text-xs text-gray-500 mb-1">Email</p>
                            <p className="text-xs font-medium text-gray-800 break-all">
                              support@mahity.com
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              copyToClipboard("support@mahity.com", "email")
                            }
                            className="p-1.5 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                            title="Copy email"
                          >
                            {copiedEmail ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4 text-gray-600" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Phone Section */}
                      <div className="p-2 bg-gray-50 rounded-md">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-gray-500 mb-1">Phone</p>
                            <p className="text-xs font-medium text-gray-800">
                              8291624489
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              copyToClipboard("8291624489", "phone")
                            }
                            className="p-1.5 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                            title="Copy phone number"
                          >
                            {copiedPhone ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4 text-gray-600" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
