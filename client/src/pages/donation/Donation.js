import React from "react";
import Carousel from "../../modules/carousel";
import DonationForm from "../../modules/formDonation";
import Navbar from "../../modules/Navbar";
import "../pageStyles/donationPage.css";
import Axios from "axios";

class DonationPage extends React.Component {
  componentDidMount() {
    Axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
    Axios.get("/user/donate")
      .then(res => {
        console.log("authorized");
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.props.history.push("/user/login");
        }
      });
    // localStorage.removeItem('jwtToken');
  }

  render() {
    return (
      <div>
        <Navbar />
        <div class="jumbotron container">
          {/* <Carousel /> */}
          <h1>Donate Something Today!</h1>
        </div>
        <DonationForm history={this.props.history} />
      </div>
    );
  }
}

export default DonationPage;
