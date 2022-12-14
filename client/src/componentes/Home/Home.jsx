import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";
import Navbar from "../Nav/NavBar";
import Footer from "../Footer/Footer";
import "./home.css";
import FiltroActiv from "../Filtrado/FiltroActiv";

function Home() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [,setOrder] = useState("");
  return (
    <>
      <Header />

      <div>
        <div>
          <Navbar setPaginaActual={setPaginaActual} setOrder={setOrder} />
        </div>
        <div className="home">
          <div className="activities__home">
            <FiltroActiv setPaginaActual={setPaginaActual} />
          </div>
          <div className="div__cards">
            <Cards
              paginaActual={paginaActual}
              setPaginaActual={setPaginaActual}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
