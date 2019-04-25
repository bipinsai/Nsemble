import React from "react";
import "../pageStyles/Register.css";
import axios from "axios";
import { Link } from "react-router-dom";

class ngoRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: []
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    let user = this.props.match.params.name;
    console.log(user);
      // console.log(newUser);
    if(user === 'user'){
      axios.post("http://172.16.48.86:5000/user/register", newUser).then(result => {
        console.log(result);
        this.props.history.push("/user/login");
      });
    }else{
      axios.post("http://172.16.48.86:5000/ngo/register", newUser).then(result => {
        console.log(result);
        this.props.history.push("/ngo/login");
      });
    }
  };

  onClick = e => {
    let user = this.props.match.params.name;
    if (user === "user") {
      this.props.history.push("/user/login");
    } else {
      this.props.history.push("/ngo/login");
    }
  };
  render() {
    return (
      <div id="body">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card card-signin flex-row my-5">
                <div className="card-img-left d-none d-md-flex" />
                <div className="card-body">
                  <h5 className="card-title text-center">Register</h5>
                  <form className="form-signin" onSubmit={this.onSubmit}>
                    <div className="form-label-group">
                      <input
                        name="username"
                        onChange={this.onChange}
                        value={this.state.username}
                        type="text"
                        id="username"
                        className="form-control"
                        placeholder="Username"
                        required
                        autofocus
                      />
                      <label for="username">Username</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        autofocus
                      />
                      <label for="email">Email</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        name="password"
                        onChange={this.onChange}
                        value={this.state.password}
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                      <label for="password">Password</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        name="password2"
                        onChange={this.onChange}
                        value={this.state.password2}
                        type="password"
                        id="password2"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                      <label for="password2">Confirm password</label>
                    </div>

                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                    >
                      Register
                    </button>
                    <Link
                      className="d-block text-center mt-2 small"
                      to={`${
                        this.props.match.params.name === "user"
                          ? "/user/login"
                          : "/ngo/login"
                      }`}
                    >
                      Sign In
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ngoRegister;
