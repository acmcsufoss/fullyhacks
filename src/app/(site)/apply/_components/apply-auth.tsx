"use client";

import React, { useState } from "react";
interface ApplyAuthProps {
  children?: React.ReactNode;
}
const ApplyAuth: React.FC<ApplyAuthProps> = ({ children }) => {
  // Application from March 13rd to April 1st
  const options = { timeZone: "America/Los_Angeles" };
  const openDate = new Date("2024-01-14T00:00:00.000-07:00").toLocaleString(
    "en-US",
    options
  );
  const closeDate = new Date("2024-02-13T23:59:59.999-07:00").toLocaleString(
    "en-US",
    options
  );
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
                Application will open on January 12th, see you soon!.
              </p>
              <img
                src="/assets/byecat.svg"
                alt="bye cat"
                className="w-[300px]"
              />
            </div>
          )}
          {new Date(now) >= new Date(closeDate) && (
            <p>Fullyhacks 2024 has ended, we&apos;ll see you next year 🐘.</p>
          )}
        </div>
      )}
    </>
  );
};

export default ApplyAuth;
