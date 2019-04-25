import React from "react";
import axios from "axios";
import "./pageStyles/welcome.css";
import {Link} from "react-router-dom";

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      ngo:[],
    };
  }

  componentDidMount(){
        /**  Get JWT token for verfication */ 
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

        /** Perform a get request to get the required data */
        /** Set state values as required */
        // localStorage.removeItem("jwtToken");
        axios.get("http://localhost:5000/user/welcome")
            .then((res)=>{
            console.log("hello\n",res.data);
            this.setState({ngo : res.data});
        })
            .catch(err=>{
            console.log(err.response.status);
            if(err.response.status === 401)this.props.history.push("/user/login");
      })
  }

  render() {
    return (
        <div className="container">

            <div className="row">

                <div className="col-lg-3">
                    <h1 className="my-4"> Donate </h1>
                    <div className="list-group">
                        <a href="/user/donates" className="list-group-item">Go to Donation Page</a>
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
                        {this.state.ngo.map(ngo=>{
                            return (
                                <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card h-100">
                                <img className="card-img-top" src={`${ngo.logo}`} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">
                                    <Link to={`'/ngo/profile/'${ngo._id}`}>{ngo.name}</Link>
                                    </h4>
                                    {/* <p className="card-text">Click To View the Profile </p> */}
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                </div>
                                </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        // <!-- /.container -->
    );
  }
}

export default Welcome;
