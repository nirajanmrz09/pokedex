import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import Pokemon from "../pages/pokemon";
import MyTeam from "../pages/myTeam";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Pokemon />} />
        <Route path="/my-team" element={<MyTeam />} />
      </Route>

      {/* ... etc. */}
    </Routes>
  );
};

export default Router;
