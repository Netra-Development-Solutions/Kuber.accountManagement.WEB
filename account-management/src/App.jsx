import React from "react";
import ReactDOM from "react-dom";

import routes from "./routes";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import "./index.css";

function App() {
  return (
      <RouterProvider router={createBrowserRouter(routes)} />
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;