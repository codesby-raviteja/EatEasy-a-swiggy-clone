import React from "react"
import { IMG_CDN_URL } from "../../Constants"
import { useDispatch } from "react-redux"
import { removeItem } from "../../store/cartSlice"

function CartItem({ imageId, price, description, name, id }) {
  const dispatch = useDispatch()

  const removeItemfromCart = () => {
    dispatch(removeItem(id))
  }
  return (
    <div className="border ">
      <img
        src={IMG_CDN_URL + imageId}
        alt={name}
        className="w-full object-cover h-[60%]"
      />
      <div className="p-4">
        <p className="font-medium">{name}</p>
        <p>₹{price / 100}</p>
        <button
          className=" bg-red-500 w-full p-2 my-1 text-lg"
          onClick={removeItemfromCart}
        >
          Remove item
        </button>
      </div>
    </div>
  )
}

export default CartItem
