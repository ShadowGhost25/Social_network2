import { useState } from "react";
import search from "./img/search.png";
import s from "./search.module.css";
const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value === " " && inputValue === "") {
      return;
    }
    setInputValue(value);
  };

  return (
    <div className={s.blockSearch}>
      <input
        placeholder="Поиск"
        className={s.search}
        type="search"
        value={inputValue}
        onChange={handleInputChange}
      />
      {!inputValue && (
        <img src={search} alt="no img search" className={s.inputImage} />
      )}
    </div>
  );
};

export default Search;
