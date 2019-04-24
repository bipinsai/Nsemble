import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import Landing from "./pages/Landing";
import nLogin from "./pages/auth/ngoLogin";
import nRegister from "./pages/auth/ngoRegister";
import DonationCart from "./pages/donation/DonationCart";
import DonationPage from "./pages/donation/Donation";
import UserProfile from "./pages/profile/userProfile.js";
import DonationProgress from "./pages/donation/donationProgress";
import Welcome from "./pages/Welcome.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/:name/login" component={nLogin} />
          <Route path="/:name/register" component={nRegister} />
          <Route exact path="/user/donate" component={DonationPage} />
          <Route exact path="/:name/profile" component={UserProfile} />
          <Route exact path="/user/donates" component={DonationProgress} />
          <Route exact path="/user/welcome" component={Welcome} />
        </div>
      </Router>
    );
  }
}

export default App;
