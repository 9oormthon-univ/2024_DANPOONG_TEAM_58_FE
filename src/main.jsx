import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import './App.css';
import Layout from './components/Layout/Layout';
import Mypage from './components/Layout/Layout2';
import DiaryWriting from './components/Layout/Header'; //임시
import SkinPage from './pages/SkinPage';

// const ProtectedRoute = ({ children }) => {
//   // 로그인 상태 확인 (authToken 존재 여부로 판단)
//   const token = localStorage.getItem("authToken");

//   if (!token) {
//     // 로그인되지 않은 경우 /main으로 리다이렉트
//     return <Navigate to="/main" replace />;
//   }

//   return children;
// };

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  },
  {
    path: '/mypage',
    element: <Mypage />,
  },
  {
    path: '/diary',
    element: <DiaryWriting />,
  },
  {
    path: '/SkinPage',
    element: <SkinPage />, // 독립적인 스킨 페이지
  },
]);

// React 앱 렌더링
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);