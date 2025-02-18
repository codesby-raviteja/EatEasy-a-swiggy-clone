import React from "react"
import { IMG_CDN_URL, STAR_SVG } from "../../Constants"
import { useDispatch } from "react-redux"
import { addItem } from "../../store/cartSlice"

export default function MenuItemCard({
  name,
  description,
  defaultPrice,
  ratings,
  imageId,
  itemAttribute,
  price,
  id,
}) {
  const dispatch = useDispatch()

  return (
    name && (
      <div className="flex py-4 px-8 items-center gap-4 border-b-2 justify-between">
        <div className="w-full">
          <p
            className={`${
              itemAttribute?.vegClassifier === "VEG"
                ? "text-green-600"
                : "text-red-500"
            } font-bold`}
          >
            {itemAttribute?.vegClassifier}
          </p>
          <h3 className="md:text-xl text-gray-700 font-bold">{name}</h3>
          <p className="text-lg font-bold">
            ₹ {defaultPrice ? defaultPrice / 100 : price / 100}
          </p>
          {ratings?.aggregatedRating?.ratingCountV2 && (
            <p className="flex items-center gap-1 font-semibold">
              <span>{STAR_SVG}</span>
              <span className="text-green-700">
                {ratings?.aggregatedRating?.rating}
              </span>
              <span className="text-gray-600">
                ({ratings?.aggregatedRating?.ratingCountV2})
              </span>
            </p>
          )}
          <p className="text-base font-semibold text-stone-600 line-clamp-4">
            {description}
          </p>
        </div>

        <div className="relative  justify-center flex">
          <img
            className="w-32  md:w-40  rounded-xl"
            src={IMG_CDN_URL + imageId}
            alt={name.substring(0, 20)}
          />
          <button
            className="absolute bottom-0   bg-green-500 px-4 text-sm font-medium py-2 rounded "
            onClick={() => {
              dispatch(
                addItem({
                  id,
                  name,
                  description,
                  defaultPrice,
                  ratings,
                  imageId,
                  itemAttribute,
                  price,
                })
              )
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    )
  )
}
