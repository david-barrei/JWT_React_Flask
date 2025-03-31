import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const BookForm = () => {
  const { actions } = useContext(Context);
  const token = sessionStorage.getItem("token"); // Recuperamos el token almacenado

  const [book, setBook] = useState({
    title: "",
    description: "",
    year: "",
    feedback: "",
    user_id: "",
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await actions.createBook(book, token);
    if (result.success) {
      setMessage("Libro creado correctamente");
      setBook({ title: "", description: "", year: "", feedback: "", user_id: "" });
    } else {
      setMessage("Error al crear el libro: " + result.error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Crear Nuevo Libro</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            name="description"
            className="form-control"
            value={book.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Año</label>
          <input
            type="text"
            name="year"
            className="form-control"
            value={book.year}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Feedback</label>
          <textarea
            name="feedback"
            className="form-control"
            value={book.feedback}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">ID de Usuario</label>
          <input
            type="text"
            name="user_id"
            className="form-control"
            value={book.user_id}
            onChange={handleChange}
            required
          />
        </div>

        {message && <div className="alert alert-info">{message}</div>}

        <button type="submit" className="btn btn-primary  ">
          Guardar Libro
        </button>
      </form>
    </div>
  );
};

export default BookForm;