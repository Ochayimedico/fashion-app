import { createContext } from "react";

export const SideMenuContext = createContext({
  isModalOpen: false,
  sideMenuIsOpen: false,
});
export const AuthPageContext = createContext({
  selectedForm: "signin",
  setSelectedForm: () => {},
});
