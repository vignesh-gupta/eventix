import { cn } from "@/lib/utils";
import React from "react";
import { ClassNameValue } from "tailwind-merge";

type EventLayoutProps = {
  className: ClassNameValue;
  children: React.ReactNode;
};

const EventLayout = ({ className, children }: EventLayoutProps) => {
  return <div className={cn("container mt-10", className)}>{children}</div>;
};

export default EventLayout;
