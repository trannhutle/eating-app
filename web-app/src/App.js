import React from "react";
import FoodDetail from "./components/pages/FoodDetail";
import Checkout from "./components/pages/Checkout";
import Home from "./components/pages/Home";
import Tables from "./components/pages/Tables";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact={true} path="/" component={Tables} />
      {/* <Route exact={true} path="/" component={Home} />
      <Route path="/cat/:catId" component={Home} />
      <Route path="/product/:productId" component={FoodDetail} />
      <Route path="/checkout" component={Checkout} /> */}
    </Router>
  );
}
export default App;
