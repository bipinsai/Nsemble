import React from "react";
import Navbar from "../../modules/Navbar";
import Stepper from "bs-stepper";
import "../pageStyles/donationPage.css";
import "../pageStyles/donationProgress.css";

class DonationProgress extends React.Component {
  componentDidMount() {
    this.stepper1 = new Stepper(document.querySelector("#stepper1"), {
      animation: true
    });
  }

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
                  <form>
                    <div class="form-group">
                      <label for="items">What are you donating?</label>
                      <div>
                        <select
                          id="items"
                          name="items"
                          aria-describedby="itemsHelpBlock"
                          class="custom-select"
                        >
                          <option value="clothes">Clothes</option>
                          <option value="food">Food</option>
                          <option value="other">Other</option>
                        </select>
                        <span id="itemsHelpBlock" class="form-text text-muted">
                          If other, specify
                        </span>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="other">Other:</label>
                      <textarea
                        id="other"
                        name="other"
                        cols="40"
                        rows="2"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label>Condition</label>
                      <div>
                        <div class="custom-controls-stacked">
                          <div class="custom-control custom-radio">
                            <input
                              name="condition"
                              id="condition_0"
                              type="radio"
                              aria-describedby="conditionHelpBlock"
                              class="custom-control-input"
                              value="new"
                            />
                            <label
                              for="condition_0"
                              class="custom-control-label"
                            >
                              Newly Bought
                            </label>
                          </div>
                        </div>
                        <div class="custom-controls-stacked">
                          <div class="custom-control custom-radio">
                            <input
                              name="condition"
                              id="condition_1"
                              type="radio"
                              aria-describedby="conditionHelpBlock"
                              class="custom-control-input"
                              value="used"
                            />
                            <label
                              for="condition_1"
                              class="custom-control-label"
                            >
                              Used
                            </label>
                          </div>
                        </div>
                        <div class="custom-controls-stacked">
                          <div class="custom-control custom-radio">
                            <input
                              name="condition"
                              id="condition_2"
                              type="radio"
                              aria-describedby="conditionHelpBlock"
                              class="custom-control-input"
                              value="old"
                            />
                            <label
                              for="condition_2"
                              class="custom-control-label"
                            >
                              Old
                            </label>
                          </div>
                        </div>
                        <span
                          id="conditionHelpBlock"
                          class="form-text text-muted"
                        >
                          What is the condition of your items?
                        </span>
                      </div>
                    </div>
                    <div class="form-group">
                      <button
                        name="submit"
                        type="submit"
                        class="btn btn-primary"
                      >
                        Add to cart
                      </button>
                    </div>
                  </form>
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
