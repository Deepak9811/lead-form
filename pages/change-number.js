import React, { PureComponent } from "react";
import Link from "next/link";

class ChangeNumber extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="menu-two">
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
            <span class="mycart">Change Number</span>
          </div>


          <button type="submit" className="btn btn-primary btrcw" >Save</button>



        </div>

        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        

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
                            style={{ width: "100%", padding: "14px 0" }}
                          >
                            <h3>Change Number</h3>
                            <p className="m-none">
                            Use the form below to change the Number for your Yamunaa account.
                            </p>
                          </div>

                          

                          <form class="row g-3">
                            

                            <div class="col-12">
                              <label for="inputEmailAddress" class="form-label">
                                Number{" "}
                              </label>
                              <input
                                type="number"
                                required=""
                                class="form-control"
                                id="inputEmailAddress"
                                placeholder="Number"
                              />
                            </div>

                            {/* <div class="col-12">
                              <div class="d-grid effct">
                                <button type="submit" class="btn btn-primary">
                                  <i class="bx bxs-lock-open"></i>Save
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

export default ChangeNumber;
