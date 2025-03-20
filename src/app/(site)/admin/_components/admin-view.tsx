"use client";

import Applications from "./applications";

export default function AdminView({ applications }: { applications: any }) {
  return (
    <section className="font-rubik">
      <p className="text-lg text-white">
        Page to display and manage all FullyHacks applicant's information
      </p>
      <Applications applications={applications} />
    </section>
  );
}
