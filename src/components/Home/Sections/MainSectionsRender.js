import Apparels from "./Apparels.js";
import Camera from "./Camera.js";
import Electronics from "./Electronics.js";
import FashionTrends from "./FashionTrends.js";
import HealthAndBeauty from "./HealthAndBeauty.js";
import PopularBooks from "./PopularBooks.js";
import Recommended from "./Recommended.js";
import ShoesSection from "./ShoesSection.js";
import TopPicks from "./TopPicks.js";
import AuthSection from "./AuthSection.js";
import { useContext } from "react";
import { AuthPageContext } from "../../../utils/context.js";

const MainSectionsRender = () => {
  const { setIsSignInClicked, setIsCreateAccountClicked } =
    useContext(AuthPageContext);

  return (
    <article>
      <AuthSection
        setIsCreateAccountClicked={setIsCreateAccountClicked}
        setIsSignInClicked={setIsSignInClicked}
      />
      <Recommended />
      <FashionTrends />
      <ShoesSection />
      <Apparels />
      <HealthAndBeauty />
      <Electronics />
      <Camera />
      <PopularBooks />
      <TopPicks />
    </article>
  );
};
export default MainSectionsRender;
