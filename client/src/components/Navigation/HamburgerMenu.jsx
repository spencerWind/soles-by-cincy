import { useEffect, useRef } from "react";
import MobileMenu from "../../assets/mobileMenu.svg";

const HamburgerMenu = () => {
    const slideOutMenu = useRef();

    useEffect(() =>{console.log("hello")}, [])

    return (
        <section className="">
            <button onClick={() => {console.log(slideOutMenu)}}>
                <img
                    src={MobileMenu}
                    alt="Mobile Menu"
                />
            </button>
            <section ref={slideOutMenu} className="fixed w-screen border top-0 left-0 h-screen -z-10"></section>
        </section>
    );
};

export default HamburgerMenu;
