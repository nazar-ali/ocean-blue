import { StaticImageData } from "next/image";

export interface Service {
  title: string;
  description: string;
  image: string;
}
export interface ServiceCardProps {
  key?: string | number; // Optional key for React lists
  title: string;
  description?: string;
  imageUrl: string | StaticImageData;
  icon?: React.ReactNode;
  onClick?: () => void;
}
