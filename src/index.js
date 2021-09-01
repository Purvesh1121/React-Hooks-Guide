import { StrictMode } from "react";
import ReactDOM from "react-dom";
import HookCounterOne from "../src/UseEffect/HookCounterOne";

import App from "./App";
import CounterOne from "./UseReducer/CounterOne";

const rootElement = document.getElementById("root");
ReactDOM.render(<CounterOne />, rootElement);
