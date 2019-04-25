import React from "react";
import Navbar from "../../modules/Navbar";
// import "../pageStyles/userProfile.css";
import axios from "axios";


class NgoProfile extends React.Component {
  constructor(){
    super();

    this.state={
      username:"",
        website:"",
        logo:"",
        phone:"",
        id:""
    }
  }

  componentDidMount(){
    /**  Get JWT token for verfication */ 
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    console.log("hellllooooo", this.props.match.params.id);
    /** Check if path name is user or ngo */
    /** Perform a get request to get the required data */
    /** Set state values as required */   
    const URL = "http://172.16.48.86:5000/ngo/profile/"+this.props.match.params.id;  
    axios.get(URL)
    .then((res)=>{
        console.log(res.data);
        this.setState({username : res.data.name});
        this.setState({website : res.data.website});
        this.setState({logo : res.data.logo});
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
        {/* <!-- Page Content --> */}
        <div class="container">
            <h1 class="my-4">{this.state.username.toLocaleUpperCase()}</h1>
            <div class="row">
                <div class="col-md-8">
                    <img class="img-fluid" src={`${this.state.logo}`} alt="" />
                </div>
                <div class="col-md-4">
                    <h3 class="my-3">Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
                    <h3 class="my-3">Contact</h3>
                    <ul>
                        <li><b>Email</b> : {this.state.website}</li>
                        <li><b>Phone No</b>:  9786562312</li>
                    </ul>
                </div>
            </div>
            {/* <!-- /.row --> */}
            <div class="row" style={{marginTop:'10%'}}>
                <div class="col-md-3 col-sm-6 mb-4">
                    <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
                </div>
                <div class="col-md-3 col-sm-6 mb-4">
                    <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
                </div>
                <div class="col-md-3 col-sm-6 mb-4">
                    <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
                </div>
                <div class="col-md-3 col-sm-6 mb-4">
                    <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
                </div>
            </div>
            {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
    </div>
    );
  }
}
export default NgoProfile;
