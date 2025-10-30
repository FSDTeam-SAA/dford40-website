import Image from "next/image";

export default function Wwo() {
  const services = [
    {
      title: "Engineering",
      image: "/wwo1.jpg",
      description:
        "Our seasoned team of engineers meticulously plan and design Outside Plant infrastructure, ensuring optimal performance and future scalability. From initial assessments to comprehensive blueprints, we lay the groundwork for seamless telecommunication networks.",
      items: [
        "Right of Way",
        "Site Acquisition",
        "OSP Drafting & Design",
        "Joint Use Proposals",
        "Permitting",
      ],
    },
    {
      title: "Field Services",
      image: "/wwo2.jpg",
      description:
        "We are experts in deploying Field Service Resources. Our field teams bring unmatched expertise to the installation of network infrastructure equipment. Whether deploying fiber optic cables or advanced communication nodes, our team executes with quality and efficiency.",
      items: [
        "Work Order Fulfillment",
        "Wireless Integration & Commissioning",
        "Equipment Deployment and Installation",
        "Facilities Management",
        "811 Response (Utility Locating)",
        "Audit/Inspection/Site Survey",
      ],
    },
    {
      title: "Workforce Solutions",
      image: "/wwo3.jpg",
      description:
        "We understand that a skilled and reliable workforce is the backbone of any telecommunications project, and having access to a flexible talent pool is key the success. Our Workforce Solutions are tailored to meet the needs of the most challenging telecommunications projects.",
      items: [
        "Temp to Perm",
        "Direct Hire/Executive Search",
        "Variable Workforce",
        "Contract/Project Staffing",
      ],
    },
  ];

  return (
    <main id="services" className="min-h-screen bg-white pt-6">
      {/* What We Offer Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              What We Offer
            </h2>
            <div className="flex justify-center">
              <div className="h-4 w-48 bg-blue-500"></div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col">
                {/* Image Container */}
                <div className="relative w-full h-48 md:h-56 lg:h-64 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-black/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Services List */}
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-sm md:text-base text-black/70 flex items-start"
                      >
                        <span className="mr-3 text-blue-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
