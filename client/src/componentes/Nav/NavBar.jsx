import React from "react";

import { Link } from "react-router-dom";
import FiltroContAct from "../Filtrado/FiltroContAct";
import FiltroOrdenamiento from "../Filtrado/FiltroOrdenamiento";
import "./nav.css";
export default function Navbar({ setPaginaActual }) {
  return (
    <div className="nav">
      <Link to="/crear" className="link">
        <button className="boton__crear">
          <h1>Crear Actividad</h1>
        </button>
      </Link>
      <div className="filtros">
        <FiltroContAct setPaginaActual={setPaginaActual} />
        <FiltroOrdenamiento setPaginaActual={setPaginaActual} />
      </div>
    </div>
  );
}
