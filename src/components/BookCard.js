import "../App.css";
import { useData } from "../contexts/DataContext";
export const BookCard = ({ book }) => {
  const {
    state: { books },
    dispatch,
  } = useData();
  const changeShelfHandler = (e, bookId) => {
    const updatedBooksArray = books?.map((book) =>
      book._id === bookId ? { ...book, shelfCategory: e.target.value } : book
    );
    dispatch({ type: "CHANGE_SHELF", payLoad: updatedBooksArray });
  };
  return (
    <>
      <div className="book-card-container">
        <img src={book?.coverImg} alt={book?.title} />
        <div className="book-card-content">
          <div>
            <p className="book-card-title">{book?.title}</p>
            <p className="book-card-author">{book?.author}</p>
          </div>
          <div className="book-card-expand-btn">
            <select
              value={book?.shelfCategory}
              onChange={(e) => changeShelfHandler(e, book?._id)}
            >
              <option value="Currently Reading">currently Reading</option>
              <option value="Want to Read">Want to Read</option>
              <option value="Read">Read</option>
              <option value="None">None</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
