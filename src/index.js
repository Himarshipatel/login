import React from "react";
import ReactDOM from "react-dom";
//import App from "./App.js";

import Main from "./components/main";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducers";
//import { ToastContainer } from "react-toastify";
//import { faSortAlphaUp } from "@fortawesome/free-solid-svg-icons";
//import reducer from "./reducers/reducers.js";
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
