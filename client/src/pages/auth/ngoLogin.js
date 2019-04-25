import React from "react";
import axios from "axios";
import "../pageStyles/Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: []
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password
    };
    let user = this.props.match.params.name;
    if(user==='user'){
        axios.post("http://localhost:5000/user/login", newUser).then(result => {
        localStorage.setItem("jwtToken", result.data.token);
        this.props.history.push("/user/profile");
      });
    }else{
        axios.post("http://localhost:5000/ngo/login", newUser).then(result => {
        localStorage.setItem("jwtToken", result.data.token);
        this.props.history.push("/ngo/profile");
      })
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-5 bg-image" />
          <div className="col-md-8 col-lg-6 container">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-lg-12 mx-auto">
                    <h3 className="login-heading mb-4">Welcome back!</h3>
                    <form className="form" onSubmit={this.onSubmit}>
                      <div className="form-label-group">
                        <input
                          name="email"
                          onChange={this.onChange}
                          type="email"
                          id="inputEmail"
                          className="form-control"
                          placeholder="Email address"
                          required
                          autofocus
                          value={this.state.email}
                        />
                        <label for="inputEmail">Email address</label>
                      </div>

                      <div className="form-label-group">
                        <input
                          name="password"
                          onChange={this.onChange}
                          type="password"
                          id="inputPassword"
                          className="form-control"
                          placeholder="Password"
                          required
                          value={this.state.password}
                        />
                        <label for="inputPassword">Password</label>
                      </div>

                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                        <label
                          className="custom-control-label"
                          for="customCheck1"
                        >
                          Remember password
                        </label>
                      </div>
                      <button
                        className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                        type="submit"
                      >
                        Sign in
                      </button>
                      <div className="text-center">
                        <a className="small" href="/user/forgot">
                          Forgot password?
                        </a>
                      </div>
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

export default Login;
