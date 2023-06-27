import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" style={{fontFamily: 'Alkatra', color: "#20c997"}} to="/textutils">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" style={{fontFamily: 'Alkatra'}} aria-current="page" to="/textutils">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{fontFamily: 'Alkatra'}} to="/textutils/about">{props.aboutText}</Link>
            </li>

          </ul>

          <div className="d-flex align-items-center">

            <button id='themeIconButton' title="Enable Dark Mode" className="btn rounded-circle btn-light d-flex align-items-center justify-content-center"onClick={props.toggleTheme} style={{width:"40px", height:"40px"}}>
              <img id='themeIcon' src={props.themeIcon} data-theme="light" alt='' style={{width:"30px"}}/>
            </button>


          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About"
}


