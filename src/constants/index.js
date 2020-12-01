import React from "react"
import { GiFilmProjector } from "react-icons/gi"
import { MdMovie } from "react-icons/md"
import { FaWonSign } from "react-icons/fa"

export const navbars = [
  { id: 1, text: "home", url: `/` },
  { id: 2, text: "about", url: `/about` },
  { id: 3, text: "products", url: `/products` },
]

export const services = [
  {
    id: 1,
    icon: <GiFilmProjector />,
    title: "film",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur earum eos deleniti. Fugit provident quo ullam, odio fugiat beatae!",
  },
  {
    id: 2,
    icon: <MdMovie />,
    title: "movie",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum bla bla bla blablablablablablalbaCumque consequatur earum eos deleniti. Fugit provident quo ullam, odio fugiat beatae!",
  },
  {
    id: 3,
    icon: <FaWonSign />,
    title: "money",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum bla bla bla blaCumque consequatur earum eos deleniti. Fugit provident quo ullam, odio fugiat beatae!",
  },
]
