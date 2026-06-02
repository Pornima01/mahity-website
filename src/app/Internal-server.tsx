"use client";

import { Link } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col  gap-12 items-center justify-center h-screen bg-black pb-52">
      <div className="flex flex-row items-center justify-center">
        <div className="ml-12">
          <h1 className="text-gray-700 text-6xl ">500</h1>
          <p className="text-orange-600 text-2xl font-bold mb-4 ">Whoops!</p>
          <p className="text-yellow-500 mb-2 ml-20 text-2xl">
            Our Servers seems to be taking a break
          </p>
          <p className="text-yellow-500 mb-16 text-2xl">
            We are doing our best to fix it,so check soon
          </p>
          <Link
            href="/"
            className=" from-orange-600 to-yellow-500 hover:from-yellow-600 hover:to-orange-600 mt-12 text-white font-semibold py-4 px-8 rounded-3xl"
          >
            {" "}
            Refresh Page
          </Link>
        </div>
        <Image
          src="/images/Error_page 500.png"
          alt="404"
          width={400}
          height={400}
          className="animate-bounce"
        />
      </div>
    </div>
  );
}
