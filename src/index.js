import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import storage from "./utils/storage";
import {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from "./api/client";

//Test if it's initially logged
const accessToken = storage.get("token");
setAuthorizationHeader(accessToken);

/**
 * Removes the authorisation
 */
const handleLogout = () => {
  removeAuthorizationHeader();
  storage.remove("token");
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      isInitiallyLogged={!!accessToken}
      onLogout={handleLogout}
    />
  </React.StrictMode>
);
