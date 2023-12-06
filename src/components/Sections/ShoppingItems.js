import Apparels from "./Apparels.js";
import Camera from "./Camera.js";
import Electronics from "./Electronics.js";
import FashionTrends from "./FashionTrends";
import HealthAndBeauty from "./HealthAndBeauty.js";
import PopularBooks from "./PopularBooks.js";
import Recommended from "./Recommended";
import ShoesSection from "./ShoesSection.js";
import TopPicks from "./TopPicks.js";

const ShoppingItems = () => {
  return (
    <article>
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
export default ShoppingItems;
