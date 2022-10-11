import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logot.png";
import "./header.css";
import SearchBar from "../SearchBar/SearchBar";
export default function Footer() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>
      <div>
        <nav>
          <ul className="nav__ul">
            <li>
              <Link to="/home" className="link__head">
                <h1>INICIO</h1>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}
