import React from "react";
import FoodDetailPage from "./components/FoodDetailPage";
import Payment from "./components/Payment";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact={true} path="/" component={Home} />
      <Route path="/product/:productId" component={FoodDetailPage} />
    </Router>
  );
}
// return <FoodDetailPage />;
// return <Payment />;

export default App;
