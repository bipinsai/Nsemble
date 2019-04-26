import React from "react";
import axios from "axios";

class DonationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      itemType: "clothes",
      otherItems: "",
      condition: "0"
    };
  }

  updateObj = () => {
    this.obj = this.props.obj;
  };

  setRadio = event => {
    this.setState({ condition: event.target.value });
  };

  setItemType = event => {
    this.setState({ itemType: event.target.value });
  };

  setOtherItems = event => {
    this.setState({ otherItems: event.target.value });
  };

  addToCart = event => {
    event.preventDefault();

    // console.log(this.state);

    const newDonation = this.state;

    axios
      .post("http://localhost:5000/user/donate", newDonation)
      .then(res => {
        console.log("\n\n\nhellooo", res.data, "\n\n\n");
        if (res.data.status === 200) this.props.history.push("/user/cart");
      })
      .catch(err => {
        if (err) throw err;
        window.location.reload();
      });
  };

  goToCart = e => {
    this.props.history.push("/user/cart");
    window.location.reload();
  };

  render() {
    return (
      <div class="container button">
        <form onSubmit={this.addToCart}>
          <div class="form-group">
            <label>What are you donating?</label>
            <div>
              <select
                id="items"
                name="itemType"
                aria-describedby="itemsHelpBlock"
                class="custom-select"
                onChange={this.setItemType}
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
            <label>
              Details:
              <textarea
                id="otherItems"
                name="other"
                cols="40"
                rows="2"
                class="form-control"
                onChange={this.setOtherItems}
              />
            </label>
          </div>
          <div class="form-group">
            <label>Condition</label>
            <div onChange={this.setRadio.bind(this)}>
              <div class="custom-controls-stacked">
                <div class="custom-control custom-radio">
                  <input
                    name="condition"
                    id="condition_0"
                    type="radio"
                    aria-describedby="conditionHelpBlock"
                    class="custom-control-input"
                    value="new"
                    required
                  />
                  <label for="condition_0" class="custom-control-label">
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
                    required
                  />
                  <label for="condition_1" class="custom-control-label">
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
                  <label for="condition_2" class="custom-control-label">
                    Old
                  </label>
                </div>
              </div>
              <span id="conditionHelpBlock" class="form-text text-muted">
                What is the condition of your items?
              </span>
            </div>
          </div>
          <div class="form-group col-sm-6">
            <button
              name="submit"
              type="submit"
              class="btn btn-primary"
              onClick={this.addToCart}
            >
              Add to cart
            </button>
            <button
              name="submit"
              type="submit"
              class="btn btn-primary pull-right"
              onClick={this.goToCart}
            >
              Go to Cart
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DonationForm;
