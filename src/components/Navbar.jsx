import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="h-12 px-4  flex justify-between text-[#F5C518] border-b border-white/10 bg-gradient-to-r from-black via-zinc-900 to-black backdrop-blur-md items-center fixed top-0 left-0 w-full z-50 ">
        <h2 className="text-2xl font-bold tracking-wide font-['Anton'] tracking-widest">Gallery</h2>
        <div className='flex justify-between gap-10 font-semibold '>
          <Link to='/' className='nav-link'>Home</Link>
          <Link to='/Gallery' className='nav-link'>Gallery</Link>
          <Link to='/About' className='nav-link'>About</Link>
          <Link to='/Contact' className='nav-link'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
  