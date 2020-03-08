import React from "react";
import ReactDOM from "react-dom";

import { SearchPage } from "./SearchBar/searchbar";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <SearchPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
