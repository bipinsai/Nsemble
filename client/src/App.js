import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import Landing from "./pages/Landing";
import uLogin from "./pages/auth/userLogin";
import uRegister from "./pages/auth/userRegister";
import nLogin from "./pages/auth/ngoLogin";
import nRegister from "./pages/auth/ngoRegister";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/api/user/login" component={uLogin} />
          <Route exact path="/api/user/register" component={uRegister} />
          <Route exact path="/api/ngo/login" component={nLogin} />
          <Route exact path="/api/ngo/register" component={nRegister} />
        </div>
      </Router>
    );
  }
}

export default App;
