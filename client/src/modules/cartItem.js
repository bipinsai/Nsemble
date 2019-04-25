import React from "react";
import axios from "axios";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.values
    };
  }

  deleteCartItem = e => {
    e.preventDefault();
    let id = this.state.value._id;
    axios
      .delete("http://172.16.48.86:5000/user/cart/", { data: { _id: id } })
      .then(res => {
        console.log("\n\n\nhellooo", res.data, "\n\n\n");
        window.location.reload();
      })
      .catch(err => {
        if (err) throw err;
        window.location.reload();
      });
  };

  render() {
    return (
      <div className="col-md-4 mb-5">
        <div className="card h-100">
          <div className="card-body">
            <h2 className="card-title">{this.state.value.itemType}</h2>
            <p className="card-text">{this.state.value.condition}</p>
            <p className="card-text">{this.state.value.otherItems}</p>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-danger btn-sm"
              onClick={this.deleteCartItem}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <br />
          <button className="btn btn-success">DONATE!</button>
        </div>
      </div>
    );
  }
}

export default CartItem;
