"use client";

import { useState, useEffect } from "react";
import { ArrowUpward } from "@mui/icons-material";
import clsx from "clsx";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;

      const percentage = (scrollPosition / maxScroll) * 100;
      setScrollPercentage(Math.min(percentage, 100));

      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={clsx(
        "fixed bottom-20 right-10 z-50 transition-opacity duration-300",
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <div
        className="relative w-12 h-12 rounded-full bg-white cursor-pointer group"
        onClick={scrollToTop}
        title="Scroll to top"
      >
        {/* Conic progress background */}
        <div
          className="absolute inset-0 rounded-full z-0"
          style={{
            background: `conic-gradient(#1d4ed8	  ${scrollPercentage}%, transparent ${scrollPercentage}%)`,
          }}
        ></div>

        {/* Inner circle */}
        <div className="absolute inset-[3px] rounded-full bg-white z-10"></div>

        {/* Arrow icon */}
        <div className="relative z-20 flex items-center justify-center h-full text-blue-600 group-hover:text-blue-600 transition-colors">
          <ArrowUpward />
        </div>
      </div>
    </div>
  );
}
