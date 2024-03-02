import { useMutation } from "convex/react";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";
import { ClassNameValue } from "tailwind-merge";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type EventActionsProps = {
  eventId: Id<"events">;
  className?: ClassNameValue;
};

const EventActions = ({ className, eventId }: EventActionsProps) => {
  const removeEvent = useMutation(api.event.remove);
  const router = useRouter();

  const handleDelete = () => {
    removeEvent({ id: eventId });
    router.push("/events");
  };

  return (
    <div className={cn("flex items-start justify-end gap-1 p-2", className)}>
      <Button asChild variant="ghost" size="icon">
        <Link href={`/events/${eventId}/edit`}>
          <Edit size={20} />
        </Link>
      </Button>

      <Button onClick={handleDelete} variant="ghost" size="icon">
        <Trash size={20} />
      </Button>
    </div>
  );
};

export default EventActions;
