import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import Landing from "./pages/Landing";
import uLogin from "./pages/auth/userLogin";
import uRegister from "./pages/auth/userRegister";
import nLogin from "./pages/auth/ngoLogin";
import nRegister from "./pages/auth/ngoRegister";
import DonationCart from "./pages/donation/DonationCart";
import DonationPage from "./pages/donation/Donation";
import UserProfile from "./pages/profile/userProfile.js";
import DonationProgress from "./pages/donation/donationProgress";

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
          <Route exact path="/user/profile" component={UserProfile} />
          <Route exact path="/user/donates" component={DonationProgress} />
        </div>
      </Router>
    );
  }
}

export default App;
