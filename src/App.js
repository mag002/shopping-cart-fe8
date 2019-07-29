import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllProduct from "./pages/AllProduct/AllProduct";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import NoMatch from "./pages/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={AllProduct} />
          <Route path="/product/:idsanpham" component={ProductDetail} />
          <Route path="/product" component={AllProduct} />
          <Route path="/cart" component={Cart} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
