import { useEffect, useRef, useState } from "react";
import MobileMenu from "../../assets/mobileMenuIcon.svg";
import CloseMenu from "../../assets/closeMenu.svg";
import FacebookIcon from "../../assets/facebookIcon.svg";
import InstagramIcon from "../../assets/instagramIcon.svg";
import TwitterIcon from "../../assets/twitterIcon.svg";
import TikTokIcon from "../../assets/tiktokIcon.svg";
import { motion, useAnimation } from "framer-motion";

const HamburgerMenu = () => {
    const [menuIsActive, setMenuIsActive] = useState(null);
    const slideOutMenuAnimation = useAnimation();
    const slideOutMenu = useRef(null);

    useEffect(() => {
        menuIsActive
            ? slideOutMenuAnimation.start({
                  x: 0,
                  transition: {
                      duration: 0.5,
                  },
              })
            : slideOutMenuAnimation.start({
                  x: "100vw",
                  transition: {
                      type: "Inertia",
                      duration: 0.5,
                  },
              });
    }, [menuIsActive]);

    return (
        <section className="lg:hidden h-[32px]">
            <button
                className="p-0 m-0"
                onClick={() => {
                    setMenuIsActive(true);
                }}>
                <img
                    src={MobileMenu}
                    alt="Mobile Menu"
                />
            </button>
            <motion.section
                ref={slideOutMenu}
                animate={slideOutMenuAnimation}
                className="fixed w-screen top-0 right-0 h-screen bg-themeRed p-5 flex flex-col justify-between items-center">
                <button
                    className="self-start"
                    onClick={() => {
                        setMenuIsActive(false);
                    }}>
                    <img
                        src={CloseMenu}
                        alt="Close Menu"
                    />
                </button>
                <ul className="text-4xl uppercase font-black tracking-widest text-themeGray flex flex-col items-center gap-10">
                    <li>Home</li>
                    <li>About</li>
                    <li>Gallery</li>
                    <li>Shop</li>
                </ul>
                <ul className="h-[48px] w-full flex justify-around items-center">
                    <li><img src={FacebookIcon} alt="Facebook Link" /></li>
                    <li><img src={InstagramIcon} alt="Instagram Link" /></li>
                    <li><img src={TwitterIcon} alt="Twitter Link" /></li>
                    <li><img src={TikTokIcon} alt="TikTok Link" /></li>

                </ul>
            </motion.section>
        </section>
    );
};

export default HamburgerMenu;
