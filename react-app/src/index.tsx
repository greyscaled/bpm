import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import "./index.scss";
import { register } from "./util/sw";

ReactDOM.render(<App />, document.getElementById("root"));
register();
