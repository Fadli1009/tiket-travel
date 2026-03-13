import { FaFacebookF, FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import BgSign from "../assets/bg-sign/sign_login.png";
import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import TypeLogin from "../components/typelogin";
import { IoIosLock } from "react-icons/io";

const sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (!e.target.value.includes("@")) {
      setEmailError("Email is not valid.");
    }
  };
  const handleLogin = () => {
    if (!email.includes("@")) {
      setEmailError("Email is not valid.");
    }

    if (!email || !password) {
      setEmailError("email and password are required.");
      return;
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${BgSign})` }}
      className="h-full w-full bg-cover bg-center"
    >
      <div className="px-2">
        <div className="flex items-center justify-center pt-5">
          <img
            src={Logo}
            alt="Logo"
            className="brightness-0 invert-100 size-50"
          />
        </div>
        <div className="pb-40">
          <div className="bg-white rounded-4xl p-5 w-full md:w-125 justify-center mx-auto">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <span className="font-bold text-[#0E1041] text-3xl">
                  Sign In
                </span>
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
              <div>
                <div className="flex gap-4 items-center text-lg border-2 rounded-2xl border-[#8F8C8C] text-[#8F8C8C] px-4 py-2 w-full focus-within:border-blue-500 ">
                  <FaRegUser />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    className="outline-0 text-md w-full"
                  />
                </div>
                <span className="text-red-500 text-sm font-semibold">
                  {emailerror}
                </span>
                <div className="flex gap-4 my-6 items-center text-lg border-2 rounded-2xl border-[#8F8C8C] text-[#8F8C8C] px-4 py-2 w-full focus-within:border-blue-500 ">
                  <IoIosLock />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="outline-0 text-md w-full"
                  />
                </div>
                <div className="bg-[#FAC233] hover:bg-[#e0a828] rounded-full py-2 w-full flex items-center justify-center">
                  <button
                    onClick={handleLogin}
                    className="font-bold text-white w-full"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sign;
