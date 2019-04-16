import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import Landing from "./pages/Landing";
import uLogin from "./pages/auth/userLogin";
import uRegister from "./pages/auth/userRegister";
import nLogin from "./pages/auth/ngoLogin";
import nRegister from "./pages/auth/ngoRegister";
import DonationCart from "./pages/Donation/DonationCart";
import DonationPage from "./pages/Donation/Donation";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/user/login" component={uLogin} /> */}
          {/* <Route exact path="/user/register" component={uRegister} /> */}
          <Route exact path="/ngo/login" component={nLogin} />
          <Route exact path="/ngo/register" component={nRegister} />
          <Route exact path="/user/donate" component={DonationPage} />
        </div>
      </Router>
    );
  }
}

export default App;
