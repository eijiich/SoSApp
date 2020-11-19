import "./App.css";
import React from "react";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import FooterUI from "./Componentes/FooterUI";
import StickyFooter from "./Componentes/StickyFooter";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CourseView from "./Views/Course";
import LoginView from "./Views/Login";
import CartView from "./Views/Cart";

function App() {
  return (
    <Router>
      <Header />
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
        <Route path="/curso"></Route>
      </Switch>
      <StickyFooter />
    </Router>
    
  );
}

export default App;
