import * as React from "react";

export const Kittens = () => {
  const [state, setState] = React.useState(null);
  const getCat = () => {
    fetch("https://api.thecatapi.com/v1/images/search").then((response) => {
      response.json().then((serialized) => {
        setState(serialized[0]);
      });
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <button onClick={getCat}>Show me a cat</button>
      </div>
      {state !== null ? (
        <img
          src={state.url}
          width={state.width}
          height={state.height}
          alt={"kitten"}
        />
      ) : null}
    </div>
  );
};
