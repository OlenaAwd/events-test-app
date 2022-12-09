import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../constants/dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  console.log("featuredEvents :>> ", featuredEvents);
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
