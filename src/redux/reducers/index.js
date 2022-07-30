import { combineReducers } from "redux";
import { blogsReducer, selectedBlogsReducer } from "./productsReducer";
const reducers = combineReducers({
  allBlogs: blogsReducer,
  blog: selectedBlogsReducer,
});
export default reducers;
