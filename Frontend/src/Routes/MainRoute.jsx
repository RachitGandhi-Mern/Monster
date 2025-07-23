import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"
import Dashboard from "../Pages/Signup"
import Home from '../Pages/Home'
import ProductPage from '../Pages/ProductPage'
import ProfileCard from '../Pages/ProfileCard'
import Contact from '../Pages/Contact'
import About from '../Pages/About'


const MainRoute = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="ProfileCard" element={<ProfileCard />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </div>
  )
}

export default MainRoute
