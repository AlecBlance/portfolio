"use client";

import React, { useEffect, useState } from "react";
import { ProjectsIcon, VisualsIcon } from "@/components/Icon";
import AOS from "aos";

const Tab = () => {
  const [currentTab, setCurrentTab] = useState<string>("projects");

  const selectedStyle =
    "text-portfolio-secondary bg-portfolio-accent fill-portfolio-secondary";
  const unSelectedStyle = "text-portfolio-gray fill-portfolio-gray";

  const setTab = (tab: string) => {
    return () => {
      const flexedTab = document.querySelector<HTMLElement>(".tab.flex")!;
      flexedTab.classList.remove("flex");
      flexedTab.classList.remove("lg:grid");
      flexedTab.classList.add("hidden");
      const selectedTab = document.querySelector<HTMLElement>(`.tab.${tab}`)!;
      tab === "visuals"
        ? selectedTab.classList.add("flex", "lg:grid")
        : selectedTab.classList.add("flex");
      selectedTab.classList.remove("hidden");
      setCurrentTab(tab);
    };
  };

  useEffect(() => {
    AOS.refresh();
  }, [currentTab]);

  return (
    <div
      className="px-12 mt-10 flex items-center sm:px-[15vw] lg:w-64 lg:px-0 mx-auto"
      data-aos="fade-zoom-in"
      data-aos-easing="ease"
      data-aos-duration="500"
      data-aos-delay="100"
    >
      <div className="flex bg-portfolio-black w-full rounded-lg border border-portfolio-lightgray">
        <button
          className={`w-1/2 flex items-center justify-center m-1 px-2 py-1 rounded-lg ${
            currentTab === "projects" ? selectedStyle : unSelectedStyle
          }`}
          onClick={setTab("projects")}
        >
          <ProjectsIcon className="pr-2 shrink-0 w-7 h-7" />
          Projects
        </button>
        <button
          className={`w-1/2 flex items-center justify-center m-1 px-2 py-1 rounded-lg ${
            currentTab === "visuals" ? selectedStyle : unSelectedStyle
          }`}
          onClick={setTab("visuals")}
        >
          <VisualsIcon className="w-7 h-7 shrink-0 pr-2" />
          Visuals
        </button>
      </div>
    </div>
  );
};
export default Tab;
