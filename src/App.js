import { BrowserRouter, Routes, Route } from "react-router-dom"
import gsap from "gsap"
import React, { useEffect, useRef } from 'react'
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Games from "./pages/Games"
import User from "./pages/User"

function App() {

  const timeline = gsap.timeline({
    repeat: false,
    defaults: { duration: .2, ease: "easeInOut" }
  })

  const r1 = useRef()

  useEffect(() => {

    timeline.from(r1.current, { opacity: 0 }).to(r1.current, { opacity: 1 })
    // eslint-disable-next-line
  }, [])
  
  return (
    <BrowserRouter>
      <Navbar />
      <div className="px-8" ref={r1}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/games' element={<Games />} />
          <Route exact path='/user' element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
