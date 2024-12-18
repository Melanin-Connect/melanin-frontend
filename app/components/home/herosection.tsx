// components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import heroPhone from "../../../public/assets/hero-mobil.png";
import heroIcon from "../../../public/assets/hero-icon.png";
import herShape from "../../../public/assets/hero-shaps.png";
import Images from "../../../public/assets/imgs.png";
import Gradient from "../../../public/assets/gradient.png";

const HeroSection = () => {
    return (
        <section className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 text-center lg:text-left relative">
                        <Image
                            width={100}
                            height={100}
                            src={herShape}
                            alt="Background Shape"
                            className="absolute inset-0 top-[450px] left-[300px] hidden lg:block"
                        />
                        <h1 className="relative text-[#000] text-[16px] lg:text-[65px] font-bold lg:leading-[70px] leading-[25px] lg:mb-4 mb-2 font-epilogue">
                            Empowering Your Business With AI and Blockchain Solutions
                        </h1>
                        <p className="flex flex-col justify-center flex-shrink-0 text-[#444] font-epilogue lg:text-[18px] text-[16px] font-medium lg:leading-[30px] leading-[20px] mb-6 max-w-full">
                            Unlock the future of digital commerce with AI-powered tools, seamless blockchain payment systems, and personalized solutions designed to boost your brand and streamline your operations.
                        </p>
                        <div className="flex mt-4 mb-4 lg:mb-0 justify-center lg:justify-start space-x-4">
                            <button className="bg-[#FE7146] text-white text-[14px] lg:text-base py-1 lg:py-3 px-4 lg:px-14 rounded-full hover:bg-orange-600 transition w-3/4 sm:w-auto whitespace-nowrap">
                                Register Now
                            </button>
                            <Link href="/about" className="text-black  py-1 lg:py-3 text-sm lg:text-base px-6 font-bold whitespace-nowrap">
                                Learn More <strong>→</strong>
                            </Link>
                        </div>
                        <div className="mt-10 lg:mt-10 flex items-center justify-center lg:justify-start">
                            <span className="text-yellow-500">★★★★★</span>
                            <span className="ml-2 text-gray-600">4.8/5 Rating</span>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-4 lg:mt-0 relative">
                        <div className="absolute inset-1 -top-20 -right-20 hidden lg:block">
                            <Image
                                src={Gradient}
                                alt="hero"
                                width={900}
                                height={563.16}
                                className="flex-shrink-0"
                            />
                            <div className="absolute px-10 bottom-[-50px] left-20 bg-white p-4 rounded-full shadow-lg shadow-orange-500/20 flex items-center">
                                <Image
                                    src={Images}
                                    width={80}
                                    height={80}
                                    alt="User"
                                    className="rounded-full"
                                />
                                <span className="ml-2 text-gray-600">60 Million User Use This App</span>
                            </div>
                        </div>
                        <div className="relative  mt-20 lg:mt-0 flex items-center justify-center">
                            <div className="relative w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mx-auto">
                                <Image
                                    src={heroPhone}
                                    width={678}
                                    height={681}
                                    alt="Hero"
                                    className="absolute top-[-50px] lg:top-[-100px] right-[40px] lg:right-[80px]"
                                />
                                <Image
                                    src={heroIcon}
                                    width={700}
                                    height={800}
                                    alt="Hero"
                                    className="absolute right-18 lg:right-36"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
