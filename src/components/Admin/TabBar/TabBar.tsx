import React, { useState } from "react";

interface TabBarProps {
  tabName: string;
  setTabName: React.Dispatch<React.SetStateAction<string>>;
}

const TabBar: React.FC<TabBarProps> = (props) => {
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
    <ul className="bg-pink-100 p-2 w-[80%] justify-center rounded-lg flex gap-10 mt-10 md:text-lg">
      {tabLists.map((item, idx) => {
        return (
          <li
            key={item.id}
            className={`cursor-pointer ${
              idx == currentIdx && "text-purple_300 font-semibold"
            }`}
            onClick={() => handleChange(item.name, idx)}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default TabBar;
