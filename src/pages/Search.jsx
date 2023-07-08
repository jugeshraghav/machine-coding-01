import { useState } from "react";
import { FaBackward } from "react-icons/fa";

import "../App.css";
import { useData } from "../contexts/DataContext";
import { BookCard } from "../components/BookCard";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate();
  const {
    state: { books },
  } = useData();
  const [searchText, setSearchText] = useState("");

  let filteredBooks = books?.filter(
    ({ title, author }) =>
      title.toLowerCase().trim().includes(searchText.toLowerCase().trim()) ||
      author.toLowerCase().trim().includes(searchText.toLowerCase().trim())
  );

  return (
    <>
      <div className="search-input-container">
        <FaBackward className="icon" onClick={() => navigate("/")} />
        <input
          value={searchText}
          placeholder="Search Books"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="shelf-content-container">
        {searchText.length === 0 ? (
          <h2>Type Something to search</h2>
        ) : filteredBooks.length > 0 ? (
          filteredBooks?.map((book) => <BookCard book={book} />)
        ) : (
          <h2>No Books Found</h2>
        )}
      </div>
    </>
  );
};
