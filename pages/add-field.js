import React, { PureComponent } from "react";
import Link from "next/link";
class Addfield extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <div className="authentication-header" />
        {/* <header className="login-header shadow">
        <nav className="navbar navbar-expand-lg navbar-light bg-white rounded fixed-top rounded-0 shadow-sm">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">
                <img src="/logo.png" width={200} alt="" />
              </a>
            </Link>
          </div>
        </nav>
      </header> */}
        <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-4">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
              <div className="col mx-auto">
                <div className="card mt-5  lt-0">
                  <div className="card-body">
                    <div className="p-4 rounded">
                      <div className="container-fluid  d-00">
                        <Link href="/">
                          <a className="navbar-brand">
                            <img src="/logo.svg" width={50} alt="" />
                          </a>
                        </Link>
                      </div>
                      <div className="text-center">
                        <h3 className>Add Field</h3>
                      </div>

                      <div className="form-body">
                        <form
                          onSubmit={(e) => this.check(e)}
                          encType="multipart/form-data"
                          className="row g-3"
                          method="post"
                        >
                          <div className="col-12">
                            <label htmlFor="inputNumber" className="form-label">
                              Title
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Title"
                            />
                          </div>
                          <div className="col-12">
                            <label className="form-label">Placeholder</label>
                            <input
                              type="email"
                              value={this.state.email}
                              className="form-control"
                              id="inputEmail"
                              placeholder="Placeholder"
                            />
                          </div>

                          <div className="col-12">
                            <label htmlFor="inputBudget" className="form-label">
                              Required
                            </label>
                            <select
                              class="form-select mb-3"
                              // value={this.state.budget}
                            >
                              <option hidden>Required</option>
                              <option value="1">Yes</option>
                              <option value="2">No</option>
                            </select>
                          </div>

                          <div className="col-12">
                            <div className="d-grid">
                              <button type="submit" className="btn btn-primary">
                                Save
                              </button>
                            </div>
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
        <footer className="bg-white shadow-sm border-top p-2 text-center fixed-bottom">
          <p className="mb-0">Copyright © 2021. All right reserved.</p>
        </footer>
      </div>
    );
  }
}

export default Addfield;
