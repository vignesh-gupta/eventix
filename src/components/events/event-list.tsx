"use client";

import React from "react";
import EventCard from "./event-card";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const EventList = () => {
  const events = useQuery(api.events.getEvents, {});

  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-3">
      {[...(events || []), ...(events || [])]?.map((event) => (
        <EventCard key={event._id} {...event} createdAt={event._creationTime} />
      ))}
    </div>
  );
};

export default EventList;
