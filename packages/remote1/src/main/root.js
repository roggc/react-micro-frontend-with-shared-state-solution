import { Provider } from "../slices";
import App from "./app";
import React from "react";

const Root = () => (
  <Provider>
    <App />
  </Provider>
);

export default Root;
