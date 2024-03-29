import EventList from "@/components/events/event-list";
import Filters from "./_components/filters";

type EventListPageProp = {
  searchParams: {
    category?: string;
    type?: string;
    search?: string;
  };
};

const EventListPage = ({ searchParams }: EventListPageProp) => {
  return (
    <div>
      <div className="flex mb-4 justify-between flex-col lg:flex-row gap-y-2">
        <h1 className="text-lg grow sm:text-xl md:text-2xl lg:text-3xl">
          Explore Events
        </h1>
        <Filters query={searchParams} />
      </div>

      <EventList query={searchParams} />
    </div>
  );
};

export default EventListPage;
