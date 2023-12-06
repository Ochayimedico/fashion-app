import { cld } from "./ItemsDisplay";
// import { fill } from "@cloudinary/url-gen/actions/resize";
import BooksDisplay from "./BooksDisplay";

const TopPicks = () => {
  const myImage = cld.image("items/yellow-notebook");
  const myImage2 = cld.image("items/green-notebook");
  const myImage3 = cld.image("items/hard-cover");
  //   const myImage4 = cld.image("items/heels");

  return (
    <section>
      <div className="bg-[#ccc] w-full h-[2px]"></div>

      <BooksDisplay
        title="Top picks for you"
        image={myImage}
        topic="Yellow Notebook"
        price="₦2000"
      />
      <BooksDisplay image={myImage2} topic="Green Notebook" price="₦2500" />
      <BooksDisplay image={myImage3} topic="Encyclopedia" price="₦3000" />
    </section>
  );
};
export default TopPicks;
