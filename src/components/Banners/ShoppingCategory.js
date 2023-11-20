import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import shoe from "../../photos/shopping-categories/shoe.png";
import storage from "../../photos/shopping-categories/storage.png";
import giftBox from "../../photos/shopping-categories/gift-box.png";
import clothing from "../../photos/shopping-categories/clothing.png";
import trainToy from "../../photos/shopping-categories/train-toy.png";
import beauty from "../../photos/shopping-categories/beauty.png";
import decor from "../../photos/shopping-categories/decor.png";
import gifts from "../../photos/shopping-categories/gifts.png";
import fashion from "../../photos/shopping-categories/fashion.png";
import planeToy from "../../photos/shopping-categories/plane-toy.png";
import plates from "../../photos/shopping-categories/plates.png";
import utensils from "../../photos/shopping-categories/utensils.png";
import appliance from "../../photos/shopping-categories/appliance.png";
import socks from "../../photos/shopping-categories/socks.png";
import pc from "../../photos/shopping-categories/pc.png";
import { shoppingCategoryVariants } from "../../utils/animationVariants";

const ShoppingCategory = () => {
  const shoppingCategory = [
    {
      id: 1,
      title: "Recommended deals for you",
      imageUrl: shoe,
      alt: "shoe",
    },
    {
      id: 2,
      title: "Shop storage devices",
      imageUrl: storage,
      alt: "storage device",
    },
    {
      id: 3,
      title: "Small gifts under ₦5000",
      imageUrl: giftBox,
      alt: "gift box",
    },
    {
      id: 4,
      title: "Deals in PC",
      imageUrl: pc,
      alt: "laptop",
    },
    {
      id: 5,
      title: "Toys",
      imageUrl: trainToy,
      alt: "train toy",
    },
    {
      id: 6,
      title: "Shop holiday gift guides",
      imageUrl: gifts,
      alt: "gifts",
    },
    {
      id: 7,
      title: "New from Ochayi",
      imageUrl: clothing,
      alt: "sweat shirt",
    },
    {
      id: 8,
      title: "Deals on most-loved gifts",
      imageUrl: plates,
      alt: "plates",
    },
    {
      id: 9,
      title: "Home decor under ₦20000",
      imageUrl: decor,
      alt: "home decor",
    },
    {
      id: 10,
      title: "Beauty steals under ₦2500",
      imageUrl: beauty,
      alt: "beauty products",
    },
    {
      id: 11,
      title: "Shop premium gifts under ₦900",
      imageUrl: socks,
      alt: "socks and towel",
    },
    {
      id: 12,
      title: "Hosting essentials",
      imageUrl: utensils,
      alt: "kitchen utensils",
    },
    {
      id: 13,
      title: "Score big deals on toys",
      imageUrl: planeToy,
      alt: "plane toy",
    },
    {
      id: 14,
      title: "New from big Och",
      imageUrl: appliance,
      alt: "coffee maker",
    },
    {
      id: 15,
      title: "Holiday deals in fashion",
      imageUrl: fashion,
      alt: "belt, wallet, bag, shoe, hat",
    },
  ];

  return (
    <div className="box-border absolute bottom-0 w-[100vw]  h-auto overflow-x-auto flex flex-row z-[40] m-[0.5rem]  overflow-y-hidden drop-shadow-[0_35px_35px_rgba(225,225,225,1)]">
      {shoppingCategory.map((card) => (
        <motion.div
          key={card.id}
          variants={shoppingCategoryVariants}
          whileHover="whileHover"
          whileTap="whileTap"
          initial="hidden"
          animate="visible"
          whileInView="whileInView"
          viewport="viewport"
          className="flex flex-col bg-white min-w-[130px] max-h-[160px] mr-[0.5rem] rounded-[0.375rem] overflow-hidden "
        >
          <div className="flex w-[100%] min-h-[50px] p-[0.25rem] items-center">
            <p className=" font-[600] text-black leading-[1.2em]">
              {card.title || <Skeleton />}
            </p>
          </div>
          <div className="box-border min-h-[110px] ">
            <img
              className="inline-block w-[100%] object-cover  rounded-b-[0.375rem]"
              src={card.imageUrl || <Skeleton />}
              alt={card.alt}
            />
          </div>
        </motion.div>
      )) || <Skeleton />}
    </div>
  );
};
export default ShoppingCategory;
