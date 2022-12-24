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
  data: WordData | undefined;
}

const Card = ({ data }: ICard) => {
  return (
    <div className="card">
      {data ? (
        <>
          <h1>{`${data.word.charAt(0).toUpperCase()}${data.word.slice(1)}`}</h1>
          {data.meanings.map((meaning) => {
            const { partOfSpeech, definitions } = meaning;

            return definitions.map((d) => {
              const { definition } = d;
              return (
                <Meaning partOfSpeech={partOfSpeech} meaning={definition} />
              );
            });
          })}
        </>
      ) : (
        <h1>Unable to find word</h1>
      )}
    </div>
  );
};

export default Card;
