import React, { useContext, useEffect, useState } from "react"
import { FaLocationDot, FaX } from "react-icons/fa6"
import { LocationContext } from "../Hooks/LocationContext"
export default function LocationCard({
  area,
  setArea,
  setOpenLocationCard,
  openLocationCard,
}) {
  const [data, setData] = useState(null)

  const [placeId, setPlaceId] = useState(null)
  const [location, setLocation] = useContext(LocationContext)
  useEffect(() => {
    if (area) {
      async function fetchlocation() {
        const data = await fetch(
          `https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/misc/place-autocomplete?input=${area}`
        )
        const res = await data.json()

        setData(res.data)
      }

      fetchlocation()
    }
  }, [area])

  useEffect(() => {
    if (placeId) {
      async function fetchlocation() {
        const data = await fetch(
          `https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/misc/address-recommend?place_id=${placeId}`
        )
        const res = await data.json()
        setArea(res?.data?.[0]?.formatted_address.substring(0, 12))
        const { lat, lng } = res?.data[0]?.geometry?.location
        setLocation([lat, lng])
        setOpenLocationCard(false)
      }

      fetchlocation()
    }
  }, [placeId])

  return (
    <div
      className={`fixed z-20  ${
        openLocationCard ? "left-zero" : "location-hide"
      } top-0 w-[90%] md:w-[50%] max-w-lg h-full bg-stone-300 p-4  `}
    >
      <FaX
        className="ml-auto"
        onClick={(e) => {
          e.stopPropagation()
          setOpenLocationCard(false)
        }}
      />

      <h3 className="text-center text-lg text-black font-medium mt-6 mb-1">Search Area & Streets</h3>
      <input
        type="text"
        className="w-[90%] h-10 font-medium  outline-none block  mx-auto mt-2  border-2 placeholder:text-gray-600 border-slate-300 p-1 bg-gray-400 text-black "
        value={area}
        placeholder="Search for Area.."
        onChange={(e) => {
          setArea(e.target.value)
        }}
      />
      <div className="w-[90%] mx-auto py-4">
        {data?.map((loc) => {
          return (
            <div
              key={loc.place_id}
              onClick={() => setPlaceId(loc.place_id)}
              className="p-1 border-b border-slate-200"
            >
              <h2 className="flex items-center gap-1 font-medium text-lg ">
                <FaLocationDot className="text-xl" />{" "}
                {loc.structured_formatting.main_text}
              </h2>
              <p className="text-gray-500 font-medium ">
                {loc.structured_formatting.secondary_text}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
