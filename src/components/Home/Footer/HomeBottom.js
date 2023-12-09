import upArrow from "../../../photos/icons/up-arrow.svg";

const HomeBottom = () => {
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
    </section>
  );
};
export default HomeBottom;
