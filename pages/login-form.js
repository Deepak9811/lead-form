import React, { PureComponent } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Countdown from "react-countdown";

class logInForm extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      resend : false,
    }
  }

  componentDidMount(){
    var timer = localStorage.getItem("timer")
    if(timer){
      if(timer < new Date().getTime()){
        this.setState({
          resend : false,
        })
      }
      else{
        this.setState({
          resend : Number(timer),
        })
      }
    }
  }

  setInputValue(target, value) {
    this.setState({
      [target]: value,
      err_message: false,
    })
  }

  submitRequest(e) {
    e.preventDefault();
    if (this.state.mobile == "") {
      this.setState({ err_message: "Please enter something." })
    }

    else if (this.state.mobile.length < 10 || this.state.mobile.length > 10) {
      this.setState({
        err_message: "Please enter a valid mobile number."
      })
    }

    else if (this.state.mobile !== "" && !this.state.otp_show) {
      this.sendOTP(this.state.mobile)
      this.setState({
        otp_show: true
      })
    }

    else if (this.state.mobile !== "" && this.state.otp_show) {
      if (this.state.otp !== "") {
          this.loginWithOTP()
      }
      else {
        this.setState({
          err_message: "Please enter OTP."
        })
      }
    }
    
  }

  sendOTP(mobile_no){
    let formdata = new FormData()
    formdata.append('email', mobile_no)
    formdata.append('resend', 1)

    fetch(`${process.env.URL}/verify_otp`, {
      method: "POST",
      headers: {
        "Authorization": 1,
      },
      body: formdata
    }).then((result) => {
      result.json().then(
        (resp) => {
          console.log('VERIFY_OTP_RESPONSE', resp )
        })
    })
      .catch((error) => {
        console.log("Unable to send OTP")
      });
  }



  resend_otp(){
    this.sendOTP(this.state.mobile)
    var timer_time = localStorage.getItem("timer_time");
    var timestamp = Number(new Date().getTime())

    if(timer_time){
        localStorage.setItem("timer_time", Number(timer_time) + 1)
        localStorage.setItem("timer", new Date(timestamp + timer_time*60000).getTime())

        this.setState({
          resend : new Date(timestamp + timer_time*60000).getTime()
        })
    }
    else{
      localStorage.setItem("timer_time", "1")
      localStorage.setItem("timer", new Date(timestamp + 1*60000).getTime())
      this.setState({
        resend : new Date(timestamp + 1*60000).getTime()
      })
    }
  }


  onComplete(){
    this.setState({
      resend : false
    })
  }

  loginWithOTP(){
    fetch(`${process.env.URL}/login`, {
      method: "POST",
      headers: {
        "Authorization": 1,
      },
      body: JSON.stringify({
        email : this.state.mobile,
        utp : this.state.otp
      })
    }).then((result) => {
      result.json().then(
        (resp) => {
          console.log('LOGIN_RESPONSE', resp)
          if(resp.response == "ok"){
            this.getUserData(resp.user_id)
          }
          else{
            this.setState({ err_message  : "You have not registered yet in our server." })
          }
        
        })
    })
      .catch((error) => {
        console.log("LOGIN API NOT WORKING", error)
      });
  }



  getUserData(user_id){
    fetch(`${process.env.URL}/user?uid=` + user_id, {
      headers: {
          Authorization:  1
      },
      method: "POST",
    }).then(res => {
      res.json().then(result => {
        if(result[0]){
          
          localStorage.setItem('UI', JSON.stringify(result[0]))
          localStorage.removeItem("timer")
          localStorage.removeItem("timer_time")
          
          setTimeout(() => {
            Router.push("/enq-form")
            this.props.UPDATE_LOCAL();
          }, 100);
        }
      })
    })
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
                <div className="card mt-5 mt-lg-0">
                  <div className="card-body">
                    <div className="p-4 rounded">
                    <div className="container-fluid d-00">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="/logo.svg" width={50} style={{paddingBottom:"18px"}} alt="" />
                  {/* <span>Svayam Incarnation</span> */}
                </a>
              </Link>
            </div>
                      <div className="text-center">
                        <h3 className>Log in</h3>
                        <p>Please Login to your account.</p>
                      </div>

                      <div className="form-body">

                        <form onSubmit={(e) => this.submitRequest(e)} className="row g-3">

                          <div className="col-12">
                            <label htmlFor="inputEmailAddress" className="form-label">Mobile Number <span style={{color:"red"}}>*</span></label>
                            <input required={true} type="number" onChange={(e) => this.setInputValue("mobile", e.target.value)} className="form-control" id="inputEmailAddress" placeholder="Mobile Number" />
                          </div>

                          {
                            this.state.otp_show ?
                              <React.Fragment>
                                <div className="col-12">
                                  <label htmlFor="inputChoosePassword" className="form-label">Enter OTP <span style={{color:"red"}}>*</span></label>
                                  <div className="input-group" id="show_hide_password">
                                    <input onChange={(e) => this.setInputValue("otp", e.target.value)} required type="password" id="inputChoosePassword" className="form-control border-end-0" placeholder="Enter OTP" />
                                  </div>
                                </div>

                                <div class="col-md-6"/>
                                
                                <div class="col-md-6 text-end">	
                                {
                                !this.state.resend?
                                  <a href="#" onClick={()=> this.resend_otp() }>Resend OTP</a>
                                  :
                                  <p style={{fontSize:"12px", margin:0}} >
                                    Resend OTP in <Countdown className="time_clock" key={this.state.time_key} onComplete={()=> this.onComplete()} date={this.state.resend} daysInHours zeroPadDays={2} />
                                  </p>
                                }
                                </div>
                              
                              </React.Fragment>
                              : null
                          }

                          {
                            this.state.err_message ?
                              <span style={{ color: "red", fontSize: "13px" }} >{this.state.err_message}</span>
                              : null
                          }

                          <div className="col-12">
                            <div className="d-grid">
                              <button type="submit" className="btn btn-primary"><i className="bx bxs-lock-open" />Continue</button>
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

    )
  }
}

export default logInForm