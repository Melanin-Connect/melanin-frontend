import Image from 'next/image';
import Link from 'next/link';
import heroIcon from '@/public/assets/hero-icon.png';
import heroMobile from  '@/public/assets/hero-mobil.png';
import heroShaps from '@/public/assets/hero-shaps.png';
import images from '@/public/assets/imgs.png';

const HeroSection = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <section className="container mx-auto px-6 md:px-12 lg:flex lg:items-center">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
            Empowering Your Business With <br /> 
            <span className="text-orange-500">AI and Blockchain Solutions</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Unlock the future of digital commerce with <strong>AI-powered tools</strong>,
            seamless <strong>blockchain payment systems</strong>, and personalized solutions
            designed to boost your brand and streamline your operations.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <Link href="/register">
              <button className="rounded-md bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600 transition">
                Register Now!
              </button>
            </Link>
            <Link href="/learn-more">
              <button className="rounded-md border border-gray-300 px-6 py-3 text-gray-800 font-medium hover:bg-gray-200 transition">
                Learn More →
              </button>
            </Link>
          </div>

          {/* Ratings */}
          <div className="mt-6 flex items-center gap-2">
            <div className="flex text-yellow-400">
              {'★★★★★'.split('').map((star, index) => (
                <span key={index}>{star}</span>
              ))}
            </div>
            <span className="text-gray-800 font-semibold">4.8/5 Rating</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-10 lg:mt-0 lg:w-1/2 relative">
          {/* Image Placeholder */}
          <div className="relative aspect-w-16 aspect-h-9">
            {/* Replace with your app screenshot */}
            <Image
              src="/assets/placeholder-app.png" 
              alt="App Screenshot"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Icon Placeholders */}
          <div className="absolute -top-8 -left-4">
            <Image src="/assets/placeholder-icon1.png" alt="Icon 1" width={50} height={50} />
          </div>
          <div className="absolute bottom-0 right-0">
            <Image src="/assets/placeholder-icon2.png" alt="Icon 2" width={60} height={60} />
          </div>
        </div>
      </section>

      {/* User Count Section */}
      <section className="mt-16 w-full bg-white py-4">
        <div className="container mx-auto flex items-center justify-center gap-4">
          {/* Avatar placeholders */}
          <div className="flex -space-x-4">
          
            <Image
              src={images}
              alt="User 3"
              width={50}
              height={50}
              className="rounded-full border border-white"
            />
          </div>
          <p className="text-gray-700 font-medium">
            <span className="font-bold text-gray-900">60 Million Users</span> Trust This App
          </p>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;

