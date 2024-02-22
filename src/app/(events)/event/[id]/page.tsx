"use client";

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
import { getDateFromTime } from "@/lib/utils";
import { useMutation, useQuery } from "convex/react";
import {
  BookOpenCheckIcon,
  Calendar,
  Clock1,
  Clock10,
  MapPin,
  Trash,
  User,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import InfoField from "./_components/info-field";

type EventDetailsPageProps = {
  params: {
    id: Id<"events">;
  };
};

const EventDetailsPage = ({ params: { id } }: EventDetailsPageProps) => {
  const eventData = useQuery(api.event.get, { id });

  const deleteEvent = useMutation(api.event.remove);

  const router = useRouter();

  const handleDelete = () => {
    deleteEvent({ id });
    router.push("/events");
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="py-3 flex flex-col md:flex-row md:justify-between gap-1">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 fill-muted" />
          <h2 className="text-sm font-semibold tracking-wider uppercase">
            {eventData?.title}
          </h2>
        </div>
        <div>
          <Button variant="outline" size="icon" onClick={handleDelete}>
            <Trash className="w-4 h-4" />
          </Button>
        </div>
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
