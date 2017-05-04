import { combineReducers } from 'redux';
import BoooksReducer from './reducer_books.js';

const RootReducer = combineReducers({
  books: BooksReducer
});

export default RootReducer;
