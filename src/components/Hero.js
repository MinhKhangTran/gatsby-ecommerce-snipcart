import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allFile(filter: { relativePath: { eq: "kwon-nara-yoo-jae-myung.jpg" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(query)
  const {
    allFile: { nodes: bild },
  } = data
  // console.log(bild[0].childImageSharp.fluid)
  return (
    <div
      className="breite place-content-center grid grid-cols-1 md:grid-cols-2 gap-6"
      style={{ height: "calc(100vh - 124px)" }}
    >
      <div className=" flex flex-col justify-center">
        <h1 className="text-amber-700 font-bold text-4xl">
          Meine koreanische <br /> Dramaliste 2020
        </h1>
        <p className="text-amber-500 tracking-wider leading-relaxed text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          quos repellendus earum facilis id maxime perspiciatis, laudantium
          tempora excepturi neque!
        </p>
      </div>
      <div className="hidden md:block">
        <Image fluid={bild[0].childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default Hero
