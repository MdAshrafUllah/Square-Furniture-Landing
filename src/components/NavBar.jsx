import { useEffect, useState } from "react";
import { GiBeachBag } from "react-icons/gi";
import { HiMenuAlt3 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const NavItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const NavLinks = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row gap-8 items-center md:space-x-8">
      {NavItems.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "hover:text-primary"
            }>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  const [isMenuPress, setIsMenuPress] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuPress(!isMenuPress);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md text-black" : "text-white"
      }`}>
      <nav className="section-container flex justify-between items-center">
        <NavLink to="/" className="font-bold">
          Squire
        </NavLink>
        <div
          onClick={toggleMenu}
          className="md:hidden cursor-pointer text-xl hover:text-primary">
          {isMenuPress ? null : <HiMenuAlt3 />}
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black opacity-70 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${
            isMenuPress ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}>
          <div
            className="absolute top-4 right-4 text-xl cursor-pointer"
            onClick={toggleMenu}>
            <LiaTimesSolid />
          </div>
          <div>
            <NavLinks toggleMenu={toggleMenu} />
          </div>
        </div>
        <div className="hidden md:block cursor-pointer relative">
          <GiBeachBag className="text-xl" />
          <sup className="absolute top-0 -right-3 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
