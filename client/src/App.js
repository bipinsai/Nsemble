import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import Landing from "./pages/Landing";
import nLogin from "./pages/auth/ngoLogin";
import nRegister from "./pages/auth/ngoRegister";
import DonationCart from "./pages/donation/DonationCart";
import DonationPage from "./pages/donation/Donation";
import UserProfile from "./pages/profile/userProfile.js";
import ngoProfile from "./pages/profile/ngoProfile.js";
import Welcome from "./pages/Welcome.js";
import Dashboard from "./pages/admin/Dashboard.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/:name/login" component={nLogin} />
          <Route path="/:name/register" component={nRegister} />
          <Route exact path="/user/donate" component={DonationPage} />
          <Route exact path="/user/profile" component={UserProfile} />
          <Route exact path="/ngo/profile/:id" component={ngoProfile} />
          <Route exact path="/user/donates" component={DonationPage} />
          <Route exact path="/user/welcome" component={Welcome} />
          <Route exact path="/user/cart" component={DonationCart} />
          <Route exact path="/admin/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
