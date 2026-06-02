import Image from "next/image";
export default function Home() {
  const serviceCards = [
    {
      title: "Quay Deployment & Configuration ",
      isHighlighted: false,
      items: [
        "Enterprise-Ready Deployment – On-prem, cloud-native, or hybrid installations.  ",
        "Multi-Tenant Registry Configuration – Secure image storage and role-based access control (RBAC). ",
        "Geo-Replication & High Availability – Ensure resilience with multi-region Quay clusters. ",
        "Integration with OpenShift & Kubernetes – Native support for OpenShift and Kubernetes workloads.  ",
      ],
    },
    {
      title: " Secure Image Management & Access Control ",
      isHighlighted: true,
      items: [
        "RBAC & Identity Management – Implement least-privilege access policies for teams. ",
        "Private & Public Image Repositories – Configure repositories based on organizational needs. ",
        "Image Encryption & Signing – Use Cosign & Sigstore for trusted image distribution. ",
        "Immutable Image Tags & Retention Policies – Enforce best practices for image versioning.  ",
      ],
    },
    {
      title: " Vulnerability Scanning & Compliance ",
      isHighlighted: false,
      items: [
        "Automated Image Scanning – Detect vulnerabilities using Clair security scanner. ",
        "Compliance & Policy Enforcement – Align with CIS Benchmarks, NIST, PCI-DSS, and HIPAA.  ",
        "Real-Time Security Alerts – Automated notifications for newly discovered vulnerabilities.  ",
        "Audit Logging & Forensics – Track image usage, access, and security incidents. ",
      ],
    },
    {
      title: " CI/CD & DevSecOps Integration ",
      isHighlighted: false,
      items: [
        "Seamless Integration with CI/CD Pipelines – Connect with Jenkins, Tekton, and GitHub Actions.  ",
        "Content Delivery Network (CDN) Integration – Enable fast and efficient image distribution.  ",
        "Layer Caching for Faster Builds – Reduce image build times and improve developer productivity.  ",
        "Automated Quay Scaling & Load Balancing – Ensure performance under high demand.  ",
      ],
    },
    {
      title: "Disaster Recovery & Business Continuity  ",
      isHighlighted: false,
      items: [
        "Automated Backups & Replication – Prevent data loss with scheduled backups.  ",
        "Multi-Region Failover Strategy – Ensure business continuity with active-passive setups.  ",
        "Instant Image Rollbacks – Revert to previous versions in case of security incidents.  ",
        "High-Availability Quay Setup – Architect Quay clusters with redundancy and failover support. ",
      ],
    },
    {
      title: "Incident Response & Forensics ",
      isHighlighted: false,
      items: [
        " Kubernetes & OpenShift-Based Applications – Store and manage images for Kubernetes deployments. ",
        "Automated Response & Remediation – AI-driven security automation to mitigate risks. ",
        "Post-Incident Analysis & Threat Hunting – Conduct forensic investigations and root cause analysis. ",
        "Disaster Recovery & Business Continuity Security – Secure backup, recovery, and failover strategies. ",
      ],
    },
  ];

  const supportedWorkloads = [
    " Kubernetes & OpenShift-Based Applications – Store and manage images for Kubernetes deployments. ",
    "Multi-Cloud & Hybrid Deployments – Secure image distribution across AWS, Azure, GCP, and on-prem environments. ",
    "AI/ML & Data Science Workloads – Manage and distribute containerized AI/ML models.",
    "Edge & IoT Deployments – Enable containerized workloads at scale for edge locations. ",
    "Highly Regulated Industries – Ensure compliance for financial, healthcare, and government applications.",
    "DevOps & GitOps Pipelines – Support fast and secure deployments in CI/CD environments.  ",
  ];

  const services = [
    {
      title: "Red Hat OpenShift Management ",
      icon: "/images/service_10.png",
      link: "/red-hat/openshift-managemenet",
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
          Red Hat Quay Enterprise Container Registry Services
          </p>
          <h1 className="text-white font-bold text-4xl mb-2">
          Enterprise Container Registry
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
              Enterprise-Grade Container Registry{" "}
            </h3>
            <p className="text-gray-600 text-sm">
              High availability, performance, and scalability.
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
              Deploy Quay on-premises, AWS, Azure, GCP, or edge locations.
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
              Automated vulnerability scanning and policy enforcement.
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
              High Availability & Disaster Recovery
            </h3>
            <p className="text-gray-600 text-sm">
              Redundant architecture with geo-replication support.
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
              CI/CD & DevSecOps Integration
            </h3>
            <p className="text-gray-600 text-sm">
              Seamless integration with GitOps, Kubernetes, and OpenShift
              Pipelines.
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
              Ensure uptime, security, and optimal performance.
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
              <div className=" ">
                {supportedWorkloads
                  .filter(
                    (workload): workload is string =>
                      typeof workload === "string"
                  )
                  .map((workload, index) => {
                    const [title, description = ""] = workload.split(" – ");

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
