import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ErrorMessage from "./Components/Error Message/ErrorMessage.jsx";

import { ErrorBoundary } from "react-error-boundary";

import { BrowserRouter } from "react-router-dom";

const MyContext = React.createContext("initial value");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      {/*Installing Error boundary around ENTIRE app at once this way. 
    AKA parent down to child elements */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
