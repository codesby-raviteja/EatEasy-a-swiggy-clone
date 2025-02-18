import React from "react"
import { useSelector } from "react-redux"
import CartItem from "../OtherComponents/CartItem"

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart)
  return (
    <div className="py-4 max-w-7xl mx-auto min-h-[calc(100vh-300px)] ">
      <h3 className="text-2xl my-4 font-medium">Cart Items</h3>
      <div className="grid grid-cols-4 gap-5">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
//
