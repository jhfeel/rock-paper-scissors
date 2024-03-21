import React, { Component } from "react";
import "./App.css";
import BoxClass from "./components/BoxClass";

const choice = {
  rock: {
    name: "Rock",
    img: "https://images.unsplash.com/photo-1589694502732-74708bde4e3e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJvY2t8ZW58MHx8MHx8fDA%3D",
  },
  scissors: {
    name: "Scissors",
    img: "https://images.unsplash.com/photo-1567034923558-600a5edab1d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNjaXNzb3J8ZW58MHx8MHx8fDA%3D",
  },
  paper: {
    name: "Paper",
    img: "https://images.unsplash.com/photo-1513710281312-7a43f9cdbfcc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBhcGVyJTIwYTR8ZW58MHx8MHx8fDA%3D",
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: choice.default,
      computerSelect: choice.default,
      userResult: "???",
      computerResult: "???",
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      userResult: this.judgement(choice[userChoice], computerChoice),
      computerResult: this.judgement(computerChoice, choice[userChoice]),
    });
  };

  judgement = (self, opponent) => {
    if (self.name === opponent.name) return "TIE";
    else if (self.name === "Rock")
      return opponent.name === "Scissors" ? "WIN" : "LOSE";
    else if (self.name === "Scissors")
      return opponent.name === "Paper" ? "WIN" : "LOSE";
    else if (self.name === "Paper")
      return opponent.name === "Rock" ? "WIN" : "LOSE";
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];

    return choice[final];
  };

  render() {
    return (
      <div>
        <div>
          <div className="main">
            <BoxClass
              title="You"
              item={this.state.userSelect}
              result={this.state.userResult}
            />
            <BoxClass
              title="Computer"
              item={this.state.computerSelect}
              result={this.state.computerResult}
            />
          </div>
          <div className="main">
            <button onClick={() => this.play("scissors")}>가위</button>
            <button onClick={() => this.play("rock")}>바위</button>
            <button onClick={() => this.play("paper")}>보</button>
          </div>
        </div>
      </div>
    );
  }
}
