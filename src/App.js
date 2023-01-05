import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Games from "./pages/Games"
import User from "./pages/User"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="px-8">
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
