import { useContext } from "react";

import { SideMenuContext } from "../utils/context";

const Modal = () => {
  const { isModalOpen, setIsModalOpen, setSideMenuIsOpen } =
    useContext(SideMenuContext);

  const closeModal = () => {
    setIsModalOpen(false);
    setSideMenuIsOpen(false);
  };
  return (
    <div
      className={`${
        isModalOpen ? "visible " : "hidden"
      } w-full h-full fixed top-0 left-0 z-[50] bg-[#000000] opacity-[80%]`}
      onClick={closeModal}
    ></div>
  );
};
export default Modal;
