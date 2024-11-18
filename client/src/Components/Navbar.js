import React from 'react'
import "../Styles/Navbar.css"
const Navbar = () => {
  return (
    <>
<nav class="navbar">
        <div class="navbar-brand">MyWebsite</div>
        <ul class="navbar-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

    </>
  )
}

export default Navbar
