import HamburgerMenu from "./HamburgerMenu"

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-themeGray">
        <h1 className="text-2xl font-bold leading-none">Soles By Cincy</h1>
        <HamburgerMenu />
    </nav>
  )
}

export default NavBar