import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#272A30] text-white font-bold border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo Section */}
          <div className="flex flex-col gap-4">
            {/* <div className="w-12 h-12 border-2 border-primary-foreground rounded flex items-center justify-center">
              <span className="font-bold text-lg">TTI</span>
            </div>
            <p className="text-sm opacity-90">TTI-USA</p> */}

            <Image
              alt="flogo"
              height={80}
              width={80}
              src="/footerLogo.jpg"
            ></Image>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm uppercase tracking-wide">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              <a
                href="#"
                className="text-sm opacity-90 hover:opacity-100 transition"
              >
                Services
              </a>
              <a
                href="#"
                className="text-sm opacity-90 hover:opacity-100 transition"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm opacity-90 hover:opacity-100 transition"
              >
                Opportunities
              </a>
              <a
                href="#"
                className="text-sm opacity-90 hover:opacity-100 transition"
              >
                Connect With Us
              </a>
              <a
                href="#"
                className="text-sm opacity-90 hover:opacity-100 transition"
              >
                Privacy Policy
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm uppercase tracking-wide">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>TTI, 300 Frank H Ogawa Plaza</p>
                  <p>Suite 235</p>
                  <p>Oakland, CA 94612</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:(510)836-0422"
                  className="text-sm opacity-90 hover:opacity-100 transition"
                >
                  (510) 836-0422
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:info@tti-usa.co"
                  className="text-sm opacity-90 hover:opacity-100 transition"
                >
                  info@tti-usa.co
                </a>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm uppercase tracking-wide">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-3">
              {/* <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center text-xs font-bold text-primary">
                ISO
              </div>
              <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center text-xs font-bold text-primary">
                DBE
              </div>
              <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center text-xs font-bold text-primary">
                MBE
              </div> */}

              <Image
                alt="flogo"
                height={100}
                width={200}
                src="/flogo.png"
              ></Image>
            </div>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="border-t border-primary-foreground opacity-20 my-8"></div> */}

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-90">
          <p>© 2025 Copyright TTI-USA. All Rights Reserved.</p>
          {/* <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition">
              Terms
            </a>
            <a href="#" className="hover:opacity-100 transition">
              Privacy
            </a>
            <a href="#" className="hover:opacity-100 transition">
              Cookies
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
