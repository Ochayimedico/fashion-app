import { intlShopping } from "../../utils/store";
const IntlShopping = () => {
  return (
    <div>
      <h1 className="px-[0.5rem] text-[1.05rem] font-[600] text-center">
        Discover Amazon International Shopping
      </h1>
      <ul className="m-[0.5rem] flex flex-row items-center w-[100vw] h-[auto] overflow-x-auto border-box scrollbar-hide">
        {intlShopping.map((item, index) => (
          <li
            key={index}
            className=" flex flex-col items-center text-center min-w-[86px] h-[auto] "
          >
            <div className="p-[10px] bg-[#ccc] rounded-full ">
              <img
                className="w-[42px] h-[42px]"
                src={item.imageUrl}
                alt={item.alt}
              />
            </div>
            <p className="w-[90%] text-[0.85rem] font-[500]">{item.title}</p>
          </li>
        ))}
      </ul>
      <div className="w-full h-[1.5px] bg-[#ccc]"></div>
    </div>
  );
};
export default IntlShopping;
