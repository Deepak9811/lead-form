import React, { PureComponent } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class Profile extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
          bank_name : "",
          acc_number : "",
          ifsc : "",
          c_acc_number : ""
        }
    }

    componentDidMount(){
      var UI = JSON.parse(localStorage.getItem("UI"));
      if(!UI){
        Router.push("/")
      }
      setTimeout(() => {
        var agent = this.props.printID("agent");
        if(agent){
          this.setState({ disable : true })
          var agent = JSON.parse(agent);
          this.setState({
              bank_name : agent.bank_name,
              acc_number : agent.acc_number,
              c_acc_number : agent.acc_number,
              ifsc : agent.ifsc,
          })
        }
      }, 100);
     
    }


    setInputValue(target, value) {
      this.setState({
        [target]: value,
        err_message: false,
      })
    }

    submitRequest(e){
      e.preventDefault();
      if(this.state.bank_name && this.state.acc_number && this.state.ifsc && this.state.c_acc_number){
        if(this.state.acc_number === this.state.c_acc_number){
          alert("I confirm that the banking detail and information I have submitted are correct.");
          this.sendDataToAgent();
        }
        else{
          this.setState({ err_message : "Confirm account number is not equal to your account number." })
        }
      }
      else{
        this.setState({
          err_message : "Please fill all the required fields."
        })
      }
    }

    sendDataToAgent(){
      fetch(`${process.env.URL}/agent?uid=${this.props.printID("user_id")}`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": 1
        },
        body : JSON.stringify({
          agent : JSON.stringify({
            bank_name : this.state.bank_name,
            acc_number : this.state.acc_number,
            ifsc : this.state.ifsc,
          })
        })
    }).then((result) => {
        result.json().then(
            (resp) => {
              if(resp.response == "ok"){
                this.setState({ disable : true }) 
                alert("Updated");
                Router.push("/thankyou")
                this.props.UPDATE_MS()
              }
              else{
                this.setState({ err_message : 'Something wents wrong.' })
              }
            })
    })
    .catch((error) => {
        this.setState({ err_message : "Something wents wrong." })
    });
    }

    render() {
        return (
            <div className="wrapper">
        <div className="authentication-header" />
        
        <header className="login-header shadow">
          <nav className="navbar navbar-expand-lg navbar-light bg-white rounded fixed-top rounded-0 shadow-sm">
            <div className="container-fluid">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="/logo.png" width={200} alt="" />
                </a>
              </Link>
            </div>
          </nav>
        </header>
        <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-4">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
              <div className="col mx-auto">
                <div className="card mt-5 mt-lg-0 mt_pi">
                  <div className="card-body">
                    <div className="p-4 rounded">
                      <div className="text-center">
                        <h3 className>Bank Account Form</h3>
                        <p>The name and photo associated with your Google account will be recorded when you upload files and submit this form</p>
                        <p>Not {this.props.printID("firstname") + " " + this.props.printID("lastname")}? <Link href="/"><a>Go back</a></Link> </p>
                      </div>

                      <div className="form-body">

                        <form onSubmit={(e) => this.submitRequest(e)} className="row g-3">

                          <div className="col-12">
                            <label htmlFor="inputEmailAddress" className="form-label">Bank Name <span style={{color:"red"}}>*</span></label>
                            <input disabled={this.state.disable} value={this.state.bank_name} required={true} type="text" onChange={(e) => this.setInputValue("bank_name", e.target.value)} className="form-control" id="inputEmailAddress" placeholder="Bank Name" />
                          </div>


                              <div className="col-12">
                                <label htmlFor="inputChoosePassword" className="form-label">Bank Account</label>
                                <p style={{fontSize:"12px"}} >Kindly mention the correct account only. We will not take any responsibility, if salary gets transferred into incorrect account. kindly double check the account number. कृपया केवल सही खाते का उल्लेख करें। यदि वेतन गलत खाते में स्थानांतरित हो जाता है, तो हम कोई जिम्मेदारी नहीं लेंगे। कृपया खाता संख्या की दोबारा जांच करें।</p>
                                <label htmlFor="inputChoosePassword" className="form-label">Bank Account Number <span style={{color:"red"}}>*</span></label>
                                <div className="input-group" id="show_hide_password">
                                  <input disabled={this.state.disable} value={this.state.acc_number} onChange={(e) => this.setInputValue("acc_number", e.target.value)} required type="password" id="inputChoosePassword" className="form-control border-end-0" placeholder="Bank Account Number" />
                                </div>
                              </div>


                              <div className="col-12">
                                <label htmlFor="inputChoosePassword" className="form-label">Confirm Bank Account Number <span style={{color:"red"}}>*</span></label>
                                <div className="input-group" id="show_hide_password">
                                  <input disabled={this.state.disable} value={this.state.c_acc_number} onChange={(e) => this.setInputValue("c_acc_number", e.target.value)} required type="text" id="inputChoosePassword" className="form-control border-end-0" placeholder="Confirm Bank Account Number" />
                                </div>
                              </div>


                              <div className="col-12">
                                <label htmlFor="inputChoosePassword" className="form-label">IFSC Code <span style={{color:"red"}}>*</span></label>
                                <div className="input-group" id="show_hide_password">
                                  <input disabled={this.state.disable} value={this.state.ifsc} onChange={(e) => this.setInputValue("ifsc", e.target.value)} required type="text" id="inputChoosePassword" className="form-control border-end-0" placeholder="IFSC Code" />
                                </div>
                              </div>

                                <div>
									                <label for="formFileLg" class="form-label">Upload your bank account proof (Bank Account Passbook/ Cancelled Check Only) <span style={{color:"red"}}>*</span></label>
									                <input disabled={this.state.disable} class="form-control" id="formFileLg" type="file"/>
								                </div>

                                {
                                    this.state.err_message ?
                                    <span style={{ color: "red", fontSize: "13px" }} >{this.state.err_message}</span>
                                    : null
                                }

                          <div className="col-12">
                            <div className="d-grid">
                              <button disabled={this.state.disable} type="submit" className="btn btn-primary">Continue</button>
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

export default Profile