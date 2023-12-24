import { useState } from "react";
import { motion } from "framer-motion";
import dropdown from "../../../photos/icons/dropdown.svg";
import home from "../../../photos/icons/home.svg";
import SeeAllList from "./SeeAllList";
import {
  childListVariants,
  listVariants,
} from "../../../utils/animationVariants";
const SideMenuContent = () => {
  const [isSeeAllListOpen, setIsSeeAllListOpen] = useState(false);
  const expandSeeAllList = () => {
    setIsSeeAllListOpen(true);
  };
  return (
    <motion.section className="flex flex-col">
      <div className=" flex flex-row m-[1rem] justify-between items-center">
        <h1 className=" font-[700] text-[1.25rem]">Fashion Home </h1>
        <img src={home} alt="home icon" />
      </div>
      <div className="w-[100%] h-[5px] bg-[#D5DBDB]"></div>
      <div className="flex flex-col mx-[1rem] my-[0.65rem]  ">
        <h1 className=" font-[700] text-[1.25rem]">Trending </h1>
        <p className="pt-[1rem]">Movies & Shakers </p>
      </div>
      <div className="w-[100%] h-[5px] bg-[#D5DBDB]"></div>
      <div className="flex flex-col mx-[1rem] my-[0.5rem]">
        <h1 className="pb-[0.5rem] font-[700] text-[1.25rem]">
          Top Departments
        </h1>
        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="pt-[0.5rem] flex flex-col"
        >
          <motion.li variants={childListVariants} className="py-[0.75rem]">
            Home
          </motion.li>
          <motion.li variants={childListVariants} className="py-[0.75rem]">
            Health & Household
          </motion.li>
          <motion.li variants={childListVariants} className="py-[0.75rem]">
            Books
          </motion.li>
          <motion.li variants={childListVariants} className="py-[0.75rem]">
            PC
          </motion.li>
          <motion.li
            variants={childListVariants}
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
          </motion.li>
        </motion.ul>
      </div>
      <SeeAllList
        isSeeAllListOpen={isSeeAllListOpen}
        setIsSeeAllListOpen={setIsSeeAllListOpen}
      />
    </motion.section>
  );
};
export default SideMenuContent;
