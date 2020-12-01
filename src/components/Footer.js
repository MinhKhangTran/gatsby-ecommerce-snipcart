import React from "react"

const Footer = () => {
  return (
    <div className="bg-amber-400 text-center py-4 text-xl">
      <div className="breite">
        <h1>{new Date().getFullYear()}</h1>
      </div>
    </div>
  )
}

export default Footer
