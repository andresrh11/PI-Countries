import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filtroActividades,
  getActivitiesDb,
  getAllCountries,
  countryPorId,
} from "../../redux/actions";
import "./filtroo.css";
export default function FiltroActiv() {
  const activities = useSelector((state) => state.getActivities);
  const filtroPais = useSelector((state) => state.coutriesAll);
  const dispatch = useDispatch();

  activities.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    } else if (b.name > a.name) {
      return -1;
    }
    return 0;
  });
  useEffect(() => {
    dispatch(getActivitiesDb());
  }, [dispatch]);

  function handleFilterA(e) {
    if (e.target.checked) {
      dispatch(filtroActividades(e.target.value));
    } else if (!e.target.checked) {
      dispatch(getAllCountries());
    }
  }

  if (activities) {
    return (
      <>
        <div className="filtro__actividad">
          <h1>Filtro por actividad:</h1>

          {activities.map((e) => {
            return (
              <form key={e.id}>
                <input
                  className="check"
                  type="checkbox"
                  name={e.name}
                  value={e.name}
                  onChange={(e) => handleFilterA(e)}
                />{" "}
                {e.name}
                <br />
              </form>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Encuentra tu actividad:</h1>
        <h2>No hay actividades</h2>
      </>
    );
  }
}
