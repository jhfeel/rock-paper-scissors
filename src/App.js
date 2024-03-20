import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("???");
  const [computerResult, setComputerResult] = useState("???");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setUserResult(judgement(choice[userChoice], computerChoice));
    setComputerResult(judgement(computerChoice, choice[userChoice]));
  };

  const judgement = (self, opponent) => {
    if (self.name === opponent.name) return "TIE";
    else if (self.name === "Rock")
      return opponent.name === "Scissors" ? "WIN" : "LOSE";
    else if (self.name === "Scissors")
      return opponent.name === "Paper" ? "WIN" : "LOSE";
    else if (self.name === "Paper")
      return opponent.name === "Rock" ? "WIN" : "LOSE";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];

    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={userResult} />
        <Box title="Computer" item={computerSelect} result={computerResult} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
