import { useState } from "react";
import Header from "../Home/Header/Header";
import SideMenu from "../Home/Header/SideMenu";
import { SideMenuContext } from "../../utils/context";

import BannersAndShoppingCategory from "../Home/Banners/BannersAndShoppingCategory";
import IntlShopping from "../Home/Sections/IntlShopping";

import Footer from "../Home/Footer/Footer";
import MainSectionsRender from "../Home/Sections/MainSectionsRender";
import Modal from "../Modal";
import HomeBottom from "./Footer/HomeBottom";

const Home = () => {
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
        <Modal />
        <Header />
        <SideMenu />
        <BannersAndShoppingCategory />
        <IntlShopping />
        <MainSectionsRender />
        <HomeBottom />
        <Footer />
      </SideMenuContext.Provider>
    </div>
  );
};
export default Home;
