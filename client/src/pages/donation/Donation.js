import React from "react";
import Carousel from "../../modules/carousel";
import DonationForm from "../../modules/formDonation";
import Navbar from "../../modules/Navbar";
import "../pageStyles/donationPage.css";

class DonationPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="jumbotron">
          <Carousel />
        </div>
        <DonationForm />
      </div>
    );
  }
}

export default DonationPage;
