import Events from "./_components/events";

export default function EventsPage() {
  return (
    <section className="mr-8 mt-14 w-full text-white">
      <h1 className="feed-title">Events</h1>
      <p className="md:text-md">Fullyhacks timeline for your reference</p>
      <p className="mt-4 text-white/60 md:text-sm">Click the label to filter</p>
      <div className="mt-10">
        <Events />
      </div>
    </section>
  );
}
