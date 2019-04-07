import React from "react";
// import {
//   withStyles,
//   Grid,
//   TextField,
//   Button,
//   FormControlLabel,
//   Checkbox
// } from "@material-ui/core";
// import { Face, Fingerprint } from "@material-ui/icons";
import "../PageStyles/Login.css";

// const styles = theme => ({
//   margin: {
//     margin: theme.spacing.unit * 2
//   },
//   padding: {
//     padding: theme.spacing.unit
//   }
// });

class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      email:"",
      password:"",
      errors : [],
    }
  }

  render() {
    // const { classes } = this.props;
    return (
      // <div className="container">
      //   <div
      //     className={classes.margin}
      //     style={{
      //       width: "50%",
      //       // height: "70%",
      //       margin: "0%",
      //       paddingTop: "18%",
      //       paddingBottom: "16%",
      //       paddingLeft: "2%",
      //       paddingRight: "0%"
      //       // border: "2px solid green"
      //     }}
      //   >
      //     <Grid
      //       container
      //       spacing={10}
      //       alignItems="center"
      //       justify="center"
      //       style={{ marginBottom: "10px" }}
      //     >
      //       <Grid item>
      //         <Face />
      //       </Grid>
      //       <Grid
      //         item
      //         md={9}
      //         sm={6}
      //         xs={8}
      //         style={{ paddingLeft: "2%", paddingRight: "2%" }}
      //       >
      //         <TextField
      //           id="username"
      //           label="Username"
      //           type="email"
      //           fullWidth
      //           autoFocus
      //           required
      //         />
      //       </Grid>
      //     </Grid>
      //     <Grid
      //       container
      //       spacing={10}
      //       alignItems="center"
      //       justify="center"
      //       style={{ marginBottom: "10px" }}
      //     >
      //       <Grid item>
      //         <Fingerprint />
      //       </Grid>
      //       <Grid
      //         item
      //         md={9}
      //         sm={6}
      //         xs={8}
      //         style={{ paddingLeft: "2%", paddingRight: "2%" }}
      //       >
      //         <TextField
      //           id="username"
      //           label="Password"
      //           type="password"
      //           fullWidth
      //           required
      //         />
      //       </Grid>
      //     </Grid>
      //     <Grid container alignItems="center" justify="center">
      //       <Grid item>
      //         <FormControlLabel
      //           control={<Checkbox color="primary" />}
      //           label="Remember me"
      //           style={{ paddingRight: "40px" }}
      //         />
      //       </Grid>
      //       <Grid item>
      //         <Button
      //           disableFocusRipple
      //           disableRipple
      //           style={{ textTransform: "none" }}
      //           variant="text"
      //           color="primary"
      //         >
      //           Forgot password ?
      //         </Button>
      //       </Grid>
      //     </Grid>
      //     <Grid container justify="center" style={{ marginTop: "12px" }}>
      //       <Button
      //         variant="outlined"
      //         size="large"
      //         color="primary"
      //         style={{ textTransform: "none" }}
      //       >
      //         Login
      //       </Button>
      //     </Grid>
      //   </div>
      //   <div className="login" />
      // </div>
      


      <div className="container-fluid">
      <div className="row no-gutter">
      <div className="d-none d-md-flex col-md-4 col-lg-4 bg-image"></div>
      <div className="col-md-8 col-lg-6 container">
        <div className="login d-flex align-items-center py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-12 mx-auto">
                <h3 className="login-heading mb-4">Welcome back!</h3>
                <form className="form">
                  <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                    <label for="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <label for="inputPassword">Password</label>
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" for="customCheck1">Remember password</label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                  <div className="text-center">
                    <a className="small" href="#">Forgot password?</a></div>
                </form>
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

export default (Login);
