import React, { lazy, Suspense } from "react";
import { useSlice as useLocalSlice } from "../slices";
import { useSlice } from "shared_state";

const Remote1Root = lazy(() => import("Remote1/root"));
const Remote2Root = lazy(() => import("Remote2/root"));

const App = () => {
  const [count1, setCount1] = useSlice("count1");
  const [count2, reduxDispatch, { increment }] = useSlice("count2");
  const [localCount1, setLocalCount1] = useLocalSlice("count1");
  const [localCount2, localReduxDispatch, { increment: localIncrement }] =
    useLocalSlice("count2");

  return (
    <>
      <Suspense fallback="loading...">
        <Remote1Root />
      </Suspense>
      <Suspense fallback="loading...">
        <Remote2Root />
      </Suspense>
      <div>
        <button onClick={() => setCount1((c) => c + 1)}>+</button>
        {count1}
      </div>
      <div>
        <button onClick={() => reduxDispatch(increment())}>+</button>
        {count2}
      </div>
      <div>
        <button onClick={() => setLocalCount1((c) => c + 1)}>+</button>
        {localCount1}
      </div>
      <div>
        <button onClick={() => localReduxDispatch(localIncrement())}>+</button>
        {localCount2}
      </div>
    </>
  );
};

export default App;
