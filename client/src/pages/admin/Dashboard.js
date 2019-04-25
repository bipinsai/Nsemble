import React from "react";
// import axios from "axios";
import "./style2.css";
// import "./style.scss";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: []
    };
  }

  componentDidMount(){
    // $(document).ready(function () {
    //     $(".sideMenuToggler").on("click", function() {
    //       $(".wrapper").toggleClass("active");
    //     });
    //   });
  }

  render() {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        {/* <!--fixed-top--> */}
        <button class="navbar-toggler sideMenuToggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            FrontEndFunn
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/">Action</a>
            <a class="dropdown-item" href="/">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/">Something else here</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <div class="wrapper d-flex">
    <div class="sideMenu">
      <div class="sidebar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="/" class="nav-link">
              <i class="material-icons icon">
                dashboard
              </i>
              <span class="text">Dasboard</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="/" class="nav-link">
              <i class="material-icons icon">
                person
              </i>
              <span class="text">Users</span>
            </a>
          </li>
          {/* <!--<li class="nav-item"> */}
            <a href="/" class="nav-link">
              <i class="material-icons icon">
                insert_chart
              </i>
              <span class="text">Charts</span>
            </a>
          {/* </li>--> */}
          <li class="nav-item">
            <a href="/" class="nav-link">
              <i class="material-icons icon">
                settings
              </i>
              <span class="text">Settings</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="/" class="nav-link">
              <i class="material-icons icon">
                store_mall_directory
              </i>
              <span class="text">NGO's</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="/" class="nav-link">
              <i class="material-icons icon">
                directions_bike
              </i>
              <span class="text">NSemblers</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="/" class="nav-link sideMenuToggler">
              <i class="material-icons icon">
                view_list
              </i>
              <span class="text">Resize</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <main>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4 my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
  
          </div>
  
        </div>
      </main>
    </div>
  </div>
  </div>
    );
  }
}

export default Dashboard;
