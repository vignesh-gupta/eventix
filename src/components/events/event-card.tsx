"use client";

import { useAuth } from "@clerk/clerk-react";
import { MapPin, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Id } from "@/convex/_generated/dataModel";
import EventActions from "./event-actions";
import EventCardFooterItem from "./event-card-footer-item";

type EventCardProps = {
  title: string;
  description: string;
  category: string;
  createdBy: string;
  eventType: string;
  from: string;
  till: string;
  location: string;
  createdAt: number;
  creatorId: string;
  _id: Id<"events">;
};

const EventCard = ({
  createdBy,
  description,
  eventType,
  location,
  title,
  _id,
  creatorId,
}: EventCardProps) => {
  const { userId } = useAuth();

  return (
    <Card className="overflow-hidden group">
      <CardContent className="relative p-0 overflow-hidden">
        {userId === creatorId && (
          <EventActions
            eventId={_id}
            className="absolute top-0 right-0 z-10 hidden w-full h-full transition-all duration-100 ease-linear bg-black bg-opacity-0 group-hover:flex group-hover:bg-opacity-50"
          />
        )}
        <Image
          src="/thumbnails/charity.jpg"
          className="object-cover object-top w-full transition-transform ease-linear aspect-video hover:scale-150"
          alt="Thumbnail"
          height={200}
          width={400}
        />
      </CardContent>
      <CardHeader>
        <CardTitle className="truncate">{title}</CardTitle>
        <CardDescription className="truncate">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-3">
        <EventCardFooterItem Icon={MapPin} data={location} />
        <EventCardFooterItem Icon={User2} data={createdBy} />

        <div className="flex flex-col justify-between w-full lg:flex-row gap-y-3">
          <div className="flex items-center">
            <Badge variant="secondary">{eventType}</Badge>
          </div>
          <div className="flex justify-center gap-3">
            <Link
              href={`/event/${_id}`}
              className={buttonVariants({ variant: "outline" })}
            >
              Details
            </Link>
            <Button>Book a seat</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
