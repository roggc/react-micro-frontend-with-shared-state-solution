import React, { lazy, Suspense } from "react";
import { useSlice as useLocalSlice } from "../slices";
import { useSlice } from "shared_state";

const Remote1Root = lazy(() => import("Remote1/root"));
const Remote2Root = lazy(() => import("Remote2/root"));

const App = () => {
  const [status] = useLocalSlice("status");
  const [count1] = useSlice("count1");
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
    </>
  );
};

export default App;
