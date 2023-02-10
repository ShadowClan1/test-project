import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav-bar bg-black  p-3 rounded-b-lg text-white flex flex-row w-screen gap-2 px-4 '>
<NavLink to='/' > Home </NavLink>
<NavLink to='/about' > About </NavLink>

    </div>
  )
}

export default Navbar