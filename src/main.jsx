import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import './App.css';
import Layout from './components/Layout/Layout';
import Mypage from './components/Layout/Layout2';
import DiaryWriting from './components/Layout/Header'; //임시
import SkinPage from './pages/SkinPage';

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