import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Games from "./pages/Games"
import About from "./pages/About"
import TicTacToe from "./pages/TicTacToe";
import NotFound from "./pages/NotFound";
import { useSelector } from "react-redux"
import { useEffect } from "react";
import RockPaperScissors from "./pages/RockPaperScissors";


function App() {

  const { theme } = useSelector(state => state.theme)

  useEffect(() => {
    
    const body = document.querySelector("body")
    const html = document.querySelector("html")
    const root = document.querySelector("#root")
    
    if (!theme) {

      body.style.background = "black"
      html.style.background = "black"
      root.style.background = "black"
      
    
    } else if (theme) {
      body.style.background = "radial-gradient(rgba(46, 103, 220, 0.1), rgba(0, 0, 0, 0.1))"
      html.style.background = "radial-gradient(rgba(46, 103, 220, 0.1), rgba(0, 0, 0, 0.1))"
      root.style.background = "radial-gradient(rgba(46, 103, 220, 0.1), rgba(0, 0, 0, 0.1))"
     

      body.style.background = "radial-gradient(rgba(211, 37, 199, 0.3), rgba(0, 0, 0, 0.3))"
      html.style.background = "radial-gradient(rgba(211, 37, 199, 0.3), rgba(0, 0, 0, 0.3))"
      root.style.background = "radial-gradient(rgba(211, 37, 199, 0.3), rgba(0, 0, 0, 0.3))"
      

      body.style.background = "linear-gradient(to right, rgba(211, 37, 199, 1),rgba(46, 103, 220, 1))"
      html.style.background = "linear-gradient(to right, rgba(211, 37, 199, 1),rgba(46, 103, 220, 1))"
      root.style.background = "linear-gradient(to right, rgba(211, 37, 199, 1),rgba(46, 103, 220, 1))"
      
    }

  }, [theme])

  useEffect(() => {

    const body = document.querySelector("body")
    const html = document.querySelector("html")
    const root = document.querySelector("#root")
    
    if (!theme) {

      body.style.background = "black"
      html.style.background = "black"
      root.style.background = "black"
    
    } else if (theme) {
      body.style.background = "radial-gradient(rgba(46, 103, 220, 0.1), rgba(0, 0, 0, 0.1))"
      html.style.background = "radial-gradient(rgba(46, 103, 220, 0.1), rgba(0, 0, 0, 0.1))"
      root.style.background = "radial-gradient(rgba(46, 103, 220, 0.1), rgba(0, 0, 0, 0.1))"
     

      body.style.background = "radial-gradient(rgba(211, 37, 199, 0.3), rgba(0, 0, 0, 0.3))"
      html.style.background = "radial-gradient(rgba(211, 37, 199, 0.3), rgba(0, 0, 0, 0.3))"
      root.style.background = "radial-gradient(rgba(211, 37, 199, 0.3), rgba(0, 0, 0, 0.3))"
      

      body.style.background = "linear-gradient(to right, rgba(211, 37, 199, 1),rgba(46, 103, 220, 1))"
      html.style.background = "linear-gradient(to right, rgba(211, 37, 199, 1),rgba(46, 103, 220, 1))"
      root.style.background = "linear-gradient(to right, rgba(211, 37, 199, 1),rgba(46, 103, 220, 1))"
      
    }
    // eslint-disable-next-line
  }, [])


  return (
    <BrowserRouter >
      <Navbar />
      <main className={`px-8 z-0 pt-36`}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/games' element={<Games />} />
          <Route exact path='/faq' element={<About />} />
          <Route exact path='/tic-tac-toe' element={<TicTacToe />} />
          <Route exact path='/rock-paper-scissors' element={<RockPaperScissors />} />
          <Route exact path='/*' element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}


//! user sayfas??n?? yap ve loglar?? tut !
//! TA?? KA??IT MAKAS
//! NOTFOUND

export default App;
