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
          <title>Kafka Administrator - Job Description</title>
          <meta
            name="description"
            content="Job description for Kafka Administrator position"
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
                Kafka Administrator
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
                  We are looking for a Kafka Administrator to join our team. The
                  Kafka Administrator will be responsible for assisting with the
                  design, architecture, and development of our Kafka
                  infrastructure.
                </p>
              </motion.div>

              {/* Responsibilities */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Responsibilities
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <motion.li variants={fadeInUp}>
                    Install, configure, and maintain Apache Kafka clusters.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Monitor Kafka cluster connectivity and security.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Manage and review Kafka log files.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Assist in developing, maintaining, and supporting Kafka
                    integrations.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Collaborate with development teams to assist with Kafka
                    application design and use.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Troubleshoot and resolve any Kafka performance issues,
                    system failures, and outages.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Perform data modeling, testing, and tuning to ensure Kafka
                    performance and reliability.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Maintain Kafka brokers, zookeepers, KSQL, KConnect, Schema
                    Registry, etc.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Ensure optimal health and performance of the Kafka platform.
                    </motion.li>
                  <motion.li variants={fadeInUp}>
                    Provide 24x7 production support.
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
                    Bachelor’s degree in Computer Science, Information
                    Technology, or a related field.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Proven experience as a Kafka Administrator.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Strong knowledge of Kafka Connect, Kafka Streams, KSQL.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Familiarity with open-source configuration management and
                    deployment tools.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Strong problem-solving skills.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Good understanding of networking and distributed systems.
                  </motion.li>
                </ul>
              </motion.div>

              {/* Nice to Have */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h5 className="text-3xl font-bold text-gray-800 mb-4">
                  Nice to Have
                </h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <motion.li variants={fadeInUp}>
                    Experience with other messaging systems like RabbitMQ,
                    ActiveMQ, etc.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Knowledge of Java or other programming languages.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Experience with Docker and Kubernetes.
                  </motion.li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="mb-8">
                <p className="text-gray-800 text-base leading-relaxed">
                  <b>Note:</b> This job description is intended to convey
                  information essential to understanding the scope of the job
                  and the general nature and level of work performed by job
                  holders within this job. But, this job description is not
                  intended to be an exhaustive list of qualifications, skills,
                  efforts, duties, responsibilities or working conditions
                  associated with the position. Your duties, responsibilities
                  and activities may change as per business requirements.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
