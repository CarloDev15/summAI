import { useState } from "react";
import { navLinks } from "../constants/arrays";
import { Link, useLocation } from "react-router-dom";
import close from "../assets/close.svg";
import logo from "../assets/logo3.png";
import menu from "../assets/menu.svg";
import styles from "../style";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const locator = useLocation();
    const currentPath = locator.pathname;

    return (
        <nav className={`${styles.boxWidth} mx-auto flex py-6 px-12 justify-between items-center navbar fixed xl:static top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-200`}>
            <img src={logo} alt="summAI" className="w-44" />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
            <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[18px] hover:text-white duration-500 navibar-link ${
                (currentPath === nav.id || (currentPath === "/" && nav.id === "/home")) ? "text-white font-semibold" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            >
                    <Link to={`${nav.id}`}>{nav.title}
                        <div className="navibar-link-underline"></div>
                    </Link>

            </li>
            ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
            />

            <div
            className={`${
                !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    (currentPath === nav.id || (currentPath === "/" && nav.id === "/home")) ? "text-white font-semibold" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                >
                    <Link to={`${nav.id}`}>{nav.title}</Link>
                </li>
                ))}
            </ul>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;