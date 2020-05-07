import React from "react";
import "./App.css";
import Home from "./component/Screen/Home";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <Home />
      </Route>
    </BrowserRouter>
  );
}

export default App;
