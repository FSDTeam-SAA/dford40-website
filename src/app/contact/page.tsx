import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const Page = () => {
  return (
    <>
<section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
  {/* Background Image with Zoom-Out Effect */}
  <div className="absolute inset-0 -z-10 ">
    <Image
      src="/contact.jpg"
      alt="City Buildings"
      fill
      className="object-cover object-center animate-zoom"
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

      <ContactForm />
    </>
  );
};

export default Page;
