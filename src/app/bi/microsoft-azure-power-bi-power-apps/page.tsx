import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-6xl font-light mb-4">
                Microsoft Azure Power BI and Power Apps
              </h1>
              <p className="text-gray-300 mb-8 max-w-md">
                We help organizations leverage Microsoft Power BI for advanced
                data analytics and Power Apps for no-code business application
                development. Our expertise enables businesses to visualize data
                effectively, streamline operations, and automate workflows—all
                within the secure and scalable Microsoft Azure ecosystem.
              </p>
              <div className="flex">
                <a
                  href="/contact-us"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded"
                >
                  Talk to Expert
                </a>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-2">
              <div className="bg-purple-500 h-48 rounded overflow-hidden">
                <Image
                  src="/images/BI_1.png"
                  alt="Colorful data visualization"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-purple-700 h-48   rounded overflow-hidden">
                <Image
                  src="/images/BI_3.png"
                  alt="Data visualization"
                  width={800}
                  height={600}
                  className="w-full h-full "
                />
              </div>
              <div className="bg-purple-500 h-48 rounded overflow-hidden">
                <Image
                  src="/images/BI_2.png"
                  alt="Colorful data visualization"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Service Propositions */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-medium text-gray-700 mb-12">
              Key Service Propositions
            </h2>

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
                  End-to-End Implementation
                </h3>
                <p className="text-gray-600 mb-6">
                  From planning to deployment, we handle the entire process.
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
                  Custom Dashboards & Applications
                </h3>
                <p className="text-gray-600 mb-6">
                  Solutions tailored to business needs.
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
                  Seamless Google Ecosystem Integration
                </h3>
                <p className="text-gray-600 mb-6">
                  Works with Microsoft 365, Azure, SharePoint, SQL Server, and
                  more.
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
                  Automated Workflows & Reporting
                </h3>
                <p className="text-gray-600 mb-6">
                  Improve efficiency with automation and intelligent analytics.
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
                  Secure & Scalable Solutions
                </h3>
                <p className="text-gray-600 mb-6">
                  Built with enterprise-grade security and compliance.
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
                  Ongoing Support & Optimization
                </h3>
                <p className="text-gray-600 mb-6">
                  Continuous monitoring, updates, and user training.{" "}
                </p>
               
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="py-16 relative ">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-2xl font-medium text-gray-700  mb-10">
            Detailed Service Offerings
          </h2>

          {/* Tab Pills */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white rounded-full shadow-md flex-wrap">
              <div className="px-6 py-3 rounded-full flex items-center bg-white shadow-sm">
                <div className="w-100 h-100 mr-2">
                  <Image
                    src="/images/BI_15.png"
                    alt="Looker icon"
                    width={800}
                    height={600}
                    className="w-full h-full font-bold object-contain"
                  />
                </div>
                {/* <span className="text-gray-600 font-medium">Google Looker Studio Services</span> */}
              </div>
              <div className="px-6 py-3 rounded-full flex items-center">
                <div className="w-100 h-100 mr-2">
                  <Image
                    src="/images/BI_16.png"
                    alt="AppSheet icon"
                    width={800}
                    height={600}
                    className="w-full h-full font-bold object-contain"
                  />
                </div>
                {/* <span className="text-gray-600">Google AppSheet Services</span> */}
              </div>
            </div>
          </div>

          {/* Services Content Box */}
          <div className="w-full max-w-5xl mx-auto px-4 py-8 bg-white shadow-2xl rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-8">
                {[
                  {
                    title: "📊 Custom Reports & Dashboards",
                    description:
                      "Interactive, real-time data visualization and analytics.",
                  },
                  {
                    title: "📤 No-Code/Low-Code Application Development",
                    description: "Build business apps quickly with minimal coding.",
                  },
                  {
                    title: "🔗 Mobile & Web-Optimized Apps",
                    description:
                      "Access business apps on any device with real-time data synchronization.",
                  },
                ].map((service, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-2">
                      {/* <div className="w-6 h-6 mr-2">
                <img src={service.img} alt={service.title} className="w-full h-full object-contain" />
              </div> */}
                      <h3 className="text-lg font-bold text-gray-800">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 ml-8">{service.description}</p>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {[
                  {
                    title: "📈 Security & Role-Based Access",
                    description: "Control user permissions and data security within Microsoft’s framework.",
                  },
                  {
                    title: "⚡Seamless Integration",
                    description: "Connect with SharePoint, Microsoft 365, Dynamics 365, SQL, and third-party APIs.",
                  },
                ].map((service, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-2">
                      {/* <div className="w-6 h-6 mr-2">
                <img src={service.img} alt={service.title} className="w-full h-full object-contain" />
              </div> */}
                      <h3 className="text-lg font-bold text-gray-800">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 ml-8">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative  w-full">
        {/* Background Image */}
        <div className="absolute bottom-0 right-0 w-full h-full z-0 opacity-10">
          <Image
            src="/images/BI_10.png"
            alt="Background shape"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Workloads Section */}
        <div className="relative z-10 mx-auto max-w-6xl p-8">
          <h2 className="text-2xl font-medium text-gray-700 mb-8">
            Supported Workloads
          </h2>

          {/* Workload Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                title: "Enterprise Data Analytics ",
                description:
                  "Sales, finance, marketing, and operational reporting.",
              },
              {
                title: "Business Process Automation",
                description:
                  "Automate manual workflows and reduce inefficiencies.​",
              },
              {
                title: "Asset & Inventory Management",
                description:
                  "Track, monitor, and manage business resources in real-time.",
              },
              {
                title: "Customer & Employee Portals ",
                description:
                  "Self-service applications for clients and internal teams.",
              },
              {
                title: "Compliance & Risk Management ",
                description:
                  "Secure data handling, audit trails, and policy adherence. ",
              },
            ].map((workload, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex"
              >
                <div className="w-8 h-8 mr-3 flex-shrink-0">
                  <Image
                    src="/images/BI_11.png"
                    alt="Checkmark icon"
                    width={800}
                    height={600}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-1">
                    {workload.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {workload.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" py-16 relative">
        <div className="container mx-auto px-4 md:px-8">
          {/* Suggested Use Cases Section */}
          <h2 className="text-2xl font-medium text-gray-700 mb-12 ">
            Suggested Use Cases
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
                Enterprise & SMB Analytics
              </h3>
              <p className="text-gray-600">
                Improve decision-making with data-driven insights
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
                Supply Chain & Inventory Management
              </h3>
              <p className="text-gray-600">
                Real-time tracking of stock and logistics
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
                Sales & Marketing Performance
              </h3>
              <p className="text-gray-600">
                Monitor campaigns, lead conversions, and sales trends
              </p>
            </div>
          </div>

          {/* Similar Services Section */}

          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Text */}
            <div className="md:w-1/2 pt-12">
              <h2 className="text-3xl font-medium text-gray-700 mb-8 ">
                Similar Services
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                We offer expert consulting in cloud management,
                containerization, DevSecOps, and data management, helping
                businesses optimize and secure their IT infrastructure.
              </p>
            </div>

            {/* Right Column - Microsoft Azure Power BI Card */}
            <div className="md:w-1/2">
                         <a
                           href="/bi/looker-studio"
                           className="block hover:no-underline"
                         >
                           <div className="bg-white pb-16 rounded-xl shadow-2xl p-8 flex flex-col items-center text-center transition-transform duration-500 hover:scale-105">
                             <div className="w-24 h-24 mb-6">
                               <Image
                                 src="/images/Group 517.png"
                                 alt="Cloud upload icon"
                                 width={800}
                                 height={600}
                                 className="w-full h-full object-contain"
                               />
                             </div>
                             <h3 className="text-3xl font-bold text-gray-800 mb-2">
                             Google Looker Studio and AppSheet
                             </h3>
                           </div>
                         </a>
                       </div>
          </div>
        </div>
      </div>
    </div>
  );
}
