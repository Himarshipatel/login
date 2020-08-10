import React from "react";
//import Main from "./components/main";
import Navbar from "./components/Navbar.js";
import "./App.css";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers/rootReducers";

// const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <Navbar />
    </div>
    // </Provider>
  );
}

export default App;
