import React, { createRef, KeyboardEvent } from "react";
import "./../Styles/Search.css";

interface ISearch {
  setWord: React.Dispatch<React.SetStateAction<string>>;
  querySearch: () => Promise<void>;
}

const Search = ({ setWord, querySearch }: ISearch) => {
  const searchRef = createRef<HTMLInputElement>();

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "Enter") return;

    querySearch();
  };

  const onChange = () => {
    setWord(searchRef.current?.value || "");
  };

  return (
    <input
      ref={searchRef}
      className="search-input"
      type="text"
      placeholder="Search..."
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  );
};

export default Search;
