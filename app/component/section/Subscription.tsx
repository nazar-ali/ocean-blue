import React from "react";
import Button from "@/app/component/common/Button"; // Optional: use your reusable Button

const plans = [
  {
    title: "Weekly - Individual",
    description:
      "Perfect for students or solo professionals. Includes 4 pickups.",
    price: "$19/week",
  },
  {
    title: "Monthly - Couple",
    description: "Ideal for couples. Includes 8 pickups and ironing.",
    price: "$69/month",
  },
  {
    title: "Monthly - Family",
    description: "For families with kids. Unlimited pickups & premium support.",
    price: "$119/month",
  },
];

const Subscriptions = () => (
  <section className="py-16 bg-gray-50" id="subscriptions">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary mb-2">
          Subscription Plans
        </h2>
        <p className="text-gray-600 text-lg">
          Choose a plan that fits your lifestyle
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="bg-white border border-gray-200 rounded-xl p-6 w-72 shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-primary mb-2">
              {plan.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
            <p className="text-2xl font-bold text-gray-800 mb-4">
              {plan.price}
            </p>
            <Button variant="secondary" className="w-full text-center">
              Select Plan
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Subscriptions;
