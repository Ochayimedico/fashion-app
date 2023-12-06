import { cld } from "./ItemsDisplay";
// import { fill } from "@cloudinary/url-gen/actions/resize";
import BooksDisplay from "./BooksDisplay";

const PopularBooks = () => {
  const myImage = cld.image("items/different-winter");
  const myImage2 = cld.image("items/own-business");
  const myImage3 = cld.image("items/hard-cover");
  //   const myImage4 = cld.image("items/heels");

  return (
    <section>
      <div className="bg-[#ccc] w-full h-[2px]"></div>

      <BooksDisplay
        title="Popular books this season"
        image={myImage}
        topic="Different Winter"
        price="₦2000"
        formerPrice="₦4000"
      />
      <BooksDisplay
        image={myImage2}
        topic="Create Your Own Business"
        price="₦2500"
        formerPrice="₦5000"
      />
      <BooksDisplay
        image={myImage3}
        topic="Encyclopedia"
        price="₦1500"
        formerPrice="₦3000"
      />
    </section>
  );
};
export default PopularBooks;
