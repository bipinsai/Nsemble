import React from "react";
import Navbar from "../../modules/Navbar";
import "../pageStyles/userProfile.css";
import axios from "axios";
import { Link } from "react-router-dom";

class UserProfile extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      donation: [],
      logo: ""
    };
  }

  DonationList = e => {
    if (this.state.donation.length === 0) {
      return (
        <div className="container" style={{ margin: "auto" }}>
          <h2 style={{ color: "red" }}>No donations yet!</h2>
        </div>
      );
    } else {
      return this.state.donation.map((donation, index) => {
        return (
          <div className="cities" id="don">
            <h4> Donation {index + 1}:</h4>
            <b>
              <h6>{donation.itemType.toUpperCase()}</h6>
            </b>
            <h6>{donation.otherItems}</h6>
            <h6>Condition : {donation.condition}</h6>
          </div>
        );
      });
    }
  };
  componentDidMount() {
    /**  Get JWT token for verfication */

    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );

    /** Perform a get request to get the required data */
    axios
      .get("http://localhost:5000/user/profile")
      .then(res => {
        console.log(res.data);
        this.setState({ username: res.data.name });
        this.setState({ donation: res.data.donation });
        this.setState({ logo: res.data.logo });
      })
      .catch(err => {
        console.log(err.response.status);
        if (err.response.status === 401) this.props.history.push("/user/login");
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row profile">
            <div className="col-md-4">
              <div className="profile-sidebar">
                <div
                  className="profile-userpic"
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <img
                    src={`${this.state.logo}`}
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="profile-usertitle">
                  <div
                    className="profile-usertitle-name"
                    style={{ color: "black" }}
                  >
                    <h3>{this.state.username}</h3>
                  </div>
                </div>
                <div
                  className="profile-userbuttons"
                  style={{ marginTop: "5%" }}
                >
                  <Link to="/user/donate">
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      style={{ fontSize: "14px" }}
                    >
                      Donate
                    </button>
                  </Link>
                </div>
                <div className="profile-usermenu">
                  <ul className="nav">
                    <li className="active">
                      <a href="#don">
                        <i className="glyphicon glyphicon-ok" />
                        My Donations
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="message" style={{ width: "60%" }}>
              <div className="col-md-12">
                <div className="profile-content">
                  <this.DonationList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserProfile;
