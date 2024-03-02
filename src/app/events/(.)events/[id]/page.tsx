"use client";

import { useRouter } from "next/navigation";

import EventDetails from "@/app/events/_components/event-detail";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Id } from "@/convex/_generated/dataModel";

type EventDetailsPageProps = {
  params: {
    id: Id<"events">;
  };
};

const EventDetailsPage = ({ params: { id } }: EventDetailsPageProps) => {

  const router = useRouter();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      router.push("/events");
    }
  };

  return (
    <Dialog open onOpenChange={handleOpenChange}>
      <DialogContent className="w-full max-w-3xl overflow-y-scroll max-h-screen m-5 scrollbar pr-3">
        <EventDetails id={id} />
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailsPage;
