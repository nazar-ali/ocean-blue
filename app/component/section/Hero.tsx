// components/Hero.tsx
import Image from "next/image";
import assets from "@/app/assets"; // Update path if needed
import Button from "@/app/component/common/Button"; // Optional CTA button

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            We Care About Your Clothes Like You Do!
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Premium laundry & dry-cleaning service at your fingertips.
            Eco-friendly. Fast. Reliable.
          </p>
          <Button variant="secondary">Get Started</Button>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-[400px]">
          <Image
            src={assets.washing}
            alt="Laundry Hero"
            className="rounded-2xl shadow-lg"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
