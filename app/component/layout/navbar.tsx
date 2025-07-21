"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Ocean Blue
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#services" className="text-gray-700 hover:text-blue-600">
            Prices & Services
          </Link>
          <Link href="#business" className="text-gray-700 hover:text-blue-600">
            Business
          </Link>
          <Link href="#careers" className="text-gray-700 hover:text-blue-600">
            Careers
          </Link>
          <Link
            href="#subscriptions"
            className="text-gray-700 hover:text-blue-600"
          >
            Subscriptions
          </Link>
          <Link href="#aboutUs" className="text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link href="#Legal" className="text-gray-700 hover:text-blue-600">
            Legal
          </Link>
          <Link href="#locations" className="text-gray-700 hover:text-blue-600">
            Find Location
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
          <Link
            href="/signin"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="#services" className="block text-gray-700">
            Prices & Services
          </Link>
          <Link href="#business" className="block text-gray-700">
            Business
          </Link>
          <Link href="#careers" className="block text-gray-700">
            Careers
          </Link>
          <Link href="#subscriptions" className="block text-gray-700">
            Subscriptions
          </Link>
          <Link href="#aboutUs" className="block text-gray-700">
            About Us
          </Link>
          <Link href="#Legal" className="block text-gray-700">
            Legal
          </Link>
          <Link href="#locations" className="block text-gray-700">
            Find Location
          </Link>
          <Link href="#contact" className="block text-gray-700">
            Contact
          </Link>
          <Link
            href="/signin"
            className="block bg-blue-600 text-white px-4 py-2 rounded mt-2"
          >
            Sing In
          </Link>
          <Link
            href="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
