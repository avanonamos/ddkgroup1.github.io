import { combineReducers } from "redux";
import userReducer from "./user.reducer.js";
import usersReducer from "./users.reducer.js";
import postReducer from "./post.reducer";
import errorReducer from "./error.reducer";
import allPostsReducer from "./allPosts.reducer";
import trendingReducer from "./trending.reducer";
export default combineReducers({
  userReducer,
  usersReducer,
  postReducer,
  errorReducer,
  allPostsReducer,
  trendingReducer,
});
