import { useRouteError } from "react-router-dom";
import oopsPic from "../../photos/oops.png";
import Navbar from "./Navbar";
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <div
        id="error-page"
        className="flex justify-center items-center flex-col mt-[6rem]"
      >
        <img className="w-[150px] h-[150px]" src={oopsPic} alt="oops" />
        <p className="font-bold text-[1.15rem] text-center text-[#00798e] m-[1rem]">
          Sorry, an unexpected error has occurred!
        </p>
        <p className="font-bold text-center text-[#bc0000]">
          <i>{error.data}</i>
        </p>
      </div>
    </>
  );
};
export default ErrorPage;
