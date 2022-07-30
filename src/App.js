import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./containers/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
