
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { actions } = useContext(Context); // Accedemos a las acciones globales (Flux)
  const navigate = useNavigate(); // Para redireccionar tras registrarse

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const result = await actions.register(email, password);
    if (result.success) {
      setSuccess(true);
      setError(null);
      setTimeout(() => navigate("/login"), 1500); // Redirige después de 1.5s
    } else {
      setError(result.error);
      setSuccess(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registro de Usuario</h2>
      <form onSubmit={handleRegister} className="card p-4 shadow-sm">
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

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">Usuario creado correctamente.</div>}

        <button type="submit" className="btn btn-success">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;