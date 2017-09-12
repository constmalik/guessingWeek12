import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


const data = {
  currentAnswer: "",
  answers: [],
  gameMode: "",
  correctNum: 0,
  currentMessage: "",
  inProgress: false
};
class App extends Component {
  constructor() {
    super();
    this.state = data;
    this.startStandardGame = this.startStandardGame.bind(this);
    this.startExpertGame = this.startExpertGame.bind(this);
  }

  startStandardGame() {
    let standardGame = Object.assign({}, this.state.game);
    let random = Math.floor((Math.random() * 10) + 1);;
    let message = "Pick a number between 1 and 10";

    this.setState({
      gameMode: "Standard",
      correctNum: random,
      currentMessage: message,
      inProgress: true,
      answers: []
    });
  }
  startExpertGame() {
    let expertGame = Object.assign({}, this.state.game);
    let random = Math.floor((Math.random() * 100) + 1);;
    let message = "Pick a number between 1 and 100";

    this.setState({
      gameMode: "Expert",
      correctNum: random,
      currentMessage: message,
      inProgress: true,
      answers: []
    })
  }
  getUserInput = (event) => {
    var guess = event.target.value;
    this.setState({
      currentAnswer: guess
    });
  }
  handleSubmitClick = (event) => {
    let userAnswers = this.state.answers.slice();
    let tooHigh = "Your guess was too high";
    let tooLow = "Your guess was too low";

    //check if number is incorrect and greater than correct number
    if(this.state.currentAnswer != this.state.correctNum && this.state.currentAnswer > this.state.correctNum) {
      alert(tooHigh);
    }

    //check if number is incorrect and greater than correct number
    if(this.state.currentAnswer != this.state.correctNum && this.state.currentAnswer < this.state.correctNum) {
      alert(tooLow);
    }

    if(this.state.currentAnswer = this.state.correctNum && this.state.gameMode === "Expert") {
      alert("You win!");
    }

    userAnswers.push(this.state.currentAnswer);
    this.setState({
      currentAnswer: "",
      answers: userAnswers
    })
  }
  handleResetClick = (event) => {
    this.setState({
      currentAnswer: "",
      answers: [],
      gameMode: "",
      correctNum: 0,
      currentMessage: ""
    })
  }
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Start Game</h1>
           <button className="stanbtn" onClick={this.startStandardGame}>Standard</button>
           <button className="expbtn" onClick={this.startExpertGame}>Expert</button>
        </div>
        <div className="questioncontainer">
          <p>{this.state.currentMessage}</p>
          <input type="number" min="1" max="100" onChange={this.getUserInput} value={this.state.currentAnswer}/>
          <input type="submit" onClick={this.handleResetClick} value="Reset"/>
          <input type="submit" onClick={this.handleSubmitClick}/>
          <div className="answer">
            <p>This is your {this.state.answers.length} guess.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
