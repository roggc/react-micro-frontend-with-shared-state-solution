import React from "react";
import { useSlice } from "shared_state";

const App = () => {
  const [, setCount1] = useSlice("count1");
  const [, reduxDispatch, { increment }] = useSlice("count2");
  return (
    <>
      <div>
        <button onClick={() => setCount1((c) => c + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => reduxDispatch(increment())}>+</button>
      </div>
    </>
  );
};

export default App;
