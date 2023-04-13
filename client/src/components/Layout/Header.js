import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import {message} from 'antd'

const Header = () => {
  const [auth,setAuth]=useAuth();
  const handleLogout=()=>{
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    message.success("Logout Successfully");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand">🛒E-COMMERCE APP</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink to="/" className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/category" className="nav-link">Category</NavLink>
      </li>
      {/* <li className="nav-item">
        <NavLink to="/register" className="nav-link" >REGISTER</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/login" className="nav-link" >LOGIN</NavLink>
      </li> */}

      {
        !auth.user ? (
          <>
              <li className="nav-item">
        <NavLink to="/register" className="nav-link" >REGISTER</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/login" className="nav-link" >LOGIN</NavLink>
      </li> 
          </>
        ): (
          <>
             <li className="nav-item">
        <NavLink  onClick={handleLogout} to="/login" className="nav-link" >LOGOUT</NavLink>
      </li> 
          </>
        )
      }

      <li className="nav-item">
        <NavLink to="/cart" className="nav-link">Cart(0)</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Header