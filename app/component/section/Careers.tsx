import React from "react";
import Button from "@/app/component/common/Button"; // Optional CTA button
import { Briefcase } from "lucide-react"; // Optional icon

const roles = [
  {
    title: "Delivery Riders",
    description: "Ensure timely and safe delivery of laundry items.",
  },
  {
    title: "Facility Workers",
    description: "Handle washing, ironing, and quality control operations.",
  },
];

const Career = () => (
  <section className="py-16 bg-gray-100" id="career">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-primary mb-2">Join Our Team</h2>
      <p className="text-gray-600 text-lg mb-8">
        We’re hiring passionate people!
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {roles.map((role) => (
          <div
            key={role.title}
            className="w-72 bg-white rounded-xl border border-gray-200 p-6 shadow hover:shadow-md transition text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-primary w-6 h-6" />
              <h3 className="text-xl font-semibold text-primary">
                {role.title}
              </h3>
            </div>
            <p className="text-gray-600 text-sm">{role.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Button variant="secondary" className="text-center">
          Apply Now
        </Button>
      </div>
    </div>
  </section>
);

export default Career;
