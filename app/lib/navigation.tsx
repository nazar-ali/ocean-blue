// lib/navigation.ts
"use Client";
export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Business", href: "#business" },
  { label: "Career", href: "#career" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Why Us", href: "#why-us" },
  { label: "Legal", href: "#legal" },
];
