import React from "react";
import axios from "axios";
import NavBar from "../../modules/Navbar";
import CartItem from "../../modules/cartItem";

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
      .post("http://localhost:5000/user/donated", {
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

  Greeting = props => {
    if (this.state.arr.length === 0) {
      return <h1>Cart is empty</h1>;
    }
    return (
      <React.Fragment>
        <ul>
          {this.state.arr.map((tag, index) => (
            <CartItem key={index} values={tag} history={this.props.history} />
          ))}
        </ul>

        <div className="col-md-4 mb-5">
          <br />
          <button className="btn btn-success" onClick={this.donated}>
            DONATE!
          </button>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        <NavBar />
        <div>
          <this.Greeting />
        </div>
      </div>
    );
  }
}

DonationCart.propTypes = {};

export default DonationCart;
