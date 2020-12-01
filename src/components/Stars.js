import React from "react"
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

const Stars = ({ stars }) => {
  const sterne = Array.from({ length: 5 }, (_, index) => {
    const mittelZahl = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= mittelZahl ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })

  return (
    <div className="flex items-center ">
      {sterne} {"   "} <span className="ml-4">{stars}</span>
    </div>
  )
}

export default Stars
