import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import Pokemon from "../pages/pokemon";
import MyTeam from "../pages/myTeam";
import HomeLayout from "../layout/layout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Pokemon />} />
        <Route path="/my-team" element={<MyTeam />} />
      </Route>
      <Route path="/layout" element={<HomeLayout />} />

      {/* ... etc. */}
    </Routes>
  );
};

export default Router;
