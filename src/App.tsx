import React, { useState } from "react";
import Search from "./Components/Search";
import Card, { WordData } from "./Components/Card";
import "./App.css";

const App = () => {
  // The word in the search bar
  const [word, setWord] = useState<string>("");

  // The array of words returned from the query
  const [wordData, setWordData] = useState<WordData | undefined>();

  // Has the page run a query?
  const [queried, setQueried] = useState<string>("");

  const querySearch = async () => {
    // If there is no word or if the previously queried word, matches
    // the current word, don't submit an API request
    if (!word || queried === word) return;

    // Update queried word
    setQueried(word);

    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      // If the response returns a 404, the word does not exist
      // in the API, so we set the word data to undefined
      if (res.status === 404) {
        setWordData(undefined);
        return;
      }

      const data = (await res.json())[0];
      setWordData(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <Search setWord={setWord} querySearch={querySearch} />
      {queried ? <Card data={wordData} /> : <></>}
    </div>
  );
};

export default App;
