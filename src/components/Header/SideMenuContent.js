import { useState } from "react";
import dropdown from "../../photos/icons/dropdown.svg";
import home from "../../photos/icons/home.svg";
import SeeAllList from "./SeeAllList";
const SideMenuContent = () => {
  const [isSeeAllListOpen, setIsSeeAllListOpen] = useState(false);
  const expandSeeAllList = () => {
    setIsSeeAllListOpen(true);
  };
  return (
    <section className="flex flex-col">
      <div className=" flex flex-row m-[1rem] justify-between">
        <h1 className=" font-[700] text-[1.25rem]">Fashion Home </h1>
        <img src={home} alt="home icon" />
      </div>
      <div className="w-[100%] h-[5px] bg-[#D5DBDB]"></div>
      <div className="flex flex-col mx-[1rem] my-[0.5rem]  ">
        <h1 className="pb-[0.5rem] font-[700] text-[1.25rem]">Trending </h1>
        <p className="pt-[0.5rem]">Movies & Shakers </p>
      </div>
      <div className="w-[100%] h-[5px] bg-[#D5DBDB]"></div>
      <div className="flex flex-col mx-[1rem] my-[0.5rem]">
        <h1 className="pb-[0.5rem] font-[700] text-[1.25rem]">
          Top Departments
        </h1>
        <ul className="pt-[0.5rem] flex flex-col">
          <li className="py-[0.5rem]">Home</li>
          <li className="py-[0.5rem]">Health & Household</li>
          <li className="py-[0.5rem]">Books</li>
          <li className="py-[0.5rem]">PC</li>
          <li
            className={`${
              isSeeAllListOpen ? "hidden" : "visible"
            } py-[0.5rem] flex flex-row`}
            onClick={expandSeeAllList}
          >
            <p>See All</p>
            <img
              className="inline-block ml-[2px]"
              src={dropdown}
              alt="dropdown icon"
            />
          </li>
        </ul>
      </div>
      <SeeAllList
        isSeeAllListOpen={isSeeAllListOpen}
        setIsSeeAllListOpen={setIsSeeAllListOpen}
      />
    </section>
  );
};
export default SideMenuContent;
