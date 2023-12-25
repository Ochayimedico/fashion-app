import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import close from "../../photos/icons/close.svg";
import { SideMenuContext } from "../../utils/context";

const Modal = () => {
  const { isModalOpen, setIsModalOpen, setSideMenuIsOpen } =
    useContext(SideMenuContext);
  const closeModal = () => {
    setIsModalOpen(false);
    setSideMenuIsOpen(false);
  };
  return (
    <AnimatePresence mode="wait">
      <div
        className={`${
          isModalOpen ? "visible " : "hidden"
        }  w-full h-full fixed z-[50] bg-[#000000] opacity-[80%] overflow-hidden`}
        onClick={closeModal}
      >
        <motion.div
          key={isModalOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
          className="w-[20px] h-[20px] absolute top-[2rem] right-[2rem] "
        >
          <img src={close} alt="close icon" onClick={closeModal} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default Modal;
