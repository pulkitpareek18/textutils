import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const toggleTheme = () => {
    let themeSlider = document.getElementById("themeSlider");
    if (themeSlider.checked) {
      document.documentElement.setAttribute("data-bs-theme", "dark")
      document.getElementById("darkModeIcon").style.display = "none"
      document.getElementById("lightModeIcon").style.display = "block"
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light")
      document.getElementById("darkModeIcon").style.display = "block"
      document.getElementById("lightModeIcon").style.display = "none"
    }
  }

  const [alert, setAlert] = useState(null)

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
        <Navbar title="TextUtils" toggleTheme={toggleTheme} alert={alert} setThemeColor={setThemeColor} />
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
