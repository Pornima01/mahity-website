import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      className="w-full py-16 md:py-16 md:pb-28 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero Text Content */}
        <div className="text-center mb-12">
          <div className="text-2xl md:text-3xl lg:text-3xl font-normal text-gray-800 mb-4">
            {/* We Believe in <span className="text-orange-500">Creating</span> <span className="text-orange-500">Value-Driven</span> <span className="text-orange-500">Partnerships</span> that Drive Progress. */}
            From Migration to Optimization <span className="text-orange-500">Powering Cloud-Native Operations</span> End to End
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-8">
            Mahity delivers managed Kubernetes services, cloud infrastructure management, DevOps automation, observability, and data platform solutions across AWS, Azure, and Google Cloud.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center mb-16">
          <Link href="/contact-us" className="py-3 px-6 bg-orange-500 text-white rounded transition-colors hover:bg-orange-600 text-center">
            Contact Us
          </Link>
        </div>

        {/* Hero Illustration (Single Image) */}
        <div className="flex justify-center -mt-16">
          <Image
            src="/images/Hero-image.png"
            alt="Hero Section Illustration"
            width={900}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



// import Link from 'next/link';

// const HeroSection = () => {
//   return (
//     <section className="w-screen relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div 
//         className="absolute inset-0 w-full h-full bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/GCP.jpg')" }}
//       >
//         {/* White overlay to lighten the background */}
//         <div className="absolute inset-0 bg-white/70"></div>
//       </div>

//       {/* Content */}
//       <div className="w-full mx-auto px-4 md:px-8 relative z-10 py-16 md:py-24">
//         {/* Hero Text Content */}
//         <div className="text-center mb-12 max-w-6xl mx-auto">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight px-4">
//             From Migration to Optimization <span className="text-orange-500 block mt-2">Powering Cloud-Native Operations</span> End to End
//           </h1>
//           <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto mt-8 font-medium px-4">
//             Mahity delivers managed Kubernetes services, cloud infrastructure management, DevOps automation, observability, and data platform solutions across AWS, Azure, and Google Cloud.
//           </p>
//         </div>

//         {/* CTA Button */}
//         <div className="flex justify-center mt-10">
//           <Link href="/contact-us" className="py-4 px-8 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl hover:scale-105 text-center">
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };


// export default HeroSection;