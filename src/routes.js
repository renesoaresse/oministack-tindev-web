import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/home/:id" component={Home} />
    </BrowserRouter>
  );
}
