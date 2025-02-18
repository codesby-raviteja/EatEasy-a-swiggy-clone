import React from "react"
import Logo from "../../assets/logo.avif"

export default function AboutPage() {
  return (
    <div className="bg-slate-100">
      <div className="max-w-screen-xl mx-auto py-5 flex flex-col md:flex-row gap-5 md:gap-10 items-center px-8  h-[calc(100vh-92px)] ">
        <img src={Logo} alt="easy-eats" />
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-bold  my-2">
            <span className="text-[#ec4b45]">EAT </span> 
            <span className="text-[#e68c51]">EASY..</span>
          </h1>
          <h3 className="text-2xl  font-semibold my-4 text-green-600 ">SIMPLE & DELICIOUS</h3>
          <p className="md:text-lg md:font-medium text-gray-700">
            <span className="text-xl text-black font-semibold">East Eats</span> is an innovative online food ordering app designed to
            provide users with a seamless and convenient way to explore and
            order delicious meals from local restaurants. With a user-friendly
            interface, the app offers a wide variety of cuisines, allowing
            customers to customize their orders based on preferences and dietary
            needs. Featuring fast delivery, real-time tracking, and secure
            payment options, East Eats enhances the food delivery experience
            while supporting local businesses. Whether you're craving comfort
            food or trying something new, East Eats aims to satisfy all your
            culinary desires with just a few taps.
          </p>
        </div>
      </div>
    </div>
  )
}
