import Events from "./_components/events";

export default function EventsPage() {
  return (
    <div>
      <div className="pb-4">
        <h1 className="feed-title">Events</h1>
        <p className="custom-text-shadow font-audiowide text-white md:text-md">
          Timeline of hackathon events. Filter by clicking on the event type!
          Click again to remove the filter.
        </p>
      </div>
      <div className="mt-10">
        <Events />
      </div>
    </div>
  );
}
