import { useState } from "react";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Navbar";

const AuthPage = () => {
  const [isCreateAccountChecked, setIsCreateAccountChecked] = useState(false);
  const [isSignInChecked, setIsSignInChecked] = useState(true);

  const toggleCreateAccount = () => {
    setIsCreateAccountChecked(true);
    setIsSignInChecked(false);
  };

  const toggleSignIn = () => {
    setIsSignInChecked(true);
    setIsCreateAccountChecked(false);
  };

  return (
    <div className="  ">
      <Navbar />
      <div className=" py-[0.7rem] px-[1rem] bg-[#f6f6f6] w-full ">
        <h1 className="text-[1.5rem] font-[500]">Welcome</h1>
        <div className=" my-[0.5rem] border-solid border-[1px]  border-[#e3e3e3] flex flex-col bg-white  font-[500]">
          <form>
            <label
              className={` ${
                !isCreateAccountChecked ? "bg-[#f3f3f3]" : "bg-white"
              } flex flex-row  p-[0.85rem]`}
              onClick={toggleCreateAccount}
            >
              <input
                value="create-account"
                type="radio"
                name="auth"
                className="p-[0.35rem] w-[1.5rem] mr-[1rem]  h-[1.5rem] bg-[#ff0000]"
              />
              <p className=" font-[700]  ">
                Create account.{" "}
                <span className="font-[500] text-[0.8rem]">
                  New to Fashion?
                </span>
              </p>
            </label>
            {isCreateAccountChecked && (
              <div className="px-[1rem] flex flex-col my-[0.5rem]">
                <label className="font-[700]  my-[0.5rem]">
                  First and last name
                  <input
                    type="text"
                    className="w-full  p-[0.65rem] border-solid border-[1px]  border-[#808080]"
                  />
                </label>
                <label className="font-[700] my-[0.5rem]">
                  Mobile number or email
                  <input
                    type="text"
                    className="w-full  p-[0.65rem] border-solid border-[1px]  border-[#808080]"
                  />
                </label>
                <label className="font-[700] my-[0.5rem]">
                  Create a password
                  <input
                    type="text"
                    className="w-full  p-[0.65rem] border-solid border-[1px]  border-[#808080]"
                  />
                </label>
                <label className="font-[500] my-[0.5rem] flex flex-row">
                  <input
                    checked
                    type="checkbox"
                    className="  p-[0.25rem] w-[1.5rem] mr-[1rem] h-[1.5rem] text-[0.8rem]"
                  />{" "}
                  Show password
                </label>
                <button className="text-black rounded-[0.375rem] bg-[#ffd814] p-[0.65rem] mt-[1rem] mb-[0.65rem] w-full">
                  Continue
                </button>
                <p className=" ">
                  By creating an account, you agree to Fashion's{" "}
                  <span className="text-[#0066C4]">Conditions of Use</span> and{" "}
                  <span className="text-[#0066C4]">Privacy Notice.</span>
                </p>
                <div className="flex flex-row items-center mt-[0.65rem] mb-[0.5rem]">
                  <div className="bg-[#ccc] h-[1px] w-full"></div>
                  <p className="whitespace-nowrap mx-[2px] text-[#808080] text-[0.8rem]">
                    Buying for work?
                  </p>
                  <div className="bg-[#ccc] h-[1px] w-full"></div>
                </div>
                <div className="flex flex-row mb-[0.8rem] ">
                  <p>Create a free business account</p>
                </div>
              </div>
            )}
            <label
              className={` ${
                !isSignInChecked ? "bg-[#f3f3f3]" : "bg-white"
              } flex flex-row  p-[0.85rem]`}
              onClick={toggleSignIn}
            >
              <input
                defaultChecked
                name="auth"
                value="signin"
                type="radio"
                className="p-[0.35rem] w-[1.5rem] mr-[1rem]  h-[1.5rem] bg-[#ffff00]"
              />
              <p className="font-[700] ">
                Sign in.{" "}
                <span className="text-[0.8rem]">Already a customer?</span>
              </p>
            </label>

            {isSignInChecked && (
              <div className="flex flex-col my-[0.5rem] px-[1rem]">
                <label className="font-[700] my-[0.5rem]">
                  {" "}
                  Email or phone number
                  <input
                    type="text"
                    className="w-full  p-[0.65rem] border-solid border-[1px]  border-[#808080]"
                  />
                </label>
                <p className=" ">
                  By continuing, you agree to Fashion's{" "}
                  <span className="text-[#0066C4]">Conditions of Use</span> and{" "}
                  <span className="text-[#0066C4]">Privacy Notice.</span>
                </p>
                <p className="mt-[0.65rem] text-[#0066C4]">Need help?</p>
                <div className="w-full h-[1px] bg-[#ccc] my-[0.5rem]"></div>
                <p className="font-[500] mb-[0.5rem]"> Buying for work? </p>
                <p className="text-[#0066C4]">Shop on Fashion Business</p>
              </div>
            )}
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default AuthPage;
