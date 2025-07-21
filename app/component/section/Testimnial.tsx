import React from "react";
import { Quote } from "lucide-react"; // Optional for icon enhancement

const testimonials = [
  {
    name: "Sarah",
    feedback: "Amazing service! Reliable and fast. Highly recommended!",
  },
  {
    name: "Ahmed",
    feedback: "My home is spotless every week, thanks to WeCare.",
  },
];

const Testimonials = () => (
  <section className="py-16 bg-gray-50" id="testimonials">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-primary mb-10">Testimonials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map(({ name, feedback }) => (
          <div
            key={name}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-left hover:shadow-md transition"
          >
            <div className="flex items-start gap-2 mb-3">
              <Quote className="w-5 h-5 text-primary" />
              <p className="italic text-gray-700">“{feedback}”</p>
            </div>
            <p className="text-sm text-gray-500 text-right">- {name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
