// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import { AnimatePresence, motion } from "framer-motion";
import { banners } from "../../../utils/store";
import { useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { useSwipeable } from "react-swipeable";
// import { lazyload } from "@cloudinary/react";
// import {LazyLoadImage} from 'react-lazy-load-image-component'

const Banners = () => {
  const [currentImage, setCurrentImage] = useState(0);

  if (currentImage === 4) {
    setCurrentImage(0);
  }

  const handlers = useSwipeable({
    onSwipedRight: () =>
      setCurrentImage((prevImage) => (prevImage + 1) % banners.length),
    onSwipedLeft: () =>
      setCurrentImage(
        (prevImage) => (prevImage - 1 + banners.length) % banners.length
      ),
  });

  // console.log(currentImage);
  return (
    <section className="w-full h-full relative  scrollbar-hide">
      <AnimatePresence mode="wait">
        <motion.div className="w-full  flex flex-row" {...handlers}>
          {banners.map((banner, index) => (
            <AdvancedImage
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 1, type: "tween" }}
              // className={`inline-block ${
              //   index === currentImage ? "visible" : "hidden"
              // }`}
              key={index}
              cldImg={banner.imageUrl}
              alt={banner.alt}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
export default Banners;
