import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/index.ts";
import { BrowserRouter as Router } from "react-router-dom";

const root = (
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")!).render(root);
