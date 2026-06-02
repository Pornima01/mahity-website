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
          <title>Automation Engineer - Job Description</title>
          <meta
            name="description"
            content="Job description for Automation Engineer position"
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
                Automation Engineer
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
                  We are seeking an experienced Automation Engineer with
                  knowledge of Ansible and Terraform to join our team. The
                  successful candidate will be responsible for designing,
                  developing, and implementing software solutions to address
                  complex business issues, and providing technical leadership
                  within the IT department.
                </p>
              </motion.div>

              {/* Responsibilities */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Responsibilities
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <motion.li variants={fadeInUp}>
                    Design and implement infrastructure automation for new and
                    existing systems using Ansible and Terraform.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Develop and maintain CI/CD pipelines across multiple
                    environments.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Support and work alongside a cross-functional engineering
                    team on the latest technologies.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Iterate on best practices to increase the quality & velocity
                    of deployments.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Sustain and improve the process of knowledge sharing
                    throughout the engineering team.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Develop and implement lifecycle solutions for services from
                    inception and development, through deployment, operation and
                    enhancement.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Create, maintain and share technical documentation used by
                    engineers and other team members.
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
                    Bachelor’s degree in Computer Science, Engineering, or a
                    related field.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Proven experience as an Automation Engineer.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Strong knowledge of Ansible and Terraform.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Experience with CI/CD tools like Jenkins, GitLab CI/CD.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Strong problem-solving skills.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Good understanding of cloud services such as AWS, Google
                    Cloud, or Azure.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Excellent communication skills.
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
                    Experience with containerization technologies like Docker
                    and Kubernetes.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Knowledge of scripting languages such as Python, Bash.
                  </motion.li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="mb-8">
                <p className="text-gray-800 text-base leading-relaxed">
                  <b>Note:</b> This job description is intended to convey information
                  essential to understanding the scope of the job and the
                  general nature and level of work performed by job holders
                  within this job. But, this job description is not intended to
                  be an exhaustive list of qualifications, skills, efforts,
                  duties, responsibilities or working conditions associated with
                  the position. Your duties, responsibilities and activities may
                  change as per business requirements.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
