import { LucideIcon } from "lucide-react";
import React from "react";

type InfoFieldProps = {
  label: string;
  value?: string;
  Icon?: LucideIcon;
};

const InfoField = ({ label, value, Icon }: InfoFieldProps) => {
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="text-sm w-32 flex gap-3 items-center">
        {Icon && <Icon className="w-4 h-4 fill-muted" />}
        {label}
      </div>
      <div className="flex-1">
        <span>{value}</span>
      </div>
    </div>
  );
};

export default InfoField;
