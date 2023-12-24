import { useRef } from "react";

const SignInForm = ({
  selectedForm,
  setSelectedForm,
  setIsCreateAccountChecked,
  setIsSignInChecked,
  isSignInChecked,
}) => {
  const toggleSignIn = () => {
    setIsSignInChecked(true);
    setIsCreateAccountChecked(false);
    setSelectedForm("sign-in");
  };
  const emailAndPhoneRef = useRef();
  // const emailAndPhoneInput = emailAndPhoneRef.current.value;
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(emailAndPhoneRef.current.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <label
        className={` ${
          !isSignInChecked ? "bg-[#f3f3f3]" : "bg-white"
        } flex flex-row  p-[0.85rem]`}
        onClick={toggleSignIn}
      >
        <input
          name="auth"
          value="sign-in"
          type="radio"
          checked={selectedForm === "sign-in" && isSignInChecked}
          onChange={(e) => e.target.value}
          className="appearance-none relative peer bg-white  p-[0.35rem] w-[1.5rem] mr-[1rem]  h-[1.5rem] border-[#808080] focus:border-[#EB9034] focus:border-2 border-[1px] rounded-full"
        />
        <div className="absolute ml-[5px] mt-[5px] hidden peer-checked:block pointer-events-none inline-block bg-[#eb9034] rounded-full w-[14px] h-[14px]"></div>
        <p className="font-[700] ">
          Sign in. <span className="text-[0.8rem]">Already a customer?</span>
        </p>
      </label>

      {isSignInChecked && selectedForm === "sign-in" && (
        <div className="flex flex-col px-[1rem]">
          <label className="font-[700] ">
            Email or phone number
            <input
              type="text"
              className="w-full  p-[0.65rem] font-[500] border-solid border-[1px] border-[#808080]"
              ref={emailAndPhoneRef}
            />
          </label>
          <button
            className="text-black rounded-[0.375rem] bg-[#ffd814] p-[0.65rem] mt-[1.35rem] mb-[0.65rem] w-full"
            onClick={submitHandler}
          >
            Continue
          </button>
          <p className=" ">
            By continuing, you agree to Fashion's{" "}
            <span className="text-[#0066C4]">Conditions of Use</span> and{" "}
            <span className="text-[#0066C4]">Privacy Notice.</span>
          </p>
          <p className="mt-[0.65rem] text-[#0066C4]">Need help?</p>
          <div className="w-full h-[1px] bg-[#ccc] my-[0.5rem]"></div>
          <p className="font-[500] mb-[0.5rem]"> Buying for work? </p>
          <p className="text-[#0066C4] mb-[1rem]">Shop on Fashion Business</p>
        </div>
      )}
    </form>
  );
};
export default SignInForm;
