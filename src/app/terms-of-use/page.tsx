"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const TermsOfUse = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobile] = useState(false);

  const sections = [
    { id: "welcome", title: "Terms of Use" },
    { id: "access", title: "Access and Registration" },
    { id: "license", title: "License to Use" },
    { id: "conduct", title: "Code of Conduct" },
    { id: "intellectual", title: "Intellectual Property" },
    { id: "feedback", title: "Feedback" },
    { id: "payments", title: "Payments and Refunds" },
    { id: "shipping", title: "Shipping Policy" },
    { id: "disclaimer", title: "Disclaimer" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "indemnity", title: "Indemnity and Release" },
    { id: "thirdparty", title: "Links to Third Party Websites" },
    { id: "governing", title: "Governing Law and Jurisdiction" },
    { id: "miscellaneous", title: "Miscellaneous" },
  ];

  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 border-l-4 border-blue-500"
        >
          <motion.h1
            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-5 text-transparent text-2xl sm:text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Terms of Use
          </motion.h1>
          <p className="text-sm sm:text-base text-gray-600">
            Welcome to Mahity. These Terms of Use govern your access to and use
            of our website (Website), including any content, public forums, and
            services provided on or through the Website and any associated
            mobile applications (Application) (collectively referred to as the
            Platform). By accessing or using the Platform, you agree to comply
            with and be bound by these Terms of Use.
          </p>
          <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-5">
            Mahity Systems Pvt Ltd reserves the right to modify these Terms of
            Use at any time. Changes will be effective immediately upon posting
            on the Website. Your continued use of the Platform following the
            posting of revised terms signifies your acceptance of those changes.
            Please review these terms periodically for updates. If you do not
            agree with these terms, kindly refrain from using our Platform.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
          <div
            className={`w-full md:w-1/3 lg:w-1/4 ${
              isMobile 
                ? "mb-4 sm:mb-6"
                : "md:sticky md:top-4 md:self-start"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-purple-50 rounded-xl shadow-md p-3 sm:p-4 border-l-4 border-purple-500"
            >
              <div className="flex justify-between items-center mb-2 sm:mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Contents
                </h2>
                {(isMobile ) && (
                  <button
                    onClick={() =>
                      setActiveSection(activeSection ? null : "toc")
                    }
                    className="text-blue-500 font-bold focus:outline-none"
                  >
                    {activeSection === "toc" ? "Hide" : "Show"}
                  </button>
                )}
              </div>

              {((!isMobile ) ||
                activeSection === "toc") && (
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="space-y-1 sm:space-y-2"
                >
                  {sections.map((section) => (
                    <motion.li key={section.id} variants={childVariants}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`text-left w-full py-1 px-2 rounded transition duration-200 hover:bg-blue-50 text-sm sm:text-base ${
                          activeSection === section.id
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : "text-gray-600"
                        }`}
                      >
                        {section.title}
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
          </div>

          {/* Main content */}
          <motion.div
            className="w-full md:w-2/3 lg:w-3/4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Welcome Section */}
            <motion.div
              id="welcome"
              variants={childVariants}
              className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 mb-4 sm:mb-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-400"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 border-b pb-2">
                Terms of Use
              </h3>
              <div className="prose max-w-none text-gray-600 space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  These Terms of Use apply to end users of the Mahity website
                  (referred to as Learners, You, Your). This Agreement,
                  including the privacy policy and any other terms and
                  conditions published on the Platform or communicated to you
                  from time to time (collectively referred to as the Agreement),
                  defines the relationship and responsibilities between You and
                  the Creator in using the Platform. Your access to the Platform
                  is subject to Your acceptance of this Agreement. We encourage
                  you to take the time to read thoroughly and understand this
                  Agreement.
                </p>
                <p>
                  By accessing or using the Platform, you acknowledge and agree
                  to be bound by these Terms of Use. Mahity Systems Pvt Ltd
                  reserves the right to modify these terms at any time, with
                  changes taking effect immediately upon posting. Your continued
                  use of the Platform indicates your acceptance of any revised
                  terms. Please review these terms regularly to stay informed of
                  any updates. If you do not agree with any part of these terms,
                  you must refrain from using our Platform.
                </p>
                <p>
                  When we speak of Creator, we, us, and our, we collectively
                  mean Hansei, being the creator of this Platform and the
                  content/materials/services contained therein.
                </p>
                <p>
                  By accessing this Platform, You are agreeing to be bound by
                  the terms of this Agreement, all applicable laws and
                  regulations. From time to time, versions of the
                  above-mentioned policies and terms are made available on the
                  Platform for Your reference, to understand how we handle Your
                  personal information. By using or visiting the Platform and
                  services provided to You on, from, or through the Platform,
                  You are expressly agreeing to the terms of the Agreement and
                  any other terms that are updated from time to time. If You
                  disagree with any part of this Agreement or do not wish to be
                  bound by the same, then please do not use the Platform in any
                  manner.
                </p>
                <p>
                  Certainly! Here`s a rephrased version of your statement:
                  <br />
                  By accessing this Platform, you agree to be bound by the terms
                  of this Agreement, as well as all applicable laws and
                  regulations. From time to time, updated versions of the
                  policies described above and terms will be made available on
                  the Platform for your reference, ensuring transparency on how
                  we handle your personal information. By using or visiting the
                  Platform and availing the services provided to you on, from,
                  or through the Platform, you explicitly agree to the terms of
                  this Agreement and any other terms that may be updated
                  periodically.
                </p>
                <p>
                  Should you disagree with any part of this Agreement or prefer
                  not to be bound by it, please refrain from using the Platform
                  in any capacity.
                </p>
              </div>
            </motion.div>

            {/* Access and Registration */}
            <motion.div
              id="access"
              variants={childVariants}
              className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 mb-4 sm:mb-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-400"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 border-b pb-2">
                Access and Registration
              </h4>
              <div className="prose max-w-none text-gray-600 space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  To use our Platform, you must be at least 18 years of age. If
                  you are between 13 and 18 years old, you must obtain
                  permission from your parent or legal guardian. By using the
                  Platform, you confirm that you have received the necessary
                  consents and permissions. Users under the age of 13 (or 16,
                  depending on your country of residence) are not permitted to
                  use or register on the Platform for any content or services.
                </p>
                <p>
                  To access the Content offered on the Platform, you must
                  register by providing your name and email address. Please
                  review our Privacy Policy to understand how we manage your
                  information. Additionally, access to certain Content may
                  require a fee. For details, refer to our Payments & Refunds
                  section.
                </p>
                <p>
                  You represent that the information you provide during
                  registration is accurate and complete, and you meet the
                  eligibility criteria for using the Platform and accessing the
                  Content. You also agree to notify us of any changes to your
                  information by contacting us as specified in the Contact Us
                  section.
                </p>
                <p>
                  For the purposes of this Agreement, Content refers to any
                  course or session (whether pre-recorded or live) published by
                  the Creator on the Platform, including any related reference
                  materials and text files offered as part of the Content.
                </p>
              </div>
            </motion.div>

            {/* License to Use */}
            <motion.div
              id="license"
              variants={childVariants}
              className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 mb-4 sm:mb-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-400"
            >
              <h5 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 border-b pb-2">
                License to Use
              </h5>
              <div className="prose max-w-none text-gray-600 space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  You are granted a limited, non-exclusive license to access and
                  view the Content on the Platform for your personal,
                  non-commercial use only. Additionally, if permitted by the
                  Platform, you may temporarily download one copy of any
                  downloadable Content (including Creator Content, as defined
                  below) for personal and non-commercial transitory viewing.
                  This license does not permit you to assign or sublicense the
                  rights granted under this Agreement to any other party.
                </p>
                <div>
                  <p className="font-semibold mb-2 sm:mb-3">
                    Furthermore, you are expressly prohibited from:
                  </p>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3">
                    <li>
                      Modifying, editing, or copying the Content, Creator
                      Content, or any material available on the Platform
                    </li>
                    <li>
                      Creating derivative works or exploiting any material on
                      the Platform (including Content and Creator Content), or
                      any portion thereof, in any manner not expressly allowed
                      under this license
                    </li>
                    <li>
                      Publicly displaying (whether for commercial or
                      non-commercial purposes) the Content, Creator Content, or
                      any material available on the Platform
                    </li>
                    <li>
                      Attempting to decompile or reverse engineer any software
                      contained on the Platform
                    </li>
                    <li>
                      Removing any copyright or other proprietary notations from
                      the Content, Creator Content, or any material available on
                      the Platform
                    </li>
                    <li>
                      Transferring any material available on the Platform to
                      another person, or mirroring it on any other server.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Code of Conduct */}
            <motion.div
              id="conduct"
              variants={childVariants}
              className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 mb-4 sm:mb-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-400"
            >
              <h6 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 border-b pb-2">
                Code of Conduct
              </h6>
              <div className="prose max-w-none text-gray-600 space-y-2 sm:space-y-3 text-sm sm:text-base">
                <p className="font-semibold">You agree to the following:</p>
                <div className="space-y-3 sm:space-y-4">
                  <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3">
                    <div>
                      <li className="text-black font-bold">
                        Legitimate usage of the Platform:
                      </li>
                      <p>
                        You agree to use the Platform only for lawful purposes
                        and agree not to engage in any activity that violates
                        any applicable central, state, local, federal, or
                        international law or regulation (including, without
                        limitation, any laws regarding the export of data or
                        software to and from the USA or other countries). You
                        also agree not to use the Platform in any manner that
                        disrupts, damages, or impairs it or access to it,
                        including promoting or encouraging illegal activity such
                        as hacking, cracking, distributing counterfeit software,
                        compromised accounts, or cheats or hacks for the
                        Platform, or engaging in fraudulent activity.
                      </p>
                    </div>
                    <div>
                      <li className="text-black font-bold">
                        No harmful or dangerous content:
                      </li>
                      <p>
                        Content that incites or promotes violence, causes
                        physical or emotional harm, endangers the safety of
                        individuals, or is otherwise objectionable is expressly
                        prohibited. The Platform must only be used for permitted
                        purposes as outlined in this Agreement.
                      </p>
                    </div>
                    <div>
                      <li className="text-black font-bold">
                        No hateful or defamatory content:
                      </li>
                      <p>
                        While exchanging ideas and opinions is essential for
                        learning, hate speech, libelous, slanderous,
                        threatening, violent, predatory, or defamatory
                        statements are not tolerated. Content that incites
                        hatred against specific individuals or groups based on
                        race, ethnicity, nationality, caste, religion,
                        disability, gender, age, sexual orientation, or gender
                        identity is strictly prohibited.
                      </p>
                    </div>
                    <div>
                      <li className="text-black font-bold">
                        Violent and graphic content:
                      </li>
                      <p>
                        Content created solely to sensationalize, shock, or
                        disturb individuals is not allowed. Content promoting
                        terrorist acts or inciting violence is strictly
                        prohibited on the Platform.
                      </p>
                    </div>
                    <div>
                      <li className="text-black font-bold">
                        Harassment and bullying:
                      </li>
                      <p>
                        Harassment or bullying of any kind is not tolerated.
                        This includes abusive videos, comments, messages,
                        revealing someone`s personal information (e.g.,
                        sensitive personally identifiable information),
                        humiliating content or comments, sexual harassment, or
                        sexual bullying in any form. The Platform is a safe
                        space for learning and mutual respect.
                      </p>
                    </div>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              id="conduct"
              variants={childVariants}
              className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 mb-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-400 w-full"
            >
              <div className="space-y-4">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
                    Spam:
                  </div>
                  <p className="text-sm sm:text-base">
                    Posting untargeted, unwanted, and repetitive content,
                    comments, or messages with the intention to spam a Public
                    Forum or the Platform and drive traffic to third-party sites
                    is a direct violation of this Agreement. Posting links to
                    external websites containing malware or other prohibited
                    sites is strictly not allowed.
                  </p>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
                    Scams:
                  </div>
                  <p className="text-sm sm:text-base">
                    Any content uploaded or posted to deceive others for
                    financial gain is not permitted. Practices of extortion or
                    blackmail are also strictly prohibited.
                  </p>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
                    Privacy Violation:
                  </div>
                  <p className="text-sm sm:text-base">
                    Please refer to our Privacy Policy to understand how to
                    protect your privacy and respect the privacy of other users.
                  </p>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
                    Impersonation:
                  </div>
                  <p className="text-sm sm:text-base">
                    Impersonating another person, including but not limited to
                    another learner, is strictly prohibited on our Platform.
                    Impersonation refers to intentionally causing confusion
                    about your identity by pretending to be someone else—this
                    includes using names, images, documents, certificates, or
                    any identifiers that do not belong to you. Similarly,
                    pretending to represent a company, institution, or group by
                    using their logo, brand name, or distinguishing marks is
                    also not allowed.
                  </p>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
                    Unauthorized Access or Disabling of Platform:
                  </div>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3">
                    <p className="font-semibold text-gray-600 text-sm sm:text-base">
                      You agree not to:
                    </p>
                    <li className="text-sm sm:text-base">
                      Use the Platform in any manner that could disable,
                      overburden, damage, or impair it, or interfere with other
                      users access.
                    </li>
                    <li className="text-sm sm:text-base">
                      Use any manual process to monitor or copy materials on the
                      Platform for unauthorized purposes.
                    </li>
                    <li className="text-sm sm:text-base">
                      Employ any device, software, or routine that disrupts the
                      proper functioning of the Platform.
                    </li>
                    <li className="text-sm sm:text-base">
                      Attack the Platform via a denial-of-service attack.
                    </li>
                    <li className="text-sm sm:text-base">
                      Attempt to gain unauthorized access to, interfere with, or
                      disrupt any parts of the Platform, its servers, or
                      associated databases or systems.
                    </li>
                    <li className="text-sm sm:text-base">
                      Introduce viruses, trojan horses, worms, keystroke
                      loggers, malware, or other malicious or harmful technology
                      to the Platform.
                    </li>
                  </ul>
                  <p className="mt-3 text-sm sm:text-base">
                    If any violation of the above rules of conduct comes to our
                    notice, we reserve the right to restrict your access to the
                    Platform, terminate accounts, or remove violating content at
                    any time without prior notice.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Additional sections */}
            <motion.div
              id="intellectual"
              variants={childVariants}
              className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 mb-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-400 w-full"
            >
              <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 border-b pb-2">
                Intellectual Property
              </div>
              <div className="prose max-w-none text-gray-600 space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base">
                  Mahity Systems Pvt Ltd owns all information and materials,
                  including Content and Creator Content (in any form or media)
                  provided or communicated to you by or on behalf of us. This
                  includes, but is not limited to, the Platform itself,
                  trademarks, trade dress, logos, wordmarks, illustrations,
                  letters, images, ideas, concepts, layout, design, flow, look
                  and feel of the Platform, logos, marks, graphics, audio files,
                  video files, software owned by or licensed to us, and
                  instructions embedded in any digital documents. Collectively,
                  these are referred to as Creator`s Intellectual Property.
                </p>
                <p className="text-sm sm:text-base">
                  Creator`s Intellectual Property, including copyrights and
                  trademarks contained therein, may not be modified by you in
                  any way. You acknowledge and agree that you do not acquire any
                  ownership rights to Creator`s Intellectual Property by using
                  the Platform or any part thereof. Creator`s Intellectual
                  Property is protected by applicable intellectual property
                  laws, including international copyright, trademark, patent,
                  trade secret, and other proprietary rights laws. Unauthorized
                  use, reproduction, modification, distribution, transmission,
                  republication, display, or performance of Creator`s
                  Intellectual Property or any component thereof is strictly
                  prohibited.
                </p>
              </div>
            </motion.div>

            {/* Remaining sections follow the same pattern */}
            <motion.div
              id="feedback"
              variants={childVariants}
              className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 mb-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-400 w-full"
            >
              <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 border-b pb-2">
                Feedback
              </div>
              <div className="prose max-w-none text-gray-600">
                <p className="text-sm sm:text-base">
                  If you submit suggestions, ideas, comments, or questions
                  containing product feedback about any Content or the Platform
                  (Feedback), you grant us a worldwide, non-exclusive,
                  royalty-free, perpetual, and irrevocable right to use,
                  reproduce, modify, adapt, publish, translate, create
                  derivative works from, distribute, transmit, and display such
                  Feedback in any form. You will have no intellectual property
                  rights in any Content or Platform as a result of our
                  incorporation of Feedback.
                </p>
              </div>
            </motion.div>

            <motion.div
              id="payments"
              variants={childVariants}
              className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 mb-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-400 w-full"
            >
              <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 border-b pb-2">
                Payments and Refunds
              </div>
              <div className="prose max-w-none text-gray-600">
                <p className="text-sm sm:text-base">
                  To register or enroll for any Content, you may need to pay a
                  fee (Content Fee). Refer to our Platform for pricing details.
                  Payment of the Content Fee will be processed through
                  third-party payment processors and may be subject to
                  applicable taxes. Please review the terms and policies of the
                  third-party payment processors for more information. Once you
                  purchase access to Content on the Platform, the purchase
                  cannot be canceled, and no refund of the Content Fee will be
                  provided, unless otherwise stated in our Refund Policy.
                </p>
              </div>
            </motion.div>

            <motion.div
              id="shipping"
              variants={childVariants}
              className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 mb-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-400 w-full"
            >
              <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 border-b pb-2">
                Shipping Policy
              </div>
              <div className="prose max-w-none text-gray-600">
                <p className="text-sm sm:text-base">
                  Thank you for choosing hansei.in for your educational needs.
                  We offer electronic delivery of all our products, meaning
                  there is no physical shipment involved. Once you complete your
                  purchase, your product will be made available according to the
                  delivery timeline specified on the product page. We strive to
                  provide timely and efficient delivery of our products and are
                  confident in your satisfaction with our service.
                </p>
              </div>
            </motion.div>

            <motion.div
              id="disclaimer"
              variants={childVariants}
              className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 mb-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-400 w-full"
            >
              <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 border-b pb-2">
                Disclaimer
              </div>
              <div className="prose max-w-none text-gray-600">
                <p className="text-sm sm:text-base">
                  The Platform is provided as is and as available, with all
                  faults and defects, without warranty of any kind. To the
                  maximum extent permitted by applicable law, the Creator, on
                  its own behalf and on behalf of its affiliates, licensors, and
                  service providers, expressly disclaims all warranties, whether
                  express, implied, statutory, or otherwise, including implied
                  warranties of merchantability, fitness for a particular
                  purpose, title, and non-infringement. Without limitation, the
                  Creator makes no representation or warranty regarding the
                  operation or availability of the Platform, or that it will be
                  uninterrupted or error-free, or that the information, content,
                  and materials available on the Platform will be accurate,
                  reliable, or current. The Creator also disclaims any
                  warranties that the Platform, its servers, the content, or
                  emails sent from or on behalf of the Creator are free of
                  viruses or other harmful components.
                </p>
              </div>
            </motion.div>

            <motion.div
              id="liability"
              variants={childVariants}
              className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 mb-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-400 w-full"
            >
              <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 border-b pb-2">
                Limitation of Liability
              </div>
              <div className="prose max-w-none text-gray-600">
                <p className="text-sm sm:text-base">
                  In no event shall the Creator be liable for any damages
                  (including loss of data or profit, or business interruption)
                  arising from the use or inability to use the Content or any
                  other materials on the Platform, even if the Creator has been
                  notified of the possibility of such damages. Some
                  jurisdictions do not allow limitations on implied warranties
                  or liability for consequential or incidental damages, so these
                  limitations may not apply to you.
                </p>
              </div>
            </motion.div>

            <motion.div
              id="indemnity"
              variants={childVariants}
              className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 mb-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-400 w-full"
            >
              <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 border-b pb-2">
                Indemnity and Release
              </div>
              <div className="prose max-w-none text-gray-600">
                <p className="text-sm sm:text-base">
                  You shall indemnify and hold harmless the Creator and its
                  officers, directors, agents, and employees from any claim or
                  demand, including reasonable attorney`s fees, made by any
                  third party due to or arising from your breach of this
                  Agreement or your violation of any law or rights of a third
                  party.
                </p>
              </div>
            </motion.div>

            <motion.div
              id="thirdparty"
              variants={childVariants}
              className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 mb-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-400 w-full"
            >
              <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 border-b pb-2">
                Links to Third Party Websites
              </div>
              <div className="prose max-w-none text-gray-600">
                <p className="text-sm sm:text-base">
                  The Creator has not reviewed all sites linked to the Platform
                  and is not responsible for the contents of any linked site.
                  Inclusion of any link does not imply endorsement by the
                  Creator. Use of any linked website is at your own risk.
                </p>
              </div>
            </motion.div>

            <motion.div
              id="governing"
              variants={childVariants}
              className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 mb-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-400 w-full"
            >
              <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 border-b pb-2">
                Governing Law and Jurisdiction
              </div>
              <div className="prose max-w-none text-gray-600">
                <p className="text-sm sm:text-base">
                  Any claim relating to the Platform shall be governed by the
                  laws of the Creator`s home jurisdiction, without regard to its
                  conflict of law provisions. You agree to submit to the
                  exclusive jurisdiction of the courts in the Creator`s home
                  jurisdiction.
                </p>
              </div>
            </motion.div>

            <motion.div
              id="miscellaneous"
              variants={childVariants}
              className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 mb-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-gray-400 w-full"
            >
              <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 border-b pb-2">
                Miscellaneous
              </div>
              <div className="prose max-w-none text-gray-600 space-y-2 sm:space-y-3">
                <div>
                  <div className="font-bold text-gray-800 text-sm sm:text-base">
                    Alteration of Platform or Amendments to Conditions:
                  </div>
                  <p className="text-sm sm:text-base">
                    We reserve the right to make changes to our Platform,
                    policies, and this Agreement at any time. We will post new
                    terms with a revision date. You are subject to the policies
                    in force at the time you use the Platform, unless required
                    by law or government authority. If any condition is deemed
                    invalid, void, or unenforceable, it will be severable and
                    not affect the validity of other conditions.
                  </p>
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm sm:text-base">
                    Waiver:{" "}
                  </div>
                  <p className="text-sm sm:text-base">
                    If you breach these conditions and we take no action, we
                    will still be entitled to use our rights and remedies in any
                    other situation where you breach these conditions.
                  </p>
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm sm:text-base">
                    Assignment:{" "}
                  </div>
                  <p className="text-sm sm:text-base">
                    You may not assign or transfer this Agreement. Any attempt
                    will be null and void.
                  </p>
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm sm:text-base">
                    Severability:{" "}
                  </div>
                  <p className="text-sm sm:text-base">
                    If any provision is adjudged unenforceable or invalid, it
                    will be limited to the minimum extent necessary, so this
                    Agreement will remain in effect.
                  </p>
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm sm:text-base">
                    Events beyond our reasonable control:{" "}
                  </div>
                  <p className="text-sm sm:text-base">
                    We are not responsible for delays or failures to comply with
                    our obligations under these conditions if the delay or
                    failure arises from any cause beyond our control. This does
                    not affect your statutory rights.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>  

        {/* Footer with "Back to top" button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 text-center w-full"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-3 ml-0 md:ml-80 mb-7 bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-gray-800 font-semibold rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to top
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfUse;
