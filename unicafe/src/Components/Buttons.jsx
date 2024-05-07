import React from "react";

export default function Buttons({ handleGood, handleNeutral, handleBad }) {
  return (
    <>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
    </>
  );
}
