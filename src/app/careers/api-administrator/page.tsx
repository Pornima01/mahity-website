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
          <title>API Administrator - Job Description</title>
          <meta
            name="description"
            content="Job description for API Administrator position"
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
                API Administrator
              </h1>
              <p className="text-gray-600 text-lg md:text-xl">
                Join our innovative team and transform business processes
              </p>
            </motion.div>

            {/* Content */}
            <div className="px-6 py-8">
              <motion.div variants={fadeInUp} className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Job Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We are looking for a skilled API Administrator with experience
                  in API Gateway from Tyk or Kong. The ideal candidate should be
                  proficient in SOAP to REST API conversion, have knowledge of
                  GraphQL schema, and Java. They should be aware of API design
                  patterns and possess excellent troubleshooting skills.
                  Experience with tools like Apicurio is a must. The candidate
                  should have created developer portals and should be familiar
                  with OWASP guidelines along with OAuth, SAML, and other
                  authentication and authorization mechanisms.
                </p>
              </motion.div>

              {/* Responsibilities */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Responsibilities
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <motion.li variants={fadeInUp}>
                    Design, develop, and maintain APIs to support web and mobile
                    applications.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Collaborate with frontend and backend developers to define
                    API requirements.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Ensure API security and authentication mechanisms are
                    robust.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Monitor API performance and troubleshoot issues promptly.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Stay updated on API development trends and emerging
                    technologies.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Conduct code reviews and implement improvements to enhance
                    API functionality.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Work closely with cross-functional teams to deliver scalable
                    and efficient APIs.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Evaluate and select enterprise application development and
                    integration technologies and solution development lifecycle
                    methodologies.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Work closely with API Solutions Architect and Platform
                    Administrator
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Work closely with the Business Product Owners, and must
                    understand the short and medium term strategy for the
                    business.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    With the help of the team, define and own the technical
                    implementation.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Work with the Team and Product Owner in shaping a product
                    roadmap.
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
                    Bachelor’s degree in Computer Science or a related field.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Proficiency in designing, developing, and maintaining APIs
                    to support web and mobile applications.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Strong collaboration skills with both frontend and backend
                    developers to define API requirements.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Expertise in ensuring API security and authentication
                    mechanisms are robust.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Commitment to monitoring API performance and promptly
                    troubleshooting issues.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Dedication to staying updated on API development trends and
                    emerging technologies.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Experience in conducting comprehensive code reviews and
                    implementing improvements to enhance API functionality.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Ability to work closely with cross-functional teams to
                    deliver scalable and efficient APIs.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Skill in documenting APIs effectively for both internal and
                    external users.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Track record of delivering high-quality API solutions that
                    meet application requirements.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Some experience with Java is preferred.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Experienced in Object Oriented, Service Oriented and Aspect
                    Oriented Architectures.
                  </motion.li>
                  <motion.li variants={fadeInUp}>Design Patterns.</motion.li>
                  <motion.li variants={fadeInUp}>
                    Familiarity with Postgres / MySQL development including data
                    modeling, concurrency, stored procedure development and
                    tuning.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Experience with Java and/or other non-Microsoft OOP
                    languages is a plus.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Successful development of scalable, high-performance and
                    distributed services through multiple ship-cycles.
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    Degree in Computer Science (BS or MS).
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
