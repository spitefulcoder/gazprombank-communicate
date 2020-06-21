import React from "react";
import Logo from "./components/ui/Logo/Logo";
import "./App.css";
// import CardFull from "./pages/IdeaFull/CardFull.jsx";
import Header from "./components/Header/Header";
import CreateIdea from "./pages/CreateIdea/CreateIdea";
import Login from "./pages/Login/Login";
import Feedback from "./pages/Feedback/Feedback";
import Ideas from "./pages/Ideas/Ideas";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { LOGIN } from "./actions";

const initialState = {
  user: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("user", JSON.stringify(action.user));
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login">
              <Logo />
              <Login />
            </Route>
            <Route exact path="/ideas">
              <Header />
              <Ideas />
            </Route>
            <Route path="/">
              <Header />
              <Ideas />
            </Route>
            <Route exact path="/feedback">
              <Header />
              <Feedback />
            </Route>
            <Route exact path="/createidea">
              <Header />
              <CreateIdea />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
