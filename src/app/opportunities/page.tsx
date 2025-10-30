import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const jobs = [
    {
      title: "Construction Manager",
      details: "Full time • Sacramento, CA • $30/hr",
    },
    {
      title: "Inspector / Locator",
      details: "Contract • Pittsburgh, PA • $20/hr",
    },
    {
      title: "Locator / Inspector - Cleveland",
      details: "Contract • Cleveland, OH • $20 - $25/hr",
    },
    {
      title:
        "Field Manager - CIC Market (Cincinnati / Indianapolis / Columbus)",
      details:
        "Contract • Cincinnati, OH / Indianapolis, IN / Columbus, OH • $40 - $50/hr",
    },
  ];
  return (
    <>
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/ohero.jpg"
            alt="City Buildings"
            fill
            className="object-cover object-center"
            priority
          />

          {/* black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="text-center px-4 md:px-8 lg:px-16">
          <h1 className="text-sm md:text-base lg:text-8xl text-white tracking-widest mb-3 font-bold">
            Work With TTI
          </h1>
        </div>
      </section>

      <main className="">
        <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
              {/* For Individuals Card */}
              <div className="flex flex-col items-center text-center">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-2xl lg:text-3xl">
                  For Individuals
                </h2>
                <p className="mb-6 text-sm text-gray-700 sm:text-base md:text-sm lg:text-base leading-relaxed">
                  TTI is seeking experienced tradesmen across multiple
                  disciplines to support our work with government agencies and
                  major corporations. We offer stable projects, professional
                  development, and the opportunity to work with industry
                  leaders.
                </p>
                <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full text-sm sm:text-base">
                  View Job Openings
                </Button>
              </div>

              {/* For Business Owners Card */}
              <div className="flex flex-col items-center text-center">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-2xl lg:text-3xl">
                  For Business Owners
                </h2>
                <p className="mb-6 text-sm text-gray-700 sm:text-base md:text-sm lg:text-base leading-relaxed">
                  TTI serves as a Prime/Tier 1 Supplier to many Government
                  Agencies and Fortune 1000 corporations. We are always looking
                  for local partners to expand our capabilities. We offer
                  training, coaching, mentoring for many of our projects.
                </p>
                <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full text-sm sm:text-base">
                  Join Partner Network
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-center md:text-left">
          Job Openings
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-blue-900 mb-2 leading-snug">
                {job.title}
              </h2>
              <p className="text-gray-600 text-base sm:text-lg font-medium mb-4">
                {job.details}
              </p>
              <Link
                href="#"
                className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors text-base sm:text-lg"
              >
                More info <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
