import "./App.css";
import React from "react";
import Header from "./Componentes/Header";
import Header1 from "./Componentes/Header1";
import Footer1 from "./Componentes/Footer1";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import CourseView from "./Views/Course";
import LoginView from "./Views/Login";
import CartView from "./Views/Cart";
import Conteudo from "./Componentes/Conteudo";
import Cadastrar from "./Componentes/Cadastrar";
import Main from "./Views/Main";

import Curso from './Componentes/Curso'

function App() {
  return (
    <Router>
      <Header1 />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/cursos" render={(props) => <Conteudo {...props} />} />

        <Route
          exact
          path="/cursos/:cursoId"
          render={(props) => <Curso {...props} />}
        />

        <Route path="/login">
          <main>
            <LoginView />
          </main>
        </Route>
        <Route path="/cadastrar">
          <main>
            <Cadastrar />
          </main>
        </Route>
        <Route path="/admin">
          <main>
            <h1>admin</h1>
          </main>
        </Route>
        <Route path="/carrinho">
          <main>
            <CartView />
          </main>
        </Route>

      </Switch>
      <Footer1 />
    </Router>

  );
}

export default App;
