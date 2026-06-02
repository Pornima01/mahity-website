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
          <title>Process Automation Engineer - Job Description</title>
          <meta
            name="description"
            content="Job description for Process Automation Engineer position"
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
                Process Automation Engineer
              </h1>
              <p className="text-gray-600 text-lg md:text-xl">
                Join our innovative team and transform business processes
              </p>
            </motion.div>

            <div className="px-6 py-8">
              <motion.div variants={fadeInUp} className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Job Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We are seeking a Process Automation Engineer with experience
                  in Camunda BPMN to join our team. The ideal candidate will
                  have a strong background in process automation and business
                  process management, with specific expertise in Camunda BPMN.
                </p>
              </motion.div>

              {/* Responsibilities */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Responsibilities
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <motion.li variants={fadeInUp}>
                    Design, develop, and implement automated processes using
                    Camunda BPMN.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Collaborate with cross-functional teams to define, design,
                    and implement business process improvements.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Identify opportunities for process automation and work with
                    stakeholders to analyze and document business process flows.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Ensure the quality and performance of automated processes.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Troubleshoot and resolve issues related to process
                    automation.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Provide training and support to users on automated
                    processes.
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
                    Bachelor`s degree in Computer Science, Engineering, or a
                    related field.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Proven experience as a Process Automation Engineer.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Strong experience with Camunda BPMN is required.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Knowledge of Java and Spring Boot.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Strong problem-solving skills and attention to detail.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Excellent communication skills, both written and verbal.
                  </motion.li>
                </ul>
              </motion.div>

              {/* Preferred */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h5 className="text-3xl font-bold text-gray-800 mb-4">
                  Preferred
                </h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <motion.li variants={fadeInUp}>
                    Experience with other BPM tools.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Experience with Agile methodologies.
                  </motion.li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="mb-8">
                <p className="text-gray-800 text-base leading-relaxed">
                  We offer a competitive salary and benefits package. If you are
                  a self-starter who is excited about process automation and
                  Camunda BPMN, we would love to hear from you. Apply today!
                </p>
              </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
