import React from "react";
import Button from "@/app/component/common/Button"; // Optional CTA button

const partnerships = [
  "Hotels & Restaurants",
  "Airbnb Hosts",
  "Cloud Kitchens",
  "Corporate Offices",
];

const Business = () => (
  <section className="py-16 bg-gray-50" id="business">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-primary mb-2">
        Business Partnerships
      </h2>
      <p className="text-gray-600 text-lg mb-6">
        Partner with us to elevate your customer experience
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {partnerships.map((item) => (
          <div
            key={item}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition"
          >
            <p className="text-primary font-medium">{item}</p>
          </div>
        ))}
      </div>

      <Button variant="secondary">Partner with Us</Button>
    </div>
  </section>
);

export default Business;
