"use client";

import React from "react";
import { tsOptions, openDate, closeDate, endDate } from "@/lib/data/dates";

export default function ApplyAuth({
  children
}: {
  children?: React.ReactNode;
}) {
  const now = new Date().toLocaleString("en-US", tsOptions);
  const applicationOpen =
    new Date(now) >= new Date(openDate) && new Date(now) <= new Date(closeDate);

  if (
    applicationOpen ||
    process.env.NEXT_PUBLIC_TEST_APPS?.toLowerCase() === "true"
  ) {
    return <>{children}</>;
  }

  return (
    <div className="mt-10 flex flex-col items-center justify-center text-center text-lg font-semibold text-white md:text-[2.5rem]">
      {new Date(now) < new Date(openDate) ? (
        <div className="custom-text-shadow z-10 flex flex-col items-center gap-12 text-center">
          <p>Applications for FullyHacks 2025 will open soon!</p>
        </div>
      ) : new Date(now) >= new Date(endDate) ? (
        <p className="custom-text-shadow z-10">
          FullyHacks 2025 has ended, we&apos;ll see you next year 🐘.
        </p>
      ) : (
        <p className="custom-text-shadow z-10">
          Applications for FullyHacks 2025 have closed.
        </p>
      )}
    </div>
  );
}
