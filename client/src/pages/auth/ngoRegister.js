import React from "react";
import {
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import {
  Face,
  Fingerprint,
  Email,
  EnhancedEncryption
} from "@material-ui/icons";
import "../PageStyles/Register.css";
import axios from 'axios';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: theme.spacing.unit
  }
});

class Register extends React.Component {
  constructor(){
    super();
    this.state = {
      name:"",
      email:"",
      password:"",
      password2:"",
      errors : [],
    }
  }
  
  onChange = e =>{
    this.setState({[e.target.id]: e.target.value});
  }
  
onSubmit = e =>{
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    }

    axios.post()
    console.log(newUser)
}

  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <form 
          style={{
              width: "50%",
              // height: "70%",
              margin: "0%",
              paddingTop: "12%",
              paddingBottom: "16%",
              paddingLeft: "2%",
              paddingRight: "0%"
          }}
          onSubmit = {this.onSubmit}
        >
          <div
            className={classes.margin}
            // style={{
              // width: "50%",
              // height: "70%",
              // margin: "0%",
              // paddingTop: "12%",
              // paddingBottom: "16%",
              // paddingLeft: "2%",
              // paddingRight: "0%"
              // border: "2px solid green"
            // }}
          >
            <Grid
              container
              spacing={10}
              alignItems="center"
              justify="center"
              style={{ marginBottom: "10px" }}
            >
              <Grid item>
                <Face />
              </Grid>
              <Grid
                item
                md={9}
                sm={6}
                xs={8}
                style={{ paddingLeft: "2%", paddingRight: "2%" }}
              >
                <TextField
                  id="name"
                  label="Name"
                  value = {this.state.name}
                  onChange = {this.onChange}
                  fullWidth
                  autoFocus
                  required
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={10}
              alignItems="center"
              justify="center"
              style={{ marginBottom: "10px" }}
            >
              <Grid item>
                <Email />
              </Grid>
              <Grid
                item
                md={9}
                sm={6}
                xs={8}
                style={{ paddingLeft: "2%", paddingRight: "2%" }}
              >
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  value = {this.state.email}
                  onChange = {this.onChange}
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={10}
              alignItems="center"
              justify="center"
              style={{ marginBottom: "10px" }}
            >
              <Grid item>
                <Fingerprint />
              </Grid>
              <Grid
                item
                md={9}
                sm={6}
                xs={8}
                style={{ paddingLeft: "2%", paddingRight: "2%" }}
              >
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  value = {this.state.password}
                  onChange = {this.onChange}
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={10}
              alignItems="center"
              justify="center"
              style={{ marginBottom: "10px" }}
            >
              <Grid item>
                <EnhancedEncryption />
              </Grid>
              <Grid
                item
                md={9}
                sm={6}
                xs={8}
                style={{ paddingLeft: "2%", paddingRight: "2%" }}
              >
                <TextField
                  id="password2"
                  label="Confirm Password"
                  type="password"
                  value = {this.state.password2}
                  onChange = {this.onChange}
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <Grid container justify="center" style={{ marginTop: "5%" }}>
              <Button
                variant="raised"
                size="large"
                color="secondary"
                style={{ textTransform: "none" }}
                type = "submit"
              >
                Register
              </Button>
            </Grid>
          </div>
        </form>
        <div className="login" />
      </div>
    );
  }
}

export default withStyles(styles)(Register);
