import { Menu } from "lucide-react";
import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu toggled:", !isMenuOpen);
  };
  return (
    <div className="flex items-center bg-amber-400 justify-between">
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
  );
};

export default Navbar;
