import React, { PureComponent } from "react";
import Link from "next/link";
import Loader from "react-loader-spinner";

class SignUp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      pass: "",
      loader: false,
    };
  }

  SignUp(e) {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.mobile === "" ||
      this.state.pass === ""
    ) {
      this.setState({
        err_message: "Please fill the form.",
      });
    } else if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.mobile !== "" &&
      this.state.pass !== ""
    ) {
      this.setState({ loader: true });

      fetch(`${process.env.URL}/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sign_up_name:this.state.name,
          sign_up_mobile:this.state.phone,
          sign_up_email:this.state.email,
          sign_up_pass:this.state.pass,

        } ),
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
              
            }else if(resp.response === "user_exist"){
              this.setState({
                loader: false,
                err_message: "user already exists",
              });
            } else {
              this.setState({
                loader: false,
                err_message: "Something went to wrong",
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

  errMessage() {
    this.setState({
      err_message: false,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="authentication-header" />

        <div className="d-flex align-items-center justify-content-center my-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
              <div className="col mx-auto">
                <div className="card mt-5">
                  <div className="card-body">
                    <div className="border p-4 rounded">
                      <div className="text-center">
                        <h3 className>Sign Up</h3>
                        <p>
                          Already have an account?{" "}
                          <Link href="sign-in">
                            <a>Sign in here</a>
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
                        {" "}
                        <span>OR SIGN UP WITH EMAIL</span>
                        <hr />
                      </div>
                      <div className="form-body">
                        <form
                          className="row g-3"
                          onSubmit={(e) => this.SignUp(e)}
                        >
                          <div className="col-12">
                            <label
                              htmlFor="inputFirstName"
                              className="form-label"
                            >
                              Full Name
                            </label>
                            <input
                              value={this.state.name}
                              type="name"
                              className="form-control"
                              id="inputFirstName"
                              placeholder="Jhon"
                              autoComplete="on"
                              onClick={() => this.errMessage()}
                              onChange={(e) =>
                                this.setState({
                                  name: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="col-12">
                            <label
                              htmlFor="inputEmailAddress"
                              className="form-label"
                            >
                              Email Address
                            </label>
                            <input
                              value={this.state.email}
                              type="email"
                              className="form-control"
                              id="inputEmailAddress"
                              autoComplete="on"
                              placeholder="example@user.com"
                              onChange={(e) =>
                                this.setState({
                                  email: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="col-12">
                            <label
                              htmlFor="inputEmailAddress"
                              className="form-label"
                            >
                              Phone Number
                            </label>
                            <input
                              value={this.state.phone}
                              autoComplete="on"

                              type="number"
                              className="form-control"
                              placeholder="123456789"
                              onChange={(e) =>
                                this.setState({
                                  phone: e.target.value,
                                  err_message:false,
                                })
                              }
                            />
                          </div>

                          <div className="col-12">
                            <label
                              htmlFor="inputChoosePassword"
                              className="form-label"
                            >
                              Password
                            </label>
                            <div
                              className="input-group"
                              id="show_hide_password"
                            >
                              <input
                                value={this.state.pass}
                                type="password"
                                className="form-control border-end-0"
                                id="inputChoosePassword"
                                defaultValue={12345678}
                                autoComplete="on"
                                placeholder="Enter Password"
                                onClick={() => this.errMessage()}
                                onChange={(e) =>
                                  this.setState({
                                    pass: e.target.value,
                                  })
                                }
                              />
                              <a
                                href="javascript:;"
                                className="input-group-text bg-transparent"
                              >
                                <i className="bx bx-hide" />
                              </a>
                            </div>
                          </div>
                          {/* <div className="col-12">
                            <label
                              htmlFor="inputSelectCountry"
                              className="form-label"
                            >
                              Country
                            </label>
                            <select
                              className="form-select"
                              id="inputSelectCountry"
                              aria-label="Default select example"
                            >
                              <option selected>India</option>
                              <option value={1}>United Kingdom</option>
                              <option value={2}>America</option>
                              <option value={3}>Dubai</option>
                            </select>
                          </div> */}
                          <div className="col-12">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckChecked"
                              >
                                I read and agree to Terms &amp; Conditions
                              </label>
                            </div>
                          </div>

                          {/* Error Message */}
                          {this.state.err_message ? (
                            <p className="err_message">
                              {this.state.err_message}
                            </p>
                          ) : null}

                          {!this.state.loader ? (
                            <div className="col-12">
                              <div className="d-grid">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  <i className="bx bx-user" />
                                  Sign up
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

export default SignUp;
