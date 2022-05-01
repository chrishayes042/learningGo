
import './App.css';
import React, { Component } from  "react";
import { connect, sendMsg } from "./api"
import Header from "./components/Header/Header"

class App extends Component{
  constructor(props) {
    super(props)
    connect();
  }
  // send method to send a chat command
  send(){
    console.log("Hello");
    sendMsg("hello");
  }
  // render the button
  render(){
    return(// returning a button with onClick action event to send the send method
      
      <div className="App">
        <Header /> 
        <button onClick={this.send}>Hit</button>
      </div>
    )
  }
}

export default App;
