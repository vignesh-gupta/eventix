import { cn } from "@/lib/utils";
import React from "react";
import { ClassNameValue } from "tailwind-merge";

type MaxWidthContainerProps = {
  className: ClassNameValue;
  children: React.ReactNode;
};

const MaxWidthContainer = ({ className, children }: MaxWidthContainerProps) => {
  return <div className={cn("h-full container grow", className)}>{children}</div>;
};

export default MaxWidthContainer;
