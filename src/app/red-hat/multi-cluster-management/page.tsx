import Image from "next/image";
export default function Home() {
  const serviceCards = [
    {
      title: "Multi-Cluster Deployment & Configuration ",
      isHighlighted: false,
      items: [
        "Cluster Provisioning & Lifecycle Management – Automated deployment and scaling of Kubernetes/OpenShift clusters. ",
        "Hybrid & Multi-Cloud Integration – Managing OpenShift clusters across AWS, Azure, GCP, VMware, and bare metal. ",
        "Networking & Service Mesh Configuration – Implementing multi-cluster networking with OpenShift Service Mesh and Submariner. ",
        "Multi-Cluster CI/CD Integration – Automating deployments across clusters with GitOps and DevSecOps best practices. ",
      ],
    },
    {
      title: "Centralized Cluster Operations & Monitoring ",
      isHighlighted: true,
      items: [
        "Unified Console for Multi-Cluster Management – Single-pane-of-glass visibility across all Kubernetes/OpenShift clusters. ",
        "Health Monitoring & Auto-Healing – Proactive identification and resolution of cluster issues. ",
        "Cluster Scaling & Optimization – Automatic scaling of clusters based on workload demand.",
        "Logging & Observability – Implementing OpenShift Logging, Prometheus, and Grafana for end-to-end monitoring. ",
      ],
    },
    {
      title: "Policy-Driven Governance & Compliance ",
      isHighlighted: false,
      items: [
        "Security Policy Enforcement – Define and enforce RBAC, network policies, and compliance rules across all clusters. ",
        "Automated Policy Deployment – Using OpenShift Gatekeeper and Kyverno for policy enforcement. ",
        "Compliance & Risk Management – Ensuring alignment with industry regulations such as PCI-DSS, HIPAA, and GDPR. ",
        "Audit & Access Control Management – Centralized audit logs and authentication for all clusters",
      ],
    },
    {
      title: "Application Lifecycle Management Across Clusters ",
      isHighlighted: false,
      items: [
        "Multi-Cluster Application Deployment – Deploy applications consistently across multiple environments. ",
        "GitOps-Based Deployment Strategies – Automating app rollouts using ArgoCD and OpenShift GitOps. ",
        "Application Resiliency & Failover – High availability and disaster recovery strategies for applications.  ",
        "Service Discovery & Load Balancing – Implementing Istio and OpenShift Service Mesh for cross-cluster traffic management. ",
      ],
    },
    {
      title: "Disaster Recovery & Business Continuity ",
      isHighlighted: false,
      items: [
        "Cross-Cluster Backup & Recovery – Implementing Velero and OpenShift API for Data Protection (OADP). ",
        "Multi-Region & Multi-Cloud Failover – Designing active-active and active-passive cluster failover strategies. ",
        "Data Resiliency & Replication – Ensuring zero data loss with real-time replication. ",
        "Automated Recovery Procedures – Fast restoration of applications and workloads in case of failures. ",
      ],
    },
    {
      title: "Performance & Cost Optimization",
      isHighlighted: false,
      items: [
        "Resource Allocation & Utilization Analysis – Identifying and eliminating resource wastage. ",
        "Cluster Cost Management & Forecasting – Optimizing Kubernetes spend with cost monitoring tools. ",
        "Workload Right-Sizing – Ensuring efficient allocation of CPU, memory, andstorage resources. ",
        "Auto-Scaling & Load Distribution – Dynamically balancing workloads across multiple clusters. ",
      ],
    },
    {
      title: "DevSecOps & Automation ",
      isHighlighted: false,
      items: [
        "Multi-Cluster GitOps Implementation – Automating infrastructure and application management with GitOps. ",
        "Security-Integrated DevOps Pipelines – Embedding security checks within CI/CD workflows.",
        "Infrastructure as Code (IaC) Deployment – Automating OpenShift and Kubernetes cluster provisioning using Terraform and Ansible. ",
        "Self-Healing & Auto-Remediation – AI-driven automated response to cluster failures ",
      ],
    },
  ];

  const supportedWorkloads = [
    "Enterprise Kubernetes/OpenShift Workloads – Managing containerized applications across multiple clusters.",
    "AI/ML & Data Analytics – Deploying and scaling AI/ML models across hybrid cloud environments.",
    "High-Performance Computing (HPC) – Optimized infrastructure for computational workloads.",
    "Multi-Tenant & Edge Deployments – Managing clusters at scale for different teams and locations.",
    "CI/CD & DevOps Pipelines – Enabling secure and automated application delivery.",
    "Financial, Healthcare & Regulated Workloads – Ensuring compliance and security in sensitive industries.",
  ];

  const services = [
    {
      title: "Red Hat OpenShift Management ",
      icon: "/images/service_10.png",
      link: "/red-hat/openshift-managemenet",
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
    {
      title: "OpenShift Virtualization",
      icon: "/images/Redhat_12.png",
      link: "/red-hat/openShift-virtualization",
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
            Red Hat Advanced Cluster Management (RHACM)
          </p>
          <h1 className="text-white font-bold text-4xl mb-2">
            Multi-Cluster Management
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
              Centralized Cluster Management
            </h3>
            <p className="text-gray-600 text-sm">
              Unified control plane for all Kubernetes clusters.
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
            <h3 className="font-bold text-lg mb-2">
              Multi-Cloud & Hybrid Support
            </h3>
            <p className="text-gray-600 text-sm">
              Seamless management of OpenShift on AWS, Azure, GCP, and on-prem.
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
              Policy-Driven Governance & Security
            </h3>
            <p className="text-gray-600 text-sm">
              Enforce compliance and security policies across clusters.
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
              Scalable Application Lifecycle Management
            </h3>
            <p className="text-gray-600 text-sm">
              Deploy and manage applications across multiple clusters.
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
              Optimized Performance & Cost Efficiency{" "}
            </h3>
            <p className="text-gray-600 text-sm">
              Ensure optimal cluster utilization and cost savings.
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
              24/7 Monitoring & Support
            </h3>
            <p className="text-gray-600 text-sm">
              Proactive monitoring and troubleshooting to maintain uptime and
              performance.
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
                className={`border-2 rounded-lg overflow-hidden hover:bg-red-400 hover:text-white`}
              >
                {/* Card Header */}
                <div className="p-4   ">
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
                          <p className={` `}>{title} –</p>
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
              <div className=" ">
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
