import { cld } from "./ItemsDisplay";
import { fill } from "@cloudinary/url-gen/actions/resize";
import ItemsDisplay from "./ItemsDisplay";

const ShoesSection = () => {
  const myImage = cld.image("items/kids-shoes");
  const myImage2 = cld.image("items/canvas");
  const myImage3 = cld.image("items/leather-shoe");
  const myImage4 = cld.image("items/heels");

  myImage3.resize(fill().width(375).height(375));

  return (
    <section>
      <div className="w-full h-[2px] bg-[#ccc]"></div>
      <ItemsDisplay
        title="Shoes Under ₦20000"
        image={myImage}
        image2={myImage2}
        tag="Kids' shoes"
        tag2="Men's canvas"
      />
      <ItemsDisplay
        image2={myImage4}
        image={myImage3}
        tag="Men's leather shoes"
        tag2="Women's heels"
        link="Shop all"
      />
    </section>
  );
};
export default ShoesSection;
