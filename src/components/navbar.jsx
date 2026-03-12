import { Menu } from "lucide-react";
import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ButtonSign from "./buttonsign";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`flex absolute flex-col items-center font-semibold gap-3 w-full top-20 bg-white/50 py-5 transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-y-0 visible" : "translate-y-2 invisible"}`}
      >
        <div className="flex flex-col gap-3 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/transaction">Transaction</NavLink>
          <NavLink to="/last-offer">Last Offer</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div>
          <ButtonSign />
        </div>
      </div>
      <div className="flex items-center font-semibold justify-between px-2 md:px-5">
        <div className="">
          <img src={Logo} alt="Logo" className="size-30" />
        </div>
        <div className="hidden md:flex gap-5 items-center">
          <div className="flex gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/transaction">Transaction</NavLink>
            <NavLink to="/last-offer">Last Offer</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
          <div className="cursor-pointer">
            <span>ID | EN</span>
          </div>
          <div className="cursor-pointer">
            <ButtonSign />
          </div>
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          <Menu size={30} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
