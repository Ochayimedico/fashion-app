import ItemsDisplay from "./ItemsDisplay";
import { cld } from "./ItemsDisplay";

const Recommended = () => {
  const myImage = cld.image("items/canvas");
  const myImage2 = cld.image("items/heels");
  return (
    <div className="">
      <ItemsDisplay
        title="Recommended just for you"
        image={myImage}
        price="15% off"
        priceTag="Super monday deal"
        image2={myImage2}
        price2="10% off"
        priceTag2="Super monday deal"
      />
      <ItemsDisplay
        image2={myImage}
        price2="15% off"
        priceTag2="Super monday deal"
        image={myImage2}
        price="10% off"
        priceTag="Super monday deal"
        link="See all deals"
      />
    </div>
  );
};
export default Recommended;
