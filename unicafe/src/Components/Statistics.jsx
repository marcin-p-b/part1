import React from "react";
import StatisticLine from "./StatisticLine";

export default function Statistics({ good, neutral, bad }) {
  const average = (good - bad) / (good + neutral + bad);
  const positive = `${((good / (good + neutral + bad)) * 100).toFixed(13)}%`;
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </>
  );
}
