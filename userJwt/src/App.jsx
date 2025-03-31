import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppContext from "./store/appContext";

// Vistas principales
import Login from "./views/Login";
import Register from "./views/Register";
import BookForm from "./views/BookForm";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    // Envolvemos toda la aplicación con el Contexto Global (AppContext)
    <AppContext>
      <Router>
      <Navbar /> 
        <Routes>
          <Route path="/" element={<Login />} /> {/* Página por defecto */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book" element={<BookForm />} />
        </Routes>
      </Router>
    </AppContext>
  );
};

export default App;
