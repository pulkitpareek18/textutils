import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'
import lightModeIcon from "./light_mode.svg"
import darkModeIcon from "./dark_mode.svg"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const toggleTheme = () => {
    let themeIcon = document.getElementById("themeIcon")
    let themeIconButton = document.getElementById("themeIconButton")
    if(themeIcon.getAttribute("data-theme")==="light"){
      setThemeIcon(lightModeIcon)
      themeIconButton.classList.remove("btn-light","btn-dark")
      themeIconButton.classList.add("btn-dark")
      themeIconButton.title = "Enable Light Mode"
      themeIcon.setAttribute("data-theme","dark")
      document.documentElement.setAttribute("data-bs-theme","dark")
    }else{
      setThemeIcon(darkModeIcon)
      themeIconButton.classList.remove("btn-dark","btn-light")
      themeIconButton.classList.add("btn-light")
      themeIconButton.title = "Enable Dark Mode"
      themeIcon.setAttribute("data-theme","light")
      document.documentElement.setAttribute("data-bs-theme","light")
    }
  }

  const [alert, setAlert] = useState(null)
  const [themeIcon, setThemeIcon] = useState(darkModeIcon)

  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      msg: msg
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const [themeColor, setThemeColor] = useState(
    {
      btnClass: "primary",
      textAreaBackgroundColor: "",
      bodyBackgroundColor: ""
    })





  return (

    <>
      <BrowserRouter>
        <Navbar title="TextUtils" themeIcon={themeIcon} toggleTheme={toggleTheme} alert={alert} setThemeColor={setThemeColor} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact path="/textutils/"
            element={
              <div className='container my-3'>
                <TextForm showAlert={showAlert} heading="Enter the Text below to Analyze." themeColor={themeColor} />
              </div>
            } 
          />
          <Route path="/textutils/about" element={<About />}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
