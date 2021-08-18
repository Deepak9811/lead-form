import React, { PureComponent } from "react";
import Link from "next/link";

class ContactUs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="menu-two">
          <Link href="/">
            <a>
              <div class="back-btn">
                <span class="mat">
                  <svg viewBox="0 0 448 512">
                    <path
                      fill="currentColor"
                      d="M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z"
                    ></path>
                  </svg>
                </span>
              </div>
            </a>
          </Link>

          <div class="page-name">
            <span class="mycart">Contact Us</span>
          </div>

          <button type="submit" className="btn btn-primary btrcw">
            Submit
          </button>
        </div>

        {/* =============================================================================== */}

        <div class="wrapper">
          <div class="authentication-header"></div>
          <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-4">
            <div class="container-fluid">
              <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                <div class="col mx-auto">
                  <div class="card  mt-lg-0">
                    <div class="card-body">
                      <div class="p-4 rounded">
                        <div class="form-body">
                          <div
                            className="heading-order"
                            style={{ width: "100%", padding: "14px 2%" }}
                          >
                            <p style={{ color: "#1b1b1b" }}>
                              Need to get touch with us ?<br /> We'll get you
                              the help you need.
                            </p>
                          </div>

                          <div className="wd-100 fl">
                            <h2>
                              <span className="phicn">
                                <svg viewBox="0 0 512 512">
                                  <path
                                    fill="currentColor"
                                    d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                                  ></path>
                                </svg>
                              </span>{" "}
                              &nbsp;&nbsp;&nbsp;
                              <span className="cntn">088-1808-1001</span>
                              <br />
                              <span className="mail">admin@yamunaa.com</span>
                            </h2>
                          </div>

                          <form class="row g-3">
                            <div class="col-12 ">
                              <label for="inputEmailAddress" class="form-label">
                                Name{" "}
                              </label>
                              <input
                                type="text"
                                required=""
                                class="form-control"
                                id="inputEmailAddress"
                                placeholder="Name"
                              />
                            </div>

                            <div class="col-12 ">
                              <label for="inputEmailAddress" class="form-label">
                                Email{" "}
                              </label>
                              <input
                                type="email"
                                required=""
                                class="form-control"
                                id="inputEmailAddress"
                                placeholder="Email"
                              />
                            </div>

                            <div class="col-12">
                              <label for="inputEmailAddress" class="form-label">
                                Mobile Number{" "}
                              </label>
                              <input
                                type="number"
                                required=""
                                class="form-control"
                                id="inputEmailAddress"
                                placeholder="Mobile Number"
                              />
                            </div>

                            <div class="col-12">
                              <label for="inputEmailAddress" class="form-label">
                                Enter Message{" "}
                              </label>
                              <textarea
                                type="text"
                                required=""
                                class="form-control"
                                placeholder="Enter Message"
                              />
                            </div>

                            {/* <div class="col-12">
                              <div class="d-grid effct">
                                <button type="submit" class="btn btn-primary">
                                  <i class="bx bxs-lock-open"></i>Submit
                                </button>
                              </div>
                            </div> */}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;
