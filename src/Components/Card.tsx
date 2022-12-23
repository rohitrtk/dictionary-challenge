import React from "react";
import "./../Styles/Card.css";

export type WordData = {
  word: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
    }[];
  }[];
};

interface IMeaning {
  partOfSpeech: string;
  meaning: string;
}

const Meaning = ({ partOfSpeech, meaning }: IMeaning) => {
  return (
    <div className="meaning">
      <p>
        <i>{partOfSpeech}</i>
      </p>
      <p>{meaning}</p>
    </div>
  );
};

interface ICard {
  data: WordData;
}

const Card = ({ data }: ICard) => {
  const { word, meanings } = data;

  return (
    <div className="card">
      <h1>{`${word.charAt(0).toUpperCase()}${word.slice(1)}`}</h1>
      {meanings.map((meaning) => {
        const { partOfSpeech, definitions } = meaning;

        return definitions.map((d) => {
          const { definition } = d;
          return <Meaning partOfSpeech={partOfSpeech} meaning={definition} />;
        });
      })}
    </div>
  );
};

export default Card;
