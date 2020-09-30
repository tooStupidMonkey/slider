
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { Provider } from 'react-redux'
import './App.css';
import store from './store'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));