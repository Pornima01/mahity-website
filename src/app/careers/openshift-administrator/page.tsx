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
          <title>OpenShift Administrators - Job Description</title>
          <meta
            name="description"
            content="Job description for OpenShift Administrators position"
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
                OpenShift Administrators
              </h1>
              <p className="text-gray-600 text-lg md:text-xl">
                Join our innovative team and transform business processes
              </p>
            </motion.div>

            <div className="px-6 py-8">
              <motion.div variants={fadeInUp} className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Role Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This is a full-time on-site role, located in Mumbai, for a
                  Senior OpenShift Administrator. You will be responsible for
                  managing the OpenShift environment, including deploying
                  applications, monitoring, and maintaining the infrastructure.
                  You will collaborate with cross-functional teams to identify
                  business opportunities and provide customized solutions while
                  ensuring the availability, scalability, performance, and
                  security of the OpenShift infrastructure.
                </p>
              </motion.div>

              {/* Responsibilities */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Responsibilities
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <motion.li variants={fadeInUp}>
                    <b>Manage OpenShift Clusters:</b> Install, configure, and
                    manage OpenShift clusters. Maintain and ensure availability
                    and performance.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    <b>Automate Processes:</b> Automate deployment, scaling, and
                    management of containerized applications.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    <b>Troubleshoot and Resolve Issues:</b> Troubleshoot and
                    resolve system issues, ensuring long-term problem
                    resolution.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    <b>Provide Technical Support and Guidance:</b> Provide
                    technical support and guidance on application design and
                    development that leverages OpenShift and Kubernetes.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    <b>Maintain Documentation:</b> Create and maintain
                    documentation on installations/upgrades, troubleshooting
                    procedures and change request requirements for systems.
                  </motion.li>
                </ul>
              </motion.div>

              {/* Qualifications */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h4 className="text-3xl font-bold text-gray-800 mb-4">
                  Qualifications
                </h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <motion.li variants={fadeInUp}>
                  <b>Experience:</b> 3+ years of experience in OpenShift
                    administration.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                  <b>Knowledge:</b> Deep understanding of OpenShift, Istio, and ELK.
                    Knowledge of CI/CD pipelines.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                  <b>Skills:</b> Strong troubleshooting skills.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                  <b>Education:</b> Bachelor`s degree in Computer Science,
                    Information Systems, or a related field, or equivalent
                    experience.
                  </motion.li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="mb-8">
                <p className="text-gray-800 text-base leading-relaxed">
                  Please note that this is a full-time position. The successful
                  candidate will need to work in the location where the role is
                  based. We are an equal opportunity employer and value
                  diversity at our company. We do not discriminate on the basis
                  of race, religion, color, national origin, gender, sexual
                  orientation, age, marital status, veteran status, or
                  disability status. We look forward to hearing from you!
                </p>
              </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
