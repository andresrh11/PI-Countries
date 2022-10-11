import React, { useState } from "react";

import "./paginado.css";
export default function Paginado({
  paginitas,
  paisesPorPagina,
  paginacion,
  setPaginaActual,
  paginaActual,
  setPaisesPorPagina,
}) {
  const [maxPages, setMaxPages] = useState(6);
  const [pages, setPages] = useState(6);
  const [minPages, setMinPages] = useState(0);
  const numerosPag = [];
  for (let i = 0; i <= Math.ceil(paginitas / paisesPorPagina) - 1; i++) {
    numerosPag.push(i + 1);
  }

  function handleNext() {
    if (paginaActual !== numerosPag.length) {
      setPaginaActual(paginaActual + 1);
    }
    if (paginaActual + 1 > maxPages) {
      setMaxPages(maxPages + pages);
      setMinPages(minPages + pages);
    }
  }
  if (paginaActual === 1) setPaisesPorPagina(9);
  else if (paginaActual !== 1) setPaisesPorPagina(10);

  function handlePrev() {
    if (paginaActual !== 1) {
      setPaginaActual(paginaActual - 1);
    }
    if ((paginaActual - 1) % pages === 0) {
      setMaxPages(maxPages - pages);
      setMinPages(minPages - pages);
    }
  }
  if (paginaActual !== 1) setPaisesPorPagina(10);
  else setPaisesPorPagina(9);
  return (
    <nav>
      <ul className="paginado">
        <button
          className={paginaActual === 1 ? "boton__off" : "boton__on"}
          onClick={handlePrev}
        >
          <h1>‹</h1>
        </button>
        {numerosPag &&
          numerosPag.map((e) => {
            if (e < maxPages + 1 && e > minPages) {
              return (
                <li className="paginado__numeros" key={e}>
                  <span
                    className={paginaActual === e ? "numeros" : "num__off"}
                    onClick={() => paginacion(e)}
                  >
                    {e}
                  </span>
                </li>
              );
            } else {
              return null;
            }
          })}
        <button
          className={
            paginaActual === numerosPag.length ? "boton__off" : "boton__on"
          }
          onClick={handleNext}
        >
          ›
        </button>
      </ul>
    </nav>
  );
}
