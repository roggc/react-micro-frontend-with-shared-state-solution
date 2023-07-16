import { Provider } from "../slices";
import App from "./app";
import React, { memo } from "react";

const Root = memo(() => (
  <Provider>
    <App />
  </Provider>
));

export default Root;
