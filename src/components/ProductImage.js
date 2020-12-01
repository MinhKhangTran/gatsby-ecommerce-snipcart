import React from "react"

const ProductImage = ({ thumbnail, images }) => {
  const newArray = [...images, thumbnail]
  // console.log(newArray)
  const [main, setMain] = React.useState(newArray[2].url)
  return (
    <div>
      <img src={main} alt="poster" />
      <article
        className="grid grid-cols-3 gap-4 mt-4 w-full"
        style={{ height: "15vh" }}
      >
        {newArray.map((image, index) => {
          return (
            <img
              className="w-full h-full object-cover object-top"
              key={index}
              src={image.url}
              alt="weitere Bilder"
            />
          )
        })}
      </article>
    </div>
  )
}

export default ProductImage
