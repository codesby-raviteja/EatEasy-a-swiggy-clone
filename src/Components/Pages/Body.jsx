import React, { useContext, useEffect, useState } from "react"

import WhatsOnyourMind from "../BodyRelatedComponents/WhatsOnyourMind"
import TopRestaurants from "../BodyRelatedComponents/TopRestaurants"
import TrendingRestaurants from "../BodyRelatedComponents/TrendingRestaurants"
import { getDynamicSwiggyLocation, IMG_CDN_URL } from "../../Constants"
import { LocationContext } from "../Hooks/LocationContext"
import LocationUnserviceAble from "../OtherComponents/LocationUnserviceAble"

export default function Body() {
  const [restaurants, setRestaurants] = useState(null)
  const [location] = useContext(LocationContext)

  useEffect(() => {
    if (location[0]) {
      callData()
    }
  }, [location])

  async function callData() {
    try {
      const restaurantData = await fetch(
        getDynamicSwiggyLocation(location[0], location[1])
      )
      const restaurants = await restaurantData.json()
      setRestaurants(restaurants)
    } catch (err) {
      console.log(err)
    }
  }

  const title = restaurants?.data?.cards[0]?.card?.card?.title

  if (title === "Location Unserviceable") {
    return <LocationUnserviceAble restaurants={restaurants} />
  }

  return (
    <div className="	bg-slate-100 p-1">
      <WhatsOnyourMind restaurants={restaurants} />
      <TopRestaurants restaurants={restaurants} />
      <TrendingRestaurants restaurants={restaurants} />
    </div>
  )
}
