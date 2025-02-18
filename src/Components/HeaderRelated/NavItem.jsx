import React from "react"
import { Link } from "react-router-dom"

export default function NavItem({ICON,navText,navigate}) {
  return (
    <li >
      <Link className="flex items-center w-fit  gap-1 md:gap-3" to={navigate}>
        {ICON}
        <span className="text-xl font-semibold  text-black md:text-gray-800 md:text-lg md:font-medium" >{navText}</span>
      </Link>
    </li>
  )
}
