import React from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6"
import { useRef } from "react"
import SquareShimmer from "../Shimmer/SquareShimmer"
import RestaurantCard from "../OtherComponents/RestaurantCard"

export default function TopRestaurants({ restaurants }) {
  const FooditemElement = useRef(null)
  const title = restaurants?.data?.cards[1]?.card?.card?.header?.title  ||  restaurants?.data?.cards[0]?.card?.card?.title
  
  
  const foodImageCards =
    restaurants?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || restaurants?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants

  function scrollToRight() {
    FooditemElement.current.scrollLeft += 600
  }
  function scrollToLeft() {
    FooditemElement.current.scrollLeft -= 600
  }

  return (
    <section className="max-w-7xl mx-auto mt-4 px-4 py-1 rounded-md border-b-2 bg-slate-200 ">
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
                className={`bg-white w-9 h-9 text-lg flex items-center justify-center rounded-full  `}
                onClick={scrollToRight}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div
            className="my-2 md:my-4 py-2 flex gap-4 flex-nowrap  overflow-x-scroll no-scrollbar scroll-smooth"
            ref={FooditemElement}
          >
            {foodImageCards &&
              foodImageCards.map((restaurant) => {
                return (
                  <RestaurantCard 
                    key={restaurant.info.id}
                    {...restaurant.info}
                  />
                )
              })}
          </div>
        </>
      ) : (
        <SquareShimmer />
      )}
    </section>
  )
}
