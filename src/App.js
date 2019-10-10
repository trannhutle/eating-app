import React from "react";
import FoodDetail from "./components/pages/FoodDetail";
import Checkout from "./components/pages/Checkout";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact={true} path="/" component={Home} />
      <Route path="/product/:productId" component={FoodDetail} />
      <Route path="/checkout" component={Checkout} />
    </Router>
  );
}
// return <FoodDetailPage />;
// return <Payment />;

export default App;
