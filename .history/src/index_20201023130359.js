import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { RequestProvider } from './context'; 
import { ActionCableProvider } from "react-actioncable-provider";
import { API_WS_ROOT } from './constants';

ReactDOM.render(
  <React.StrictMode>
    <RequestProvider>
      <ActionCableProvider url={}>
        <Router>
          <App />
        </Router>
      </ActionCableProvider>
    </RequestProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
