import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import SkinPage from "./pages/SkinPage"; // 스킨 페이지 가져오기


const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/main"
          element={
            <Layout/>
          }
        />
        <Route
          path="/SkinPage"
          element={<SkinPage />} 
        />
      </Routes>
    </Router>
  );
};


export default App;