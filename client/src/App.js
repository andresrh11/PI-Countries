import "./App.css";
import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../src/componentes/Home/Home";
import Landing from "./componentes/Landing/Landing";
import Form from "./componentes/Form/Form";

import Detalle from "./componentes/Detalle/Detalle";

//import Landing from './componentes/Landing/Landing';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/countries/:id">
          <Detalle />
        </Route>
        <Route path="/crear">
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
