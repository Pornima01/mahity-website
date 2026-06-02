import Image from "next/image";
export default function Home() {
  const serviceCards = [
    {
      title: "Kubernetes & OpenShift Security Hardening ",
      isHighlighted: false,
      items: [
        "Cluster Security Baseline Assessment – Identify misconfigurations and vulnerabilities. ",
        "RBAC & Identity Management – Implement least-privilege access policies. ",
        "Network Security & Microsegmentation – Enforce security controls using OpenShift Network Policies and Istio. ",
        "Secrets Management – Secure sensitive data with HashiCorp Vault and OpenShift Secrets. ",
      ],
    },
    {
      title: "Vulnerability Management & Threat Detection ",
      isHighlighted: true,
      items: [
        "Container Image Scanning – Detect vulnerabilities using Clair, Trivy, and OpenSCAP. ",
        "Runtime Threat Detection – Real-time monitoring for anomalous behavior and insider threats",
        "Automated Risk Prioritization – Classify vulnerabilities based on impact and exposure. ",
        "Security Analytics & Forensics – Investigate incidents with comprehensive logging and audit trails. ",
      ],
    },
    {
      title: "DevSecOps & CI/CD Security Integration ",
      isHighlighted: false,
      items: [
        "Security Hardening – Implementing RBAC, network policies, and encryption standards",
        "Infrastructure as Code (IaC) Security – Scan Terraform, Helm charts, and Kubernetes manifests for misconfigurations. ",
        "Policy-Based Deployment Controls – Prevent insecure container images and misconfigured deployments. ",
        "Automated Compliance Enforcement – Ensure adherence to CIS Benchmarks, NIST, and regulatory standards. ",
      ],
    },
    {
      title: " Zero Trust & Identity-Based Security ",
      isHighlighted: false,
      items: [
        "Zero Trust Network Policies – Implement network segmentation and service-to-service encryption. ",
        "Role-Based Access Control (RBAC) & IAM – Define fine-grained permissions using OpenShift RBAC and SSO integration. ",
        "Secure API & Service Communication – Encrypt API traffic with mTLS and Istio. ",
        "Multi-Factor Authentication (MFA) & Single Sign-On (SSO) – Enhance user authentication security. ",
      ],
    },
    {
      title: "Compliance & Governance for Kubernetes Clusters ",
      isHighlighted: false,
      items: [
        "Automated Compliance Audits – Generate audit reports for regulatory frameworks (SOC 2, ISO 27001, GDPR). ",
        "Policy-Driven Governance – Implement Open Policy Agent (OPA) and Kyverno policies for security enforcement. ",
        "Continuous Monitoring for Compliance Drift – Detect deviations and enforce remediation actions. ",
        "Secure Workload Isolation – Ensure application-level security controls for sensitive workloads. ",
      ],
    },
    {
      title: "Incident Response & Forensics ",
      isHighlighted: false,
      items: [
        "Security Incident Detection & Alerting – Real-time threat intelligence and alerting with OpenShift Logging & Prometheus. ",
        "Automated Response & Remediation – AI-driven security automation to mitigate risks. ",
        "Post-Incident Analysis & Threat Hunting – Conduct forensic investigations and root cause analysis. ",
        "Disaster Recovery & Business Continuity Security – Secure backup, recovery, and failover strategies. ",
      ],
    },
  ];

  const supportedWorkloads = [
    " Containerized Applications – Secure microservices and container-based workloads.",
    "Multi-Cloud & Hybrid Deployments – Protect workloads across AWS, Azure, GCP, and on-prem environments.",
    "AI/ML & Data Analytics – Secure AI-driven workloads and prevent data breaches.",
    "DevOps & CI/CD Pipelines – Integrate security into software development lifecycles.",
    "Regulated & Compliance-Driven Workloads – Ensure compliance in healthcare, finance, and government sectors.",
    "Edge & IoT Deployments – Secure remote and edge Kubernetes clusters. ",
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
            Red Hat Advanced Cluster Security (RHACS)
          </p>
          <h1 className="text-white font-bold text-4xl mb-2">
            Kunernetes Security
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
              Comprehensive Kubernetes Security{" "}
            </h3>
            <p className="text-gray-600 text-sm">
              Protect workloads from build to runtime.
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
              Multi-Cluster Threat Visibility
            </h3>
            <p className="text-gray-600 text-sm">
              Centralized security monitoring for hybrid and multi- cloud
              environments.​
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
            <h3 className="font-bold text-lg mb-2">Policy-Driven Compliance</h3>
            <p className="text-gray-600 text-sm">
              Automate security controls to meet regulatory standards (PCI-DSS,
              HIPAA, GDPR, etc.).
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
            <h3 className="font-bold text-lg mb-2">Integrated DevSecOps</h3>
            <p className="text-gray-600 text-sm">
              Shift security left by embedding security in CI/CD pipelines.
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
              Automated Threat Detection & Response
            </h3>
            <p className="text-gray-600 text-sm">
              AI-driven security monitoring and remediation.
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
              24/7 Security Monitoring & Incident Response
            </h3>
            <p className="text-gray-600 text-sm">
              Proactive threat hunting and real- time remediation.
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
