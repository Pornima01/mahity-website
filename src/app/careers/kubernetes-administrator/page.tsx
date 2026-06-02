"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function JobDescription() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/career-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-50">
        <Head>
          <title>Kubernetes Administrator - Job Description</title>
          <meta
            name="description"
            content="Job description for Kubernetes Administrator position"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container mx-auto px-4 py-8 md:py-16">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto bg-white/70 shadow-xl rounded-2xl overflow-hidden bg-opacity-95"
          >
            {/* Header */}
            <motion.div
              variants={fadeInUp}
              className="text-black px-6 py-8 md:py-12 text-center bg-[url('/images/career-header-bg.png')] bg-cover bg-center bg-no-repeat"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Kubernetes Administrator
              </h1>
              <p className="text-gray-600 text-lg md:text-xl">
                Join our innovative team and transform business processes
              </p>
            </motion.div>

            {/* Content */}
            <div className="px-6 py-8">
              <motion.div variants={fadeInUp} className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Role Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This is a full-time on-site role, located in Mumbai, for a
                  Kubernetes Administrator. As a Kubernetes Administrator, you
                  will be responsible for managing the Kubernetes environment,
                  including deploying applications, monitoring, and maintaining
                  the infrastructure. You will collaborate with cross-functional
                  teams to identify business opportunities and provide
                  customized solutions while ensuring the availability,
                  scalability, performance, and security of the Kubernetes
                  infrastructure.
                </p>
              </motion.div>
              {/* Qualifications */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Qualifications
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <motion.li variants={fadeInUp}>
                    Experience in managing and deploying Kubernetes clusters,
                    including monitoring and maintaining the infrastructure
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Experience in Docker containerization and microservices
                    architecture
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Proficiency in at least one of the following programming
                    languages: Java, Python, or Go
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Experience working with CI/CD pipelines, preferably using
                    Jenkins
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Experience in configuring and managing Kubernetes
                    networking, including ingress, egress, and service discovery
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Experience in managing Kubernetes security, including
                    authentication, authorization, and encryption
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Knowledge of Linux system administration and shell scripting
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Experience in working with distributed systems and cloud
                    infrastructure, preferably in AWS
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Bachelor’s degree or higher in Computer Science or a related
                    field
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Ability to communicate complex technical ideas to both
                    technical and non-technical audiences and work effectively
                    in cross-functional and collaborative teams
                  </motion.li>
                </ul>
              </motion.div>

              {/* Skills / Project Experience */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h4 className="text-3xl font-bold text-gray-800 mb-4">
                  Skills / Project Experience - required
                </h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <motion.li variants={fadeInUp}>
                    Experience on working with container platforms such as
                    OpenShift, EKS, AKS, GKE, Tanzu or any other Kubernetes
                    distribution.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Reviewing system and application logs, looking for any
                    potential issues and verifying completion of scheduled jobs.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Experience in using Git for version control.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Strong understanding of network fundamentals (TCP/IP, HTTP,
                    DNS, SSL/TLS, Layer 3 and Layer 7 load balancing, etc.)
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Experience with creating helm charts, understanding/defining
                    namespaces.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Strong knowledge of Ubuntu/Debian/RHEL/CentOS 5/6/7 in an
                    enterprise environment.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Knowledge of Clusters, Storage, Backups, Data Export/Import,
                    Monitoring tools, and disaster recovery.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Develop codes for extensive test coverage, perform
                    continuous deployment in a professional software engineering
                    environment.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Create container images, optimize the task performance in
                    correspondence with the engineers.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Configure and maintain application servers and processes,
                    including monitoring of system health and performance, to
                    ensure high levels of performance, availability, and
                    security
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Maintain the systems compliant with the security/audit
                    guidelines as per SOP (Standards Operating Procedure)
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Excellent communication skills.
                  </motion.li>
                </ul>
              </motion.div>

              {/* Skills / Project Experience - good to have*/}
              <motion.div variants={fadeInUp} className="mb-8">
                <h5 className="text-3xl font-bold text-gray-800 mb-4">
                  Skills / Project Experience - good to have
                </h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <motion.li variants={fadeInUp}>
                    CKA or CKAD Certification.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Desirable to have knowledge on Ansible, Jenkin and Jira
                    tools and implementation.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Virtualization Technologies like VMware / Nutanix or any
                    Cloud Technologies like AWS
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Experience on Agile methodologies.
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
