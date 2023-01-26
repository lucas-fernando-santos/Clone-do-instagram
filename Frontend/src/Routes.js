import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import New from "./pages/New";
import Feed from "./pages/Feed";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </Router>
  );
};
export default MyRoutes;
