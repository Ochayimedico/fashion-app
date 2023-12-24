import { AnimatePresence, motion } from "framer-motion";

import forwardArrow from "../../../photos/icons/forward-arrow.svg";
import collapse from "../../../photos/icons/collapse.svg";
import {
  childSeeAllListVariants,
  seeAllListVariants,
} from "../../../utils/animationVariants";
const list = [
  "Early Black Friday Deals",
  "Fashion Music",
  "Prime Video",
  "Books",
  "Echo & Alexa",
  "Fire Tablets",
  "Fire TV",
  "Kindle",
  "Audible Books & Originals",
  "Clothing, Shoes, Jewelry & Watches",
  "Electronics",
  "Office & School Supplies",
  "Gift Cards",
  "Fashion Appstore",
  "Movies, Music & Games",
  "Computers",
  "Home, Garden & Pets",
  "Handmade",
  "Beauty, Health & Personal Care",
  "Food & Grocery",
  "Toys, Kids & Baby",
  "Sports & Outdoors",
  "Automotive & Industrial",
  "Home Services",
  "Fashion Subscription Boxes",
  "Shop By Interest",
  "Fashion Business",
  "Fashion Custom",
  "Fashion Live",
  "Fashion Luna - Cloud Gaming",
  "Fashion Music",
  "Fashion Outlet",
  "Medical Care & Pharmacy",
  "Fashion Physical Stores",
  "Fashion Trade-in",
  "Fashion Second Chance",
  "Fashion Warehouse",
  "Audible",
  "Baby Registry",
  "Climate Pledge Friendly",
  "Credit & Payment Products",
  "Customers' Most-Loved Styles",
  "Your Essentials",
  "Find a Gift",
  "Home Services",
  "Luxury Stores",
  "Our Brands",
  "Pet Profile",
  "Prime",
  "Fashion Photos",
  "Prime Video",
  "Sell products on Amazon",
  "Subscribe & Save",
  "The Drop",
  "Early Black Friday Deals",
  "Wedding Registry",
];
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 31,
  32,
];
const SeeAllList = ({ isSeeAllListOpen, setIsSeeAllListOpen }) => {
  const collapseSeeAllList = () => {
    setIsSeeAllListOpen(false);
  };
  return (
    <div>
      <AnimatePresence>
        <motion.ul
          key={isSeeAllListOpen}
          variants={seeAllListVariants}
          initial="hidden"
          animate={isSeeAllListOpen && "visible"}
          exit="exit"
          className={`${
            !isSeeAllListOpen ? "hidden" : "visible"
          } border-[#ccc] border-t-[1px] border-solid mx-[1rem] py-[0.5rem]`}
        >
          {list.map((item, index) => (
            <motion.li
              variants={childSeeAllListVariants}
              key={index}
              className="py-[0.5rem] flex flex-row justify-between"
            >
              {item}
              {numbers.includes(index) && (
                <img
                  className="inline-block"
                  src={forwardArrow}
                  alt="forward arrow"
                />
              )}
            </motion.li>
          ))}
          <AnimatePresence>
            <motion.li
              variants={childSeeAllListVariants}
              className="py-[0.5rem] "
              onClick={collapseSeeAllList}
            >
              See Less
              <img
                className="inline-block ml-[2px]"
                src={collapse}
                alt="collapse arrow"
              />
            </motion.li>
          </AnimatePresence>
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};
export default SeeAllList;
