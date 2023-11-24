import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import SideMenu from "./components/Header/SideMenu";
import { SideMenuContext } from "./utils/context";
import Modal from "./components/Modal";

import BannersAndShoppingCategory from "./components/Banners/BannersAndShoppingCategory";
import IntlShopping from "./components/Sections/IntlShopping";

// import Skeleton from "react-loading-skeleton";
function App() {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ctxValue = {
    isModalOpen,
    setIsModalOpen,
    sideMenuIsOpen,
    setSideMenuIsOpen,
  };
  return (
    <div>
      <SideMenuContext.Provider value={ctxValue}>
        <Header />
        <SideMenu />
        <Modal />
        <BannersAndShoppingCategory />

        <IntlShopping />
      </SideMenuContext.Provider>
    </div>
  );
}
export default App;
