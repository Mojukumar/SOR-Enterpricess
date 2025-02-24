import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div class="nav">
        <div class="nav-left">
            <h1 class="head">SOR Enterprices</h1>
        </div>
        <div class="nav-right">
          <Link class="con" to="/"><h4>Home</h4></Link>
          <Link class="con" to="/select"><h4>Select</h4></Link>
          <Link class="con" to="/add"><h4>Add</h4></Link>
          <Link class="con" to="/contact"><h4>Contact</h4></Link>
        </div>
    </div>

  )
}

export default Navbar

