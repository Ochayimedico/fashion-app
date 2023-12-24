import { Link } from "react-router-dom";
const AuthSection = () => {
  return (
    <section>
      <div className="flex flex-col px-[1rem] py-[0.65rem]">
        <h1 className="text-black text-[1.05rem] text-left font-[600]">
          Sign in for the best experience
        </h1>
        <Link to="/auth-page?form=sign-in">
          <button className="bg-[#ffd814] w-full p-[0.75rem] font-[1rem] font-[500] my-[0.65rem] text-center rounded-[8px]">
            Sign in securely
          </button>
        </Link>
        <Link to="/auth-page?form=create-account">
          <p className="text-[#00798e] font-[500] text-left hover:underline">
            Create an account
          </p>
        </Link>
      </div>
      <div className="w-full bg-[#ccc] h-[2px]"></div>
    </section>
  );
};
export default AuthSection;
