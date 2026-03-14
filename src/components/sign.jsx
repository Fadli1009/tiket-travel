import { FaFacebookF } from "react-icons/fa";
import Logo from "../assets/logo.svg";
import { FcGoogle } from "react-icons/fc";
import TypeLogin from "./typelogin";
import { NavLink } from "react-router-dom";

const sign = ({
  title,
  description,
  form,
  inputs,
  to,
  titles,
  titleButton,
}) => {
  return (
    <>
      <div className="px-2">
        <div className="flex items-center justify-center pt-5">
          <img
            src={Logo}
            alt="Logo"
            className="brightness-0 invert-100 size-50"
          />
        </div>
      </div>

      <div className="pb-40 px-2">
        <div className="bg-white rounded-4xl p-5 w-full md:w-125 justify-center mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold text-[#0E1041] text-3xl">{title}</span>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#8E8383]">{description}</span>
                <NavLink to={to} className="text-[#2C89DF]">
                  {titles}
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
            <form onSubmit={form}>
              {inputs.map((input, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center text-lg border-2 rounded-2xl border-[#8F8C8C] text-[#8F8C8C] px-4 py-2 w-full focus-within:border-blue-500 my-2"
                >
                  {input.icon}
                  <input
                    type={input.type}
                    name={input.name}
                    autoComplete={input.autoComplete}
                    placeholder={input.placeholder}
                    value={input.value}
                    onChange={input.onChange}
                    className="outline-0 text-md w-full"
                  />
                </div>
              ))}
              <div className="bg-[#FAC233] hover:bg-[#e0a828] rounded-full py-2 w-full flex items-center justify-center mt-4">
                <button type="submit" className="font-bold text-white w-full">
                  {titleButton}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default sign;
