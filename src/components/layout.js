import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { useProductContext } from "../context/productContext"

const Layout = ({ children }) => {
  const { isSidebarOpen } = useProductContext()
  return (
    <>
      <Navbar />
      {children}
      {isSidebarOpen && <Sidebar />}
      <Footer />
    </>
  )
}

export default Layout
