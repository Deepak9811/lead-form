import React, { PureComponent } from "react";
import Link from "next/link";
import Loader from "react-loader-spinner";
import Router from "next/router";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      phone: "",
      pass: "",
      loggedin: false,
      loader: false,
      err_message:""
    };
  }

  // componentDidMount() {
  //   $(".toggle-password").click(function () {
  //     $(this).toggleClass("fas fa-eye-slash");
  //     var input = $($(this).attr("toggle"));
  //     if (input.attr("type") == "password") {
  //       input.attr("type", "text");
  //     } else {
  //       input.attr("type", "password");
  //     }
  //   });
  // }

  login(e) {
    e.preventDefault();
    if (
      this.state.email === "" ||
      this.state.mobile === "" ||
      this.state.pass === ""
    ) {
      this.setState({
        err_message: "Please enter your acounts details to login.",
      });
    } else if (
      this.state.email !== "" &&
      this.state.mobile !== "" &&
      this.state.pass !== ""
    ) {
    this.setState({ loader: true });

      fetch(`${process.env.URL}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      })
        .then((result) => {
          result.json().then((resp) => {
            if (resp.response === "ok") {
              localStorage.setItem("user_id", JSON.stringify(resp.user_id));
              this.setState({
                email: "",
                phone: "",
                pass: "",
                loader: false,
              });
              Router.push("/")
            } else {
              this.setState({
                loader: false,
                err_message: "Please Check your details",
              });
            }
          });
        })

        //CATCHING ERROR FROM FETCH (IF ANY) IN API
        .catch((error) => {
          this.setState({
            message: "Please check your credentials.",
            loader: false,
          });
        });
    }
  }

  errMessage(){
    this.setState({
      err_message:false
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="authentication-header" />
        <div
          className="
          section-authentication-signin
          d-flex
          align-items-center
          justify-content-center
          my-5 my-lg-0
        "
        >
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
              <div className="col mx-auto">
                <div className="card">
                  <div className="card-body">
                    <div className="p-4 rounded">
                      <div className="text-center">
                        <h3 className>Sign in</h3>
                        <p>
                          Don't have an account yet?
                          <Link href="sign-up">
                            <a>Sign up here</a>
                          </Link>
                        </p>
                      </div>
                      <div className="d-grid">
                        <span className="btn my-4 shadow-sm btn-white goglebtn">
                          {" "}
                          <span className="d-flex justify-content-center align-items-center ">
                            <img
                              className="me-2"
                              src="/images/icons/search.svg"
                              width={16}
                              alt="Image Description"
                            />
                            <span>Sign Up with Google</span>
                          </span>
                        </span>{" "}
                        <span className="btnfk">
                          <i className="bx bxl-facebook" />
                          Sign Up with Facebook
                        </span>
                      </div>
                      <div className="login-separater text-center mb-4">
                        <span>OR SIGN IN WITH EMAIL</span>
                        <hr />
                      </div>
                      <div className="form-body">
                        <form
                          className="row g-3"
                          onSubmit={(e) => this.login(e)}
                        >
                          <div className="col-12">
                            <label
                              htmlFor="inputEmailAddress"
                              className="form-label"
                            >
                              Email Address
                            </label>
                            <input
                              value={this.state.email || this.state.phone}
                              type="text"
                              className="form-control"
                              id="inputEmailAddress"
                              placeholder="Email Address"
                              onClick={()=>this.errMessage()}
                              onChange={(e) =>
                                this.setState({
                                  email: e.target.value,
                                  phone: e.target.value,
                                  
                                })
                              }
                            />
                          </div>
                          <div className="col-12">
                            <label
                              htmlFor="inputChoosePassword"
                              className="form-label"
                            >
                              Enter Password
                            </label>
                            <div
                              className="input-group"
                              id="show_hide_password"
                            >
                              <input
                                value={this.state.pass}
                                id="myPass"
                                type="password"
                                className="form-control border-end-0"
                                id="inputChoosePassword"
                                defaultValue={12345678}
                                placeholder="Enter Password"
                                onClick={()=>this.errMessage()}
                                onChange={(e) =>
                                  this.setState({ pass: e.target.value })
                                }
                              />

                              <span
                                toggle="#password-field"
                                className="input-group-text bg-transparent toggle-password"
                              >
                                {/* <span
                                  class=" field-icon toggle-password"
                                > */}
                                <svg
                                  className="show-pass"
                                  style={{ top: "34px" }}
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                                  ></path>
                                </svg>
                              </span>
                              {/* </span> */}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckChecked"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 text-end txtn">
                            <Link href="forgot-password">
                              <a>Forgot Password ?</a>
                            </Link>
                          </div>


                                   {/* Error Message */}
                          {this.state.err_message ? (
                          <p className="err_message">
                            {this.state.err_message}
                          </p>):null}

                          {!this.state.loader ? (
                            <div className="col-12">
                              <div className="d-grid">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  <i className="bx bxs-lock-open" />
                                  Sign in
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="loader_in_option2">
                              <Loader
                                type="Oval"
                                color="#00BFFF"
                                height={30}
                                width={50}
                              />
                            </div>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
