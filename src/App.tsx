import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Projects from "./pages/projects/Projects"
import Contact from "./pages/contact/Contact"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
