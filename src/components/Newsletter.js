import React from "react"

const Newsletter = () => {
  return (
    <div className="breite grid grid-cols-1 md:grid-cols-2 gap-12 my-12 md:my-36">
      <div>
        <h1 className="text-3xl text-amber-700">
          Join our newsletter and get 20% off
        </h1>
        <p className="text-amber-500 tracking-wider text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima omnis
          quidem rerum, iusto laboriosam in co
        </p>
      </div>
      <div className="flex items-center  md:w-full">
        <form className=" md:w-full">
          <input
            className="border-2 border-amber-700 rounded-l-md pl-2 md:w-3/4 text-xl"
            type="email"
            placeholder="Enter Email"
          />
          <button
            className="bg-amber-700 border-2 border-amber-700 px-3 text-amber-100 rounded-r-md text-xl"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
