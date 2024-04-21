import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import TranstackProvider from "./Providers/TranstackProvider/TranstackProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TranstackProvider>
      <RouterProvider router={router} />
    </TranstackProvider>
  </React.StrictMode>
);
