import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { useState } from "react"
import MenuItemCard from "./MenuItemCard"

export default function MenuItemCrousel({ itemCards, title }) {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className=" mx-auto border border-gray-300  ">
      <div
        className={`max-w-screen-lg mx-auto flex justify-between cursor-pointer my-5 items-center px-2 ${openMenu ? "border-b-2 pb-4" : "" }`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <h2 className="text-xl font-bold">{title} - ({itemCards.length})</h2>
        {openMenu ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {openMenu && (
        <div className="max-w-screen-lg mx-auto bg-slate-100 rounded-lg my-2">
          {itemCards
            .map((card) => card?.card?.info)
            .map((item) => {
              return <MenuItemCard key={item.id} {...item} />
            })}
        </div>
      )}
    </div>
  )
}
