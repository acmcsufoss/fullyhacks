import React, { useState } from "react";

interface TabBarProps {
  tabName: string;
  setTabName: React.Dispatch<React.SetStateAction<string>>;
}

export default function TabBar(props: TabBarProps) {
  const { tabName, setTabName } = props;
  const [currentIdx, setCurrentIdx] = useState(0);
  const handleChange = (tab: string, id: number) => {
    setTabName(tab);
    setCurrentIdx(id);
  };
  const tabLists = [
    {
      id: "tab1",
      name: "Applications"
    },
    {
      id: "tab2",
      name: "Statistics"
    },
    {
      id: "tab3",
      name: "Check-in"
    }
  ];
  return (
    <ul className="mt-10 flex w-[80%] justify-center gap-10 rounded-lg bg-pink-100 p-2 md:text-lg">
      {tabLists.map((item, idx) => {
        return (
          <li
            key={item.id}
            className={`cursor-pointer ${
              idx == currentIdx && "font-semibold text-purple_300"
            }`}
            onClick={() => handleChange(item.name, idx)}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}
