import React from 'react';
import "../PageStyles/Register.css";
import axios from 'axios';

class ngoRegister extends React.Component {
    constructor(){
        super();
        this.state = {
            username:"",
            email:"",
            password:"",
            password2:"",
            errors : [],
        }
    }

<<<<<<< HEAD
    onChange = e =>{
        this.setState({[e.target.name] : e.target.value});
    }
=======
// class Register extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       name:"",
//       email:"",
//       password:"",
//       password2:"",
//       errors : [],
//     }
//   }

//   onChange = e =>{
//     this.setState({[e.target.id]: e.target.value});
//   }

// onSubmit = e =>{
//     e.preventDefault();
>>>>>>> 8dda06e4de606f7bfacbf7a12f81269b678f87b0

    onSubmit = e =>{
        e.preventDefault();
    
        const newUser = {
            username:this.state.username,
            email:this.state.email,
            password:this.state.password,
            password2:this.state.password2,
        }
    
        console.log(newUser);
    
        axios.post("/ngo/register",newUser)
              .then((result) => {
                this.props.history.push('/ngo/login');
              }
            );
      }

    render(){
        return (
            <div id="body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-9 mx-auto">
                            <div className="card card-signin flex-row my-5">
                                <div className="card-img-left d-none d-md-flex"></div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Register</h5>
                                    <form className="form-signin" onSubmit = {this.onSubmit}>
                                        <div className="form-label-group">
                                            <input name="username" onChange={this.onChange} value={this.state.username} type="text" id="username" className="form-control" placeholder="Username" required autofocus />
                                            <label for="username">Username</label>
                                        </div>

<<<<<<< HEAD
                                        <div className="form-label-group">
                                            <input name="email" onChange={this.onChange} value={this.state.email} type="email" id="email" className="form-control" placeholder="Email address" required />
                                            <label for="email">Email address</label>
                                        </div>
                                        
                                        <hr />
=======
//   render() {
//     const { classes } = this.props;
//     return (
//       <div className="container">
//         <form
//           style={{
//               width: "50%",
//               // height: "70%",
//               margin: "0%",
//               paddingTop: "12%",
//               paddingBottom: "16%",
//               paddingLeft: "2%",
//               paddingRight: "0%"
//           }}
//           onSubmit = {this.onSubmit}
//         >
//           <div
//             className={classes.margin}
//             // style={{
//               // width: "50%",
//               // height: "70%",
//               // margin: "0%",
//               // paddingTop: "12%",
//               // paddingBottom: "16%",
//               // paddingLeft: "2%",
//               // paddingRight: "0%"
//               // border: "2px solid green"
//             // }}
//           >
//             <Grid
//               container
//               spacing={10}
//               alignItems="center"
//               justify="center"
//               style={{ marginBottom: "10px" }}
//             >
//               <Grid item>
//                 <Face />
//               </Grid>
//               <Grid
//                 item
//                 md={9}
//                 sm={6}
//                 xs={8}
//                 style={{ paddingLeft: "2%", paddingRight: "2%" }}
//               >
//                 <TextField
//                   id="name"
//                   label="Name"
//                   value = {this.state.name}
//                   onChange = {this.onChange}
//                   fullWidth
//                   autoFocus
//                   required
//                 />
//               </Grid>
//             </Grid>
//             <Grid
//               container
//               spacing={10}
//               alignItems="center"
//               justify="center"
//               style={{ marginBottom: "10px" }}
//             >
//               <Grid item>
//                 <Email />
//               </Grid>
//               <Grid
//                 item
//                 md={9}
//                 sm={6}
//                 xs={8}
//                 style={{ paddingLeft: "2%", paddingRight: "2%" }}
//               >
//                 <TextField
//                   id="email"
//                   label="Email"
//                   type="email"
//                   value = {this.state.email}
//                   onChange = {this.onChange}
//                   fullWidth
//                   required
//                 />
//               </Grid>
//             </Grid>
//             <Grid
//               container
//               spacing={10}
//               alignItems="center"
//               justify="center"
//               style={{ marginBottom: "10px" }}
//             >
//               <Grid item>
//                 <Fingerprint />
//               </Grid>
//               <Grid
//                 item
//                 md={9}
//                 sm={6}
//                 xs={8}
//                 style={{ paddingLeft: "2%", paddingRight: "2%" }}
//               >
//                 <TextField
//                   id="password"
//                   label="Password"
//                   type="password"
//                   value = {this.state.password}
//                   onChange = {this.onChange}
//                   fullWidth
//                   required
//                 />
//               </Grid>
//             </Grid>
//             <Grid
//               container
//               spacing={10}
//               alignItems="center"
//               justify="center"
//               style={{ marginBottom: "10px" }}
//             >
//               <Grid item>
//                 <EnhancedEncryption />
//               </Grid>
//               <Grid
//                 item
//                 md={9}
//                 sm={6}
//                 xs={8}
//                 style={{ paddingLeft: "2%", paddingRight: "2%" }}
//               >
//                 <TextField
//                   id="password2"
//                   label="Confirm Password"
//                   type="password"
//                   value = {this.state.password2}
//                   onChange = {this.onChange}
//                   fullWidth
//                   required
//                 />
//               </Grid>
//             </Grid>
//             <Grid container justify="center" style={{ marginTop: "5%" }}>
//               <Button
//                 variant="raised"
//                 size="large"
//                 color="secondary"
//                 style={{ textTransform: "none" }}
//                 type = "submit"
//               >
//                 Register
//               </Button>
//             </Grid>
//           </div>
//         </form>
//         <div className="login" />
//       </div>
//     );
//   }
// }
>>>>>>> 8dda06e4de606f7bfacbf7a12f81269b678f87b0

                                        <div className="form-label-group">
                                            <input name="password" onChange={this.onChange} value={this.state.password} type="password" id="password" className="form-control" placeholder="Password" required />
                                            <label for="password">Password</label>
                                        </div>
                                        
                                        <div className="form-label-group">
                                            <input name="password2" onChange={this.onChange} value={this.state.password2} type="password" id="password2" className="form-control" placeholder="Password" required />
                                            <label for="password2">Confirm password</label>
                                        </div>

                                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
                                        <a className="d-block text-center mt-2 small" href="#">Sign In</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ngoRegister
