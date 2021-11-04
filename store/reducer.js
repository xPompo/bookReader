const initialState = {
  bookItemDetail: {},
  favouritBooks: [],
  bookmarkActive: false,
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
          bookmarkActive: true,
        };
      } else {
        return {
          ...state,
          favouritBooks: [...state.favouritBooks, action.payload.favouritBook],
          bookmarkActive: true,
        };
      }

    case "REMOVE_FROM_BOOKMARK":
      const newFavouritBooks = state.favouritBooks.filter(
        (el) => el.title !== action.payload.favouritBook.title
      );
      return {
        ...state,
        favouritBooks: newFavouritBooks,
        bookmarkActive: false,
      };
    default:
      return state;
  }
};
