import React from "react";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Ideas from "./pages/Ideas/Ideas";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Feedback from "./pages/Feedback/Feedback";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/ideas">
            <Ideas />
          </Route>
          <Route exact path="/feedback">
            <Feedback />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
