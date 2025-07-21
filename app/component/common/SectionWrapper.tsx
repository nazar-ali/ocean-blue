import { ReactNode } from "react";

export default function SectionWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="w-full px-4 md:px-12 py-16 max-w-7xl mx-auto">
      {children}
    </section>
  );
}
