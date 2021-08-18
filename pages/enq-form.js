import React, { PureComponent } from "react";
import Link from "next/link";
import Router from "next/router";
import Loader from "react-loader-spinner";
class Form extends PureComponent {
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

  render() {
    var { title, placeholder, dataType, require } = this.state;
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
            <span class="mycart">Enquiry Form</span>
          </div>

          <button type="submit" className="btn btn-primary btrcw">
            Save
          </button>
        </div>

        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        <div className="wrapper">
          <div className="authentication-header" />

          <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-4">
            <div className="container-fluid">
              <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                <div className="col mx-auto">
                  <div className="card   lt-0">
                    <div className="card-body">
                      <div className="p-4 rounded">
                        <div className="container-fluid  d-00">
                          <Link href="/enq-form2">
                            <a>
                              <div className="edtf">
                                <svg viewBox="0 0 512 512">
                                  <path
                                    fill="currentColor"
                                    d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                                  ></path>
                                </svg>
                              </div>
                            </a>
                          </Link>

                          <Link href="/">
                            <a className="navbar-brand">
                              <img src="/images/logo.svg" width={50} alt="" />
                            </a>
                          </Link>
                        </div>

                        <div className="text-center brdp">
                          {/* end */}
                          <h3 className>Enquiry form</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem
                          </p>
                        </div>

                        <div className="form-body">
                          <form
                            onSubmit={(e) => this.check(e)}
                            encType="multipart/form-data"
                            className="row g-3"
                            method="post"
                          >
                            <div className="info-holder bdr-b-none mg-0">
                              <div className="personal-info">
                                <h5>Full Name :</h5>
                              </div>

                              <div class="edtf" style={{ padding: "0 2%" }}>
                                <svg viewBox="0 0 512 512">
                                  <path
                                    fill="currentColor"
                                    d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                                  ></path>
                                </svg>
                              </div>
                            </div>

                            <div className="info-holder bdr-b-none mg-0">
                              <div className="personal-info">
                                <h5>
                                  Email :{" "}
                                  <span style={{ color: "red" }}>*</span>
                                </h5>
                              </div>

                              <div class="edtf" style={{ padding: "0 2%" }}>
                                <svg viewBox="0 0 512 512">
                                  <path
                                    fill="currentColor"
                                    d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                                  ></path>
                                </svg>
                              </div>
                            </div>

                            <div className="info-holder bdr-b-none mg-0">
                              <div className="personal-info">
                                <h5>
                                  Number :{" "}
                                  <span style={{ color: "red" }}>*</span>
                                </h5>
                              </div>

                              <div class="edtf" style={{ padding: "0 2%" }}>
                                <svg viewBox="0 0 512 512">
                                  <path
                                    fill="currentColor"
                                    d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                                  ></path>
                                </svg>
                              </div>
                            </div>

                            {!this.state.title ? null : (
                              <div className="info-holder bdr-b-none mg-0">
                                <div className="personal-info">
                                  <h5>title : {title}</h5>
                                </div>


                                <Link href="/enq-form1"><a>
                                <div class="edtf" style={{ padding: "0 2%" }} >
                                  <svg viewBox="0 0 512 512">
                                    <path
                                      fill="currentColor"
                                      d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                                    ></path>
                                  </svg>
                                </div>
                                </a></Link>

                              </div>
                            )}

                            {!this.state.placeholder ? null : (
                              <div className="info-holder bdr-b-none mg-0">
                                <div className="personal-info">
                                  <h5>placeholder : {placeholder}</h5>
                                </div>

                                <Link href="/enq-form1"><a>
                                <div class="edtf" style={{ padding: "0 2%" }} >
                                  <svg viewBox="0 0 512 512">
                                    <path
                                      fill="currentColor"
                                      d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                                    ></path>
                                  </svg>
                                </div>
                                </a></Link>
                              </div>
                            )}

                            {!this.state.dataType ? null : (
                              <div className="info-holder bdr-b-none mg-0">
                                <div className="personal-info">
                                  <h5>dataType : {dataType}</h5>
                                </div>

                                <Link href="/enq-form1"><a>
                                <div class="edtf" style={{ padding: "0 2%" }} >
                                  <svg viewBox="0 0 512 512">
                                    <path
                                      fill="currentColor"
                                      d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                                    ></path>
                                  </svg>
                                </div>
                                </a></Link>
                              </div>
                            )}

                            {!this.state.require ? null : (
                              <div className="info-holder bdr-b-none mg-0">
                                <div className="personal-info">
                                  <h5>require : {require}</h5>
                                </div>

                                <Link href="/enq-form1"><a>
                                <div class="edtf" style={{ padding: "0 2%" }} >
                                  <svg viewBox="0 0 512 512">
                                    <path
                                      fill="currentColor"
                                      d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                                    ></path>
                                  </svg>
                                </div>
                                </a></Link>
                              </div>
                            )}

                            <div className="col-12">
                              <Link href="/enq-form1">
                                <a>
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
                                </a>
                              </Link>
                            </div>
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
      </>
    );
  }
}

export default Form;
