import { createContext, useContext, useReducer } from "react";
import { books } from "../constants/Data";
import { v4 as uuid } from "uuid";

//reducer
const initial_state = {
  books: books,
};
const reducer = (state, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case "CHANGE_SHELF":
      return { ...state, books: payLoad };
  }
};

//context
const DataContext = createContext({ state: {}, dispatch: () => {} });

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);

  const sectionOfBook = [
    {
      id: uuid(),
      shelf: "Currently Reading",
      shelfBooks: state?.books?.filter(
        ({ shelfCategory }) => shelfCategory === "Currently Reading"
      ),
    },
    {
      id: uuid(),
      shelf: "Want to Read",
      shelfBooks: state?.books?.filter(
        ({ shelfCategory }) => shelfCategory === "Want to Read"
      ),
    },
    {
      id: uuid(),
      shelf: "Read",
      shelfBooks: state?.books?.filter(
        ({ shelfCategory }) => shelfCategory === "Read"
      ),
    },
  ];
  return (
    <DataContext.Provider value={{ state, dispatch, sectionOfBook }}>
      {" "}
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
export default DataProvider;
