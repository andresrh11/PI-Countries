import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./search.css";
import { searchCountr } from "../../redux/actions";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const countries = useSelector((state) => state.buscarCountry);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = function (e) {
    setSearch(e.target.value);
    if (search) {
      dispatch(searchCountr(search));
    }
  };
  return (
    <div className="search__bar">
      <input
        type="text"
        name="name"
        placeholder="Pais "
        onChange={handleInputChange}
        value={search}
        className="input"
      ></input>
      <div className="lista">
        {search &&
          countries.slice(0, 10).map((e) => {
            return (
              <div key={e.id} className="div__nombre">
                <Link to={`/countries/${e.id}`} className="link">
                  <p className="link__text"> {e.name}</p>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
