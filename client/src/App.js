import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import Landing from "./pages/Landing";
// import uLogin from "./pages/auth/userLogin";
// import uRegister from "./pages/auth/userRegister";
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
          <Route path="/login/:name" component={nLogin} />
          <Route path="/register/:name" component={nRegister} />
          <Route exact path="/profile/user/donate" component={DonationPage} />
          <Route exact path="/profile/user" component={UserProfile} />
          <Route exact path="/profile/user/donates" component={DonationProgress} />
        </div>
      </Router>
    );
  }
}

export default App;
