import { useState } from "react";
import Header from "./Components/Header";
import Buttons from "./Components/Buttons";
import Statistics from "./Components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood((g) => g + 1);

  const handleNeutral = () => setNeutral((n) => n + 1);

  const handleBad = () => setBad((b) => b + 1);

  return (
    <>
      <Header />
      <Buttons
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
      />
      <h1>statistics</h1>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default App;
