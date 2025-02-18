import React from "react"
import { IMG_CDN_URL } from "../../Constants"

export default function OfferCard({ offerLogo, header, description,couponCode }) {
  return (
    <div className=" bg-slate-200 rounded-2xl flex-shrink-0 ">
      <div className=" md:w-[350px] h-20 flex items-center  gap-2 border-2 border-gray-300 rounded-2xl p-4">
        <img className="w-16" src={IMG_CDN_URL + offerLogo} alt={header} />
        <div>
          <h4 className="font-bold text-lg">{header}</h4>
          <p className="text-gray-500 text-sm font-bold ">{couponCode ? couponCode :description}</p>
        </div>
      </div>
    </div>
  )
}
