import React from "react";
import { useDispatch } from "react-redux";
import { filterCountries } from "../../redux/actions";
import "./filtroo.css";
export default function FiltroContAct({ setPaginaActual }) {
  const dispatch = useDispatch();
  function handleFilter(e) {
    dispatch(filterCountries(e.target.value));
    setPaginaActual(1);
  }
  return (
    <div className="contenedorFiltroCont">
      <h2>Continente: </h2>
      <select className="select__continente" onChange={(e) => handleFilter(e)}>
        <option value="All">Todos</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
