import React from 'react';
import {NavLink} from "react-router-dom";


const Navbar = () => 
{
  return (
    <>
    
    <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
    
    <div id="navb" class="navbar-collapse collapse hide">
      <ul class="navbar-nav">
        <li class="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/"><i class="fas fa-home fa-lg"/> Home</NavLink>
        </li>
        {/*<li class="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/eligibility">Check Eligibility</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/equipments">Equipment Info</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
        </li>*/}
        
        {/*<li class="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/agencies">Agencies</NavLink>
        </li>*/}
      </ul>

      {/*<ul class="nav navbar-nav ml-auto">
        <li class="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/options"><span class="fas fa-user"></span> Beneficiary Login</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/govtlogin"><span class="fas fa-lock"></span> Admin</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/agencylogin"><span class="fas fa-building"></span> Agency</NavLink>
        </li>
      </ul>
        */}


    </div>
  </nav>
    </>
  )
}

export default Navbar