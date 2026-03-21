import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "../components/EventCard";
import events from "@/lib/constants";

const Home = async () => {
  const response = await fetch("http://localhost:3000/api/books");
  const books = await response.json();

  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can't Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferences, All in one place
      </p>
      <ExploreBtn />
      <h3 className="mt-20 space-y-7">Featured Events</h3>
      <ul className="events">
        {events.map((event, i) => (
          <li key={event.title}>
            <EventCard {...event} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
