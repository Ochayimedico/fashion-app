import { AnimatePresence, motion } from "framer-motion";
import user from "../../photos/icons/avatar.svg";
import close from "../../photos/icons/close.svg";
// import { sideMenuVariants } from "../utils/animationVariants";
import SideMenuContent from "./SideMenuContent";
import { useContext } from "react";
import { SideMenuContext } from "../../utils/context";

const SideMenu = () => {
  // const MenuItems = []

  const { sideMenuIsOpen, setSideMenuIsOpen, setIsModalOpen } =
    useContext(SideMenuContext);
  const closeSideMenu = () => {
    setSideMenuIsOpen(false);
    setIsModalOpen(false);
  };
  return (
    <AnimatePresence>
      <motion.aside
        // variants={sideMenuVariants}
        // initial="hidden"
        // animate="visible"
        // exit="exit"
        className={`${
          sideMenuIsOpen ? "visible " : "hidden"
        } w-[80%] bg-white h-[100%] overflow-y-auto fixed top-0 left-0 z-[100]`}
      >
        <div className="p-[1rem] bg-[#0F172A]">
          <div className="flex flex-row justify-between  my-[0.5rem]">
            <div className="w-[20px] h-[20px]">
              <img src={close} alt="close icon" onClick={closeSideMenu} />
            </div>

            <div className="flex flex-row ">
              <p className="text-white text-[0.85rem]">Sign in </p>
              <div className="inline-block ml-[0.25rem] w-[20px] h-[20px]">
                <img src={user} alt="user icon" />
              </div>
            </div>
          </div>
          <h1 className="text-left text-white max-w-[50%] text-[1.75rem] leading-[0.8em] font-[600]">
            <span className="font-[700] text-[1.25rem]"> Browse</span> Fashion
          </h1>
        </div>
        <SideMenuContent />
      </motion.aside>
    </AnimatePresence>
  );
};
export default SideMenu;
