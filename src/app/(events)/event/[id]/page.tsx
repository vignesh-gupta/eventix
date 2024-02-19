"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import {
  BookOpenCheckIcon,
  Calendar,
  Clock,
  Clock1,
  Clock10,
  Clock12,
  Clock9,
  MapPin,
  Text,
  User,
} from "lucide-react";
import Image from "next/image";
import InfoField from "./_components/info-field";
import { Badge } from "@/components/ui/badge";
import { getDateFromTime } from "@/lib/utils";

type EventDetailsPageProps = {
  params: {
    id: string;
  };
};

const EventDetailsPage = ({ params: { id } }: EventDetailsPageProps) => {
  const eventData = useQuery(api.event.get, {
    id: id as Id<"events">,
  });

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 fill-muted" />
          <h2 className="text-sm font-semibold tracking-wider uppercase">
            {eventData?.title}
          </h2>
        </div>
        {/* <CardDescription>The best conference for developers</CardDescription> */}
      </CardHeader>
      <Carousel className="w-full max-w-3xl">
        <CarouselContent>
          <CarouselItem>
            <Image
              alt="Conference Image 1"
              className="w-full h-64 object-cover rounded-md"
              src="/thumbnails/charity.jpg"
              width={500}
              height={64}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden lg:inline-flex" />
        <CarouselNext className="hidden lg:inline-flex" />
      </Carousel>
      <CardContent className="p-4">
        <div className="mb-4">
          <div className="flex gap-3 items-center mb-2">
            <h4 className="text-xl">About the Event</h4>
            <Badge className="h-5">{eventData?.eventType}</Badge>
          </div>
          <p className="text-sm text-foreground/70">{eventData?.description}</p>
        </div>

        <div className="grid gap-2">
          <InfoField
            label="Created At"
            value={getDateFromTime(eventData?._creationTime || 0)}
            Icon={Calendar}
          />

          <InfoField
            label="Created By"
            value={eventData?.createdBy}
            Icon={User}
          />

          <InfoField
            label="Category"
            value={eventData?.category}
            Icon={BookOpenCheckIcon}
          />

          <InfoField
            label="Location"
            value={eventData?.location}
            Icon={MapPin}
          />
          <InfoField label="Starts at" value={eventData?.from} Icon={Clock1} />
          <InfoField label="Closes at" value={eventData?.till} Icon={Clock10} />
        </div>
      </CardContent>
      <CardFooter className="flex p-2 pt-0 justify-end gap-2">
        <Button>Book a seat</Button>
      </CardFooter>
    </Card>
  );
};

export default EventDetailsPage;
