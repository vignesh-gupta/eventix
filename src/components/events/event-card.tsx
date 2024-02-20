import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, User2 } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";
import EventCardFooterItem from "./event-card-footer-item";
import Link from "next/link";
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
  _id: Id<"events">
};

const EventCard = ({
  category,
  createdAt,
  createdBy,
  description,
  eventType,
  from,
  location,
  till,
  title,
  _id
}: EventCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0 overflow-hidden">
        <Image
          src="/thumbnails/charity.jpg"
          className="aspect-video object-cover object-top w-full hover:scale-150 transition-transform ease-linear"
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

        <div className="flex justify-between flex-col lg:flex-row gap-y-3 w-full">
          <div className="flex items-center">
            <Badge variant="secondary">{eventType}</Badge>
          </div>
          <Link href={`/event/${_id}`} className={buttonVariants()}>Book a seat</Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
