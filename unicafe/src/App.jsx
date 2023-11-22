import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, all }) => {
  const average = (good * 1 + neutral * 0 + bad * -1) / all;
  const positive = (good * 100) / all;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={`${positive} %`} />
      </tbody>
    </table>
  );
};

const Button = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <div>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };
  return (
    <>
      <h2>give feedback</h2>
      <Button
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
      />
      <h2>statistics</h2>
      {all ? (
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      ) : (
        <div>No feedback given</div>
      )}
    </>
  );
};

export default App;
