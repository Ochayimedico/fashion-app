import { AdvancedImage } from "@cloudinary/react";
import ItemsDisplay from "./ItemsDisplay";
import { cld } from "./ItemsDisplay";
import { fill } from "@cloudinary/url-gen/actions/resize";

const FashionTrends = () => {
  const myImage = cld.image("items/shirt");
  const myImage2 = cld.image("items/dress");
  const myImage3 = cld.image("items/tshirt");
  const myImage4 = cld.image("items/shirt2");
  const laptopAndAccessoriesBanner = cld.image(
    "Banners/computers-and-accessories"
  );

  myImage3.resize(fill().width(375).height(375));
  myImage2.resize(fill().width(375).height(375));

  return (
    <section>
      <div className="w-full  bg-[#ccc] h-[5px]"></div>
      <AdvancedImage
        className="object-cover w-full max-h-[100px]"
        cldImg={laptopAndAccessoriesBanner}
      />
      <div className="w-full bg-[#ccc] h-[5px]"> </div>
      <div>
        <ItemsDisplay
          title="Fashion trends in Clothes"
          image={myImage}
          image2={myImage2}
          tag="Shop men's shirts"
          tag2="Shop women's dresses"
        />
        <ItemsDisplay
          image2={myImage3}
          image={myImage4}
          tag="Shop men's shirts"
          tag2="Shop men's shirts"
          link="See more"
        />
      </div>
    </section>
  );
};
export default FashionTrends;
