import Apparels from "./Apparels.js";
import Camera from "./Camera.js";
import Electronics from "./Electronics.js";
import FashionTrends from "./FashionTrends.js";
import HealthAndBeauty from "./HealthAndBeauty.js";
import PopularBooks from "./PopularBooks.js";
import Recommended from "./Recommended.js";
import ShoesSection from "./ShoesSection.js";
import SignIn from "./SignIn.js";
import TopPicks from "./TopPicks.js";

const MainSectionsRender = () => {
  return (
    <article>
      <SignIn />
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
