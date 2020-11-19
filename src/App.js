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
import Tabela from "./Componentes/Tabela";

function App() {
  return (
    <Router>
      <Header1 />
          <Typography variant="h2" color="textSecondary" component="p">
                    F12
          </Typography>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/login">
          <main>
            <LoginView />
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
        <Route path="/cursos">
          <main>
            <Tabela />
          </main>
        </Route>
      </Switch>
      <Footer1 />
    </Router>
    
  );
}

export default App;
