import React from "react";
import Image from "next/image";

const EducationLearning = () => {
  return (
    <>
      <section className="relative flex flex-col items-center text-center p-10 bg-white rounded-lg shadow-md overflow-hidden">
        {/* Background Gradient Circle */}
        <div className="absolute right-10 top-1/3 w-80 h-80 bg-yellow-100 rounded-full blur-[3px] opacity-60"></div>

        {/* Heading & Icon - Centered */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/Group 483.png"
              alt="Icon"  
              width={50}
              height={50}
              className="object-contain"
            />
            <h2 className="text-4xl font-semibold text-gray-800">
              Google Classroom and Assignments
            </h2>
          </div>
        </div>

        {/* Image & Text - Centered */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mt-10 gap-10">
          {/* Image - Centered */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/image 49.png"
              alt="Learning Pathways"
              width={450}
              height={300}
              className="object-contain"
            />
          </div>

          {/* Text & Button - Centered */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <p className="mt-4 text-gray-600 max-w-lg">
              Empower your organization or educational institution with Google
              Classroom and Google Assignments, cutting-edge tools designed to
              streamline teaching, training, and learning. Our services ensure
              seamless implementation, adoption, and optimization to maximize
              engagement and productivity.
            </p>

            <div className="flex justify-center">
              <a
                href="/contact-us"
                className="mt-6 px-6 py-3 text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 transition-all"
              >
                Talk to Expert
              </a>
              </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-wrap items-center justify-center w-full min-h-[600px] p-6 bg-[#fefbea]">
        {/* Curved Background Shape - Now on the Right */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-white rounded-l-[400px]   hidden lg:block"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-wrap items-center justify-center w-full max-w-4xl">
          {/* Left Side - Features List with Increased Height */}
          <div className="  lg:w-1/2 p-6 bg-white rounded-lg shadow-lg min-h-[450px] flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Key Prepositions
            </h2>
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-center space-x-3">
                <Image
                  src="/images/Vector (3).png"
                  alt="Book Icon"
                  width={800}
                  height={600}
                  className="w-6 h-6"
                />
                <span> Seamless Digital Learning Environment </span>
              </li>
              <li className="flex items-center space-x-3">
                <Image
                  src="/images/Group 485.png"
                  alt="Engagement Icon"
                  width={450}
                  height={300}
                  className="w-6 h-6"
                />
                <span>Scalable Solutions</span>
              </li>
              <li className="flex items-center space-x-3">
                <Image
                  src="/images/Vector (2).png"
                  alt="Integration Icon"
                  width={450}
                  height={300}
                  className="w-6 h-6"
                />
                <span>Simplified Assignment & Grading Workflow </span>
              </li>
              <li className="flex items-center space-x-3">
                <Image
                  src="/images/Vector (3).png"
                  alt="Training Icon"
                  width={800}
                  height={600}
                  className="w-6 h-6"
                />
                <span> Integrated Google Workspace Experience</span>
              </li>
              <li className="flex items-center space-x-3">
                <Image
                  src="/images/Vector (3).png"
                  alt="Training Icon"
                  width={800}
                  height={600}
                  className="w-6 h-6"
                />
                <span> Enhanced Engagement & Accessibility </span>
              </li>
              <li className="flex items-center space-x-3">
                <Image
                  src="/images/Vector (3).png"
                  alt="Training Icon"
                  width={800}
                  height={600}
                  className="w-6 h-6"
                />
                <span>Expert Implementation & Training </span>
              </li>
            </ul>
          </div>

          {/* Right Side - Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
            <Image
              src="/images/image 63.png"
              alt="Illustration"
              width={800}
              height={600}
              className="w-80 lg:w-96 h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="relative flex flex-col lg:flex-row items-center justify-center w-full min-h-screen p-10 bg-[#fefbea]">
        {/* Red Circle - Left Corner */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full opacity-70"></div>

        {/* Yellow Circle - Right Corner */}
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-100 rounded-full opacity-70"></div>

        {/* Curved Background Shape */}
        <div className="absolute left-0 top-0 w-1/2 h-full bg-white rounded-r-[400px] hidden lg:block"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 text-center lg:text-left px-6">
            <h3 className="text-gray-500 text-lg">
              Detailed Service Offerings:
            </h3>
            <h2 className="text-2xl font-bold text-gray-800">
              Microsoft Learning Pathways:
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center space-x-2 justify-center lg:justify-start">
                <Image
                  src="/images/Vector (1).png"
                  alt="Check Icon"
                  width={800}
                  height={600}
                  className="w-5 h-5"
                />
                <div>
                  <span className="font-bold">Deployment & Configuration </span>
                  <p className="text-xs">
                    {" "}
                    Set up Google Classroom tailored to your organization’s
                    needs.{" "}
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-2 justify-center lg:justify-start">
                <Image
                  src="/images/Vector (1).png"
                  alt="Check Icon"
                  width={800}
                  height={600}
                  className="w-5 h-5"
                />
                <div>
                  <span className="font-bold">
                    Custom Course & Content Creation
                  </span>
                  <p className="text-xs">
                    {" "}
                    Design structured courses with multimedia content and
                    interactive resources.{" "}
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-2 justify-center lg:justify-start">
                <Image
                  src="/images/Vector (1).png"
                  alt="Check Icon"
                  width={800}
                  height={600}
                  className="w-5 h-5"
                />
                <div>
                  <span className="font-bold">
                    Collaboration & Communication Setup{" "}
                  </span>
                  <p className="text-xs">
                    {" "}
                    Facilitate discussions, announcements, and feedback loops.{" "}
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-2 justify-center lg:justify-start">
                <Image
                  src="/images/Vector (1).png"
                  alt="Check Icon"
                  width={800}
                  height={600}
                  className="w-5 h-5"
                />
                <div>
                  <span className="font-bold">
                    User Access & Role Management{" "}
                  </span>
                  <p className="text-xs">
                    {" "}
                    Define roles for instructors, learners, and administrators.{" "}
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-2 justify-center lg:justify-start">
                <Image
                  src="/images/Vector (1).png"
                  alt="Check Icon"
                  width={800}
                  height={600}
                  className="w-5 h-5"
                />
                <div>
                  <span className="font-bold">
                    Data & Analytics Integration{" "}
                  </span>
                  <p className="text-xs">
                    {" "}
                    Track engagement, progress, and performance with real-time
                    insights.{" "}
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-2 justify-center lg:justify-start">
                <Image
                  src="/images/Vector (1).png"
                  alt="Check Icon"
                  width={800}
                  height={600}
                  className="w-5 h-5"
                />
                <div>
                  <span className="font-bold">
                    Best Practices for Adoption{" "}
                  </span>
                  <p className="text-xs">
                    {" "}
                    Implement strategies to drive usage and effective learning
                    outcomes.{" "}
                  </p>
                </div>
              </li>
            </ul>
            {/* <div className="flex justify-center lg:justify-start">
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Know more
              </button>
            </div> */}
          </div>

          {/* Right Side - Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center px-6 relative">
            <Image
              src="/images/image 50.png"
              alt="Illustration"
              width={800}
              height={600}
              className="w-80 lg:w-96 h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <div className="relative bg-white p-6 md:p-12 flex flex-col md:flex-row items-center justify-center overflow-hidden">
        {/* Background Curves */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-100 to-transparent transform -rotate-6 md:-rotate-12 md:scale-125 z-0" />
        <div className="absolute left-10 top-1/3 w-80 h-80 bg-yellow-100 rounded-full blur-[3px] opacity-60" />

        {/* Left Section - Illustration */}
        <div className="md:w-1/2 flex justify-center relative z-10">
          <Image
            src="/images/image 51.png"
            alt="Illustration"
            width={500}
            height={350}
            className="object-cover"
          />
        </div>

        {/* Right Section - Content */}
        <div className="md:w-1/2 p-6 relative z-10">
          <h2 className="text-gray-700 text-xl font-semibold mb-4">
            Microsoft Viva Platform
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✔</span>
              <div>
                <h3 className="text-gray-900 font-semibold">
                  Microsoft Viva Learning
                </h3>
                <p className="text-gray-600 text-sm">
                  Centralize learning content from LinkedIn Learning, Microsoft
                  Learn, and third-party platforms.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✔</span>
              <div>
                <h3 className="text-gray-900 font-semibold">
                  Microsoft Viva Insights
                </h3>
                <p className="text-gray-600 text-sm">
                  Leverage AI-driven analytics to improve well-being and
                  productivity.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✔</span>
              <div>
                <h3 className="text-gray-900 font-semibold">
                  Microsoft Viva Connections
                </h3>
                <p className="text-gray-600 text-sm">
                  Enhance internal communication and engagement with a
                  personalized digital workspace.
                </p>
              </div>
            </div>
            <p className="text-gray-800 font-semibold mt-4">And Much More….</p>
            {/* <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Know more
            </button> */}
          </div>
        </div>
      </div>

      {/* Microsoft lerning Propositions */}
      <section
        style={{
          backgroundImage: "url('/images/education_1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-16 pt-32"
      >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-5xl font-medium text-gray-700 mb-6 text-center ">
            Google Classroom Use Cases{" "}
          </h2>
          <p className="text-lg text-gray-600 mb-32 text-center">
            Google Classroom is a powerful learning management system (LMS)
            designed for educators to streamline teaching, collaboration, and
            communication.{" "}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="border-2 border-gray-200 rounded-lg p-6 transition-transform duration-500 hover:scale-105">
              <div className="h-12 w-12 mb-4">
                <Image
                  src="/images/BI_4.png"
                  alt="Implementation icon"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                K-12 & Higher Education Learning Management{" "}
              </h3>
              <p className="text-gray-600 mb-6">
                Organize courses, assignments, and communication in one place.
              </p>
              
            </div>

            {/* Service 2 */}
            <div className="border-2 border-gray-200 rounded p-6 transition-transform duration-500 hover:scale-105">
              <div className="h-12 w-12 mb-4">
                <Image
                  src="/images/BI_5.png"
                  alt="Dashboard icon"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Blended & Remote Learning
              </h3>
              <p className="text-gray-600 mb-6">
                Facilitate online and hybrid education with real-time
                collaboration.
              </p>
            
            </div>

            {/* Service 3 */}
            <div className="border-2 border-gray-200 rounded p-6 transition-transform duration-500 hover:scale-105">
              <div className="h-12 w-12 mb-4">
                <Image
                  src="/images/BI_6.png"
                  alt="Integration icon"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {" "}
                Classroom Collaboration & Discussions
              </h3>
              <p className="text-gray-600 mb-6">
                Enable interactive learning through comments, discussions, and
                group projects.
              </p>
              
            </div>

            {/* Service 4 */}
            <div className="border-2 border-gray-200 rounded p-6 transition-transform duration-500 hover:scale-105">
              <div className="h-12 w-12 mb-4">
                <Image
                  src="/images/BI_7.png"
                  alt="Workflow icon"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Automated Grading & Feedback
              </h3>
              <p className="text-gray-600 mb-6">
                {" "}
                Use rubrics and AI-assisted grading to assess student work
                efficiently.
              </p>
              
            </div>

            {/* Service 5 */}
            <div className="border-2 border-gray-200 rounded p-6 transition-transform duration-500 hover:scale-105">
              <div className="h-12 w-12 mb-4">
                <Image
                  src="/images/BI_8.png"
                  alt="Security icon"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Student Progress Tracking
              </h3>
              <p className="text-gray-600 mb-6">
                {" "}
                Monitor assignments, grades, and engagement analytics.
              </p>
              
            </div>

            {/* Service 6 */}
            <div className="border-2 border-gray-200 rounded p-6 transition-transform duration-500 hover:scale-105">
              <div className="h-12 w-12 mb-4">
                <Image
                  src="/images/BI_9.png"
                  alt="Support icon"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Parent & Guardian Communication
              </h3>
              <p className="text-gray-600 mb-6">
                Keep parents informed about student progress and upcoming
                deadlines.
              </p>
              
            </div>

            <div className="border-2 border-gray-200 rounded p-6 transition-transform duration-500 hover:scale-105">
              <div className="h-12 w-12 mb-4">
                <Image
                  src="/images/BI_9.png"
                  alt="Support icon"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Professional Development & Teacher Training
              </h3>
              <p className="text-gray-600 mb-6">
                {" "}
                Train educators on digital tools and teaching strategies.
              </p>
              
            </div>

            <div className="border-2 border-gray-200 rounded p-6 transition-transform duration-500 hover:scale-105">
              <div className="h-12 w-12 mb-4">
                <Image
                  src="/images/BI_9.png"
                  alt="Support icon"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Corporate Training & Employee Onboarding{" "}
              </h3>
              <p className="text-gray-600 mb-6">
                {" "}
                Use Google Classroom for internal training programs and
                certification courses.{" "}
              </p>
              
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pt-20 md:px-8">
        {/* Suggested Use Cases Section */}
        <h2 className="text-4xl font-medium text-gray-700 mb-12 ">
          {" "}
          Google Assignments Use Cases{" "}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Enterprise & SMB Analytics */}
          <div>
            <div className="mb-4 rounded-lg overflow-hidden shadow-sm h-50 transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/BI_12.png"
                alt="Enterprise office space"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Company News Announcements
            </h3>
            <p className="text-gray-600">
              Centralized hub for corporate updates and leadership messages
            </p>
          </div>

          {/* Supply Chain & Inventory Management */}
          <div>
            <div className="mb-4 rounded-lg overflow-hidden shadow-sm h-50 transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/BI_13 (1).png"
                alt="Team collaborating around laptop"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Employee Engagement & Recognition
            </h3>
            <p className="text-gray-600">
              Foster a connected workforce With interactive cornmunities
            </p>
          </div>

          {/* Sales & Marketing Performance */}
          <div>
            <div className="mb-4 rounded-lg overflow-hidden shadow-sm h-50 transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/BI_14.png"
                alt="Team meeting in conference room"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              HR & Benefits Portal
            </h3>
            <p className="text-gray-600">
              Provide easy access to HR resources, benefits, and company
              policies
            </p>
          </div>
        </div>

        {/* Similar Services Section */}

        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl  font-semibold mb-20">
            Similar Service We Provide
          </h1>

         {/* Right Column - Microsoft Azure Power BI Card */}
                   <div className="w-full md:w-1/2 lg:w-1/3">
                     <a
                       href="/learning/microsoft-viva"
                       className="block hover:no-underline"
                     >
                       <div className="bg-white pb-16 rounded-xl shadow-2xl p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-lg">
                         <div className="w-24 h-24 mb-6">
                           <Image
                             src="/images/Group 517.png"
                             alt="Cloud upload icon"
                             width={450}
                             height={300}
                             className="w-full h-full object-contain"
                           />
                         </div>
                         <div className="text-center">
                           <h3 className="text-3xl font-bold text-gray-800 mb-2">
                           Microsoft Learning Pathways and Viva
                           </h3>
                         </div>
                       </div>
                     </a>
                   </div>
        </div>
      </div>
    </>
  );
};

export default EducationLearning;
