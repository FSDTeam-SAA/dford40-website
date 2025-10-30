"use client";

import type React from "react";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
    interest: "Customer",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      interest: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("[Contact Form Submission]", formData);
    console.table(formData);
    alert("Form submitted! Check console for details.");
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
      interest: "Customer",
    });
  };

  return (
    <div className="w-full px-4 py-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Left Section - Contact Info */}
          <div className="flex flex-col justify-start space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                Contact Us
              </h1>
              <p className="mt-2 text-base text-muted-foreground">
                Drop us a note using the form here, or contact us using the
                information below
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Main Office */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Main Office</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    TTI, 300 Frank H Ogawa Plaza Suite 235, Oakland, CA 94612
                  </p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Phone Number
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    (510) 836-0422
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    info@tti-usa.co
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="rounded-lg bg-card p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div>
                <label className="block text-sm font-semibold text-black mb-3">
                  Name
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Company Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>

              {/* Radio Buttons */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  I am interested in being a
                </label>
                <div className="space-y-2">
                  {["Customer", "Supplier", "Partner", "Other Concern"].map(
                    (option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="radio"
                          id={option}
                          name="interest"
                          value={option}
                          checked={formData.interest === option}
                          onChange={handleRadioChange}
                          className="h-4 w-4 cursor-pointer"
                        />
                        <label
                          htmlFor={option}
                          className="ml-2 cursor-pointer text-sm text-foreground"
                        >
                          {option}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
