import React from "react";
import ReactDOM from "react-dom";

import routes from "./routes";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import "./index.css";
import { Container } from "@mui/material";
import AccountDetails from "./components/AccountDetails";

function App() {
  return (
      // <RouterProvider router={createBrowserRouter(routes)} />
      <Container>
        <AccountDetails />
      </Container>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;