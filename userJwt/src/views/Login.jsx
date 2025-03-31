import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Accedemos al contexto global para usar las acciones definidas en el store
  const { actions } = useContext(Context);

  // useNavigate permite redirigir al usuario después de loguearse
  const navigate = useNavigate();

  // Estado local para los campos del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Función que maneja el submit del formulario
  const handleLogin = async (e) => {
    e.preventDefault(); // evita que el formulario recargue la página

    const result = await actions.login(email, password);
    if (result.success) {
      navigate("/book"); // redirigimos al usuario al formulario de libros si todo sale bien
    } else {
      setError(result.error); // mostramos el mensaje de error si ocurre algo
    }
  };

  return (
    <div className="full-height bg-light">
      <form onSubmit={handleLogin} className="card p-4 shadow card-small">
        <h2 className="mb-4 text-center">Iniciar Sesión</h2>
  
        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
  
        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
  
        {/* Error */}
        {error && <div className="alert alert-danger">{error}</div>}
  
        <button type="submit" className="btn btn-primary w-100">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
export default Login;



