// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import forward from "../../photos/icons/forward.svg";
import menu from "../../photos/icons/menu.svg";
import search from "../../photos/icons/search.svg";
import bag from "../../photos/icons/bag.svg";
import user from "../../photos/icons/avatar.svg";
// import { Link } from "react-router-dom";
import Categories from "./Categories";
import DeliveryLocation from "./DeliveryLocation";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { SideMenuContext } from "../../utils/context";
// import { menuVariants } from "../utils/animationVariants";

const Header = () => {
  const { setIsModalOpen, sideMenuIsOpen, setSideMenuIsOpen } =
    useContext(SideMenuContext);

  const openSideMenu = () => {
    if (!sideMenuIsOpen) {
      setSideMenuIsOpen(true);
    } else {
      setSideMenuIsOpen(false);
    }
    setIsModalOpen(true);
  };
  return (
    <div>
      <header className=" px-[0.5rem] pt-[0.5rem] pb-[0.75rem] bg-[#0F172A]">
        <div className=" flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <AnimatePresence>
              <motion.div
                // variants={menuVariants}
                // initial="hidden"
                // animate="visible"
                // exit="exit"
                onClick={openSideMenu}
              >
                <img src={menu} alt="menu icon" />
              </motion.div>
            </AnimatePresence>
            <h1 className="text-white text-[1.5rem] ml-[0.65rem]">fashion</h1>
          </div>
          <div className="items-center flex flex-row">
            <div className="flex flex-row items-center">
              <p className="text-white">Sign in </p>

              <img
                className="inline-block"
                src={forward}
                alt="forward arrow icon"
              />

              <img
                className="inline-block mr-[0.5rem]"
                src={user}
                alt="user icon"
              />
            </div>
            <div className=" mx-[0.5rem]">
              <img src={bag} alt="shopping bag icon" />
            </div>
          </div>
        </div>
        <div className="w-[100%] rounded-md">
          <div className="flex flex-row bg-white rounded-[0.5rem] mt-[0.25rem]">
            <input
              className="text-left rounded-md  p-[0.5rem] w-[100%]"
              type="search"
              placeholder="Search Fashion"
            />
            <div className="p-[0.65rem] rounded-[0.5rem] bg-[#FEBD69]">
              <img src={search} alt="search icon" />
            </div>
          </div>
        </div>
      </header>
      <Categories />
      <DeliveryLocation />
    </div>
  );
};
export default Header;
