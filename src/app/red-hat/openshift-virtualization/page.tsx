import Image from "next/image";
export default function Home() {
  const serviceCards = [
    {
      title: "OpenShift Virtualization Deployment & Configuration  ",
      isHighlighted: false,
      items: [
        "Enterprise-Grade Deployment – Set up OpenShift Virtualization on on-prem or cloud environments. ",
        "Hybrid & Multi-Cloud Integration – Support for AWS, Azure, GCP, and private cloud infrastructures. ",
        "Networking & Storage Configuration – Optimize performance with OpenShift SDN, Multus, and persistent storage.  ",
        "High Availability & Disaster Recovery – Architect VMs for failover, redundancy, and business continuity.  ",
      ],
    },
    {
      title: " VM Migration & Modernization  ",
      isHighlighted: true,
      items: [
        "VMware to OpenShift Migration – Assess, plan, and migrate VMs from VMware vSphere to OpenShift Virtualization. ",
        "RHV & KVM Migration – Migrate workloads from Red Hat Virtualization and KVM-based environments.  ",
        "Legacy VM Modernization – Refactor applications to leverage containerization while keeping legacy VMs operational. ",
        "Automated Migration Tools – Utilize OpenShift Migration Toolkit for Virtualization (MTV) for seamless transitions.  ",
      ],
    },
    {
      title: "  Virtual Machine Lifecycle Management  ",
      isHighlighted: false,
      items: [
        "VM Provisioning & Orchestration – Automate VM creation, scaling, and management using OpenShift.  ",
        "Live Migration & Failover – Ensure workload continuity with live VM migration and automated failover strategies.   ",
        "Policy-Based Automation – Define scaling, scheduling, and workload placement policies.  ",
        "Monitoring & Performance Tuning – Utilize Prometheus, Grafana, and OpenShift Logging for VM health monitoring. ",
      ],
    },
    {
      title: "  Security & Compliance for Virtualized Workloads  ",
      isHighlighted: false,
      items: [
        "Role-Based Access Control (RBAC) – Restrict access and permissions for VM management.   ",
        "Network Security & Isolation – Implement OpenShift SDN, service mesh, and firewall rules for VM traffic control.   ",
        "Compliance & Audit Readiness – Ensure adherence to PCI-DSS, HIPAA, GDPR, and other regulatory frameworks. ",
        "VM Image Security & Scanning – Harden VM images and enforce security policies with OpenSCAP and Clair.  ",
      ],
    },
    {
      title: " Performance Optimization & Cost Efficiency  ",
      isHighlighted: false,
      items: [
        "Resource Optimization & Rightsizing – Optimize VM CPU, memory, and storage allocation.   ",
        "Automated Scaling & Load Balancing – Dynamically scale VMs based on workload demand. ",
        "Cost Reduction Strategies – Reduce licensing costs by consolidating VMs onto OpenShift. ",
        "Storage Optimization – Use persistent storage with OpenShift Data Foundation for enhanced performance.  ",
      ],
    },
    {
      title: "DevOps & CI/CD Integration  ",
      isHighlighted: false,
      items: [
        " VMs in CI/CD Pipelines – Enable DevOps teams to deploy VMs as part of Kubernetes-native CI/CD workflows. ",
        "GitOps-Based VM Deployment – Manage VM infrastructure using ArgoCD and OpenShift GitOps.  ",
        "Hybrid Workloads Support – Run containerized applications alongside virtualized workloads for greater flexibility.  ",
        "Self-Service VM Provisioning – Empower developers with automated VM lifecycle management. ",
      ],
    },
  ];

  const supportedWorkloads = [
    " Legacy Enterprise Applications – Run traditional VMs alongside modern cloud-native workloads.",
    "Hybrid & Multi-Cloud Deployments – Manage workloads across AWS, Azure, GCP, and on-prem environments. ",
    " Dev/Test Environments – Provide isolated VM instances for development and testing.",
    "Database & Stateful Applications – Support for high-performance databases and transactional applications.",
    " AI/ML & Data Analytics – Run AI workloads requiring GPU acceleration within virtualized environments.",
    " Edge Computing & Telco Workloads – Deploy virtualized network functions (VNFs) and telco applications.   ",
  ];

  const services = [
    {
      title: "Red Hat OpenShift Management ",
      icon: "/images/service_10.png",
      link: "/red-hat/openShift-virtualization",
    },
    {
      title: "Multi-Cluster Management ",
      icon: "/images/Redhat_12.png",
      link: "/red-hat/multi-cluster-management ",
    },
    {
      title: "Kunernetes Security",
      icon: "/images/Redhat_12.png",
      link: "/red-hat/kunernetes-security",
    },
    {
      title: "Enterprise Container Registry",
      icon: "/images/Redhat_12.png",
      link: "/red-hat/enterprise-container-registry",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div
        className="w-full py-28 bg-orange-600 px-8 relative overflow-hidden bg-no-repeat bg-center"
        style={{
          backgroundColor: "",
          backgroundImage: "url('/images/Redhat_1.png')",
          backgroundSize: "30%",
          backgroundPosition: "left center",
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-white text-sm mb-2">
            Red Hat OpenShift Virtualization Services
          </p>
          <h1 className="text-white font-bold text-4xl mb-2">
            OpenShift Virtualization
          </h1>
          <div className="relative">
            <h2 className="text-white text-8xl font-bold opacity-20">
              Services
            </h2>
          </div>
        </div>

        {/* Dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Key Service Propositions */}
      <div className="max-w-6xl mx-auto py-20 pt-32 px-8">
        <h2 className="text-3xl text-gray-700 text-center font-medium mb-16">
          Key Service Propositions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fully Managed OpenShift */}
          <div className="text-center hover:bg-red-200 rounded-lg p-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full  flex items-center justify-center border-2 border-red-300">
              <Image
                src="/images/Redhat_7.png"
                alt="Fully Managed Icon"
                width={450}
                height={300}
                className="w-10 h-10"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">
              {" "}
              Unified Platform for VMs & Containers{" "}
            </h3>
            <p className="text-gray-600 text-sm">
              Run virtual machines and containers side by side in OpenShift.
            </p>
          </div>

          {/* Multi-Cloud & Hybrid Support */}
          <div className="text-center hover:bg-red-200 rounded-lg p-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full  flex items-center justify-center border-2 border-red-300">
              <Image
                src="/images/Redhat_6.png"
                alt="Multi-Cloud Icon"
                width={450}
                height={300}
                className="w-10 h-10 filter invert brightness-160 sepia"
                style={{
                  filter:
                    "invert(47%) sepia(91%) saturate(800%) hue-rotate(-10deg)",
                }}
              />
            </div>
            <h3 className="font-bold text-lg mb-2">Seamless VM Migration</h3>
            <p className="text-gray-600 text-sm">
              Move workloads from traditional hypervisors like VMware, KVM, and
              Red Hat Virtualization (RHV).
            </p>
          </div>

          {/* Security & Compliance */}
          <div className="text-center hover:bg-red-200 rounded-lg p-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full  flex items-center justify-center border-2 border-red-300">
              <Image
                src="/images/Redhat_5.png"
                alt="Security Icon"
                width={450}
                height={300}
                className="w-10 h-10"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">
              Multi-Cloud & Hybrid Deployment{" "}
            </h3>
            <p className="text-gray-600 text-sm">
              Deploy OpenShift Virtualization across on-prem, private, and
              public clouds.
            </p>
          </div>

          {/* 24/7 Monitoring & Support */}
          <div className="text-center hover:bg-red-200 rounded-lg p-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full  flex items-center justify-center border-2 border-red-300">
              <Image
                src="/images/Redhat_2.png"
                alt="Monitoring Icon"
                width={450}
                height={300}
                className="w-10 h-10"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">
              Automated Operations & Scaling
            </h3>
            <p className="text-gray-600 text-sm">
              Use Kubernetes-native automation to scale VMs dynamically.
            </p>
          </div>

          {/* Optimized Performance */}
          <div className="text-center hover:bg-red-200 rounded-lg p-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full  flex items-center justify-center border-2 border-red-300">
              <Image
                src="/images/Redhat_3.png"
                alt="Performance Icon"
                width={450}
                height={300}
                className="w-10 h-10 "
              />
            </div>
            <h3 className="font-bold text-lg mb-2">
              Enhanced Security & Compliance{" "}
            </h3>
            <p className="text-gray-600 text-sm">
              Role-based access control (RBAC), network policies, and workload
              isolation.
            </p>
          </div>

          {/* DevOps & CI/CD Integration */}
          <div className="text-center hover:bg-red-200 rounded-lg p-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full  flex items-center justify-center border-2 border-red-300">
              <Image
                src="/images/Redhat_4.png"
                alt="DevOps Icon"
                width={450}
                height={300}
                className="w-10 h-10"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">
              Optimized Performance & Cost Efficiency
            </h3>
            <p className="text-gray-600 text-sm">
              Reduce licensing costs and hardware dependencies.
            </p>
          </div>

          <div className="text-center hover:bg-red-200 rounded-lg p-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full  flex items-center justify-center border-2 border-red-300">
              <Image
                src="/images/Redhat_4.png"
                alt="DevOps Icon"
                width={450}
                height={300}
                className="w-10 h-10"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">
              24/7 Monitoring & Support
            </h3>
            <p className="text-gray-600 text-sm">
              Proactive monitoring, troubleshooting, and lifecycle management.
            </p>
          </div>
        </div>
      </div>

      {/* Service Offerings */}
      <div
        className="max-w-6xl mx-auto pb-16 px-8 relative flex items-center justify-center min-h-[500px] bg-no-repeat bg-right"
        style={{
          backgroundImage: "url('/images/Redhat_8.png')",
          backgroundSize: "500px 600px",
          backgroundPosition: "right top -100px",
        }}
      >
        <div className="md:w-2/3 text-center bg-opacity-80 p-8">
          <h2 className="text-5xl text-gray-700 font-medium mb-8">
            Service Offerings
          </h2>
          <p className="text-gray-600 mb-6">
            Our Red Hat OpenShift Management Services ensure seamless
            operations,
            <br />
            security, and performance for your OpenShift environments. Below is
            a detailed
            <br />
            breakdown of our service offerings.
          </p>
        </div>
      </div>

      {/* cards section */}

      <div className="min-h-screen ">
        {/* Service Cards Grid */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className={`border-2 rounded-lg overflow-hidden hover:bg-red-400 hover:text-white  `}
              >
                {/* Card Header */}
                <div className="p-4  ">
                  <div className="flex flex-col  mb-3">
                    <div className="w-14 h-14 rounded-full border-2  border-black flex items-center justify-center">
                      <Image
                        src="/images/Redhat_9.png"
                        alt="Icon"
                        width={450}
                        height={300}
                        className="w-8 h-8 "
                      />
                    </div>
                    <h3 className="mt-2 font-medium text-lg ">{card.title}</h3>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-3 ">
                    {card.items.map((item, itemIndex) => {
                      const [title, description] = item.split(" – ");
                      return (
                        <div key={itemIndex} className="text-sm">
                          <p className={`font-semibold `}>{title} –</p>
                          <p className="">{description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Workloads Section */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:w-2/4 mb-6 md:mb-10">
              <Image
                src="/images/Redhat_10.png"
                alt="Data visualization"
                width={450}
                height={300}
                className="w-full max-w-md"
              />
            </div>
            <div className="md:w-3/4 md:pl-12 ">
              <h2 className="text-3xl font-medium text-gray-700 mb-8">
                Supported Workloads
              </h2>

              {/* <div >
                {supportedWorkloads.map((workload, index) => {
                  const [title, description] = workload.split(" – ");
                  return (
                    <div
                      key={index}
                      className="flex hover:bg-red-200 p-3 rounded-lg"
                    >
                      <div className="flex-shrink-0 text-red-500 mr-2 ">
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">
                          {title}
                        </span>
                        <span className="text-gray-600"> – {description}</span>
                      </div>
                    </div>
                  );
                })}
              </div> */}

              <div>
                {supportedWorkloads.map((workload, index) => {
                  if (!workload) return null;

                  const parts = workload.split(" – ");
                  const title = parts[0] || "Unknown Title";
                  const description = parts[1] || "";

                  return (
                    <div
                      key={index}
                      className="flex hover:bg-red-200 p-3 rounded-lg"
                    >
                      <div className="flex-shrink-0 text-red-500 mr-2">
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">
                          {title}
                        </span>
                        {description && (
                          <span className="text-gray-600">
                            {" "}
                            – {description}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* similar service we provide  */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-700 mb-16">
            Similar Services We provide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <a key={index} href={service.link} className="no-underline">
                <div
                  style={{ minHeight: "190px" }}
                  className="rounded-xl shadow-2xl border border-gray-100 p-10 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-gray-200 cursor-pointer"
                >
                  <div className="mb-6">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={450}
                      height={300}
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-center text-gray-800">
                    <div className="font-medium">{service.title}</div>
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
