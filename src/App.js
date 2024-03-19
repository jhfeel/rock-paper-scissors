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

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        {/* <Box title="Computer" /> */}
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
