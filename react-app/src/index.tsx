import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { App } from "./app";
import { register } from "./util/sw";

ReactDOM.render(<App />, document.getElementById("root"));
register();
