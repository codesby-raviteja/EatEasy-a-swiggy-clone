import React, { useContext, useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { getDynamicMenuUrl, IMG_CDN_URL } from "../../Constants"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6"
import { LocationContext } from "../Hooks/LocationContext"
import OfferCard from "../OtherComponents/OfferCard"
import MenuItemCrousel from "../MenuRelated/MenuItemCrousel"

export default function RestaurantMenu() {
  const id = useParams()
  const restaurantID = id?.restaurant.split("=")[1]
  const FooditemElement = useRef(null)

  const [location,] = useContext(LocationContext)

  const [menu, setMenu] = useState(null)
  useEffect(() => {
    fecthRestaurantMenu()
  }, [])

  async function fecthRestaurantMenu() {
    try {
      if (location[0]) {
        const data = await fetch(getDynamicMenuUrl(location) + restaurantID)
        const res = await data.json()
        setMenu(res.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  function scrollToRight() {
    FooditemElement.current.scrollLeft += 350
  }
  function scrollToLeft() {
    FooditemElement.current.scrollLeft -= 350
  }

  return (
    <section className="max-w-screen-xl mx-auto  py-1 mt-4 bg-slate-200">
      {/* RESTAURANT DETAILS SECTION */}
      <div className="flex  flex-col items-center  md:flex-row max-w-screen-lg mt-6 mx-auto  gap-4 py-8 px-10 ">
        <img
          className=" md:w-2/4 h-80 object-cover object-top rounded-lg"
          src={
            IMG_CDN_URL + menu?.cards[2]?.card?.card?.info?.cloudinaryImageId
          }
          alt=""
        />
        <div className=" md:w-2/4  flex flex-col my-auto ">
          <div className="flex flex-col mx-auto">
            <h1 className="text-4xl md:text-5xl  font-bold mt-4 ">
              {menu?.cards[2]?.card?.card?.info?.name}
            </h1>
            <p className="text-lg font-bold text-[#29384e] ">
              {menu?.cards[2]?.card?.card?.info?.avgRating} (
              {menu?.cards[2]?.card?.card?.info?.totalRatingsString}){" "}
              {menu?.cards[2]?.card?.card?.info?.costForTwoMessage}
            </p>
            <p className="font-semibold text-[#FF5200]">
              {menu?.cards[2]?.card?.card?.info?.cuisines?.join(",")}
            </p>
            <p className="text-lg font-semibold">
              {menu?.cards[2]?.card?.card?.info?.sla?.slaString?.toLowerCase()}
            </p>
            <p className="text-xl font-bold text-green-600">
              {menu?.cards[2]?.card?.card?.info?.areaName}
            </p>
          </div>
        </div>
      </div>
      {/* RESTAURANT DETAILS SECTION */}

      {/* DEALS FOR YOU SECTION */}
      <div className=" bg-yellow-100 py-2 rounded-md ">
        <div className="flex px-4  justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold">Deals for you</h2>
          <div className="hidden  md:flex  gap-4">
            <button
              className={`w-9 h-9 text-lg flex items-center justify-center rounded-full  bg-slate-400 `}
              onClick={scrollToLeft}
            >
              <FaArrowLeft />
            </button>
            <button
              className={`bg-gray-400 w-9 h-9 text-lg flex items-center justify-center rounded-full  `}
              onClick={scrollToRight}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div
          className="my-4 py-4 px-4 flex gap-4 flex-nowrap  overflow-x-scroll no-scrollbar scroll-smooth  "
          ref={FooditemElement}
        >
          {menu?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
            .map((offer) => offer.info)
            .map((offer) => (
              <OfferCard key={offer.offerIds[0]} {...offer} />
            ))}
        </div>
      </div>
      {/* DEALS FOR YOU SECTION */}

      {/* MENU SECTION DOWN HERE */}

      <div className="bg-slate-200 px-2">
        <h2 className="text-3xl  font-semibold text-center my-4 bg-slate-400 py-2 ">
          MENU
        </h2>
        <div>
          {menu?.cards[menu?.cards?.length - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            .filter((card, i) => i >= 2)
            .map((card) => card?.card?.card)
            .filter((card) => card.itemCards)
            .map((card) => {
              return <MenuItemCrousel key={card.title} {...card} />
            })}
        </div>
      </div>
    </section>
  )
}
