import React from "react";
import Clock from "./Clock";

const App = () => {
  let deadline = "August, 23, 2022";

  return (
    <div className="App">
      <Clock deadline={deadline} />
    </div>
  );
};

export default App;
