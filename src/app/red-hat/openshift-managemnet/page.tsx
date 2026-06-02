import Image from "next/image";
export default function Home() {
  const serviceCards = [
    {
      title: "OpenShift Deployment & Configuration",
      isHighlighted: false,
      items: [
        "Automated Multi-Cluster Deployment – Platform-specific and multi-tenant installations",
        "Patch & Upgrade Management – Ensuring your OpenShift environment stays updated and secure",
        "Custom Planning & Scoping – Optimizing cluster resources based on workload service requirements",
        "Day-0 Operations – Routine management, performance tuning and troubleshooting",
      ],
    },
    {
      title: "Cluster Operations & Maintenance",
      isHighlighted: true,
      items: [
        "Ongoing Cluster Health Checks – Proactive monitoring and issue resolution",
        "Patch & Upgrade Management – Ensuring your OpenShift environment stays updated and secure",
        "Capacity Planning & Scaling – Optimizing cluster resources based on workload service requirements",
        "Day-2 Operations – Routine management, performance tuning and troubleshooting",
      ],
    },
    {
      title: "Security & Compliance Management",
      isHighlighted: false,
      items: [
        "Security Hardening – Implementing RBAC, network policies, and encryption standards",
        "Advanced Identity Management – Integration with LDAP, SSO, and OAuth service providers",
        "Compliance Enforcement – Aligning with industry standards such as PCI-DSS, HIPAA, and SOC2",
        "Vulnerability Management – Automated security scans and patching of container level protocols",
      ],
    },
    {
      title: "DevSecOps & Automation",
      isHighlighted: false,
      items: [
        "CI/CD Implementation – Using tools like ArgoCD and Tekton for automated deployments",
        "GitOps/Flux Development – Integration with Jenkins, Tekton, and OpenShift pipelines",
        "Security Automation – Embedding security policies in the CI/CD workflow",
        "Infrastructure as Code (IaC) – Automating infrastructure provisioning with templates and Ansible",
      ],
    },
    {
      title: "Backup & Disaster Recovery",
      isHighlighted: false,
      items: [
        "Automated Backup Solutions – Implementing Velero, OCP, or cloud-native backup solutions",
        "Disaster Recovery Planning – Architecting multi-zone and cross-regional failover locations",
        "Multi-Region Data Replication – Ensuring business continuity with data resiliency",
        "Rapid Recovery & Incident Response – Quick rollback strategies in case of failures",
      ],
    },
    {
      title: "Performance & Cost Optimization",
      isHighlighted: false,
      items: [
        "Resource Utilization Analysis – Identifying unused/underutilized resources for cost optimization",
        "Cost Management & Forecasting – Examining cloud spend and reducing infrastructure costs",
        "Performance Tuning – Optimizing container runtime, networking, and storage for efficiency",
        "Autoscaling & Load Balancing – Ensuring workloads are dynamically scaled based on traffic patterns",
      ],
    },
    {
      title: "Application Deployment & Support",
      isHighlighted: false,
      items: [
        "Containerization of Applications – Existing application modernization and migration to containers",
        "Automated Deployment Pipeline – CI/CD integration to deploy application releases",
        "Application Scaling & High Availability – Managing horizontal/vertical application scaling of applications",
        "End-to-end Application Support – Troubleshooting and performance optimization for running workloads",
      ],
    },
    {
      title: "Observability & Monitoring",
      isHighlighted: false,
      items: [
        "Monitoring & Logging – Leveraging tools like Prometheus, Grafana, and OpenShift Logging",
        "Alerting & Incident Management – Proactive alerts for failures, issues, and security breaches",
        "Application & Infrastructure Monitoring – Full visibility into cluster and application health",
        "Log Aggregation & Analysis – Centralized log collection for troubleshooting and debugging",
      ],
    },
  ];

  const supportedWorkloads = [
    "Microservices & Containerized Applications – Kubernetes-native applications and services",
    "AI/ML Workloads – Scalable infrastructure for AI and machine learning models",
    "Big Data & Analytics – Support for data-intensive applications and processing pipelines",
    "CI/CD & DevOps Pipelines – Secure, automated software delivery",
    "Legacy Application Modernization – Migration of monolithic apps to cloud-native architectures",
    "Serverless & Event-Driven Architectures – Implement Knative and OpenShift Serverless",
  ];

  const services = [
    {
      title: "Multi-Cluster Management ",
      icon: "/images/service_10.png",
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
          <p className="text-white text-sm mb-2">Red Hat Hybrid Cloud</p>
          <h1 className="text-white font-bold text-4xl mb-2">
            Red Hat OpenShift Management
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
            <h3 className="font-bold text-lg mb-2">Fully Managed OpenShift</h3>
            <p className="text-gray-600 text-sm">
              From deployment to day-to-day operations, we handle it all
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
              Run OpenShift on AWS, Azure, Google Cloud, or on-prem
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
            <h3 className="font-bold text-lg mb-2">Security & Compliance</h3>
            <p className="text-gray-600 text-sm">
              Proactive monitoring, patching, and compliance enforcement
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
              24/7 Monitoring & Support
            </h3>
            <p className="text-gray-600 text-sm">
              Ensure uptime and reliability with round-the-clock support
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
            <h3 className="font-bold text-lg mb-2">Optimized Performance</h3>
            <p className="text-gray-600 text-sm">
              Continuous tuning to enhance efficiency and reduce costs
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
              DevOps & CI/CD Integration
            </h3>
            <p className="text-gray-600 text-sm">
              Accelerate deployments with automated pipelines
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
                className={`border-2 rounded-lg overflow-hidden `}
              >
                {/* Card Header */}
                <div className="p-4  hover:bg-red-400 hover:text-white ">
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
