import React from "react";
import axios from "axios";
import "./pageStyles/welcome.css";

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: []
    };
  }

  componentDidMount(){
      
  }

  render() {
    return (
        <div className="container">

            <div className="row">

                <div className="col-lg-3">
                    <h1 className="my-4"> Donate </h1>
                    <div className="list-group">
                        <a href="#" className="list-group-item">Go to Donation Page</a>
                    </div>
                </div>

                <div className="col-lg-9">

                    <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src="https://image.flaticon.com/icons/png/256/27/27538.png" alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                        </a>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">NGO 1</a>
                                </h4>
                                <p className="card-text">Click To View the Profile </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">NGO 2</a>
                                </h4>
                            
                                <p className="card-text">Click To View the Profile</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">NGO 3</a>
                                </h4>
                            
                                <p className="card-text">Click To View the Profile</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">NGO 4</a>
                                </h4>
                            
                                <p className="card-text">Click To View the Profile</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">NGO 6</a>
                                </h4>
                            
                                <p className="card-text">Click To View the Profile</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                <a href="#">NGO 6</a>
                                </h4>
                            
                                <p className="card-text">Click To View the Profile</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                            </div>
                        </div>

                    </div>
        
                </div>
    
            </div>

        </div>
        // <!-- /.container -->
    );
  }
}

export default Welcome;
