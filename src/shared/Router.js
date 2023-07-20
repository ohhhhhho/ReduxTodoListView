import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "../conponent/List";
import Works from "../conponent/Works";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="works/:id" element={<Works />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
