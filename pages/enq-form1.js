import React, { PureComponent } from "react";
import Link from "next/link";
import Router from "next/router";

class EnqForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      placeholder: "",
      dataType: "",
      require: "",
    };
  }

  componentDidMount() {
    var enqForm = JSON.parse(localStorage.getItem("enqForm"));
    console.log("data", enqForm);

    if (enqForm) {
      this.setState({
        title: enqForm.title,
        placeholder: enqForm.placeholder,
        dataType: enqForm.dataType,
        require: enqForm.require,
      });
    }
  }

  enqform(e) {
    if (
      this.state.title === "" ||
      this.state.placeholder === "" ||
      this.state.dataType === "" ||
      this.state.require === ""
    ) {
      alert("Please enter something");
    } else if (
      this.state.title !== "" &&
      this.state.placeholder !== "" &&
      this.state.dataType !== "" &&
      this.state.require !== ""
    ) {
      localStorage.setItem(
        "enqForm",
        JSON.stringify({
          title: this.state.title,
          placeholder: this.state.placeholder,
          dataType: this.state.dataType,
          require: this.state.require,
        })
      );
      Router.push("/enq-form");
    }
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

          <button
            type="submit"
            className="btn btn-primary btrcw"
            onClick={(e) => {
              this.enqform();
            }}
          >
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
                            <div className="col-12">
                              <label
                                htmlFor="inputNumber"
                                className="form-label"
                              >
                                Title
                              </label>
                              <div class="edtf" style={{ padding: "0 2%" }}>
                                <svg viewBox="0 0 512 512">
                                  <path
                                    fill="currentColor"
                                    d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                                  ></path>
                                </svg>
                              </div>

                              <input
                              value={this.state.title}
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                onChange={(event) =>
                                  this.setState({ title: event.target.value })
                                }
                              />
                            </div>
                            <div className="col-12">
                              <label className="form-label">Placeholder</label>
                              <div class="edtf" style={{ padding: "0 2%" }}>
                                <svg viewBox="0 0 512 512">
                                  <path
                                    fill="currentColor"
                                    d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                                  ></path>
                                </svg>
                              </div>
                              <input
                                 value={this.state.placeholder}
                                type="text"
                                className="form-control"
                                id="inputEmail"
                                placeholder="Placeholder"
                                onChange={(event) =>
                                  this.setState({
                                    placeholder: event.target.value,
                                  })
                                }
                              />
                            </div>

                            <div className="col-12">
                              <label
                                htmlFor="inputBudget"
                                className="form-label"
                              >
                                Required
                              </label>
                              <div class="edtf" style={{ padding: "0 2%" }}>
                                <svg viewBox="0 0 512 512">
                                  <path
                                    fill="currentColor"
                                    d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                                  ></path>
                                </svg>
                              </div>
                              <select
                              value={this.state.require}
                                class="form-select mb-3"
                                onChange={(event) =>
                                  this.setState({ require: event.target.value })
                                }
                              >
                                <option hidden>Required</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>

                            <div className="col-12">
                              <label
                                htmlFor="inputBudget"
                                className="form-label"
                              >
                                Data Type{" "}
                              </label>
                              <div class="edtf" style={{ padding: "0 2%" }}>
                                <svg viewBox="0 0 512 512">
                                  <path
                                    fill="currentColor"
                                    d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                                  ></path>
                                </svg>
                              </div>
                              <select
                              value={this.state.dataType}
                                class="form-select mb-3"
                                onChange={(e) =>
                                  this.setState({ dataType: e.target.value })
                                }
                              >
                                <option hidden>Data Type</option>
                                <option value="Text">Text</option>
                                <option value="Number">Number</option>
                              </select>
                            </div>
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
