const SignIn = () => {
  return (
    <div className="flex flex-col p-[1rem]">
      <div className="w-full bg-[#ccc] h-[2px]"></div>
      <h1 className="text-black text-[1.15rem] text-left font-[600]">
        Sign in for the best experience{" "}
      </h1>
      <button className="bg-[#ffd8148] font-[1rem] font-[500] my-[1rem] text-center rounded-[12px]">
        Sign in securely
      </button>
      <p className="text-[#317185] text-left">Create an account</p>
    </div>
  );
};
export default SignIn;
