import React from "react"
import { IMG_CDN_URL, UnserviceableImage } from "../../Constants"

function LocationUnserviceAble({ restaurants }) {
  const title = restaurants?.data?.cards[0]?.card?.card?.title

  return (
    <div className="h-screen  flex  items-center justify-center">
      <div className="px-4">
        <h3 className="text-2xl font-medium text-center my-2 ">{title}</h3>
        <img src={UnserviceableImage} alt={title}  className="w-80 mx-auto"/>
        <p className="text-lg font-medium text-gray-500 text-center">We don’t have any services here till now. Try changing location.</p>
      </div>
    </div>
  )
}

export default LocationUnserviceAble
