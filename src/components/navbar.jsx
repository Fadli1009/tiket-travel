import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import ButtonSign from "./buttonsign";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/transaction", label: "Transaction" },
  { to: "/last-offer", label: "Last Offer" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`absolute top-20 z-50 flex w-full flex-col items-center gap-3 bg-white/50 py-5 font-semibold backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-[#628d04]"
                  : "hover:text-gray-600 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <ButtonSign />
      </div>

      <nav className="flex items-center justify-between px-4 font-semibold md:px-6">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="size-30" />
        </NavLink>

        <div className="hidden items-center gap-6 md:flex">
          <div className="flex gap-5">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#628d04]"
                    : "hover:text-gray-600 transition-colors"
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
          <span className="cursor-pointer hover:text-gray-600 transition-colors">
            ID | EN
          </span>
          <ButtonSign />
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
