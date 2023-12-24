import { useState } from "react";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Navbar";
import { useLocation } from "react-router-dom";
import CreateAccountForm from "./CreateAccountForm";
import SignInForm from "./SignInForm";

const AuthPage = () => {
  const location = useLocation();
  const formFromUrl = new URLSearchParams(location.search).get("form");
  const [selectedForm, setSelectedForm] = useState(formFromUrl || "sign-in");

  const [isCreateAccountChecked, setIsCreateAccountChecked] = useState(true);
  const [isSignInChecked, setIsSignInChecked] = useState(true);

  return (
    <div className="">
      <Navbar />
      <div className=" py-[0.7rem] px-[1rem] bg-[#f6f6f6] w-full ">
        <h1 className="text-[1.5rem] font-[500]">Welcome</h1>
        <div className=" my-[0.5rem] border-solid border-[1px]  border-[#e3e3e3] flex flex-col bg-white  font-[500]">
          <CreateAccountForm
            selectedForm={selectedForm}
            setSelectedForm={setSelectedForm}
            setIsCreateAccountChecked={setIsCreateAccountChecked}
            setIsSignInChecked={setIsSignInChecked}
            isCreateAccountChecked={isCreateAccountChecked}
          />
          <SignInForm
            selectedForm={selectedForm}
            setSelectedForm={setSelectedForm}
            setIsCreateAccountChecked={setIsCreateAccountChecked}
            setIsSignInChecked={setIsSignInChecked}
            isSignInChecked={isSignInChecked}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default AuthPage;
