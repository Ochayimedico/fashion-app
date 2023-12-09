import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

export const cld = new Cloudinary({
  cloud: {
    cloudName: "ochmed",
  },
});
const ItemsDisplay = ({
  title,
  image,
  price,
  priceTag,
  image2,
  image3,
  price2,
  priceTag2,
  link,
  tag,
  tag2,
}) => {
  return (
    <div className="flex flex-col border-box max-w-full h-auto pt-[0.65rem]  px-[1rem] bg-white">
      {title && (
        <h1 className="text-black text-[1.05rem] mb-[0.5rem] font-[600] ">
          {title}
        </h1>
      )}

      <div className="flex flex-row w-[100%] border-box justify-between">
        <div
          className={`${image3 ? "w-[32%]" : "w-[49%]"} ${
            image3 ? "h-[33%]" : "h-[50%]"
          } flex flex-col rounded-[4px]`}
        >
          <div className="object-contain rounded-[4px]">
            <AdvancedImage
              className="rounded-[4px] w-full h-full"
              cldImg={image}
            />
          </div>
          {price && priceTag && (
            <div className="flex flex-row text-[0.66rem] font-[600] w-full my-[0.25rem] items-center  ">
              <div className="bg-[#CC0C39] rounded-[2px] text-white py-[0.35rem] px-[0.45rem]  mr-[4px] ">
                {price}
              </div>
              <p className="text-[#CC0C39] items-center">{priceTag}</p>
            </div>
          )}
          {tag && <p className="text-black font-[500]">{tag}</p>}
        </div>
        <div
          className={`${
            image3 ? "w-[32%]" : "w-[49%]"
          } flex flex-col rounded-[4px] ${image3 ? "h-[33%]" : "h-[50%]"}`}
        >
          <div className="object-contain rounded-[4px]">
            <AdvancedImage
              className="rounded-[4px] w-full h-full"
              cldImg={image2}
            />
          </div>
          {price2 && priceTag2 && (
            <div className="flex flex-row text-[0.66rem] font-[600] w-full my-[0.25rem] items-center  ">
              <div className="bg-[#CC0C39] rounded-[2px] text-white py-[0.35rem] px-[0.45rem] mr-[4px]">
                {price2}
              </div>
              <p className="text-[#CC0C39] items-center">{priceTag2}</p>
            </div>
          )}
          {tag2 && <p className="text-black font-[500]">{tag2}</p>}
        </div>
        {image3 && (
          <div
            className={`${image3 ? "w-[32%]" : "w-[49%]"} ${
              image3 ? "h-[33%]" : "h-[50%]"
            } flex flex-col rounded-[4px]`}
          >
            <div className="object-contain rounded-[4px]">
              <AdvancedImage
                className="rounded-[4px] w-full h-full"
                cldImg={image3}
              />
            </div>
            {price2 && priceTag2 && (
              <div className="flex flex-row text-[0.66rem] font-[600] w-full my-[0.25rem] items-center  ">
                <div className="bg-[#CC0C39] rounded-[2px] text-white py-[0.35rem] px-[0.45rem] mr-[4px]">
                  {price2}
                </div>
                <p className="text-[#CC0C39] items-center">{priceTag2}</p>
              </div>
            )}
            {tag2 && <p className="text-black font-[500]">{tag2}</p>}
          </div>
        )}
      </div>
      {link && <p className="my-[0.5rem] font-[600] text-[#147C8F]">{link}</p>}
    </div>
  );
};

export default ItemsDisplay;
