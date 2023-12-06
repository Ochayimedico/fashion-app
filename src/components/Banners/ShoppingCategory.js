import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AnimatePresence, motion } from "framer-motion";
import { shoppingCategoryVariants } from "../../utils/animationVariants";
import { shoppingCategory } from "../../utils/store";
import styles from "./ShoppingCategory.module.css";
import { AdvancedImage } from "@cloudinary/react";

const ShoppingCategory = () => {
  return (
    <AnimatePresence>
      {/* <div className="overflow-x-hidden "> */}
      <motion.ul
        className={` ${styles.animate} box-border h-auto w-[100vw] flex flex-row  p-[0.5rem] overflow-x-auto drop-shadow-[0_10px_10px_rgba(225,225,225,1)] scrollbar-hide absolute bottom-[0px]`}
      >
        {shoppingCategory.map((card, index) => (
          <div key={index} className="w-50%   ">
            <motion.li
              key={index}
              variants={shoppingCategoryVariants}
              whileHover="hover"
              whileTap="tap"
              whileInView="inView"
              className="flex flex-col bg-white min-w-[130px] max-h-[180px] mr-[0.5rem] rounded-[0.375rem] overflow-auto "
            >
              <div className="flex w-[100%] min-h-[50px] p-[0.25rem] items-center">
                <p className="font-[500] text-[0.85rem] text-black leading-[1.2em]">
                  {card.title || <Skeleton />}
                </p>
              </div>
              <div className="box-border min-h-[110px] overflow-hidden">
                <AdvancedImage
                  className="inline-block w-[100%] object-cover  rounded-b-[0.375rem]"
                  cldImg={card.imageUrl || <Skeleton />}
                  alt={card.alt}
                />
              </div>
            </motion.li>
          </div>
        ))}
      </motion.ul>
      {/* </div> */}
    </AnimatePresence>
  );
};
export default ShoppingCategory;
