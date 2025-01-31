import Events from "./_components/events";

export default function EventsPage() {
  return (
    <div>
      <h1 className="feed-title">Events</h1>
      <p className="md:text-md">Timeline of hackathon events</p>
      {/* <p className="mt-4 text-white/60 md:text-sm">Click the label to filter</p> */}
      <div className="mt-10">
        <Events />
      </div>
    </div>
  );
}
