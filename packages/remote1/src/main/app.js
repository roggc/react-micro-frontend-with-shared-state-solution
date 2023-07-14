import React from "react";
import { useSlice } from "shared_state";
import { useSlice as useLocalSlice } from "../slices";

const App = () => {
  const [, setCount1] = useSlice("count1");
  const [, reduxDispatch, { increment }] = useSlice("count2");
  const [name] = useLocalSlice("name");
  return (
    <>
      <div>
        <button onClick={() => setCount1((c) => c + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => reduxDispatch(increment())}>+</button>
      </div>
      <div>{name}</div>
    </>
  );
};

export default App;
