import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
}: EventCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="truncate">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Location : {location}</p>
        <p>Creator : {createdBy}</p>
        <p>Type : {eventType}</p>
      </CardContent>
    </Card>
  );
};

export default EventCard;
