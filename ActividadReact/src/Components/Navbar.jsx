import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/acerca">Acerca de mí</Link> |{" "}
      <Link to="/contacto">Contacto</Link> |{" "}
      <Link to="/tablas">Tablas</Link> |{" "}
      <Link to="/Usuarios">Usuarios</Link> |{" "}
      <Link to="/editar-alumno">Editar alumno</Link>

    </nav>
  );
}

export default Navbar;