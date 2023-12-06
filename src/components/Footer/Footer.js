import upArrow from "../../photos/icons/up-arrow.svg";
import globe from "../../photos/icons/globe.svg";
import switchLeft from "../../photos/icons/switch-left.svg";
import flag from "../../photos/icons/flag.svg";
import naira from "../../photos/icons/naira.svg";
const Footer = () => {
  const leftSideList = [
    "Fashion.com",
    "Your Lists",
    "Find a Gift",
    "Browsing History",
    "Returns",
  ];
  const rightSideList = [
    "Your Orders",
    "Gift Cards & Registry",
    "Your Account",
    "Sell Products on Fashion",
    "Your Recalls and Product Safety Alerts",
    "Customer Service",
  ];
  return (
    <section className="flex flex-col max-w-[100vw] text-white  ">
      <div className="bg-[#37475A] flex-col  flex w-full justify-center items-center py-[0.25rem]">
        <img
          className="inline-block pb-[0.25rem]"
          src={upArrow}
          alt="up arrow"
        />
        <p className="uppercase text-center text-[0.65rem]">top of page</p>
      </div>
      <div className="bg-[#232F3E] py-[1.25rem] px-[1rem] w-[100vw] flex flex-row flex-wrap  font-[500] justify-between leading-[1.2em]">
        <ul className="w-[50%] pt-[1rem]">
          {leftSideList.map((list, index) => (
            <li className="mb-[1.5rem]" key={index}>
              {list}
            </li>
          ))}
        </ul>
        <ul className="w-[50%] pt-[1rem]">
          {rightSideList.map((list, index) => (
            <li className="mb-[1.5rem]" key={index}>
              {list}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#0D141E] w-full flex flex-col items-center justify-center py-[1.5rem]">
        <ul className="flex flex-row justify-evenly flex-wrap text-center w-full items-center">
          <li className="flex flex-row justify-between items-center text-center">
            <img
              className="inline-block  mr-[0.25rem]"
              src={globe}
              alt="globe icon"
            />
            <p className="font-[400]">English</p>
          </li>
          <li className="flex flex-row justify-between items-center text-center">
            <img
              className="inline-block mr-[0.25rem]"
              src={naira}
              alt="naira icon"
            />
            <p className="font-[400] ">NGN - N.G. Naira</p>
          </li>
          <li className="flex flex-row justify-between items-center text-center">
            <img
              className="inline-block mr-[0.25rem]"
              src={flag}
              alt="flag icon"
            />
            <p className="font-[400] text-center">Nigeria</p>
          </li>
        </ul>
        <p className="font-[600] text-center py-[1.5rem]">
          Already a customer? Sign in
        </p>
        <ul className="flex flex-row justify-evenly w-full flex-wrap text-center items-center text-[0.65rem]">
          <li className="flex flex-row justify-between">Conditions of Use</li>
          <li className="flex flex-row justify-between">Privacy Notice</li>
          <li className="flex flex-row justify-between">
            Your Ads Privacy Choices
          </li>
          <img className="inline-block" src={switchLeft} alt="switch" />
        </ul>
        <p className="text-[0.65rem] py-[0.5rem]">
          &copy; 2023, Fashion.com, Inc. or its affiliates
        </p>
      </div>
    </section>
  );
};
export default Footer;
