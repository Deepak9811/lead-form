import React, { PureComponent } from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";

class SocailMedia extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      other_fields: [],
    };
  }

  addMoreFields() {
    var newArr = {
      filed: "",
    };
    this.setState({
      other_fields: this.state.other_fields.concat(newArr),
    });
  }

  removeOther(index) {
    this.state.other_fields[index].delete = true;
    this.setState((prevState) => ({
      other_fields: [...prevState.other_fields],
    }));
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
            <span class="mycart">Social Media</span>
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
                          <form class="row g-3">
                            <div class="col-12">
                              <label for="inputEmailAddress" class="form-label">
                                Facebook
                              </label>
                              <input
                                type="text"
                                required=""
                                class="form-control"
                                id="inputEmailAddress"
                                placeholder="Facebook"
                              />
                            </div>

                            <div class="col-12">
                              <label for="inputEmailAddress" class="form-label">
                                Instagram
                              </label>
                              <input
                                type="number"
                                required=""
                                class="form-control"
                                id="inputEmailAddress"
                                placeholder="Instagram"
                              />
                            </div>

                            <div class="col-12">
                              <label for="inputEmailAddress" class="form-label">
                                Whatsapp
                              </label>
                              <input
                                type="number"
                                required=""
                                class="form-control"
                                id="inputEmailAddress"
                                placeholder="Whatsapp"
                              />
                            </div>

                            <div class="col-12">
                              <label for="inputEmailAddress" class="form-label">
                                YouTube
                              </label>
                              <input
                                type="number"
                                required=""
                                class="form-control"
                                id="inputEmailAddress"
                                placeholder="YouTube"
                              />
                            </div>

                            {this.state.other_fields.map((item, index) =>
                              item.delete !== true ? (
                                <div class="col-12">
                                  <label
                                    for="inputEmailAddress"
                                    class="form-label wd-100 fl"
                                  >
                                    Other
                                  </label>
                                  <input
                                    type="text"
                                    required=""
                                    class="form-control wd-87 fl"
                                    id="inputEmailAddress"
                                    placeholder="Other"
                                  />

                                  <span
                                    className="addotherurl"
                                    onClick={() => this.removeOther(index)}
                                  >
                                    <svg
                                      style={{ marginTop: "5px" }}
                                      viewBox="0 0 512 512"
                                      class="svg-inline--fa fa-minus-circle fa-w-16 fa-2x"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M140 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H140zm364-28c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              ) : null
                            )}

                            <div
                              className="col-12"
                              onClick={() => this.addMoreFields()}
                            >
                              <label className="form-label add-more">
                                Add more fields
                              </label>
                              <span className="addotherurl">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M384 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm120 16c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z"
                                  ></path>
                                </svg>
                              </span>
                            </div>

                            {/* <div class="col-12 mgtp-20">
                              <div class="d-grid effct">
                                <button type="submit" class="btn btn-primary">
                                  <i class="bx bxs-lock-open"></i>
                                  Save
                                </button>
                              </div>
                            </div> */}

                            {/* {this.state.otherUrl ? (
                              <>
                                <div className="overlay_mobile">
                                  <div className="  deepak">
                                    <div className="crss">
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
                                    </div>

                                    <div className="authentication-header" />

                                    <div className="section-authentication-signin d-flex align-items-center justify-content-center mgt-5 my-lg-4">
                                      <div className="container-fluid">
                                        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                                          <div className="col mx-auto">
                                            <div className="crdp mt-5 mt-lg-0">
                                              <div className="card-body">
                                                <div className="p-4 rounded">
                                                  <div className="col-12">
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

                                                  <div className="col-12 mgtp-10">
                                                    <label
                                                      htmlFor="inputNumber"
                                                      className="form-label"
                                                    >
                                                      Link
                                                    </label>
                                                    <input
                                                      type="text"
                                                      className="form-control"
                                                      placeholder="Link"
                                                    />
                                                  </div>

                                                  <div class="col-12 mgtp-20">
                                                    <div class="d-grid effct">
                                                      <button
                                                        type="submit"
                                                        class="btn btn-primary"
                                                      >
                                                        <i class="bx bxs-lock-open"></i>
                                                        Save
                                                      </button>
                                                    </div>
                                                  </div>
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
                            ) : null} */}

                            {/*end */}
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

export default SocailMedia;
