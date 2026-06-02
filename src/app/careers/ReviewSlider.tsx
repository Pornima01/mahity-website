"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function ReviewSlider() {
  const reviews = [
    {
      id: 1,
      platform: "Ganesh Shinde",
      logo: "/images/WhatsApp Image 2025-02-27 at 12.02.31 PM.jpeg",
      text: `"Mahity is a fantastic place to work! The culture is innovative, and the team is highly supportive."`,
      rating: "⭐⭐⭐⭐⭐",
      score: "(4.9/5)",
    },
    {
      id: 2,
      platform: "Trustpilot",
      logo: "/images/Hero-image.png",
      text: `"Amazing experience! The support team is responsive, and the technology stack is up-to-date."`,
      rating: "⭐⭐⭐⭐⭐",
      score: "(4.8/5)",
    },
    {
      id: 3,
      platform: "Glassdoor",
      logo: "/images/Hero-image.png",
      text: `"Great work-life balance and an inspiring leadership team."`,
      rating: "⭐⭐⭐⭐⭐",
      score: "(4.7/5)",
    },
    {
      id: 4,
      platform: "Clutch",
      logo: "/images/Hero-image.png",
      text: `"Highly recommend Mahity for tech solutions. They deliver top-quality results."`,
      rating: "⭐⭐⭐⭐⭐",
      score: "(5.0/5)",
    },
  ];

  return (
    <section className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] bg-[#F68A2A] p-8 rounded-lg shadow-lg min-h-[600px] flex flex-col justify-center 
    transition duration-300 hover:scale-105 hover:shadow-2xl mx-auto relative">
    
    <div className="text-xl font-bold text-[#333] mb-4 text-center text-black" >Recent Reviews</div>

    <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full"
    >
        {reviews.map((review) => (
            <SwiperSlide key={review.id} className="flex justify-center">
                <div className="bg-white p-6 rounded-lg shadow-md text-left min-h-[300px] flex flex-col justify-center 
                    w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto hover:scale-105 transition duration-300">
                    <div className="flex items-center mb-2">
                        <Image src={review.logo} alt={review.platform} 
                                width={450}
                                height={300}
                        className="w-8 h-8 mr-2" />
                        <h3 className="text-xl font-semibold">{review.platform}</h3>
                    </div>
                    <p className="text-gray-700 italic">{review.text}</p>
                    <div className="flex items-center mt-2">
                        {review.rating} <span className="ml-2 text-gray-600">{review.score}</span>
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>

    {/* Upward Curved Arrow */}
    <svg
        className="w-24 h-12 mx-auto mt-4"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10 50 Q50 50, 90 10"  // This creates an upward curve
            stroke="black"
            strokeWidth="2"
            fill="transparent"
            markerEnd="url(#arrowhead)"
        />
        <defs>
            <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="5"
                refY="3.5"
                orient="auto"
            >
                <polygon points="0 0, 10 3.5, 0 7" fill="black" />
            </marker>
        </defs>
    </svg>

    {/* Slanted Text */}
    <p className="text-md italic font-semibold text-black text-center mt-2 rotate-[10deg]">
        True reviews from true customers
    </p>
</section>

  
  );
}
