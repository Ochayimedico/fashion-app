// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import { AnimatePresence, motion } from "framer-motion";
import { banners } from "../../utils/store";
import { useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { useSwipeable } from "react-swipeable";

const Banners = () => {
  const [currentImage, setCurrentImage] = useState(0);
  // const nextImg = () => {
  //   setCurrentImage((prevImage) => (prevImage + 1) % banners.length);

  // };
  // const event = () => {
  //   setCurrentImage((prevImage) => (prevImage + 1) % banners.length);
  // };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentImage((prevImage) => (prevImage + 1) % banners.length);
  //   }, 10000);
  //   return () => clearInterval(intervalId);
  // }, []);
  const handlers = useSwipeable({
    onSwiped: (eventData) =>
      setCurrentImage((prevImage) => (prevImage + 1) % banners.length),
  });

  console.log(currentImage);
  return (
    <section className="w-full h-full relative overflow-x-hidden scrollbar-hide">
      <AnimatePresence mode="wait">
        <motion.div className="w-full h-auto flex flex-row" {...handlers}>
          {banners.map((banner, index) => (
            <AdvancedImage
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, type: "tween" }}
              className="inline-block"
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
