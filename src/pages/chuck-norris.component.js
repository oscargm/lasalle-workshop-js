import * as React from "react";

export const ChuckNorrisJokes = () => {
  const [joke, setJoke] = React.useState("");

  const getJoke = () => {
    fetch("http://api.icndb.com/jokes/random").then((response) =>
      response.json().then((serialized) => setJoke(serialized.value.joke))
    );
  };

  return (
    <div>
      {joke !== "" ? <p>{joke}</p> : null}
      <button onClick={getJoke}>
        {joke !== "" ? "Refresh joke !" : "Get some joke !"}
      </button>
    </div>
  );
};
