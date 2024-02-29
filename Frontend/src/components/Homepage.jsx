import React from 'react'
import './Homepage.css'
import Navbar from './Navbar'
import BlogForm from './BlogForm'
import { Routes, Route } from "react-router-dom";
import Blog from './Blog';
import Login from './Login';
const Homepage = () => {
  return (
    <div className='background_col'>
     
     <Navbar/>
      <Routes>
      <Route path="/addblog" element={ <BlogForm/>} />
      <Route path="/blog" element={ <Blog/>} />
      <Route path="/login" element={ <Login/>} />
      </Routes>
     
    </div>
  )
}

export default Homepage