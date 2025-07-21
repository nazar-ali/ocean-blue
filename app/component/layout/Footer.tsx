import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top: Logo & Social Icons */}
      <div className="flex flex-col xl:flex-row items-center justify-between px-6 xl:px-20 py-6">
        {/* Logo */}
        <div className="py-4">
          {/* <img src={""} alt="Logo" className="ml-6 w-36" /> */}
        </div>

        {/* Social Icons */}
        <div className="text-center mt-4 xl:mt-0">
          <h2 className="text-blue-700 font-bold text-2xl mb-2 tracking-wide">
            FOLLOW US
          </h2>
          <div className="flex justify-center gap-3">
            {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map(
              (Icon, i) => (
                <button
                  key={i}
                  className="text-blue-300 hover:text-blue-700 p-2 transition-colors"
                >
                  <Icon size={24} />
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <hr className="border-white" />

      {/* Main Grid Sections */}
      <div className="flex flex-col lg:flex-row justify-between px-6 md:px-16 lg:px-24 py-12 gap-8 text-center lg:text-left">
        {/* ABOUT US */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3">ABOUT US</h3>
          <p className="text-sm leading-relaxed">
            We're not just a software house, we're your innovation partner.
            Driven by creativity, committed to quality, and dedicated to
            building digital solutions that make a real impact.
          </p>
        </div>

        {/* OUR SCHEDULE */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3">Our Schedule</h3>
          {[
            "Monday :  9:00 AM - 9:00 PM",
            "Tuesday:  9:00 AM - 9:00 PM",
            "Wednesday:  9:00 AM - 9:00 PM",
            "Thursday:  9:00 AM - 9:00 PM",
            "Friday:  9:00 AM - 9:00 PM",
            "Saturday:  9:00 AM - 9:00 PM",
            "Sunday:  9:00 AM - 9:00 PM",
          ].map((item) => (
            <p key={item} className="text-sm font-medium mb-1">
              {item}
            </p>
          ))}
        </div>

        {/* QUICK LINKS */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3">QUICK LINKS</h3>
          {["Home", "About Us", "Blogs", "Contact Us", "Privacy Policy"].map(
            (link) => (
              <div
                key={link}
                className="mb-1.5 relative group w-fit mx-auto lg:mx-0"
              >
                <a
                  href="#"
                  className="text-sm font-medium text-white group-hover:text-blue-600 transition-colors"
                >
                  {link}
                </a>
                <span className="block w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </div>
            )
          )}
        </div>

        {/* GET IN TOUCH */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3">GET IN TOUCH</h3>
          <a
            href="mailto:info@dunesync.com"
            className="block text-sm font-semibold mb-2 hover:text-blue-600 transition"
          >
            info@dunesync.com
          </a>
          <a
            href="tel:+971552988494"
            className="block text-sm font-semibold mb-2 hover:text-blue-600 transition"
          >
            +971 55 298 8494
          </a>
          <a
            href="https://www.google.com/maps?q=Musaffah-3+Abu+Dhabi+UAE"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-semibold mb-2 hover:text-blue-600 transition"
          >
            Musaffah-3, Abu Dhabi, UAE
          </a>
        </div>
      </div>

      {/* Bottom Stripe */}
      <div className="bg-white text-black text-center py-3 font-bold text-sm">
        &copy; {new Date().getFullYear()} Ocean Blue. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
