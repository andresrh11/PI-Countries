import React from "react";
import { useDispatch } from "react-redux";
import { ordenamientoFilter, ordenamientoP } from "../../redux/actions";
import "./filtroo.css";

export default function FiltroOrdenamiento({ setPaginaActual, setOrder }) {
  const dispatch = useDispatch();

  function handleSortA(e) {
    e.preventDefault();
    setPaginaActual(1);
    dispatch(ordenamientoFilter(e.target.value));
    setOrder(e.target.value);
  }
  function handleSortP(e) {
    e.preventDefault();
    setPaginaActual(1);
    dispatch(ordenamientoP(e.target.value));
    setOrder(e.target.value);
  }
  return (
    <>
      <div className="contenedor__general">
        <div className="contenedor__ordenamiento">
          <h2>Orden: </h2>
          <select onChange={handleSortA} className="select__az">
            <option></option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
        <div className="contenedor__pobla">
          <h2>Filtro por población: </h2>
          <select onChange={handleSortP} className="select__minmax">
            <option></option>
            <option value="max">Ascendente</option>
            <option value="min">Descendente</option>
          </select>
        </div>
      </div>
    </>
  );
}
