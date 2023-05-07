import HamburgerMenu from "./HamburgerMenu";
import UserAccountDesktop from "../../assets/userAccountDesktop.svg";
import ShoppingCartDesktop from "../../assets/ShoppingCartDesktop.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center px-5 py-2 lg:py-5 md:px-10 bg-themeGray">
            <Link to="/home">
                <h1 className="text-2xl font-bold leading-none text-themeRed">
                    Soles By Cincy
                </h1>
            </Link>
            <HamburgerMenu />
            <ul className="flex max-lg:hidden items-center gap-10 font-bold text-lg">
                <li>
                    <span className="text-xs text-themeRed">1_</span> About
                </li>
                <li>
                    <span className="text-xs text-themeRed">2_</span> Gallery
                </li>
                <li>
                    <span className="text-xs text-themeRed">3_</span> Shop
                </li>
                <div className="flex gap-5">
                    <li className="w-[24px] h-[24px] ">
                        <img
                            src={ShoppingCartDesktop}
                            alt="User account"
                        />
                    </li>
                    <li className="w-[24px] h-[24px] ">
                        <img
                            src={UserAccountDesktop}
                            alt="User account"
                        />
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default NavBar;
