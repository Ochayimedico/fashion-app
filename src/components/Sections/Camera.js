import ItemsDisplay from "./ItemsDisplay";
import { cld } from "./ItemsDisplay";
import { fill } from "@cloudinary/url-gen/actions/resize";

const Camera = () => {
  const myImage = cld.image("items/video-recorder");
  const myImage2 = cld.image("items/camera");
  const myImage3 = cld.image("items/drone");

  myImage3.resize(fill().width(120).height(120));
  myImage2.resize(fill().width(120).height(120));
  myImage.resize(fill().width(120).height(120));

  return (
    <section>
      <div className="w-full  bg-[#ccc] h-[5px]"></div>

      <div>
        <ItemsDisplay
          title="Top Products in Camera"
          image={myImage}
          image2={myImage2}
          image3={myImage3}
        />
        <ItemsDisplay image={myImage3} image2={myImage} image3={myImage2} />
        <ItemsDisplay
          image3={myImage}
          image={myImage2}
          image2={myImage3}
          link=" See more"
        />
      </div>
    </section>
  );
};
export default Camera;
