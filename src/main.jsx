import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import './App.css';
import Layout from './components/Layout/Layout';
import Mypage from './components/Layout/Layout2';
import DiaryWriting from './components/Layout/Header'; //임시
import SkinPage from './pages/SkinPage';

const ProtectedRoute = ({ children }) => {
  // 로그인 상태 확인 (authToken 존재 여부로 판단)
  const token = localStorage.getItem("authToken");

  if (!token) {
    // 로그인되지 않은 경우 /main으로 리다이렉트
    return <Navigate to="/main" replace />;
  }

  return children;
};

const App = () => (
  <Router>
    <Routes>
      {/* 기본 경로는 로그인 페이지 */}
      <Route path="/main" element={<Login />} />
      
      {/* 로그인된 사용자만 접근 가능 */}
      <Route path="/diary" element={<ProtectedRoute><DiaryWriting /></ProtectedRoute>} />
      
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/SkinPage" element={<SkinPage />} />
    </Routes>
  </Router>
);

createRoot(document.getElementById("root")).render(<App />);