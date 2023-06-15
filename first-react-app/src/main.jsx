import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ErrorMessage from "./Components/Error Message/ErrorMessage.jsx";

import { ErrorBoundary } from "react-error-boundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorMessage}>    
    {/*Installing Error boundary around ENTIRE app at once this way. 
    AKA parent down to child elements */}
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
