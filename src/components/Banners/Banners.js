import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import beauty from "../../photos/banners/beauty.png";
import home from "../../photos/banners/home.png";
import kitchen from "../../photos/banners/kitchen.png";
import shop from "../../photos/banners/shop.png";
import toys from "../../photos/banners/toys.png";
import { shoppingCategoryVariants } from "../../utils/animationVariants";
// import ShoppingCategory from "./ShoppingCategory";

const Banners = () => {
  const banners = [
    {
      id: 1,
      imageUrl: shop,
      alt: "shopping banne",
    },
    {
      id: 2,
      imageUrl: beauty,
      alt: "beauty products banne",
    },
    {
      id: 3,
      imageUrl: home,
      alt: "home banner",
    },
    {
      id: 4,
      imageUrl: toys,
      alt: "toys and games banner",
    },
    {
      id: 5,
      imageUrl: kitchen,
      alt: "kitchen banner",
    },
  ];
  return (
    <section className="overflow-x-auto relative">
      <div className="flex flex-row ">
        {banners.map((banner) => (
          <motion.img
            variants={shoppingCategoryVariants}
            initial="hidden"
            animate="visible"
            whileInView="whileInView"
            viewport="viewport"
            key={banner.id}
            src={banner.imageUrl || <Skeleton />}
            alt={banner.alt}
          />
        ))}
      </div>
    </section>
  );
};
export default Banners;
