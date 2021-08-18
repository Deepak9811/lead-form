import React, { PureComponent } from "react";
import Link from "next/link";

class EnqForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="menu-two">
          <Link href="/enq-form">
            <a>
              <div class="back-btn">
                <span class="mat">
                  <svg
                    className="go_back_nav"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                    ></path>
                  </svg>
                </span>
              </div>
            </a>
          </Link>

          {/* <div class="page-name">
            <span class="mycart">Contact Us</span>
          </div> */}

          <button type="submit" className="btn btn-primary btrcw">
            Save
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
                          <form class="row g-3">

                          <div className="col-12 txl">
                              <label
                                htmlFor="inputNumber"
                                className="form-label"
                              >
                                Image
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                placeholder="Image"
                              />
                            </div>



                            <div className="col-12 txl">
                              <label
                                htmlFor="inputNumber"
                                className="form-label"
                              >
                                Title
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                              />
                            </div>

                            <div className="col-12 mgtp-10 txl">
                              <label
                                htmlFor="inputNumber"
                                className="form-label"
                              >
                                Slogan
                              </label>
                              <textarea
                                type="text"
                                className="form-control"
                                placeholder="Send all your content to your followers through one smart link."
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

export default EnqForm;
