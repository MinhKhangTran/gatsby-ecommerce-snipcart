import React from "react"
import { navbars } from "../constants"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="breite">
      <nav className="flex justify-between my-4">
        <div className="flex justify-between w-full">
          <h1 className="text-2xl text-amber-700">Yeonghwa</h1>
          <button className="md:hidden text-2xl text-amber-700">
            <FaBars />
          </button>
        </div>
        <ul className="hidden md:flex  justify-between w-1/2">
          {navbars.map(navbar => {
            const { id, text, url } = navbar
            return (
              <li key={id} className="capitalize text-amber-500 text-lg">
                <Link
                  activeClassName="text-amber-600 border-b-2  border-amber-600"
                  to={url}
                >
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
