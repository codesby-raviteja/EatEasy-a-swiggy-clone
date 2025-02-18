import { useState } from "react"
import { HELP_SVG, SIGNIN_SVG, CART_SVG, SEARCH_SVG } from "./NavItemsSVG"
import Cart from "./Cart"
import HambergerMenu from "./HambergerMenu"
import NavItem from "./NavItem"
import Logo from "../../assets/logo.avif"
import { FaBars, FaBookOpen, FaLocationDot } from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import LocationCard from "../OtherComponents/LocationCard"
import { useSelector } from "react-redux"

export default function Header() {
  const [openHambergerMenu, setOpenHambergerMenu] = useState(false)
  const [area, setArea] = useState("")
  const [openLocationCard, setOpenLocationCard] = useState(false)
  const cartItems = useSelector((state) => state.cart)

  return (
    <div className="shadow-md shadow-black	bg-slate-200  overflow-x-hidden">
      <header className="max-w-screen-xl mx-auto py-3 px-4 flex justify-between items-center	 	 ">
        <div className="flex items-center gap-4">
          <NavLink to="/">
            <img className="w-16 " src={Logo} alt="logo" />
          </NavLink>
          <div
            className="flex cursor-pointer "
            onClick={() => {
              setOpenLocationCard(true)
              setArea("")
            }}
          >
            <FaLocationDot className="text-3xl" />
            <span className=" font-medium px-2 border-b-4  line-clamp-1 border-orange-500">
              {area || "Location...."}
            </span>

            <LocationCard
              area={area}
              setArea={setArea}
              openLocationCard={openLocationCard}
              setOpenLocationCard={setOpenLocationCard}
            />
          </div>
        </div>

        <nav>
          <ul className="hidden md:flex space-x-8">
            <NavItem
              ICON={<FaBookOpen />}
              navText={"About"}
              navigate={"/about"}
            />
            <NavItem
              ICON={SEARCH_SVG}
              navText={"Search"}
              navigate={"/Search"}
            />
            <NavItem ICON={SIGNIN_SVG} navText={"Sign In"} />
            <Cart
              ICON={CART_SVG}
              navText={"Cart"}
              CartItems={cartItems.length}
            />
          </ul>

          <ul className=" md:hidden flex space-x-4 md:space-x-8 z-10 ">
            {openHambergerMenu && (
              <div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"></div>
            )}

            <NavItem
              ICON={
                <FaBars
                  className="text-2xl"
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenHambergerMenu(true)
                  }}
                />
              }
              navText={" "}
            />

            <HambergerMenu
              setOpenHambergerMenu={setOpenHambergerMenu}
              openHambergerMenu={openHambergerMenu}
            />
          </ul>
        </nav>
      </header>
    </div>
  )
}
