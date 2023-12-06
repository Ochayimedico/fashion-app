import { cld } from "./ItemsDisplay";
import { fill } from "@cloudinary/url-gen/actions/resize";
import ItemsDisplay from "./ItemsDisplay";

const Apparels = () => {
  const myImage = cld.image("items/women-apparel");

  const myImage2 = cld.image("items/men-apparel");
  const myImage3 = cld.image("items/girls-apparel");
  const myImage4 = cld.image("items/boys-apparel");

  myImage.resize(fill().width(375).height(375));
  myImage2.resize(fill().width(375).height(375));
  myImage3.resize(fill().width(375).height(375));
  myImage4.resize(fill().width(375).height(375));

  return (
    <section>
      <div className="w-full h-[2px] bg-[#ccc]"></div>
      <ItemsDisplay
        title="Apparel Under ₦10000"
        image={myImage}
        image2={myImage2}
        tag="Women"
        tag2="Men"
      />
      <ItemsDisplay
        image2={myImage4}
        image={myImage3}
        tag="Girls"
        tag2="Boys"
        link="See more"
      />
    </section>
  );
};
export default Apparels;
