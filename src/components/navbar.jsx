import { Menu } from "lucide-react";
import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

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
        <div className="border-2 p-2 rounded-lg">
          <button>Sign In</button>
        </div>
      </div>
      <div className="flex items-center justify-between px-2">
        <div className="">
          <img src={Logo} alt="Logo" className="size-30" />
        </div>
        <div className="hidden items-center gap-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/transaction">Transaction</NavLink>
          <NavLink to="/last-offer">Last Offer</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div onClick={toggleMenu}>
          <Menu size={30} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
