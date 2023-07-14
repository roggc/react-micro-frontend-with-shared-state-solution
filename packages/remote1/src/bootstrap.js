import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "shared_state";
import App from "./main/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
