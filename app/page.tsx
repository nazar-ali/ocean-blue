import Image from "next/image";
import Services from "@/app/component/section/Service";
import Navbar from "@/app/component/layout/navbar";
import Hero from "./component/section/Hero";
import Subscriptions from "./component/section/Subscription";
import Business from "./component/section/Business";
import Career from "./component/section/Careers";
import WhyUs from "./component/section/WhyUs";
import Testimonials from "./component/section/Testimnial";
import Footer from "./component/layout/Footer";
import ScrollToTop from "./component/common/ScrollTop";
export default function Home() {
  return (
    <>
      <ScrollToTop />

      <Navbar />
      <Hero />
      <Services />
      <Subscriptions />
      <Business />
      <Career />
      <WhyUs />
      <Testimonials />
      <Footer />
    </>
  );
}
