import { BookCard } from "../components/BookCard";
import { useData } from "../index";

import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { sectionOfBook } = useData();
  const navigate = useNavigate();

  return (
    <>
      {sectionOfBook?.map(({ id, shelf, shelfBooks }) => (
        <div key={id} className="shelf">
          <div className="shelf-header">
            <h1>{shelf}</h1>
            {shelf === "Currently Reading" && (
              <FaSearch className="icon" onClick={() => navigate("/search")} />
            )}
          </div>
          <hr></hr>
          <div className="shelf-content-container">
            {shelfBooks.length > 0 ? (
              shelfBooks?.map((book) => <BookCard book={book} />)
            ) : (
              <h2>No books in {shelf} Shelf</h2>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
