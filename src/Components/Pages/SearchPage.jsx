import React, { useContext, useEffect, useState } from "react"
import { getDynamicSearchItemUrl } from "../../Constants"
import { LocationContext } from "../Hooks/LocationContext"
import RestaurantCard from "../OtherComponents/RestaurantCard"

function SearchPage() {
  const [query, setQuery] = useState("")
  const [dishes, setDishes] = useState({})
  const [location] = useContext(LocationContext)

  const fetchSearchDishItem = async () => {
    const data = await fetch(getDynamicSearchItemUrl(location, query))
    const res = await data.json()

    const restaurants =
      res?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards ||
      res?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards

    const infoData = restaurants
      ?.slice(1)
      .map((card) => card?.card?.card?.restaurant?.info || card?.card?.card?.info)

    setDishes(infoData)
  }

  const handleFetch = () => {
    fetchSearchDishItem()
  }

  return (
    <div className="py-2 bg-slate-400/60 min-h-[calc(100vh-92px)]">
      <div className=" flex max-w-[700px] mx-auto mt-8 p-2  gap-2 ">
        <input
          type="text"
          className="text-lg flex-1 p-1 border rounded "
          placeholder="Search for Dish or Restaurant"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="text-lg px-6 py-2 bg-orange-400 font-medium text-white rounded border "
          onClick={handleFetch}
        >
          Search
        </button>
      </div>
      <div className="max-w-7xl mx-auto my-6 grid grid-cols-auto gap-4 place-items-center">
        {dishes.length &&
          dishes.map((restaurant, idx) => (
            <RestaurantCard key={idx} {...restaurant} />
          ))}
      </div>
    </div>
  )
}

export default SearchPage
//
