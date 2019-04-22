import React from "react";
import Navbar from "../../modules/Navbar";
import "../pageStyles/userProfile.css";

class UserProfile extends React.Component {
  render() {
    return (
      <div style={{ border: "2px solid black" }}>
        <Navbar />
        <div class="container">
          <div class="row profile">
            <div class="col-md-4">
              <div class="profile-sidebar">
                <div class="profile-userpic">
                  <img
                    src="https://static.change.org/profile-img/default-user-profile.svg"
                    class="img-responsive"
                    alt=""
                  />
                </div>
                <div class="profile-usertitle">
                  <div class="profile-usertitle-name">*User Name*</div>
                  <div class="profile-usertitle-job">*User Type*</div>
                </div>
                <div class="profile-userbuttons">
                  <button type="button" class="btn btn-success btn-sm">
                    Follow
                  </button>
                  <button type="button" class="btn btn-danger btn-sm">
                    Message
                  </button>
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
            <div id="message">
              <div class="col-md-9">
                <div class="profile-content">
                  <div class="cities" id="bon">
                    <h3> Bio: </h3>
                    <p>*insert bio*</p>
                  </div>
                  <div class="cities" id="don">
                    <h3> Donation 1:</h3>
                    <p>
                      <h6>NGO: Child and Social Welfare Association</h6>
                      <h6>Donated: </h6>
                      <ul>
                        <li>1Kg Rice</li>
                        <li>2 T-shirts</li>
                      </ul>
                    </p>
                  </div>
                  <div class="cities">
                    <h3> Donation 2:</h3>
                    <p>
                      <h6>NGO: Indian Rural Medical Association</h6>
                      <h6>Donated: </h6>
                      <ul>
                        <li>4 Shorts</li>
                        <li>3 bedsheets</li>
                      </ul>
                    </p>
                  </div>
                  <div class="cities">
                    <h3> Donation 3:</h3>
                    <p>
                      <h6>NGO: Humanity Association</h6>
                      <h6>Donated: </h6>
                      <ul>
                        <li>3 Toothpastes</li>
                        <li>6 Towels</li>
                      </ul>
                    </p>
                  </div>
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
