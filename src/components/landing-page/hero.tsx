"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";

const HeroSection = () => {
  return (
    <HeroParallax products={products}>
      <div className="relative top-0 left-0 w-full px-4 py-20 mx-auto max-w-7xl md:py-40">
        <h1 className="text-2xl font-bold md:text-7xl">
          Your Gateway to <br />
          Unforgettable Experiences
        </h1>
        <p className="max-w-3xl mt-8 text-base md:text-xl text-pretty">
          Elevate your events effortlessly! As a creator, craft and sell tickets
          for any experience. Attendees, discover and join unique events
          seamlessly. With secure transactions and limitless possibilities,
          Eventix is your key to unforgettable moments. Sign up now to transform
          your vision into sold-out success!
        </p>
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
