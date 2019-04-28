import React from "react";
import Navbar from "../modules/Navbar";
// import "../pageStyles/userProfile.css";
import axios from "axios";

class NgoProfile extends React.Component {
  constructor() {
    super();

    this.state = {
      ngos: []
    };
  }

  componentDidMount() {
    /**  Get JWT token for verfication */

    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
    console.log("hellllooooo", this.props.match.params.id);
    /** Check if path name is user or ngo */
    /** Perform a get request to get the required data */
    /** Set state values as required */

    const URL = "/user/welcome/";
    axios
      .get(URL)
      .then(res => {
        console.log(res.data);
        this.setState({ ngos: res.data });
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
        <div class="container">
          <h1 class="my-4" style={{ color: "black" }}>
            NGO's We Work With
          </h1>

          <div class="row">
            {this.state.ngos.map(ngo => {
              return (
                <div class="col-lg-4 col-sm-6 mb-4">
                  <div class="card h-100">
                    <a href={`${"/ngo/profile/" + ngo._id}`}>
                      <img class="card-img-top" src={`${ngo.logo}`} alt="" />
                    </a>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href={`${"/ngo/profile/" + ngo._id}`}>{`${
                          ngo.name
                        }`}</a>
                      </h4>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet numquam aspernatur eum quasi sapiente
                        nesciunt? Voluptatibus sit, repellat sequi itaque
                        deserunt, dolores in, nesciunt, illum tempora ex quae?
                        Nihil, dolorem!
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div class="col-lg-4 col-sm-6 mb-4">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">Project Six</a>
                  </h4>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default NgoProfile;
