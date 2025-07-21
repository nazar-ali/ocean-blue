"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import EnquiryForm from "../form";

const reasons = [
  {
    title: "Trusted and verified staff",
    description:
      "All our employees go through background checks and professional training to ensure your safety and satisfaction.",
  },
  {
    title: "Affordable and flexible plans",
    description:
      "We offer weekly, bi-weekly, and monthly subscriptions tailored to your budget and schedule.",
  },
  {
    title: "24/7 customer support",
    description:
      "Need help? Our friendly support team is available around the clock.",
  },
  {
    title: "Easy-to-use platform",
    description:
      "Book, track, and manage your services easily through our website or mobile app.",
  },
];

const WhyUs = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10">
        {/* Left: Why Us */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Why Our Customers Love Us
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Discover what sets us apart.
          </p>

          <ul className="space-y-4 text-left">
            {reasons.map((reason, index) => (
              <li
                key={index}
                className="border border-gray-200 rounded p-4 cursor-pointer transition hover:shadow"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">
                    {reason.title}
                  </span>
                  {expandedIndex === index ? (
                    <ChevronUp className="text-primary" />
                  ) : (
                    <ChevronDown className="text-primary" />
                  )}
                </div>
                {expandedIndex === index && (
                  <p className="mt-2 text-gray-600 text-sm">
                    {reason.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Enquiry Form */}
        <div className="md:w-1/2 bg-gray-50 p-6 rounded shadow-md">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
