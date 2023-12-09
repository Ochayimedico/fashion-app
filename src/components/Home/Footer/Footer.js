import globe from "../../../photos/icons/globe.svg";
import switchLeft from "../../../photos/icons/switch-left.svg";
import flag from "../../../photos/icons/flag.svg";
import naira from "../../../photos/icons/naira.svg";
const Footer = () => {
  return (
    <section className="flex flex-col max-w-[100vw] text-white  ">
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
          <li className="flex flex-row justify-between items-center  text-center">
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
