import { getAllEvents } from "../../constants/dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();
  const findEvtHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <EventsSearch onSearch={findEvtHandler} />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
