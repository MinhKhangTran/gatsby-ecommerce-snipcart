import React from "react"
import { navbars } from "../constants"
import { FaTimes } from "react-icons/fa"
import { useProductContext } from "../context/productContext"
import { Link } from "gatsby"

const Sidebar = () => {
  const { closeSidebar } = useProductContext()
  return (
    <div
      className="fixed left-0 right-0 bottom-0 top-0"
      style={{ background: "rgba(0,0,0,0.8" }}
    >
      <article className="grid place-items-center bg-amber-100 relative h-screen">
        <button
          className="absolute top-0 right-0 m-6 text-amber-600 text-3xl"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
        {navbars.map(navbar => {
          const { id, text, url } = navbar
          return (
            <div
              className="flex flex-col justify-center items-center text-3xl"
              key={id}
            >
              <Link className="my-4" to={url} onClick={closeSidebar}>
                {text}
              </Link>
            </div>
          )
        })}
      </article>
    </div>
  )
}

export default Sidebar
