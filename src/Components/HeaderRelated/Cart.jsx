import React from "react"
import { Link } from "react-router-dom"

export default function Cart({ ICON, navText, CartItems }) {
  return (
    <li>
      <Link className="flex items-center gap-1 md:gap-3" to={"/cart"}>
        <span className="relative z-10 ">
          {ICON}
          <span className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-lg font-semibold text-white">
            {CartItems}
          </span>
        </span>
        <span className="text-xl md:text-lg  font-semibold md:font-medium text-black md:text-gray-800">{navText}</span>
      </Link>
    </li>
  )
}
