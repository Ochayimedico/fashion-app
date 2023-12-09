import { Link } from "react-router-dom";
import logo from "../../photos/fashion.png";

const Navbar = () => {
  return (
    <nav className="bg-[#0F172A] w-full h-auto px-[1rem] py-[0.65rem]">
      <Link to="/">
        <div className=" flex flex-row items-center flex-left">
          <img
            className="inline-block mr-[0.65rem] h-[30px] w-[30px]"
            src={logo}
            alt="fashion logo"
          />

          <p className="text-white text-[1.5rem]">fashion</p>
        </div>
      </Link>
    </nav>
  );
};
export default Navbar;
