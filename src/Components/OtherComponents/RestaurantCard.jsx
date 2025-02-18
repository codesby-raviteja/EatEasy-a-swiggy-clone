import { NavLink } from "react-router-dom"
import { IMG_CDN_URL, STAR_SVG } from "../../Constants"

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  id,
  sla,
  areaName,
  aggregatedDiscountInfoV3,
}) => {
  return (
    <div className="max-w-64  mx-auto size-full overflow-hidden rounded-md shadow-md bg-stone-200 shadow-zinc-400 flex-shrink-0	hover:scale-95 transition ease-in-out  duration-200 cursor-pointer">
      <NavLink to={`/restaurant&res_id=${id}`}>
        <div className="h-40 relative ">
          <img
            className="size-full object-cover -z-10 "
            src={IMG_CDN_URL + cloudinaryImageId}
            alt=""
          />
          <div className="absolute bottom-0 flex flex-col h-1/3 justify-end  w-full bg-gradient-to-t from-black">
            <h2 className=" w-[100%] text-xl  px-1 font-bold       text-white line-clamp-1">
              {aggregatedDiscountInfoV3 &&
                aggregatedDiscountInfoV3?.header +
                  " " +
                  aggregatedDiscountInfoV3?.subHeader}
            </h2>
          </div>
        </div>
        <div className="p-2">
          <h2 className="text-lg font-bold line-clamp-1">{name}</h2>

          <p className="flex items-center gap-1 text-base  font-bold text-gray-700 ">
           <span>{STAR_SVG}</span>
            <span>{avgRating} • </span>
            <span>{sla?.slaString}</span>
          </p>
          <p className="line-clamp-1 text-lg font-semibold text-gray-600">
            {cuisines.join(", ")}
          </p>
          <p className="text-base font-medium text-gray-600">{areaName}</p>
        </div>
      </NavLink>
    </div>
  )
}

export default RestaurantCard
