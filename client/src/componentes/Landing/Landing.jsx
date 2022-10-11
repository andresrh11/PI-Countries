import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Landing.css";
import Header from "../Header/Header";

function Landing() {
  return (
    <>
      <Header />
      <body className="landingContainer">
        <div className="info">
          <h1 className="h1">E-WORLD</h1>
          <p className="p">¡Bienvenido a E-World!</p>
          <p className="p">
            Tu pagina de confianza, donde podras consultar todo tipo de
            información respecto a tu país de residencia y ademas ayudar a
            quienes visiten la pagina a conocer diferentes tipos de actividades
            turisticas para realizar durante su estadía en la nacion.
          </p>
          <p className="p">¡Gracias por formar parte de la familia E-World!</p>
        </div>
        <div className="contenedor">
          <Link className="link" to="/home">
            <button className="boton">
              <h1 className="go">Go!</h1>
            </button>{" "}
          </Link>
        </div>
      </body>
      <footer className="footers">
        <Footer />
      </footer>
    </>
  );
}
export default Landing;
