import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import { banners } from "../../utils/store";

const Banners = () => {
  return (
    <section className="overflow-x-auto scrollbar-hide">
      <div className="flex flex-row ">
        {banners.map((banner) => (
          <motion.img
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
