"use client";

import React from "react";
import EventCard from "./event-card";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

type EventListProps = {
  query: {
    category?: string;
    type?: string;
    search?: string;
  };
};

const EventList = ({ query }: EventListProps) => {
  const events = useQuery(api.events.getEvents, {
    ...query,
  }) || []

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {[...events, ...events,...events, ...events,...events, ...events,...events, ...events]?.map((event) => (
        <EventCard key={event._id} {...event} createdAt={event._creationTime} />
      ))}
    </div>
  );
};

export default EventList;
