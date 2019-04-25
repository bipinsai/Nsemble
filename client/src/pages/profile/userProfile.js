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
      donation:[]
    };
  }

  componentDidMount() {
    /**  Get JWT token for verfication */

    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );

    /** Perform a get request to get the required data */
      axios.get("http://172.16.48.86:5000/user/profile")
      .then((res)=>{
        console.log(res.data);
        this.setState({username : res.data.name});
        this.setState({donation : res.data.donation})
      })
      .catch(err=>{
        console.log(err.response.status);
        if(err.response.status === 401)this.props.history.push("/user/login");
      })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div class="container">
          <div class="row profile">
            <div class="col-md-4">
              <div class="profile-sidebar">
                <div class="profile-userpic" style={{display:'flex',justifyContent:'space-around'}}>
                  <img
                    src="https://static.change.org/profile-img/default-user-profile.svg"
                    class="img-responsive"
                    alt=""
                  />
                </div>
                <div class="profile-usertitle">
                  <div class="profile-usertitle-name" style={{color:'black'}}><h3>{this.state.username}</h3></div>
                </div>
                <div class="profile-userbuttons" style={{marginTop:'5%'}}>
                  <Link to='/user/update'>
                    <button type="button" class="btn btn-success btn-sm" style={{marginRight:'5%',fontSize:'14px'}}>
                      Update
                    </button>
                  </Link>
                  <Link to='/user/donate'>
                    <button type="button" class="btn btn-danger btn-sm" style={{fontSize:'14px'}}>
                      Donate
                    </button>
                  </Link>
                </div>
                <div class="profile-usermenu">
                  <ul class="nav">
                    <li class="active">
                      <a href="#bon">
                        <i class="glyphicon glyphicon-home" />
                        My Bio
                      </a>
                    </li>
                    <li>
                      <a href="#don">
                        <i class="glyphicon glyphicon-ok" />
                        My Donations
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="message" style={{width:'60%'}}>
              <div class="col-md-12">
                <div class="profile-content">
                  <div class="cities" id="bon">
                    <h3> Bio: </h3>
                    <p>I am a </p>
                  </div>
                  {this.state.donation.map((donation,index)=>{
                    return(
                      <div class="cities" id="don">
                          <h4> Donation {index+1}:</h4>
                            <b><h6>{donation.itemType.toUpperCase()}</h6></b>
                            <h6>{donation.otherItems}</h6>
                            <h6>Condition : {donation.condition}</h6>
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default UserProfile;
