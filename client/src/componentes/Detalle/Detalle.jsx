import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { countryPorId } from "../../redux/actions";
import Activity from "../Activity/Activity.jsx";
import "./detalle.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Detalle() {
  const {
    name,
    flags,
    continents,
    capital,
    area,
    population,
    subregion,
    activities,
  } = useSelector((state) => state.countryId);
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(id);
  useEffect(() => {
    dispatch(countryPorId(id));
    return () => {
      dispatch(countryPorId(""));
    };
  }, [dispatch, id]);

  if (id) {
    return (
      <>
        <Header />
        <div className="contenedor__detalle">
          <div className="detalle">
            <h1>Codigo: {id}</h1>
            <h1>Continente: {continents}</h1>
            <img src={flags} alt="" className="imagen__detalle"></img>
            <h1>Nombre: {name}</h1>
            <h2>Capital: {capital}</h2>
            <h3>Subregion: {subregion}</h3>
            <h3>Area: {area} KM</h3>
            <h3>Población: {population}</h3>

            <h1> Actividades:</h1>
            <div className="div__act">
              <Activity activities={activities} />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return <div>Loading ...</div>;
  }
}
