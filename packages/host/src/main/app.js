import React, { lazy, Suspense } from "react";

const Remote1Root = lazy(() => import("Remote1/root"));
const Remote2App = lazy(() => import("Remote2/app"));

const App = () => {
  return (
    <>
      <Suspense fallback="loading...">
        <Remote1Root />
      </Suspense>
      <Suspense fallback="loading...">
        <Remote2App />
      </Suspense>
    </>
  );
};

export default App;
