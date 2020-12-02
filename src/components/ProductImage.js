import React from "react"

const ProductImage = ({ thumbnail, images }) => {
  const newArray = [...images, thumbnail]
  // console.log(newArray)
  const [main, setMain] = React.useState(newArray[2].url)
  return (
    <div>
      <div className="flex justify-center" style={{ height: "70vh" }}>
        <img
          className="object-cover object-top h-full"
          src={main}
          alt="poster"
        />
      </div>
      <article
        className="grid grid-cols-3 gap-4 mt-4 w-full"
        style={{ height: "20vh" }}
      >
        {newArray.map((image, index) => {
          return (
            <img
              className="w-full h-full object-cover object-top"
              key={index}
              src={image.url}
              alt="weitere Bilder"
              onClick={() => {
                setMain(newArray[index].url)
              }}
            />
          )
        })}
      </article>
    </div>
  )
}

export default ProductImage
