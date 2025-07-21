"use client";

import { useState } from "react";
import SectionWrapper from "@/app/component/common/SectionWrapper";
import Heading from "@/app/component/common/heading";
import Button from "@/app/component/common/Button";
import ServiceCard from "@/app/component/common/ServiceCard";
import { FaTshirt, FaWater, FaPumpSoap } from "react-icons/fa";
import assets from "@/app/assets";

export default function Services() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      id: 1,
      title: "Washing",
      description: "We provide the best washing service in town.",
      imageUrl: assets.washing,
      icon: <FaWater />,
    },
    {
      id: 2,
      title: "Dry Cleaning",
      description: "We provide the best dry cleaning service in town.",
      imageUrl: assets.drycleaning,
      icon: <FaTshirt />,
    },
    {
      id: 3,
      title: "Ironing",
      description: "We provide the best ironing service in town.",
      imageUrl: assets.ironing,
      icon: <FaPumpSoap />,
    },
    {
      id: 4,
      title: "Hotels & Restaurants",
      description:
        "We offer reliable laundry and linen care services tailored for hotels and restaurants.",
      imageUrl: assets.hotelsImage,
      icon: <FaPumpSoap />,
    },
    {
      id: 5,
      title: "Airbnb Hosts",
      description:
        "Clean linens and towels delivered reliably for Airbnb hosts.",
      imageUrl: assets.restaurantImage,
      icon: <FaPumpSoap />,
    },
    {
      id: 6,
      title: "Uniform Care",
      description:
        "Professional care for workwear and uniforms, keeping them fresh and crisp.",
      imageUrl: assets.hotelsImage,
      icon: <FaPumpSoap />,
    },
  ];

  const handleToggle = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <SectionWrapper>
      <Heading
        title="Our Services"
        subtitle="Laundry & Dry Cleaning with Care"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleServices.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            icon={service.icon}
            isExpanded={expandedId === service.id}
            onToggle={() => handleToggle(service.id)}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="secondary" onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? "Show Less" : "Explore More"}
        </Button>
      </div>
    </SectionWrapper>
  );
}
