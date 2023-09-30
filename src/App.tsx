/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import "./App.css";

import Pokemon from "./pages/pokemon";
import Router from "./routes";

function App() {
  return (
    <>
      {/* <Pokemon /> */}
      <Router />
    </>
  );
}

export default App;
