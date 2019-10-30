import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "page/index";
import * as serviceWorker from "serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./", () => {
    ReactDOM.render(<App />, document.getElementById("root"));
  });
}

serviceWorker.unregister();
