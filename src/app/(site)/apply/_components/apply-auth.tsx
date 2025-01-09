"use client";

import React from "react";

interface ApplyAuthProps {
  children?: React.ReactNode;
}

const ApplyAuth: React.FC<ApplyAuthProps> = ({ children }) => {
  // 2025 application opens from Feb 14th to Mar 24th
  const openDateTs = "2025-02-14T00:00:00.000-07:00";
  const applicationCloseDateTs = "2025-03-24T23:59:59.999-07:00";
  const closeDateTs = "2025-04-13T23:59:59.999-07:00";

  const options = { timeZone: "America/Los_Angeles" };

  const openDate = new Date(openDateTs).toLocaleString("en-US", options);
  const closeDate = new Date(closeDateTs).toLocaleString("en-US", options);
  const applicationCloseDate = new Date(
    applicationCloseDateTs
  ).toLocaleDateString("en-US", options);

  const now = new Date().toLocaleString("en-US", options);
  const applicationOpen =
    new Date(now) >= new Date(openDate) &&
    new Date(now) <= new Date(applicationCloseDate);

  if (applicationOpen) {
    return <>{children}</>;
  }

  return (
    <div className="mt-10 flex flex-col items-center justify-center text-center text-lg font-semibold text-white md:text-[2.5rem]">
      {new Date(now) < new Date(openDate) ? (
        <div className="flex flex-col items-center gap-12 text-center">
          <p>Applications will open on Feb 14th, see you soon!</p>
        </div>
      ) : new Date(now) >= new Date(closeDate) ? (
        <p>Fullyhacks 2025 has ended, we&apos;ll see you next year 🐘.</p>
      ) : (
        <p>Applications for FullyHacks 2025 have closed.</p>
      )}
    </div>
  );
};

export default ApplyAuth;
