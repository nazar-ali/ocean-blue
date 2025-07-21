"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ServiceCardProps } from "@/app/types";

type Props = ServiceCardProps & {
  isExpanded: boolean;
  onToggle: () => void;
};

const ServiceCard: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  icon,
  isExpanded,
  onToggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isExpanded]);

  return (
    <div className=" rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2 text-primary text-lg font-semibold">
          {icon}
          <span>{title}</span>
        </div>

        <div
          className="transition-all duration-300 ease-in-out overflow-hidden"
          style={{ height }}
        >
          <div ref={contentRef}>
            <p className="text-sm text-gray-600 ">{description}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onToggle}
          className="text-blue-600 text-sm text-blue-600 hover:underline mt-2"
        >
          {isExpanded ? "Hide Details" : "View Details"}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
