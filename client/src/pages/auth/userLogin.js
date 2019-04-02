import React from "react";
import {
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { Face, Fingerprint } from "@material-ui/icons";
import "../PageStyles/Login.css";
import AppAppBar from "../../modules/views/AppAppBar";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: theme.spacing.unit
  }
});

class Login extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        
        <div
          className={classes.margin}
          style={{
            width: "50%",
            // height: "70%",
            margin: "0%",
            paddingTop: "18%",
            paddingBottom: "16%",
            paddingLeft: "2%",
            paddingRight: "0%"
            // border: "2px solid green"
          }}
        >
          {/* <Grid> */}
            {/* <AppAppBar /> */}
          {/* </Grid> */}
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
                id="username"
                label="Username"
                type="email"
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
                id="username"
                label="Password"
                type="password"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="center">
            <Grid item>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
                style={{ paddingRight: "40px" }}
              />
            </Grid>
            <Grid item>
              <Button
                disableFocusRipple
                disableRipple
                style={{ textTransform: "none" }}
                variant="text"
                color="primary"
              >
                Forgot password ?
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: "12px" }}>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              style={{ textTransform: "none" }}
            >
              Login
            </Button>
          </Grid>
        </div>
        <div className="login" />
      </div>
    );
  }
}

export default withStyles(styles)(Login);