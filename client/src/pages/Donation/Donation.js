import React from "react";
import Carousel from "../../modules/carousel";
import DonationForm from "../../modules/formDonation";
import Navbar from "../../modules/Navbar";
import "../PageStyles/donationPage.css";

class DonationPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <DonationForm />
      </div>
    );
  }
}

export default DonationPage;
