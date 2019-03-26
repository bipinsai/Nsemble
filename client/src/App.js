import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/api/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
