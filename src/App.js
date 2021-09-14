import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
      </header>
    </div>
  );
}

export default App;
