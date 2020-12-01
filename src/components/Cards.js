import React from "react"
import { services } from "../constants"

const Cards = () => {
  return (
    <div className="bg-amber-100 p-6">
      <div className="breite my-12">
        <header className="flex flex-wrap md:flex-nowrap ">
          <h1 className="text-xl font-semibold md:w-2/3 text-amber-700">
            Lorem, ipsum dolor sit amet consectetur
          </h1>
          <p className="md:w-1/4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupi
          </p>
        </header>
        <footer className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
          {services.map(service => {
            const { id, icon, title, text } = service
            return (
              <article
                className="bg-amber-500 p-4 text-center rounded-md md:mt-24 mt-8"
                key={id}
              >
                <div className="flex justify-center">
                  <div className="flex justify-center text-2xl text-amber-700 h-12 w-12 bg-amber-300 items-center rounded-full mb-4">
                    {icon}
                  </div>
                </div>
                <h1 className="text-2xl capitalize font-semibold text-amber-700 mb-2">
                  {title}
                </h1>
                <p>{text}</p>
              </article>
            )
          })}
        </footer>
      </div>
    </div>
  )
}

export default Cards
