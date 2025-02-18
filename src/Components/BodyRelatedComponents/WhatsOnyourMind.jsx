import { FaArrowRight, FaArrowLeft } from "react-icons/fa6"
import { useContext, useRef, useState } from "react"
import RoundShimmer from "../Shimmer/RoundShimmer"
import { useLocation } from "react-router-dom"
import { LocationContext } from "../Hooks/LocationContext"
import FoodItemLogo from "../OtherComponents/FoodItemLogo"

export default function WhatsOnyourMind({ restaurants }) {
  const title =
    restaurants?.data?.cards[0]?.card?.card?.header?.title ||
    restaurants?.data?.cards[0]?.card?.card?.title

  const foodImageCards =
    restaurants?.data?.cards[0]?.card?.card?.imageGridCards?.info ||
    restaurants?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants

  const FooditemElement = useRef(null)

  function scrollToRight() {
    FooditemElement.current.scrollLeft += 350
  }
  function scrollToLeft() {
    FooditemElement.current.scrollLeft -= 350
  }

  return (
    <section className="max-w-7xl mx-auto mt-4 py-1 rounded-md px-4  bg-slate-200 ">
      {foodImageCards ? (
        <>
          <div className="flex  justify-between items-center">
            <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
            <div className="hidden  md:flex  gap-4">
              <button
                className={`w-9 h-9 text-lg flex items-center justify-center rounded-full  bg-white `}
                onClick={scrollToLeft}
              >
                <FaArrowLeft />
              </button>
              <button
                className={`bg-white  w-9 h-9 text-lg flex items-center justify-center rounded-full  `}
                onClick={scrollToRight}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div
            className="md:my-4 flex gap-4 flex-nowrap  overflow-x-scroll no-scrollbar scroll-smooth"
            ref={FooditemElement}
          >
            {foodImageCards &&
              foodImageCards.map((foodImage) => {
                return (
                  <FoodItemLogo
                    key={foodImage?.id}
                    fetchLink={foodImage?.action?.link}
                    imgSrc={foodImage?.imageId}
                    entityID={foodImage?.entityId}
                    action={foodImage?.action}
                  />
                )
              })}
          </div>
        </>
      ) : (
        <RoundShimmer />
      )}
    </section>
  )
}
