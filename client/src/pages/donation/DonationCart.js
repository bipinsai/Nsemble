import React from "react";
import NavBar from "../../modules/Navbar";
import axios from "axios";
import CartItem from "../../modules/cartItem";

class DonationCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      arr: []
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
      this.setState({ cart: carts }, this.log);
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div>
          <ul>
            {this.state.arr.map((tag, index) => (
              <CartItem key={index} values={tag} history={this.props.history} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

DonationCart.propTypes = {};

export default DonationCart;
