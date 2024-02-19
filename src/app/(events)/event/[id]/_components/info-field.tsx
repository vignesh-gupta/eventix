import { LucideIcon } from "lucide-react";
import React from "react";

type InfoFieldProps = {
  label: string;
  value?: string;
  Icon?: LucideIcon;
};

const InfoField = ({ label, value, Icon }: InfoFieldProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="text-sm w-20">{label}</div>
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 fill-muted" />}
        <span>{value}</span>
      </div>
    </div>
  );
};

export default InfoField;
