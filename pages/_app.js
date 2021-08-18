import React, { PureComponent } from 'react';
import "../css/app.css";
import "../css/bootstrap.min.css";




class MyApp extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
        UPDATE_LOCAL : this.UPDATE_LOCAL,
        printID : this.printID,
        UPDATE_MS : this.UPDATE_MS,
    }
  }


  componentDidMount(){
    this.UPDATE_LOCAL()
  }

  UPDATE_LOCAL=()=>{
    var UI = JSON.parse(localStorage.getItem("UI"));
    if(UI){
      this.setState({
        user_data : UI
      })
    }
  }


  UPDATE_MS=()=>{
    var UI = JSON.parse(localStorage.getItem("UI"));
    if(UI){
      fetch(`${process.env.URL}/user?uid=` + UI.user_id, {
        headers: {
            Authorization:  1
        },
        method: "POST",
      }).then(res => {
        res.json().then(result => {
          if(result[0]){
            localStorage.setItem('UI', JSON.stringify(result[0]))
            setTimeout(() => {
              this.UPDATE_LOCAL();
            }, 100);
          }
        })
      })
      
    }
  
  }


  printID=(target)=>{
    if(this.state.user_data){
      return this.state.user_data[target]
    } 
  }

  render() {
    var  {Component, pageProps} = this.props
    return (
      <React.Fragment>
        
        <Component {...pageProps} {...this.state} />
      </React.Fragment>
    )
  }
}

export default MyApp
