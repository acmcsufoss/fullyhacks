"use client";

import React, { useState } from "react";

interface ApplyAuthProps {
  children?: React.ReactNode;
}

const ApplyAuth: React.FC<ApplyAuthProps> = ({ children }) => {
  // 2025 application opens from Feb 14th to Mar 24th
  // App extension ends on Mar 31st
  const openDateTs = "2025-02-14T00:00:00.000-07:00";
  const closeDateTs = "2025-03-24T23:59:59.999-07:00";
  const options = { timeZone: "America/Los_Angeles" };

  const openDate = new Date(openDateTs).toLocaleString("en-US", options);
  const closeDate = new Date(closeDateTs).toLocaleString("en-US", options);
  const now = new Date().toLocaleString("en-US", options);

  const [applicationOpen, setOpen] = useState<boolean>(() => {
    const currentDate = new Date();
    const opening = new Date(openDate);
    const closing = new Date(closeDate);
    return currentDate >= opening && currentDate <= closing;
  });

  return (
    <>
      {applicationOpen ? (
        children
      ) : (
        <div className="mt-10 flex flex-col items-center justify-center text-center text-lg font-semibold text-white md:text-[2.5rem]">
          {new Date(now) < new Date(openDate) && (
            <div className="flex flex-col items-center gap-12 text-center">
              <p className="w-[80%]">
                Application will open on Feb 14th, see you soon!.
              </p>
              {/* TODO: update image here? */}
              {/* <img */}
              {/*   src="/assets/byecat.svg" */}
              {/*   alt="bye cat" */}
              {/*   className="w-[300px]" */}
              {/* /> */}
            </div>
          )}
          {new Date(now) >= new Date(closeDate) && (
            <p>
              Fullyhacks {new Date(closeDate).getFullYear()} has ended,
              we&apos;ll see you next year 🐘.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default ApplyAuth;
