import React, { PureComponent } from "react";
import Link from "next/link";

class ForgotPassword extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <div className="authentication-header" />
        <div className="authentication-forgot d-flex align-items-center justify-content-center">
          <div className="card forgot-box">
            <div className="card-body">
              <div className="p-4 rounded">
                <div className="text-center">
                  <img style={{width:"50px"}} src="/images/icons/lock.png" width={120} alt="" />
                </div>
                <h4 className="font-weight-bold mgtp-10 txc">Forgot Password?</h4>
                <p className="text-muted">
                  Enter your registered email ID to reset the password
                </p>
                <div className="my-4">
                  <label className="form-label">Email id</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="example@user.com"
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="button" className="btn btn-primary btn-lg">
                    Send
                  </button>{" "}
                  <Link href="sign-in">
                    <a className="btn btn-white btn-lg">
                      <span className="bxarrow-back">
                        <svg viewBox="0 0 448 512" className="bx  me-1 ">
                          <path
                            fill="currentColor"
                            d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
                          ></path>
                        </svg>
                      </span>
                      Back to Login
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
