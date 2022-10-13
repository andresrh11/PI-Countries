import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, createActivity } from "../../redux/actions";
import "./form.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import validaciones from "../validaciones";

export default function Form() {
  const [errors, setErrors] = useState({});
  const countriesFiltro = useSelector((state) => state.countriesAll);
  const [activities, setActivities] = useState({
    countries: [],
    name: "",
    duracion: "",
    dificultad: "",
    temporada: "",
  });
  countriesFiltro.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    } else if (b.name > a.name) {
      return -1;
    }
    return 0;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch, errors]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setActivities({
      countries: [],
      name: "",
      duracion: "",
      dificultad: "",
      temporada: "",
    });
  };
  const handleInputChange = function (e) {
    setActivities({
      ...activities,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validaciones({
        ...activities,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleTemporada = function (e) {
    setActivities({
      ...activities,
      temporada: e.target.value,
    });
    setErrors(
      validaciones({
        ...activities,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleDuracion = function (e) {
    setActivities({
      ...activities,
      duracion: e.target.value,
    });
    setErrors(
      validaciones({
        ...activities,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleDificultad = function (e) {
    setActivities({
      ...activities,
      dificultad: e.target.value,
    });

    setErrors(
      validaciones({
        ...activities,
        [e.target.name]: e.target.value,
      })
    );
  };
  function addPais(e) {
    const pais = activities.countries;
    pais.push(e.target.value);
    setActivities({
      ...activities,
      countries: pais,
    });
    setErrors(
      validaciones({
        ...activities,
        [e.target.name]: e.target.value,
      })
    );
  }
  function deleteCountry(e) {
    let Eliminarid = e.target.value;
    let pais = activities.countries.filter((id) => id !== Eliminarid);
    setActivities({
      ...activities,
      countries: pais,
    });

    setErrors(
      validaciones({
        ...activities,
        [e.target.name]: e.target.value,
      })
    );
  }

  return (
    <>
      <Header />
      <div className="contenedor__total">
        <form onSubmit={handleSubmit} className="formulario">
          <h1 className="creacion">CREACION DE ACTIVIDAD</h1>
          <label className="nombre">Campos con {"(*)"} son obligatorios</label>
          <label className="nombre">{"(*)"}Nombre:</label>
          <input
            type="text"
            name="name"
            value={activities.name}
            onChange={handleInputChange}
            placeholder="Nombre"
            className={errors.name ? "input__name__error" : "input__name"}
          ></input>
          {errors.name && <p className="danger">{errors.name}</p>}
          <label className="duracion">{"(*)"}Duracion:</label>
          <select
            name="duracion"
            onChange={handleDuracion}
            className={errors.duracion ? "input__name__error" : "input__name"}
          >
            <option></option>
            <option value="1">1 Hora</option>
            <option value="2">2 Horas</option>
            <option value="3">3 Horas</option>
            <option value="4">4 Horas</option>
            <option value="5">5 Horas</option>
            <option value="6">6 Horas</option>
            <option value="7">7 Horas</option>
            <option value="8">8 Horas</option>
            <option value="9">9 Horas</option>
            <option value="10">10 Horas</option>
            <option value="11">11 Horas</option>
            <option value="12">12 Horas</option>
          </select>
          {errors.duracion && <p className="danger">{errors.duracion}</p>}
          <label className="dificultad">{"(*)"}Dificultad:</label>

          <input
            type="range"
            name="dificultad"
            id="dificultad"
            min="1"
            max="5"
            step="1"
            onChange={handleDificultad}
          ></input>
          {errors.dificultad && <p className="danger">{errors.dificultad}</p>}
          <label className="temporada">{"(*)"}Temporada</label>
          <select
            name="temporada"
            onChange={handleTemporada}
            className={errors.temporada ? "input__name__error" : "input__name"}
          >
            <option></option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
          {errors.temporada && <p className="danger">{errors.temporada}</p>}
          <label className="pais">{"(*)"}Codigo de pais:</label>
          <select
            name="countries"
            onChange={(e) => addPais(e)}
            value=""
            className={errors.countries ? "input__name__error" : "input__name"}
          >
            <option value="">Selecciona uno:</option>

            {countriesFiltro.map((e) => {
              return (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              );
            })}
          </select>
          {errors.countries && <p className="danger">{errors.countries}</p>}
          <div className="caja__paises">
            <h2>Seleccionados:</h2>
            <div>
              {activities.countries
                ? countriesFiltro.map((e) => {
                    if (activities.countries.includes(e.id.toString())) {
                      return (
                        <div key={e.id} className="pais__seleccionado">
                          <button
                            value={e.id}
                            name="countries"
                            onClick={deleteCountry}
                            className="boton_delete"
                          >
                            ×
                          </button>
                          <p className="p_nombre">{e.name}</p>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })
                : []}
            </div>
          </div>

          <button
            className={
              errors.name ||
              errors.temporada ||
              errors.dificultad ||
              errors.duracion ||
              errors.countries
                ? "deshabilitado"
                : "boton__creacion"
            }
            onClick={() => dispatch(createActivity(activities))}
          >
            <h1>Crear</h1>
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
