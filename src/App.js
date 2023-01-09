import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Games from "./pages/Games"
import User from "./pages/User"
import About from "./pages/About"
import TicTacToe from "./pages/TicTacToe";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="px-8 z-1 pt-36">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/games' element={<Games />} />
          <Route exact path='/user' element={<User />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/tic' element={<TicTacToe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
