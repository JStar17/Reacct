import { Link } from "react-router-dom"
import React from 'react'

export const Nav = () => {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       
        <li class="nav-item">
          <Link className="nav-link " to="/Login">Login</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link " to="/Profile">Profile</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link " to="/LogOut">LogOut</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link " to="/#">ApiDemo3</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link " to="/FileUpload">FileUpload</Link>
        </li>
        
        <li class="nav-item">
          <Link className="nav-link " to="/SelectDemo">Select Option</Link>
        </li>
      </ul>
    </div>
  </nav></div>
  )
}
