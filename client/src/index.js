import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App.js";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { getUsers } from "./actions/users.actions.js";
import { getPosts } from "./actions/post.actions.js";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
store.dispatch(getUsers());
store.dispatch(getPosts());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
