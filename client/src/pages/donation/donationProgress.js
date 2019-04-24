import React from "react";
import Navbar from "../../modules/Navbar";
import Stepper from "bs-stepper";
import DonationForm from "../../modules/stepOne";
import "../pageStyles/donationPage.css";
import "../pageStyles/donationProgress.css";

class DonationProgress extends React.Component {
  componentDidMount() {
    this.stepper1 = new Stepper(document.querySelector("#stepper1"), {
      animation: true
    });
  }

  addToCart() {}

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="col-md-12 mt-5">
            <h2>Linear stepper</h2>
            <div id="stepper1" className="bs-stepper">
              <div className="bs-stepper-header">
                <div className="step" data-target="#test-l-1">
                  <button type="button" className="btn step-trigger">
                    <span className="bs-stepper-circle">1</span>
                    <span className="bs-stepper-label">Add Items to Cart</span>
                  </button>
                </div>
                <div className="line" />
                <div className="step" data-target="#test-l-2">
                  <button type="button" className="btn step-trigger">
                    <span className="bs-stepper-circle">2</span>
                    <span className="bs-stepper-label">Check your cart</span>
                  </button>
                </div>
                <div className="line" />
                <div className="step" data-target="#test-l-3">
                  <button type="button" className="btn step-trigger">
                    <span className="bs-stepper-circle">3</span>
                    <span className="bs-stepper-label">Donate!</span>
                  </button>
                </div>
              </div>
              <div className="bs-stepper-content">
                <div id="test-l-1" className="content">
                  <DonationForm />
                  <p className="text-center">test 1</p>
                  <button
                    className="btn btn-primary stepped"
                    onClick={() => this.stepper1.next()}
                  >
                    Next
                  </button>
                </div>
                <div id="test-l-2" className="content">
                  <p className="text-center">test 2</p>
                  <button
                    className="btn btn-primary stepped"
                    onClick={() => this.stepper1.previous()}
                  >
                    Previous
                  </button>
                  <button
                    className="btn btn-primary stepped"
                    onClick={() => this.stepper1.next()}
                  >
                    Next
                  </button>
                </div>
                <div id="test-l-3" className="content">
                  <p className="text-center">
                    Cart Ready. Click on submit to donate!
                  </p>

                  <button
                    className="btn btn-primary stepped"
                    onClick={() => this.stepper1.previous()}
                  >
                    Previous
                  </button>
                  <button
                    className="btn btn-success stepped"
                    onClick={() => this.stepper1.submit()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DonationProgress;
