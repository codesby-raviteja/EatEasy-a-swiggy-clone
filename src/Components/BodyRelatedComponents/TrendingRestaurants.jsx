
import RestaurantCard from "../OtherComponents/RestaurantCard"




export default function TrendingRestaurants({ restaurants }) {
  const title =
    restaurants?.data?.cards[2]?.card?.card?.title ||
    restaurants?.data?.cards[1]?.card?.card?.title


    
  const foodImageCards =
  restaurants?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    ?.restaurants || restaurants?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    ?.restaurants

  return (
    <div className="my-6 max-w-screen-xl mx-auto px-4 bg-slate-200 py-1">
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
      <div className="my-6 grid grid-cols-auto gap-4 place-items-center">
        {foodImageCards &&
          foodImageCards.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
            )
          })}
      </div>
    </div>
  )
}
