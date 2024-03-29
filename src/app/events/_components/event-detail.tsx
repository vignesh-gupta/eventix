"use client";

import { useAuth } from "@clerk/clerk-react";
import { useMutation, useQuery } from "convex/react";
import {
  BookOpenCheckIcon,
  Calendar,
  Clock1,
  MapPin,
  User
} from "lucide-react";
import Image from "next/image";

import EventActions from "@/components/events/event-actions";
import InfoField from "@/components/events/info-field";
import { Badge } from "@/components/ui/badge";
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

type EventDetailsProps = {
  id: Id<"events">;
};

const EventDetails = ({ id }: EventDetailsProps) => {
  const { userId } = useAuth();

  const eventData = useQuery(api.event.get, { id });
  const deleteEvent = useMutation(api.event.remove);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-col gap-1 py-3 md:flex-row md:justify-between">
        <div className="flex items-center gap-2 grow">
          <Calendar className="w-4 h-4 fill-muted" />
          <h2 className="text-sm font-semibold tracking-wider uppercase">
            {eventData?.title}
          </h2>
        </div>

        {eventData?.creatorId === userId && (
          <EventActions eventId={id} className="w-auto mt-0" />
        )}
      </CardHeader>
      <Carousel className="w-full max-w-3xl">
        <CarouselContent>
          <CarouselItem>
            <Image
              alt="Conference Image 1"
              className="object-cover w-full h-64 rounded-md"
              src="/thumbnails/charity.jpg"
              width={500}
              height={64}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="Conference Image 1"
              className="object-cover w-full h-64 rounded-md"
              src="/thumbnails/charity.jpg"
              width={500}
              height={64}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      <CardContent className="p-4">
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <h4 className="text-xl">About the Event</h4>
            <Badge className="h-5">{eventData?.eventType}</Badge>
          </div>
          <p className="text-sm text-foreground/70">{eventData?.description}</p>
        </div>

        <div className="grid gap-2">
          <InfoField
            label="Location"
            value={eventData?.location}
            Icon={MapPin}
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
            label="Timing"
            value={`${eventData?.from} - ${eventData?.till}`}
            Icon={Clock1}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 p-2 pt-0">
        <Button>Book a seat</Button>
      </CardFooter>
    </Card>
  );
};

export default EventDetails;
