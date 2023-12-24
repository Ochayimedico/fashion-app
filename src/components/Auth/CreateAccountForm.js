import check from "../../photos/icons/check.svg";
import { useRef } from "react";
const CreateAccountForm = ({
  selectedForm,
  setSelectedForm,
  isCreateAccountChecked,
  setIsCreateAccountChecked,
  setIsSignInChecked,
}) => {
  const toggleCreateAccount = () => {
    setIsCreateAccountChecked(true);
    setIsSignInChecked(false);
    setSelectedForm("create-account");
  };
  const nameRef = useRef();
  const emailAndPhoneRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailAndPhoneRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <form onSubmit={submitHandler}>
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
          checked={selectedForm === "create-account" && isCreateAccountChecked}
          onChange={(e) => e.target.value}
          className="appearance-none relative peer bg-white  p-[0.35rem] w-[1.5rem] mr-[1rem]  h-[1.5rem] border-[#808080] focus:border-[#EB9034] border-[1px] rounded-full focus:border-2 flex "
        />

        <div className="absolute ml-[5px] mt-[5px] hidden peer-checked:block pointer-events-none inline-block bg-[#eb9034] rounded-full w-[14px] h-[14px]"></div>

        <p className=" font-[700]  ">
          Create account.
          <span className="font-[500] text-[0.8rem]"> New to Fashion?</span>
        </p>
      </label>
      {isCreateAccountChecked && selectedForm === "create-account" && (
        <div className="px-[1rem] flex flex-col my-[0.5rem]">
          <label className="font-[700]">
            First and last name
            <input
              type="text"
              className="w-full font-[500] p-[0.65rem] border-solid border-[1px] border-[#808080] focus:border-[#EB9034]"
              ref={nameRef}
            />
          </label>
          <label className="font-[700] mt-[1rem]">
            Mobile number or email
            <input
              type="text"
              className="w-full font-[500] p-[0.65rem] border-solid border-[1px] border-[#808080] focus:border-[#EB9034]"
              ref={emailAndPhoneRef}
            />
          </label>
          <label className="font-[700] mt-[1rem]">
            Create a password
            <input
              type="text"
              className="w-full font-[500] p-[0.65rem] border-solid border-[1px] border-[#808080] focus:border-[#EB9034]"
              ref={passwordRef}
            />
          </label>
          <label className="font-[500] mt-[0.75rem] items-center flex flex-row text-[0.8rem]">
            <input
              defaultChecked
              type="checkbox"
              className=" appearance-none relative peer items-center border-[1px] border-[#808080] focus:border-[#EB9034] rounded-md bg-white p-[0.25rem] w-[1.35rem] mr-[0.75rem] h-[1.35rem]  focus:border-2"
            />
            Show password
            <img
              className="absolute ml-[3px] mt-[3px] w-[1rem] h-[1.25rem]  hidden peer-checked:block pointer-events-none"
              src={check}
              alt="check-box"
            />
          </label>
          <button
            className="text-black rounded-[0.375rem] bg-[#ffd814] mt-[1.35rem] p-[0.65rem] mb-[0.65rem] w-full"
            onClick={submitHandler}
          >
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
    </form>
  );
};
export default CreateAccountForm;
