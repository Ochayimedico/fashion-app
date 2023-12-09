import Banners from "./Banners";
import ShoppingCategory from "./ShoppingCategory";

const BannersAndShoppingCategory = () => {
  return (
    <article className="relative bg-[#ccc] h-full overflow-hidden mb-2">
      <Banners />
      <ShoppingCategory />
    </article>
  );
};
export default BannersAndShoppingCategory;
