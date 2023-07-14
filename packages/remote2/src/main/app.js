import React from "react";
import { useSlice } from "shared_state";

const App = () => {
  const [count1] = useSlice("count1");
  const [count2] = useSlice("count2");
  return (
    <>
      <div>{count1}</div>
      <div>{count2}</div>
    </>
  );
};

export default App;
