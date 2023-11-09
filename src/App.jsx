import { Routes, Route, Link } from "react-router-dom"
import Red from "./components/red"
import Blue from "./components/blue"
import Home from "./components/Home"
import "./App.css"
import "./index.css"

function App() {
  

  return (
    <>
      <div id="container">
        <h1></h1>
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/">Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />}>

            </Route>
            <Route path="/red" element={<Red />}>

            </Route>
            <Route path="/" element={<Home />}>
              
            </Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
