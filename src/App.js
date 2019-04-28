import React from "react";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import "./App.css";
import Login from "./screens/Login";
import Register from "./screens/Register";
function App() {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-sm-8 col-sm-offset-2">
          <Router history={createBrowserHistory()}>
            <div>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
