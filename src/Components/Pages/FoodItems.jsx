import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {  getDynamicFoodItemUrl } from "../../Constants"
import { LocationContext } from "../Hooks/LocationContext"
import RestaurantCard from "../OtherComponents/RestaurantCard"

export default function FoodItems() {
  const [foodItems, setFoodItems] = useState(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const id = useParams()

  const collectionId = id.collection_id

  const parameters = collectionId
    .split("&")
    .splice(1)
    .filter((text) => !text.includes("search_context"))

  const collectionID = parameters[0].split("=")[1]
  const tags = parameters[1]
  const type = parameters[2]

  const [location] = useContext(LocationContext)

  useEffect(() => {
    if (location[0]) {
      fetchFoodItems()
    }
  }, [])

  async function fetchFoodItems() {
    const url =
      getDynamicFoodItemUrl(location) +
      `${collectionID}&${tags}&${type ? type : "type:rcv2"}`

    const data = await fetch(url)
    const res = await data.json()

    setTitle(res?.data?.cards[0]?.card?.card?.title)
    setDescription(res?.data?.cards[0]?.card?.card?.description)

    const resData = res?.data?.cards
      .slice(3)
      .map((card) => card?.card?.card?.info)

    const dataToBeSet = resData[0]
      ? resData
      : res?.data?.cards
          .slice(3)[1]
          ?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
            (res) => res.info
          )

    setFoodItems(dataToBeSet)
  }

  return (
    <div className="bg-slate-100 p-4 ">
      <section className="max-w-screen-xl mx-auto p-4  bg-slate-400 rounded-sm   bg-opacity-25">
        <div className="my-5 px-4">
          <h1 className="my-3 text-4xl font-semibold">{title}</h1>
          <p className="text-xl font-medium text-gray-700">{description}</p>
        </div>
        <div className="grid grid-cols-auto gap-5">
          {!foodItems
            ? Array(8)
                .fill("")
                .map((ele, i) => (
                  <div
                    key={i}
                    className="rounded-2xl flex-shrink-0 bg-slate-400 h-64 w-64"
                  ></div>
                ))
            : foodItems.map((fooditem) => {
                return (
                  fooditem && (
                    <RestaurantCard key={fooditem?.id} {...fooditem} />
                  )
                )
              })}
        </div>
      </section>
    </div>
  )
}
