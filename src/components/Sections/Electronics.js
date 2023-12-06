import { cld } from "./ItemsDisplay";
import { fill } from "@cloudinary/url-gen/actions/resize";
import ItemsDisplay from "./ItemsDisplay";

const Electronics = () => {
  const myImage = cld.image("items/phone");

  const myImage2 = cld.image("items/coffee-maker");
  const myImage3 = cld.image("items/fridge");
  const myImage4 = cld.image("items/laptop");

  myImage.resize(fill().width(375).height(375));

  return (
    <section>
      <div className="w-full h-[2px] bg-[#ccc]"></div>
      <ItemsDisplay
        title="Discount Electronics"
        image={myImage}
        image2={myImage2}
      />
      <ItemsDisplay image2={myImage4} image={myImage3} link="See more" />
    </section>
  );
};
export default Electronics;
