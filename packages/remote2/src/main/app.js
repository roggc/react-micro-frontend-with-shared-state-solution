import React from "react";
import { useSlice } from "shared_state";
import { useSlice as useLocalSlice } from "../slices";

const App = () => {
  const [count1] = useSlice("count1");
  const [count2] = useSlice("count2");
  const [age] = useLocalSlice("age");
  return (
    <>
      <div>{count1}</div>
      <div>{count2}</div>
      <div>{age}</div>
    </>
  );
};

export default App;
