import { clsx, type ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDateFromTime(time: number) {
  const date = new Date(time);
  return date.toDateString();
}

export function generateMetaData(
  title?: string,
  url?: string,
  description?: string,
  keywords: string[] = []
): Metadata {
  title = title || "Eventix - Your Gateway to Unforgettable Experiences";
  description =
    description ||
    "Explore Eventix, the ultimate event management platform by Vignesh Gupta. Effortlessly create, host, and sell tickets for your events. Maximize earnings, ensure seamless bookings, and trust secure transactions. Join now and turn your passion into unforgettable experiences!";
  url = url || "https://eventix.vigneshgupta.tech/";

  const developer = "Vignesh Gupta";

  return {
    title,
    description,
    keywords: [
      "Event management platform",
      "Sell tickets online",
      "Effortless event creation",
      "Secure ticket transactions",
      "NextJS event platform",
      "Maximize event earnings",
      "Clerk authentication",
      "User-friendly event booking",
      "Customizable event details",
      "Unforgettable experiences with Eventix",
      "Vignesh Gupta Project",
      "NextJS",
      "Convex",
      "Shadcn ui",
      "clerk",
      "stripe",
      "realtime changes",
      ...keywords,
    ],
    authors: {
      name: developer,
      url,
    },
    creator: developer,
    publisher: developer,
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: title,
      emails: ["hello@vigneshgupta.tech"],
      locale: "en_US",
      images: [
        {
          url: "/thumbnail.png",
          alt: "Hey there, I'm Vignesh Gupta",
        },
      ],
    },
    twitter: {
      creator: "@vigneshfixes",
      creatorId: "twitter.com/vigneshfixes",
      site: "https://vigneshgupta.tech/",
      title,
      images: [
        {
          url: "/thumbnail.png",
          alt: title,
        },
      ],
    },
    metadataBase: new URL(url),
  };
}
