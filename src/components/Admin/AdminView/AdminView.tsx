"use client";

import { useState } from "react";
import Applications from "../Applications/Applications";

export default function AdminView({ applications }: { applications: any }) {
  const [tabName, setTabName] = useState("Applications");
  const [currentIdx, setIdx] = useState(0);
  const tabList = [
    {
      id: "tab1",
      name: "Applications"
    },
    {
      id: "tab2",
      name: "Check-in"
    },
    {
      id: "tab3",
      name: "Schedule"
    }
  ];

  return (
    <div>
      <div className="flex justify-around space-x-1 rounded-xl p-2 bg-purple_300 text-purple_main">
        {tabList.map((tab, idx) => {
          return (
            <p
              key={tab.id}
              className={`cursor-pointer ${
                idx == currentIdx ? "font-bold underline" : ""
              }`}
              onClick={() => {
                setIdx(idx);
                setTabName(tab.name);
              }}>
              {tab.name}
            </p>
          );
        })}
      </div>
      {tabName == "Applications" ? (
        <Applications applications={applications} />
      ) : (
        <></>
      )}
    </div>
  );
}
