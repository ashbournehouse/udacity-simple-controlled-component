import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  	// As this is a simple exercise, put the state inside the main app component
  state = {echoText: ""}
  
  handleChange = (event) => {
    this.setState({echoText:event.target.value})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
            <input 
              type="text"
              value={this.state.echoText}
              placeholder="Say Something" 
              onChange={this.handleChange}
            />
          <p className="echo">Echo:</p>
          <p>This should mirror the text you typed into the input field.</p>
        </div>
      </div>
    );
  }
}

export default App;
