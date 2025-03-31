
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // Función para cerrar sesión eliminando el token
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Mi App</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Registro</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/book">Crear Libro</Link>
          </li>
        </ul>
        <button className="btn btn-outline-light" onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;