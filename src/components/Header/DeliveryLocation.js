import location from "../../photos/icons/location.svg";
import down from "../../photos/icons/down.svg";
const DeliveryLocation = () => {
  return (
    <div className=" flex flex-row bg-[#37475A] w-[100%] py-[0.75rem]  px-[0.5rem] flex-start items-center">
      <div className="inline-block">
        <img src={location} alt="location icon" />
      </div>
      <p className="text-white text-[0.85rem] mx-[0.25rem]">
        Deliver to Nigeria
      </p>

      <img
        src={down}
        alt="down arrow icon"
        className="inline-block w-[16px] h-[16px]"
      />
    </div>
  );
};
export default DeliveryLocation;
