import * as React from "react";
import "./App.css";
import { ChuckNorrisJokes } from "./pages/chuck-norris.jokes";

const pages = ["chuck-norris", "kittens"];

function App() {
  const [selectedPage, setSelectedPage] = React.useState(pages[0]);
  const optionChangeHandler = (event) => {
    setSelectedPage(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      <select onChange={optionChangeHandler}>
        {pages.map((page, pageIndex) => (
          <option
            value={pageIndex}
            key={`page-${pageIndex}`}
            selected={page === selectedPage}
          >
            {page}
          </option>
        ))}
      </select>
      <div>
        {selectedPage === pages[0] ? (
          <ChuckNorrisJokes />
        ) : (
          <span>Kittens</span>
        )}
      </div>
    </div>
  );
}

export default App;
