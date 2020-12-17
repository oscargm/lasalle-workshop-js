import * as React from "react";
import "./App.css";
import { ChuckNorrisJokes } from "./pages/chuck-norris.component";
import { Kittens } from "./pages/kittens.component";
const pages = ["chuck-norris", "kittens"];

function App() {
  const [selectedPage, setSelectedPage] = React.useState(pages[0]);
  const optionChangeHandler = (event) => {
    console.log("event", event.target.value);
    setSelectedPage(pages[event.target.value]);
  };

  React.useEffect(() => {
    console.log("selectedValue", selectedPage, pages);
  }, [selectedPage]);
  return (
    <div className="App">
      <div>
        <select onChange={optionChangeHandler} value={selectedPage}>
          {pages.map((page, pageIndex) => (
            <option value={pageIndex} key={`page-${pageIndex}`}>
              {page}
            </option>
          ))}
        </select>
      </div>
      <div>
        {selectedPage === pages[0] ? <ChuckNorrisJokes /> : <Kittens />}
      </div>
    </div>
  );
}

export default App;
