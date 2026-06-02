import Image from 'next/image';
import Link from 'next/link';

export default function Error_page_401() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
  <h1 className="text-4xl font-bold text-gray-700">Authorization Required</h1>
  
  <div className="relative w-64 h-64 mt-8">
    <Image
      src="/images/Error_page 401.png"
      alt="Authorization Required"
      layout="fill"
      objectFit="contain"
    />
  </div>

  <Link
    href="/"
    className="bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-yellow-600 hover:to-orange-600 mt-12 text-white font-semibold py-4 px-8 rounded-3xl transition-all duration-300 shadow-lg"
  >
    Go to Home Page
  </Link>
</div>

  );
}