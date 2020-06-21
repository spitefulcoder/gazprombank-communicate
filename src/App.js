import React from "react";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Ideas from "./pages/Ideas/Ideas";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux'
import {createStore, bindActionCreators} from 'redux'
import {LOGIN} from './actions'

const initialState = {
  user: {}
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      //console.log('user saved ' + JSON.stringify(action.user))
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

const store = createStore(rootReducer)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/ideas">
              <Ideas />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
