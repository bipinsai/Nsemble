import React from "react";
import axios from "axios";
import "./style2.css";
import $ from 'jquery';

class dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      ngos: "",
      NSemblers: "",
      donations: "",
    };
  }

  componentDidMount(){
      axios.get("http://172.16.48.86:5000/admin/dashboard")
        .then(res=>{
          this.setState({ngos : res.data.ngos});
          this.setState({NSemblers : res.data.nSemblers});
          this.setState({donations : res.data.donationSum});
        })
        .catch(err=>{
            console.log(err);
        })
        $(document).ready(function () {
            var adjustSidebar = function () {
              $(".sidebar").scroll({
                height:document.documentElement.clientHeight - $(".navbar").outerHeight()
              });
            };
          
            adjustSidebar();
          
            // $(window).Resize(function () {
            //   adjustSidebar();
            // })
          
            $(".sideMenuToggler").on("click", function() {
              $(".wrapper").toggleClass("active");
            });
          });
  }

  render() {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <button class="navbar-toggler sideMenuToggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
  <a class="navbar-brand" href="/">NSemble</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

{/* <!--  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          FrontEndFunn
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>--> */}
</nav>
<div class="wrapper d-flex">
  </div>
  <div class="content">
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 my-3">
            <div class="bg-mattBlackLight p-3" style={{textAlign:'center',color:"white"}}>
              <h4 class="mb-2">Total NGO's</h4>
              <div class="progress-bar" style={{width:(this.state.ngos)*8}}><h3>{this.state.ngos}</h3> </div>
            </div>
          </div>
          <div class="col-md-4 my-3">
            <div class="bg-mattBlackLight p-3" style={{textAlign:'center',color:"white"}}>
              <h4 class="mb-2">Total NSemblers</h4>
              <div class="progress-bar" style={{width:(this.state.NSemblers)*7}}><h3>{this.state.NSemblers}</h3></div>
            </div>
          </div>
          <div class="col-md-4 my-3">
            <div class="bg-mattBlackLight p-3" style={{textAlign:'center',color:"white"}}>
              <h4 class="mb-2">Total Donations</h4>
              <div class="progress-bar" style={{width:(this.state.donations)*7}}><h3>{this.state.donations}</h3></div>
            </div>
          </div>
          </div>
          <div class="row">
            <div class="col-md-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div class="col-md-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
        </main>
        </div>
        </div>
    );
  }
}

export default dashboard;
