import { createContext } from "react";

export const SideMenuContext = createContext({
  isModalOpen: false,
  sideMenuIsOpen: false,
});
