import React from 'react'
import PropTypes from 'prop-types'
import lightModeIcon from "./../light_mode.svg" 
import darkModeIcon from "./../dark_mode.svg" 
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  const changeThemeColor = (color) => {
    let dataSet = {
      primary: {
        btnClass: "primary border-white",
        textAreaBackgroundColor: "primary",
        bodyBackgroundColor: "#0d6efd"
      },
      secondary: {
        btnClass: "secondary border-white",
        textAreaBackgroundColor: "secondary",
        bodyBackgroundColor: "#6c757d"
      },
      success: {
        btnClass: "success border-white",
        textAreaBackgroundColor: "success",
        bodyBackgroundColor: "#198754"
      },
      info: {
        btnClass: "info border-white",
        textAreaBackgroundColor: "info",
        bodyBackgroundColor: "#0dcaf0"
      },
      warning: {
        btnClass: "warning border-white",
        textAreaBackgroundColor: "warning",
        bodyBackgroundColor: "#ffc107"
      },
      danger: {
        btnClass: "danger border-white",
        textAreaBackgroundColor: "danger",
        bodyBackgroundColor: "#dc3545"
      },
      reset: {
        btnClass: "primary",
        textAreaBackgroundColor: "",
        bodyBackgroundColor: ""
      }
    };
  
    // Access the appropriate object in the dataSet object based on the color argument
    const selectedColorObject = dataSet[color];
  
    document.body.style.backgroundColor = selectedColorObject.bodyBackgroundColor;
  
    props.setThemeColor(selectedColorObject);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-warning">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/textutils">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/textutils">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/textutils/about">{props.aboutText}</Link>
          </li>
  
        </ul>      
        <button className="btn bg-white btn-outline-secondary mx-1 p-3 rounded-circle" onClick={() =>changeThemeColor("reset")}/>
        <button className="btn btn-primary mx-1 p-3 rounded-circle" onClick={() =>changeThemeColor("primary")}/> 
        <button className="btn btn-secondary mx-1 p-3 rounded-circle" onClick={() =>changeThemeColor("secondary")}/> 
        <button className="btn btn-success mx-1 p-3 rounded-circle" onClick={() =>changeThemeColor("success")}/> 
        <button className="btn btn-danger mx-1 p-3 rounded-circle" onClick={() =>changeThemeColor("danger")}/> 
        <button className="btn btn-info mx-1 p-3 rounded-circle" onClick={() =>changeThemeColor("info")}/> 
        <button className="btn btn-warning mx-1 p-3 rounded-circle" onClick={() =>changeThemeColor("warning")}/> 
        <div className="d-flex align-items-center"> 
            <img id='lightModeIcon' style={{display: "none", color: "white"}} height="25rem" src={lightModeIcon} alt="" />
            <div className="form-check form-switch mx-1 ">        
              <input id='themeSlider' className="form-check-input" type="checkbox" role="switch" onClick={props.toggleTheme} />
            </div>
            <img id='darkModeIcon' style={{marginLeft: "-9px"}} height="25rem" src={darkModeIcon} alt="" />
        </div> 
      </div>
    </div>
  </nav>
    )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired}

Navbar.defaultProps = {title: "Set Title Here",
                    aboutText: "About"}

                  
