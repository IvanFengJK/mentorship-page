import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga4";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

ReactGA.initialize("G-4W9ZLHEMZR", { gaOptions: { siteSpeedSampleRate: 100 } });
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
