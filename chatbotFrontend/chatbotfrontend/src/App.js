
import './App.css';
import React, { Component } from  "react";
import { connect, sendMsg } from "./api"
import Header from "./components/Header/Header"
import ChatHistory from './components/Header/ChatHistory';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount(){
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
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
        <ChatHistory chatHistory={this.state.chatHistory} />
        <button onClick={this.send}>Hit</button>
      </div>
    )
  }
}

export default App;
