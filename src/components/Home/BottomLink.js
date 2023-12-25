import { AnimatePresence, motion } from "framer-motion";
import logo from "../../photos/fashion.png";
import { useState } from "react";

const BottomLink = () => {
  const [bottomLinkIsOpen, setBottomLinkIsOpen] = useState(true);
  const closeBottomLink = () => {
    setBottomLinkIsOpen(false);
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ delay: 3, duration: 2, ease: "easeInOut" }}
        className={` ${
          !bottomLinkIsOpen ? "hidden" : "visible"
        } bg-[#EAEDED] z-[90] fixed bottom-4 w-[95%] h-[60px] p-[0.5rem] rounded-[0.5rem] ml-[2.5%] items-center flex`}
      >
        <div className="flex flex-row items-center">
          <img
            className="w-[36px] h-[36px] mr-[0.75rem]"
            src={logo}
            alt="fashion logo"
          />
          <p className="text-[#0B778A] font-[600] text-[0.85rem] whitespace-wrap">
            Get real-time delivery alerts with the Amazon Shopping app
          </p>
        </div>

        <svg
          onClick={closeBottomLink}
          className="absolute top-2 right-2 "
          width="14px"
          height="14px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#393B3B"
          stroke-width="0.2"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
              fill="#393B3B"
            ></path>
          </g>
        </svg>
      </motion.div>
    </AnimatePresence>
  );
};
export default BottomLink;
