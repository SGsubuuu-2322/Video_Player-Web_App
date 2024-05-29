// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Authentication from "./Config/Authentication";
import PublicLayout from "./Layouts/PublicLayout";
import { PublicRoutes } from "./Routes/PublicRoutes";
import { AuthRoutes } from "./Routes/AuthRoute";

const App = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        {PublicRoutes.map((pr, i) => {
          return <Route key={i} path={pr.path} element={<pr.element />} />;
        })}
      </Route>
      <Route element={<Authentication />}>
        {AuthRoutes.map((pr, i) => {
          return <Route key={i} path={pr.path} element={<pr.element />} />;
        })}
      </Route>
    </Routes>
  );
};

export default App;
