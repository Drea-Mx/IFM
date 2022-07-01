import React from "react";
import Clock from "./Clock";

const App = () => {
  let deadline = "August, 9, 2022";

  return (
    <div className="App">
      <Clock deadline={deadline} />
    </div>
  );
};

export default App;
