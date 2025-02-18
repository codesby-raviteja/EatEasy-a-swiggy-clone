import React from "react"

export default function SquareShimmer() {
  return (
    <div className="animate-pulse space-x-4 max-w-screen-xl overflow-hidden my-3">
      <h1 className="w-80 mx-4  h-8 bg-slate-300 rounded-md my-4"></h1>
      <div className="flex gap-3 my-2 ">
        {Array(8)
          .fill("")
          .map((ele, i) => (
            <div
              key={i}
              className="rounded-2xl flex-shrink-0 bg-slate-500 h-64 w-64"
            ></div>
          ))}
      </div>
    </div>
  )
}
