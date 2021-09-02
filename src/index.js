import { StrictMode } from "react";
import ReactDOM from "react-dom";
import HookCounterOne from "../src/UseEffect/HookCounterOne";

import App from "./App";
import CounterOne from "./UseReducer/CounterOne";
import CounterTwo from "./UseReducer/CounterTwo";

const rootElement = document.getElementById("root");
ReactDOM.render(<CounterTwo />, rootElement);
