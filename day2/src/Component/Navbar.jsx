import React from 'react'
import {Link} from 'react-router-dom'
import './Style.css'

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to='/' className='hommie'>Home</Link>
            <Link to = '/about' className='abbie'>About</Link>
        </nav>
    </div>
  )
}

export default Navbar
