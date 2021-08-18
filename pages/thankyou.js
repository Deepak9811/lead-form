import React, { PureComponent } from "react";
import Link from "next/link";

class Thankyou extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        {/* <div className="menu-two">
          <Link href="/account-setting">
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
            <span class="mycart"></span>
          </div>
        </div> */}

        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        <div className="wrapper">
          <div className="authentication-header" />

          <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-4">
            <div className="container-fluid">
              <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                <div className="col mx-auto">
                  <div className="card mt-5 mt-lg-0">
                    <div className="card-body">
                      <div className="p-4 rounded">
                        {/* <div className="container-fluid  d-00">
                          <Link href="/">
                            <a className="navbar-brand">
                              <img src="/logo.svg" width={50} alt="" />
                            </a>
                          </Link>
                        </div> */}

                        <div class="container-fluid  d-00">
                          <span class="tnk" href="/">
                            <img src="/images/icons/right.png" width="75" alt="" />
                          </span>
                        </div>

                        <div className="text-center">
                          <h3>Thank you.</h3>
                          <p>
                            Thank you for submitting your information. We will
                            contact you as soon as possible.
                          </p>
                        </div>

                        <Link href="/">
                          <a style={{textDecoration:"none"}}>
                            <div className="col-12">
                              <div className="d-grid">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  <i className="bx bxs-lock-open" />
                                  Continue
                                </button>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end row*/}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Thankyou;
