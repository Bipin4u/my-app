import React from 'react'
import { Link } from 'react-router-dom'


function Header(props) {
    const color =()=>{
        if(props.mode === "light"){
            return "dark"
        }else{
            return "light"
        }
    }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.textmode}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact us</Link>
                </li>


            </ul>
            <div className="form-check form-switch">
                <input className="form-check-input"  onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className={`form-check-label text-${color()}`} for="flexSwitchCheckDefault">Enable Dark mode</label>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Header