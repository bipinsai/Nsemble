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
      .delete("http://localhost:5000/user/cart/", { data: { _id: id } })
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
      <React.Fragment>
        <div className="row">
          <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
            <h4
              className="product-name"
              style={{ textTransform: "capitalize" }}
            >
              <strong>{this.state.value.itemType}</strong>
            </h4>
            <h4>
              <small>{this.state.value.otherItems}</small>
            </h4>
            <h4 style={{ textTransform: "capitalize" }}>
              <small>{this.state.value.condition}</small>
            </h4>
          </div>
          <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
            <div
              className="col-3 col-sm-3 col-md-6 text-md-right"
              style={{ paddingTop: "5px" }}
            />
            <div className="col-4 col-sm-4 col-md-4">
              <div className="quantity" />
            </div>
            <div className="col-2 col-sm-2 col-md-2 text-right">
              <button
                type="button"
                className="btn btn-outline-danger btn-xs"
                onClick={this.deleteCartItem}
              >
                <i className="fa fa-trash" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <hr />
      </React.Fragment>
      //   <div className="col-md-4 mb-5">
      //     <div className="card h-100">
      //       <div className="card-body">
      //         <h2 className="card-title"></h2>
      //         <p className="card-text"></p>
      //         <p className="card-text">{this.state.value.otherItems}</p>
      //       </div>
      //       <div className="card-footer">
      //         <button
      //           className="btn btn-danger btn-sm"
      //           onClick={this.deleteCartItem}
      //         >
      //           Delete
      //         </button>
      //       </div>
      //     </div>
      //   </div>
    );
  }
}

export default CartItem;
