import * as React from "react";

export const ChuckNorrisQuotes = () => {
  const [joke, setJoke] = React.useState("");

  const getQuote = () => {
    fetch("http://api.icndb.com/jokes/random").then((response) =>
      response.json().then((serialized) => setJoke(serialized.value.joke))
    );
  };

  return (
    <div>
      {joke !== "" ? <p>{joke}</p> : null}
      <button onClick={getQuote}>
        {joke !== "" ? "Refresh joke !" : "Get some joke !"}
      </button>
    </div>
  );
};
