import React, { useState } from "react";

interface ITabSwitchProps {
  tabTitles: string[];
  currentTab: string;
  tabSwitchHandler: (tabToSet: string) => void;
}

const TabSwitch = ({
  tabTitles,
  tabSwitchHandler,
  currentTab,
}: ITabSwitchProps) => {
  return (
    <div className="mb-6">
      <ul className="flex justify-center">
        {tabTitles.map((title) => (
          <li
            className={`mr-6 cursor-pointer ${
              currentTab === title ? "text-blue-500 font-bold" : "text-gray-500"
            }`}
            key={title}
            onClick={() => tabSwitchHandler(title)}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabSwitch;
