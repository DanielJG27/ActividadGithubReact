import { Routes, Route } from "react-router-dom";
import './index.css';
 import Home from "./pages/Home";
import Acerca from "./pages/Acerca.jsx";
// import Contacto from "./pages/Contacto";
import Tablas from "./pages/Tablas.jsx";
import Navbar from "./components/Navbar";
import Usuarios from "./pages/Usuarios";


//importar de Usuario.jsx a App.jsx

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        {/* <Route path="/contacto" element={<Contacto />} /> */}
        <Route path="/tablas" element={<Tablas />} />
        <Route path="/usuarios" element={<Usuarios />} />
        
      </Routes>
    </>
  );
}

export default App;
