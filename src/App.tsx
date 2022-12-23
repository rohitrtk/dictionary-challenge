import React, { useState, useEffect } from "react";
import Search from "./Components/Search";
import Card, { WordData } from "./Components/Card";
import "./App.css";

const App = () => {
  // The word in the search bar
  const [word, setWord] = useState<string>("");

  // The array of words returned from the query
  const [wordData, setWordData] = useState<WordData>();

  const querySearch = async () => {
    if (!word) return;

    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await res.json();
    setWordData(data[0]);
  };

  useEffect(() => {
    console.log(wordData);
  }, [wordData]);

  return (
    <div className="App">
      <Search setWord={setWord} querySearch={querySearch} />
      {wordData ? <Card data={wordData} /> : <></>}
    </div>
  );
};

export default App;
