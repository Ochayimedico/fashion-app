import { AnimatePresence, motion } from "framer-motion";
import user from "../../../photos/icons/avatar.svg";
import SideMenuContent from "./SideMenuContent";
import { useContext } from "react";
import { SideMenuContext } from "../../../utils/context";
import { sideMenuVariants } from "../../../utils/animationVariants";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const { sideMenuIsOpen } = useContext(SideMenuContext);

  return (
    <AnimatePresence initial={false} mode="wait">
      {sideMenuIsOpen && (
        <motion.aside
          variants={sideMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`${
            sideMenuIsOpen ? "visible " : "hidden"
          } w-[80vw] bg-white h-[100%] overscroll-none overflow-y-auto fixed top-0 left-0 z-[100]`}
        >
          <motion.div className="p-[1rem] bg-[#0F172A]">
            <Link to="/auth-page?form=sign-in"></Link>{" "}
            <div className="flex flex-row justify-end my-[0.5rem]">
              <div className="flex flex-row ">
                <p className="text-white text-[0.85rem]">Sign in </p>
                <div className="inline-block ml-[0.25rem] w-[20px] h-[20px]">
                  <img src={user} alt="user icon" />
                </div>
              </div>
            </div>
            <h1 className="text-left text-white max-w-[50%] text-[1.65rem] leading-[1em] font-[500]">
              <span className="font-[600] text-[1.15rem]"> Browse</span> Fashion
            </h1>
          </motion.div>
          <motion.div>
            <SideMenuContent />
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
export default SideMenu;
