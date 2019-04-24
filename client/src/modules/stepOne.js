import React, { Component } from "react";
import { isUndefined } from "util";

class DonationForm extends Component {
  state = {
    itemType: "clothes",
    otherItems: "",
    condition: "0"
  };

  obj = {};

  updateObj() {
    this.obj = this.props.obj;
  }

  addToCart = event => {
    event.preventDefault();
    this.setState({ itemType: event.target[0].value }, this.updateObj);
    this.setState({ otherItems: event.target[1].value }, this.updateObj);
    this.setState({ condition: event.target[2].value }, this.updateObj);
  };

  render() {
    return (
      <form onSubmit={this.addToCart}>
        <div class="form-group">
          <label>
            What are you donating?
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
          </label>
        </div>
        <div class="form-group">
          <label>
            Other:
            <textarea
              id="other"
              name="other"
              cols="40"
              rows="2"
              class="form-control"
            />
          </label>
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
        <div class="form-group">
          <button name="submit" type="submit" class="btn btn-primary">
            Add to cart
          </button>
        </div>
      </form>
    );
  }
}

export default DonationForm;
