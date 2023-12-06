import { AdvancedImage } from "@cloudinary/react";
import ItemsDisplay from "./ItemsDisplay";
import { cld } from "./ItemsDisplay";
import { fill } from "@cloudinary/url-gen/actions/resize";

const HealthAndBeauty = () => {
  const myImage = cld.image("items/toothbrush");
  const myImage2 = cld.image("items/beauty-products");
  const myImage3 = cld.image("items/cosmetics");
  const myImage4 = cld.image("items/hairdressing-products");
  const myImage5 = cld.image("items/body-cream");
  const myImage6 = cld.image("items/combs");
  const CosmeticProducts = cld.image("Banners/cosmetic-products");

  //
  return (
    <section>
      <div className="w-full  bg-[#ccc] h-[5px]"></div>
      <AdvancedImage
        className="object-cover w-full max-h-[120px]"
        cldImg={CosmeticProducts}
      />
      <div className="w-full bg-[#ccc] h-[5px]"></div>
      <div>
        <ItemsDisplay
          title="Health & Beauty Products"
          image={myImage}
          image2={myImage2}
          image3={myImage3}
        />
        <ItemsDisplay image={myImage4} image2={myImage5} image3={myImage6} />
        <ItemsDisplay
          image3={myImage}
          image={myImage2}
          image2={myImage3}
          link=<p className="underline"> See more</p>
        />
      </div>
    </section>
  );
};
export default HealthAndBeauty;
