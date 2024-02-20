import { LucideIcon } from "lucide-react";
import React from "react";

type EventCardFooterItemProp = {
  data: string;
  Icon: LucideIcon;
};

const EventCardFooterItem = ({ data, Icon }: EventCardFooterItemProp) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <Icon className="w-5 h-5 text-gray-200" />
      <div className="col-span-11">
        <p className="text-sm text-gray-400 truncate">{data}</p>
      </div>
    </div>
  );
};

export default EventCardFooterItem;
