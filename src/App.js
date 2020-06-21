import React from "react";
import Logo from "./components/ui/Logo/Logo";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Ideas from "./pages/Ideas/Ideas";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Feedback from "./pages/Feedback/Feedback";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Logo />
            <Login />
          </Route>
          <Route exact path="/ideas">
            <Header />
            <Ideas />
          </Route>
          <Route exact path="/feedback">
            <Header />
            <Feedback />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
