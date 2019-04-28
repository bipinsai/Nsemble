import React from "react";
import axios from "axios";
import "./style2.css";
import $ from "jquery";

class dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      ngos: "",
      NSemblers: "",
      donations: "",
      result: []
    };
  }
  NGOList = e => {
    console.log("Inside NGOlist", this.state.result);
    if (this.state.result.length === 0) return <h3>No Ngos to display :(</h3>;
    else {
      return this.state.result.map((ngo, index) => {
        if (ngo.isNgo === true) {
          return (
            <React.Fragment>
              <div class="col-lg-4 col-md-4 col-6" key={index}>
                <img class="img-fluid img-thumbnail" src={ngo.logo} alt="" />
                <a href={`${"/ngo/profile/" + ngo._id}`}>
                  <h3>{ngo.name}</h3>
                </a>
              </div>
            </React.Fragment>
          );
        } else {
          return <p key={index} />;
        }
      });
    }
  };
  componentDidMount() {
    axios
      .get("/admin/dashboard")
      .then(res => {
        this.setState({ ngos: res.data.ngos });
        this.setState({ NSemblers: res.data.nSemblers });
        this.setState({ donations: res.data.donationSum });
        this.setState({ result: res.data.result });
      })
      .catch(err => {
        console.log(err);
      });
    $(document).ready(function() {
      var adjustSidebar = function() {
        $(".sidebar").scroll({
          height:
            document.documentElement.clientHeight - $(".navbar").outerHeight()
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

    console.log(this.state.result);
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <button class="navbar-toggler sideMenuToggler" type="button">
            <span class="navbar-toggler-icon" />
          </button>
          <a class="navbar-brand" href="/">
            NSemble
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
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
        <div class="wrapper d-flex" />
        <div class="content">
          <main>
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-4 my-3">
                  <div
                    class="bg-mattBlackLight p-3"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    <h4 class="mb-2">Total NGO's</h4>
                    <div
                      class="progress-bar"
                      style={{ width: this.state.ngos * 8 }}
                    >
                      <h3>{this.state.ngos}</h3>{" "}
                    </div>
                  </div>
                </div>
                <div class="col-md-4 my-3">
                  <div
                    class="bg-mattBlackLight p-3"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    <h4 class="mb-2">Total NSemblers</h4>
                    <div
                      class="progress-bar"
                      style={{ width: this.state.NSemblers * 7 }}
                    >
                      <h3>{this.state.NSemblers}</h3>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 my-3">
                  <div
                    class="bg-mattBlackLight p-3"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    <h4 class="mb-2">Total Donations</h4>
                    <div
                      class="progress-bar"
                      style={{ width: this.state.donations * 7 }}
                    >
                      <h3>{this.state.donations}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container">
                {/* <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Thumbnail Gallery</h1> */}

                <hr class="mt-2 mb-5" />

                {/* {this.state.result.map(result=>{
      return(
        <div class="col-lg-3 col-md-4 col-6">
      
            <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
          
        </div>
      )
    })} */}
                <div>
                  <h1 style={{ color: "black" }}>NGO's</h1>
                </div>
                <br />
                <div class="row text-center text-lg-left">
                  <this.NGOList />
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
