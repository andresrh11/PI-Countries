import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCountries } from "../../redux/actions";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import "./cards.css";

function Cards({ paginaActual, setPaginaActual }) {
  const countries = useSelector((state) => state.countriesAll);
  const dispatch = useDispatch();

  const [paisesPorPagina, setPaisesPorPagina] = useState(9);
  const indexFinal = paginaActual * paisesPorPagina;
  const indexInit = indexFinal - paisesPorPagina;
  const paisesActuales = countries.slice(indexInit, indexFinal);

  const paginacion = (e) => {
    setPaginaActual(e);
    if (e !== 1) {
      setPaisesPorPagina(10);
    } else {
      setPaisesPorPagina(9);
    }
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  if (countries.length) {
    return (
      <div className="espacio">
        <div>
          <Paginado
            paisesPorPagina={paisesPorPagina}
            paginitas={countries.length}
            paginacion={paginacion}
            setPaginaActual={setPaginaActual}
            paginaActual={paginaActual}
            setPaisesPorPagina={setPaisesPorPagina}
            paises={paisesActuales}
          />
        </div>
        <div className="cards">
          {paisesActuales.map((e) => {
            return (
              <Link className="link__card" key={e.id} to={"/countries/" + e.id}>
                <Card key={e.id} props={e} />
              </Link>
            );
          })}
        </div>

        <div>
          <Paginado
            paisesPorPagina={paisesPorPagina}
            paginitas={countries.length}
            paginacion={paginacion}
            setPaginaActual={setPaginaActual}
            paginaActual={paginaActual}
            setPaisesPorPagina={setPaisesPorPagina}
            paisesActuales={paisesActuales}
          />
        </div>
      </div>
    );
  } else {
    return <div>Loading ...</div>;
  }
}
export default Cards;
