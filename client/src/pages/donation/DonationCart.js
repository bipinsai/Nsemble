import React from "react";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import NavBar from "../../modules/Navbar";
import CartItem from "../../modules/cartItem";
import "../pageStyles/donationCart.css";

class DonationCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      arr: [],
      id: ""
    };
  }

  mapObject(object, callback) {
    return Object.keys(object).map(function(key) {
      return callback(key, object[key]);
    });
  }

  itemType = [];
  otherItems = [];
  condition = [];

  arr = [];

  log = () => {
    for (const key in this.state.cart) {
      if (this.state.cart.hasOwnProperty(key)) {
        this.arr.push(this.state.cart[key]);
      }
    }

    this.setState({ arr: this.arr });
  };

  componentDidMount() {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
    axios.get("http://172.16.48.86:5000/user/cart").then(res => {
      console.log("Working successfully");
      const carts = res.data.cart;
      this.setState({ id: res.data._id });
      this.setState({ cart: carts }, this.log);
    });
  }

  donated = event => {
    event.preventDefault();
    axios
      .post("http://172.16.48.86:5000/user/donated", {
        arr: this.state.arr,
        id: this.state.id
      })
      .then(res => {
        console.log(res);
        if (res.data.status === 200) this.props.history.push("/user/profile");
        else this.props.history.push("/user");
      })
      .catch(err => {
        if (err) throw err;
        window.location.reload();
      });
  };

  donate = e => {
    this.props.history.push("/user/donate");
    window.location.reload();
  };

  Greeting = props => {
    if (this.state.arr.length === 0) {
      return (
        <React.Fragment>
          <h3 style={{ textAlign: "center", marginTop: "50px" }}>
            Your cart is empty! Please add items to donate and check back again!
          </h3>
          <hr />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <ul>
          {this.state.arr.map((tag, index) => (
            <CartItem key={index} values={tag} history={this.props.history} />
          ))}
        </ul>
      </React.Fragment>
    );
  };

  Checkout = e => {
    if (this.state.arr.length === 0) {
      return (
        <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
          <div className="row">
            <div className="col-6">
              <button
                type="submit"
                className="btn btn-default pull-left"
                onClick={this.donate}
              >
                <i className="fa fa-heart" aria-hidden="true" /> Donate More?
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
            <div className="row">
              <div className="col-6">
                <button
                  type="submit"
                  className="btn btn-default pull-left"
                  onClick={this.donate}
                >
                  <i className="fa fa-heart" aria-hidden="true" /> Donate More?
                </button>
              </div>
            </div>
          </div>
          <div style={{ margin: "10px" }} onClick={this.donated}>
            <button className="btn btn-success pull-right">Checkout</button>
          </div>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <div>
        <NavBar />
        <div>
          <div className="container">
            <div className="card shopping-cart">
              <div className="card-header bg-dark text-light">
                Your Donation Cart
                <div className="clearfix" />
              </div>
              <div className="card-body">
                <this.Greeting />
              </div>
              <div className="card-footer">
                <this.Checkout />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DonationCart.propTypes = {};

export default DonationCart;
