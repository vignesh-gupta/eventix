import EventDetails from "@/app/events/_components/event-detail";
import { Id } from "@/convex/_generated/dataModel";

type EventDetailsPageProps = {
  params: {
    id: Id<"events">;
  };
};

const EventDetailsPage = ({ params: { id } }: EventDetailsPageProps) => {
  return <EventDetails id={id} />;
};

export default EventDetailsPage;
