import { useState } from "react";
import search from "./img/search.png";
import s from "./search.module.css";
const Search = () => {
  const [isImageVisible, setImageVisible] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value.trim() === "") {
      setImageVisible(true);
    } else {
      setImageVisible(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === " " && inputValue.trim() === "") {
      setInputValue("");
      event.preventDefault();
    }
  };
  return (
    <>
      <input
        placeholder="Поиск"
        className={s.search}
        type="search"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {isImageVisible && (
        <img src={search} alt="no img search" className={s.inputImage} />
      )}
    </>
  );
};

export default Search;
