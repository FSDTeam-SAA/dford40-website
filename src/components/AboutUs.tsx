import { Eye, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <main id="about" className="min-h-screen bg-[#F1F1F1] pt-6">
      {/* Header Section */}
      <section className="w-full pt-20 ">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Us
            </h1>
            <div className="h-4 w-32 bg-blue-500 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="w-full py-8 ">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify max-w-4xl mx-auto">
            Since our founding, TTI&apos;s core services have evolved from
            Central Office installation and maintenance to Wireless Network
            Deployment, Outside Plant (OSP) Engineering, and Wireline
            maintenance and protection. Today, we have an extensive Field Force
            of Engineers and Technicians, enabling communications across the
            world.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="w-full py-8 bg-[#F1F1F1]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-lg bg-gray-100">
                  <Target
                    className="h-8 w-8 md:h-10 md:w-10 text-gray-900"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Mission
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Our mission is to connect the world to information through
                  reliable communication networks that connect families,
                  friends, businesses, and communities. We strive to be a
                  premier partner to every primary service provider in designing
                  and implementing their network infrastructure.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-lg bg-gray-100">
                  <Eye
                    className="h-8 w-8 md:h-10 md:w-10 text-gray-900"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Vision
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Our vision is to empower the community of tradesmen,
                  entrepreneurs, and small businesses to play a pivotal role in
                  the growth of the communications network through partnerships,
                  resources, and community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="container mx-auto"
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
          aspectRatio: "2 / 1",
        }}
      >
        <Image
          src="/aboutus.svg"
          alt="about us"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw, 
           400px"
        />
      </div>
      <div className="w-full py-8 bg-white text-center">
        <h1 className="text-xl font-bold mb-4 text-black">
          Message us if you are interested in our services or becoming a partner
        </h1>

        <Link href="#">
          <button className="px-6 py-2 bg-[#011F44] text-white  hover:bg-gray-800 transition rounded-full">
            Contact Us
          </button>
        </Link>
      </div>
    </main>
  );
}
