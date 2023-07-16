import React, { lazy, Suspense } from "react";
import { useSlice as useLocalSlice } from "../slices";
import { useSlice } from "shared_state";

const Remote1Root = lazy(() => import("Remote1/root"));
const Remote2Root = lazy(() => import("Remote2/root"));

const App = () => {
  const [status] = useLocalSlice("status");
  const [count1] = useSlice("count1");
  const [count2, reduxDispatch, { increment }] = useSlice("count2");
  const [name] = useSlice("name");
  const [localCount1] = useLocalSlice("count1");
  const [count2bis, localReduxDispatch, { increment: count2bisIncrement }] =
    useLocalSlice("count2bis");
  return (
    <>
      <Suspense fallback="loading...">
        <Remote1Root />
      </Suspense>
      <Suspense fallback="loading...">
        <Remote2Root />
      </Suspense>
      <div>{status}</div>
      <div>{count1}</div>
      <div>{count2}</div>
      <button onClick={() => reduxDispatch(increment())}>+</button>
      {name ? <div>{name}</div> : <div>no name</div>}
      <div>{localCount1}</div>
      <div>{count2bis}</div>
      <button onClick={() => localReduxDispatch(count2bisIncrement())}>
        +
      </button>
    </>
  );
};

export default App;
