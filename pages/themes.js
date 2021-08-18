import React, { PureComponent } from "react";
import Link from "next/link";


class Themes extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="main-wrap">
        <section className="admin-sidebar sidebar" data-sidebar>
          <div className="sidebar-logo-wrap">
            <a href="#">
              <h1>
                Singh
                <span className="logo">
                  <img src="/images/logo.svg" />
                </span>
              </h1>
            </a>
          </div>
        </section>
        {/* ==============={ SHARE SECOND}===================================================== */}

        {/* <section className="secondary admin has-toolbar">
          <div
            id="React--Toolbar"
            data-linktree-url="https://linktr.ee/theartistnw"
          >
            <div className="toolbar">
              <div className="toolbar__inner">
                <span className="toolbar__label">My Linktree:</span>
                <div className="toolbar__url">
                  <a
                    href="https://linktr.ee/theartistnw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://linktr.ee/theartistnw
                  </a>
                </div>
                <button
                  data-popper-reference="data-popper-reference"
                  className="toolbar__button"
                >
                  Share
                </button>

                <div
                  className="dpdn"
                  data-popper="data-popper"
                  data-popper-theme="interface"
                  data-popper-visible="false"
                  data-popper-animation="fade"
                  data-popper-reference-hidden="false"
                  data-popper-escaped="false"
                  data-popper-placement="bottom-end"
                  style={{
                    position: "absolute",
                    inset: "0px auto auto 0px",
                    transform: "translate3d(103px, 45px, 0px)",
                  }}
                >
                  <ul>
                    <li tabIndex={0}>Copy my Linktree URL</li>
                    <li tabIndex={0}>Download my Linktree QR code</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="secondary admin has-toolbar">
          <div className="dashboard_holder">
            <div className="dashboard">
              <a className="user_dp">
                <label htmlFor="profile-image">
                  <p className="edit">Edit</p>
                  <img
                    id="show_img"
                    style={{ float: "left", height: "110px" }}
                    src="https://api.yamunaa.com/image/users/1281/1623579494000.jpg"
                  />
                  <div style={{ float: "left", width: "100%" }}>
                    <input
                      id="profile-image"
                      type="file"
                      hidden
                      name="img"
                      accept=".jpg,.png"
                      className="alien-input w-30"
                    />
                  </div>
                </label>
              </a>
              <div className="userInfoHolder">
                <div className="user_name">
                  <span>Svayam Malhotra</span>
                </div>
                <div className="user_personal">
                  <div className="user_phn">
                    <span>9896949286</span>
                  </div>
                  <div className="user_id">
                    <span />
                  </div>
                </div>
              </div>
              <div matripple className="mat-ripple edit_icon_holder">
                <Link href="/account-setting">
                  <a> Edit Account </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="user_info_card_holder">
          <app-collapse-card-dashboard
            iconsrc="fa-box highlightIcon"
            title="Orders & Tracking"
            heading="View Order History"
            apphref="user/your-orders"
          >
            <div className="user_info_card" style={{ position: "relative" }}>
              <Link href="/social-media">
                <a>

                  <div
                    matripple
                    className="mat-ripple"
                    style={{ float: "left", width: "100%" }}
                  >
                    <div className="wallets_Cards">
                      <svg
                        viewBox="0 0 496 512"
                        className="fa-box fas highlightIcon ng-star-inserted"
                      >
                        <path
                          fill="currentColor"
                          d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM88 256H56c0-105.9 86.1-192 192-192v32c-88.2 0-160 71.8-160 160zm160 96c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"
                        ></path>
                      </svg>
                      {/**/}
                      {/**/}
                    </div>

                    <div className="smhighlightHolder">
                      <span className="card_title">Social &amp; Media</span>
                      <span
                        className="card_link_btn ng-star-inserted"
                        style={{ color: "gray" }}
                      >
                        Manage Social Media
                      </span>
                      {/**/}
                    </div>

                    <Link href="/social-media">
                      <a>
                        <div className="openMoreIcon">
                          <svg viewBox="0 0 192 512">
                            <path
                              fill="currentColor"
                              d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                            ></path>
                          </svg>
                        </div>
                      </a>
                    </Link>
                  </div>
                </a>
              </Link>
              {/**/}
            </div>
          </app-collapse-card-dashboard>

          <app-collapse-card-dashboard
            iconsrc="fa-box highlightIcon"
            title="Orders & Tracking"
            heading="View Order History"
            apphref="user/your-orders"
          >
            <div className="user_info_card" style={{ position: "relative" }}>
              <Link href="/enq-form">
                <a>
                  <div className="mat-ripple">
                    <div className="wallets_Cards">
                      <svg viewBox="0 0 448 512">
                        <path
                          fill="currentColor"
                          d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"
                        ></path>
                      </svg>
                      {/**/}
                      {/**/}
                    </div>
                    <div className="smhighlightHolder">
                      <span className="card_title">Form &amp; Data</span>
                      <span
                        className="card_link_btn ng-star-inserted"
                        style={{ color: "gray" }}
                      >
                        Manage Form Data
                      </span>
                      {/**/}
                    </div>
                    <div className="openMoreIcon">
                      <svg viewBox="0 0 192 512">
                        <path
                          fill="currentColor"
                          d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>

              {/**/}
            </div>
          </app-collapse-card-dashboard>

          <app-collapse-card-dashboard
            iconsrc="fa-box highlightIcon"
            title="Orders & Tracking"
            heading="View Order History"
            apphref="user/your-orders"
          >
            <div className="user_info_card" style={{ position: "relative" }}>
              <Link href="/link-page">
                <a>
                  <div className="mat-ripple">
                    <div className="wallets_Cards">
                      <svg viewBox="0 0 384 512">
                        <path
                          fill="currentColor"
                          d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
                        ></path>
                      </svg>
                      {/**/}
                      {/**/}
                    </div>
                    <div className="smhighlightHolder">
                      <span className="card_title">Link &amp; Pages</span>
                      <span
                        className="card_link_btn ng-star-inserted"
                        style={{ color: "gray" }}
                      >
                        Manage Link Pages
                      </span>
                      {/**/}
                    </div>
                    <div className="openMoreIcon">
                      <svg viewBox="0 0 192 512">
                        <path
                          fill="currentColor"
                          d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>

              {/**/}
            </div>
          </app-collapse-card-dashboard>

          <app-collapse-card-dashboard
            iconsrc="fa-box highlightIcon"
            title="Orders & Tracking"
            heading="View Order History"
            apphref="user/your-orders"
          >
            <Link href="/contact-us">
              <a>
                <div
                  className="user_info_card"
                  style={{ position: "relative" }}
                >
                  <div
                    className="mat-ripple"
                    style={{ float: "left", width: "100%" }}
                    // onClick={() =>
                    //   this.setState({
                    //     support: false,
                    //     needhelp: this.state.needhelp ? false : true,
                    //   })
                    // }
                  >
                    <div className="wallets_Cards">
                      <svg viewBox="0 0 512 512">
                        <path
                          fill="currentColor"
                          d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                        ></path>
                      </svg>
                      {/**/}
                      {/**/}
                    </div>

                    <div className="smhighlightHolder">
                      <span className="card_title">Need &amp; Help</span>
                      <span
                        className="card_link_btn ng-star-inserted"
                        style={{ color: "gray" }}
                      >
                        24 x 7 Help Support
                      </span>
                      {/**/}
                    </div>

                    <div className="openMoreIcon">
                      <svg viewBox="0 0 192 512">
                        <path
                          fill="currentColor"
                          d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  {/**/}

                  {/* {this.state.needhelp ? (
                <div className="allPaymentOpt">
                  <ul>
                    <li>
                      <Link href="/contact-us">
                        <a>
                          <div className="smhighlightHolder">
                            <span className="card_title">
                              24 x 7 service support
                            </span>
                          </div>
                          <div className="openMoreIcon">
                            <svg viewBox="0 0 192 512">
                              <path
                                fill="currentColor"
                                d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="faq">
                        <a>
                          <div className="smhighlightHolder">
                            <span className="card_title">
                              FAQ - frequently asked question
                            </span>
                          </div>
                          <div className="openMoreIcon">
                            <svg viewBox="0 0 192 512">
                              <path
                                fill="currentColor"
                                d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : null} */}
                </div>
              </a>
            </Link>
          </app-collapse-card-dashboard>

          <app-collapse-card-dashboard
            iconsrc="fa-box highlightIcon"
            title="Orders & Tracking"
            heading="View Order History"
            apphref="user/your-orders"
          >
            <div className="user_info_card" style={{ position: "relative" }}>
              <div
                matripple
                className="mat-ripple"
                style={{ float: "left", width: "100%" }}
              >
                <div className="wallets_Cards">
                  <svg viewBox="0 0 512 512">
                    <path
                      fill="currentColor"
                      d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                    ></path>
                  </svg>
                  {/**/}
                  {/**/}
                </div>

                <Link href="/account-setting">
                  <a>
                    <div className="smhighlightHolder">
                      <span className="card_title">Account &amp; Setting</span>
                      <span
                        className="card_link_btn ng-star-inserted"
                        style={{ color: "gray" }}
                      >
                        Manage Your Account
                      </span>
                      {/**/}
                    </div>
                  </a>
                </Link>

                <Link href="/account-setting">
                  <a>
                    <div className="openMoreIcon">
                      <svg viewBox="0 0 192 512">
                        <path
                          fill="currentColor"
                          d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </Link>
              </div>
              {/**/}
            </div>
          </app-collapse-card-dashboard>

          <app-collapse-card-dashboard
            iconsrc="fa-box highlightIcon"
            title="Orders & Tracking"
            heading="View Order History"
            apphref="user/your-orders"
          >
            <div className="user_info_card alnn" style={{ position: "relative" }}>
              <Link href="/login">
                <a>
                  <div
                    matripple
                    className="mat-ripple"
                    style={{ float: "left", width: "100%" }}
                  >
                    <div className="wallets_Cards clcg">
                      <svg viewBox="0 0 512 512">
                        <path
                          fill="currentColor"
                          d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
                        ></path>
                      </svg>
                      {/**/}
                      {/**/}
                    </div>
                    <div className="smhighlightHolder clcg">
                      <span className="card_title cchng">Logout</span>
                      <span
                        className="card_link_btn ng-star-inserted"
                        style={{ color: "gray" }}
                      >
                        {/* View Order History */}
                      </span>
                      {/**/}
                    </div>
                    <div className="openMoreIcon">
                      <svg viewBox="0 0 192 512">
                        <path
                          fill="currentColor"
                          d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
              {/**/}
            </div>
          </app-collapse-card-dashboard>
        </section>

        <Link href="https://svayam.in/">
          <a>
            <div
              class="ng-tns-c88-2"
              style={{
                fontSize: "12px",
                textAlign: "center",
                float: "left",
                color: "gray",
                width: "100%",
                marginTop: "20px",
              }}
            >
              {" "}
              ©<span>2020. Svayam Incarnation (P) Ltd.</span>
            </div>
          </a>
        </Link>

        <div className="copyrightb" style={{ color: "gray" }}>
          <span
            className="w-100 float-l mt-2 mb-2 f-09"
            style={{
              textAlign: "center",
              marginBottom: "20px !important",
              fontSize: "12px",
              float: "left",
              color: "grey",
            }}
          >
            भारत में निर्मित{" "}
            <img
              src="https://api.yamunaa.com/image/flags/in.png"
              style={{ paddingRight: "17px", paddingLeft: "8px" }}
            />
          </span>
        </div>
        {/* =================================================================================== */}
      </div>
    );
  }
}

export default Themes;
