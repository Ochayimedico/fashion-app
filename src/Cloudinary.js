import { CloudinaryContext, Image } from "cloudinary-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// impor;
const Cloudinary = () => {
  return (
    <CloudinaryContext
      cloudName="ochmed"
      secure="true"
      //   upload_preset="ml_default"
    >
      {<Image publicId="Banners/kitchen" /> || <Skeleton />}
    </CloudinaryContext>
  );
};
export default Cloudinary;
