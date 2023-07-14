import React, { lazy, Suspense } from "react";

const Remote1Root = lazy(() => import("Remote1/root"));
const Remote2Root = lazy(() => import("Remote2/root"));

const App = () => {
  return (
    <>
      <Suspense fallback="loading...">
        <Remote1Root />
      </Suspense>
      <Suspense fallback="loading...">
        <Remote2Root />
      </Suspense>
    </>
  );
};

export default App;
