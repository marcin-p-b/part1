import { useState, useEffect } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [maxVotes, setMaxVotes] = useState(0);
  const [maxVotesAnec, setMaxVotesAnec] = useState(0);

  const handleSelected = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length - 1 - 0 + 1)));
  };

  const handleVotes = () => {
    const newVotes = votes.map((c, i) => (i === selected ? c + 1 : c));
    setVotes(newVotes);
  };

  useEffect(() => {
    const mostVotesAnec = () => {
      let max = 0;
      for (let i = 0; i < votes.length; i++) {
        if (votes[i] > max) {
          max = votes[i];
          setMaxVotes(max);
          setMaxVotesAnec(i);
        }
      }
    };
    mostVotesAnec();
  }, [votes]);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleSelected}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxVotesAnec]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  );
};

export default App;
