import { FaBookOpen, FaX } from "react-icons/fa6"
import Logo from "../../assets/logo.avif"
import { SEARCH_SVG, CART_SVG, SIGNIN_SVG } from "./NavItemsSVG"
import Cart from "./Cart"
import NavItem from "./NavItem"

export default function HambergerMenu({
  setOpenHambergerMenu,
  openHambergerMenu,
}) {
  return (
    <div
      className={`absolute ${
        openHambergerMenu ? "reveal-hamburger" : "hide-hamburger"
      } top-0 w-[90%] sm:w-[50%] h-full  bg-gray-200 rounded-md z-10`}
    >
      <div className="flex  inset-0 z-10   flex-col space-y-6 pl-8 pr-4  shadow py-6 ">
        <div className="flex items-center justify-between">
          <img className="w-14 " src={Logo} alt="logo" />

          <NavItem
            ICON={
              <FaX
                className=" text-xl"
                onClick={(e) => {
                  e.preventDefault()
                  setOpenHambergerMenu(false)
                }}
              />
            }
            navText={""}
          />
        </div>
        <div
          className="space-y-6"
          onClick={(e) => {
            if (e.target !== e.currentTarget) {
              setOpenHambergerMenu(false)
            }
          }}
        >
          <NavItem
            ICON={<FaBookOpen />}
            navText={"About"}
            navigate={"/about"}
          />
          <NavItem ICON={SEARCH_SVG} navText={"Search"} navigate={"/search"} />
          <NavItem ICON={SIGNIN_SVG} navText={"Sign In"} />
          <Cart ICON={CART_SVG} navText={"Cart"} CartItems={0} />
        </div>
      </div>
    </div>
  )
}
