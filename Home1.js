import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Home1() {
  return (
    <div> <nav class="navbar navbar-expand-lg bg-body-tertiary"id="navbar2">
    <div className='container-fluid'>
      <Link  className='nav-link active' to="/About">
        About
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          

          
          <li class="nav-item">
            <Link className='nav-link active' aria-current="page" to="/Login">
              Login
            </Link>
          </li>
          <li class="nav-item">
            <Link className='nav-link active' aria-current="page" to="/Registration">
              Registration
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Home1