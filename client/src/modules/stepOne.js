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
      <div></div>
    );
  }
}

export default DonationForm;
