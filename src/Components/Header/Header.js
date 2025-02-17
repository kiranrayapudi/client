import React from 'react'
import logo from './assets/logo.jpg'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    
    <div className='headerstyle'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="*">
      <img src={logo} className='w-100' alt='logo' />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/courses">Courses</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/batches">Batches</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contactus">ContactUs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/aboutus">AboutUs</NavLink>
        </li>
        <button className='border-light-subtle border-warning rounded-4 bg-danger'>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin">Admin</NavLink>
        </li>
        </button>
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Header
