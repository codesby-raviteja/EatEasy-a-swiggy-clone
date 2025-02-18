import React from "react"
import { IMG_CDN_URL } from "../../Constants"
import { NavLink } from "react-router-dom"

export default function FoodItemLogo({ imgSrc, entityID, action }) {
  const linkvar = action.link.split("?")[1]
  return (
    <div className="w-32 md:w-40 flex-shrink-0  hover:scale-105 transition-all duration-200">
      <NavLink to={`fooditem/type=${action.text}&${linkvar}`}>
        <img className="" src={IMG_CDN_URL + imgSrc} alt="" />
      </NavLink>
    </div>
  )
}
