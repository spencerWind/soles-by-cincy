import HamburgerMenu from "./HamburgerMenu";
import UserAccountDesktop from "../../assets/userAccountDesktop.svg";
import ShoppingCartDesktop from "../../assets/ShoppingCartDesktop.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [colorChange, setColorChange] = useState(false);
    const [scrollPostion, setScrollPostion] = useState(0);

    const logit = () => {
        setScrollPostion(window.scrollY);
    };

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener("scroll", logit);
        };
        watchScroll();

        return () => {
            window.removeEventListener("scroll", logit);
        };
    }, []);

    useEffect(() => {
        if (scrollPostion > 80) {
            setColorChange(true);
        } else setColorChange(false);
    }, [scrollPostion]);

    return (
        <nav
            className={
                colorChange
                    ? "flex rounded-2xl text-slate-300 justify-between items-center my-5 mx-5 lg:mx-20 py-2 px-4 lg:py-5 lg:px-10 bg-neutral-950"
                    : "flex rounded-2xl text-slate-300 justify-between items-center my-5 mx-5 lg:mx-20 py-2 px-4 lg:py-5 lg:px-10"
            }>
            <Link to="/home">
                <h1 className="text-2xl text-red-600 font-bold leading-none">
                    Soles By Cincy
                </h1>
            </Link>
            <HamburgerMenu />
            <ul className="flex max-lg:hidden items-center gap-10 font-bold text-lg">
                <li className="text-slate-50">
                    <span className="text-xs text-red-600">1_</span> About
                </li>
                <li>
                    <span className="text-xs text-red-600">2_</span> Gallery
                </li>
                <li>
                    <span className="text-xs text-red-600">3_</span> Shop
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
