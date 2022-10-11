import React from "react";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/ig.png";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__creado">Creado por: Andrés Romero</div>
      <div className="contenedor_iconos">
        <a href="https://www.linkedin.com/in/andr%C3%A9s-romero-b4a7b51b4/">
          <img src={linkedin} alt="" className="footer__ig" />
        </a>
        <a href="https://www.instagram.com/andresrh29/">
          <img src={instagram} alt="" className="footer__linked" />{" "}
        </a>
      </div>
    </div>
  );
}
