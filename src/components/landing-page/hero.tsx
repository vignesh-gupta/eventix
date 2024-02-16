"use client";

import { useAuth } from "@clerk/nextjs";

import { Button, buttonVariants } from "@/components/ui/button";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const { isSignedIn } = useAuth();

  return (
    <HeroParallax products={products}>
      <div className="relative top-0 left-0 w-full px-4 py-20 mx-auto max-w-7xl md:py-32">
        <h1 className="text-3xl sm:text-4xl font-bold lg:text-7xl md:text-5xl">
          Your Gateway to <br />
          Unforgettable Experiences
        </h1>
        <p className="max-w-3xl my-4 text-base md:text-xl text-pretty">
          Elevate your events effortlessly! As a creator, craft and sell tickets
          for any experience. Attendees, discover and join unique events
          seamlessly. With secure transactions and limitless possibilities,
        </p>
        {isSignedIn ? (
          <Link href='/dashboard' className={buttonVariants()}>Go to DashBoard <ChevronRight className="w-5 h-5 ml-2" /></Link>
        ) : (
          <Button>Get Started</Button>
        )}
      </div>
    </HeroParallax>
  );
};

export default HeroSection;

export const products = [
  {
    title: "Corporate Conferences",
    thumbnail: "/thumbnails/corporate-conference.jpg",
  },
  {
    title: "Seminars",
    thumbnail: "/thumbnails/seminar.jpg",
  },
  {
    title: "Trade shows",
    thumbnail: "/thumbnails/trade-show.jpg",
  },
  {
    title: "Product or service launch",
    thumbnail: "/thumbnails/product-service-launch.jpg",
  },
  {
    title: "Concerts and music festivals",
    thumbnail: "/thumbnails/concert.jpg",
  },
  {
    title: "Exhibitions",
    thumbnail: "/thumbnails/exhibition.jpg",
  },
  {
    title: "Charity events",
    thumbnail: "/thumbnails/charity.jpg",
  },
  {
    title: "Sports and competition",
    thumbnail: "/thumbnails/sports.jpg",
  },
  {
    title: "Product or service launch",
    thumbnail: "/thumbnails/product-service-launch.jpg",
  },
  {
    title: "Concerts and music festivals",
    thumbnail: "/thumbnails/concert.jpg",
  },
];
