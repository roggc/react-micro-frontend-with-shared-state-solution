import React, { lazy, Suspense } from "react";

const Remote1App = lazy(() => import("Remote1/app"));
const Remote2App = lazy(() => import("Remote2/app"));

const App = () => {
  return (
    <>
      <Suspense fallback="loading...">
        <Remote1App />
      </Suspense>
      <Suspense fallback="loading...">
        <Remote2App />
      </Suspense>
    </>
  );
};

export default App;
