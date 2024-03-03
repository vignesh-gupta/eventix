"use client";

import { useAuth } from "@clerk/clerk-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Id } from "@/convex/_generated/dataModel";

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
  eventType,
  location,
  title,
  _id,
}: EventCardProps) => {
  const { userId } = useAuth();

  return (
    <Card className="overflow-hidden group p-3  bg-secondary/10">
      <CardContent className="relative overflow-hidden p-0">
        <Badge variant="secondary" className="absolute top-1 left-1">
          {eventType}
        </Badge>

        <Image
          src="/thumbnails/charity.jpg"
          className="object-cover object-top aspect-video rounded-md"
          alt="Thumbnail"
          height={200}
          width={400}
        />
      </CardContent>
      <CardHeader className="p-0 mb-5 mt-3">
        <CardTitle className="truncate">{title}</CardTitle>
        <p className="text-sm text-gray-400 truncate w-3/4">{location}</p>
      </CardHeader>
      <CardFooter className="p-0 justify-end gap-1">
        <Button asChild size="sm" variant="outline">
          <Link href={`/events/${_id}`}>Details</Link>
        </Button>
        <Button asChild size="sm">
          <Link href={`/events/${_id}`}>Book a seat</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;