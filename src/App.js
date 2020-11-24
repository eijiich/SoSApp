import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Curso from './Componentes/Curso';

import LoginView from "./Views/Login";
import CartView from "./Views/Cart";
import Conteudo from "./Componentes/Conteudo";
import Cadastrar from "./Componentes/Cadastrar";
import Main from "./Views/Main";
import Admin from "./Views/Admin";
import Pagamento from "./Views/Pagamento";

function App() {
  return (
    <Router>
      <Header />
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
            <Admin />
          </main>
        </Route>

        <Route path="/carrinho">
          <main>
            <CartView />
          </main>
        </Route>

        <Route path="/pagamento">
          <main>
            <Pagamento />
          </main>
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
