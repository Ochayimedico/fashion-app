import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

export const cld = new Cloudinary({
  cloud: {
    cloudName: "ochmed",
  },
});
const BooksDisplay = ({ title, image, topic, price, formerPrice }) => {
  return (
    <section>
      <div className=" border-box max-w-full h-auto py-[0.65rem]  px-[1rem] bg-white ">
        {title && (
          <h1 className="text-black text-[1.05rem] mb-[0.5rem] font-[600]">
            {title}
          </h1>
        )}
        <div className="flex flex-row my-[0.25rem] ">
          <div className="w-[100px] h-[100px] mr-[0.25rem] bg-[#F7F8F8] items-center object-contain justify-center flex">
            <AdvancedImage
              className="inline-block h-[100%] w-[96%]"
              cldImg={image}
            />
          </div>
          <div className="flex flex-col text-black text-[0.95rem] font-[500]">
            <p className="mb-[0.15rem] "> {topic}</p>
            <p>
              {price}
              {formerPrice && (
                <span className="font-[400] text-[0.8rem]">
                  {" "}
                  List: <span className="line-through">{formerPrice}</span>
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BooksDisplay;
