const initialState = {
  bookItemDetail: {},
  favouritBooks: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_DETAILS":
      return {
        ...state,
        bookItemDetail: action.bookDetails,
      };
    case "SAVE_IN_BOOKMARK":
      const findSimillar = state.favouritBooks.find(
        (el) => el.title === action.payload.favouritBook.title
      );
      if (findSimillar) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          favouritBooks: [...state.favouritBooks, action.payload.favouritBook],
        };
      }

    case "REMOVE_FROM_BOOKMARK":
      const newFavouritBooks = state.favouritBooks.filter(
        (el) => el.title !== action.payload.favouritBook.title
      );
      return {
        ...state,
        favouritBooks: newFavouritBooks,
      };
    default:
      return state;
  }
};
