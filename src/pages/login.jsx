import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import BgSign from "../assets/bg-sign/sign_login.png";
import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import TypeLogin from "../components/typelogin";

const sign = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BgSign})` }}
      className="h-screen w-full bg-cover bg-center"
    >
      <div className="px-2">
        <div className="flex items-center justify-center pt-5">
          <img
            src={Logo}
            alt="Logo"
            className="brightness-0 invert-100 size-50"
          />
        </div>
        <div className="bg-white rounded-4xl p-5">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold text-[#0E1041] text-3xl">Sign In</span>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#8E8383]">
                  Don't have an account yet?
                </span>
                <NavLink to="/signup" className="text-[#2C89DF]">
                  Sign up here
                </NavLink>
              </div>
            </div>
            <div className="flex pt-5 gap-4">
              <div className=" text-white">
                <TypeLogin
                  bgColor={"bg-blue-500"}
                  icon={<FaFacebookF />}
                  text="Facebook"
                />
              </div>
              <div className="">
                <TypeLogin
                  bgColor={"bg-white"}
                  icon={<FcGoogle />}
                  text="Google"
                />
              </div>
            </div>
            <div className="flex items-center py-5 gap-2 w-full">
              <div className="flex flex-1 border border-[#8E8383]"></div>
              <span className="text-[#8E8383] italic">or</span>
              <div className="flex flex-1 border border-[#8E8383]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sign;
