import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between bg-lime-900 text-white h-24 items-center px-9'>
            <Link to="/">Home</Link>
            <Link to="/update">Update</Link>
            <Link to="/create">Create Page</Link>
            <Link to="/blog">Blog Page</Link>
        </nav>
     
    </div>
  )
}

export default Navbar
