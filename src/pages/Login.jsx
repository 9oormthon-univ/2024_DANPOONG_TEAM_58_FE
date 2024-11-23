// 로그인 기능 처리 - 카카오 api 호출 및 로그인 처리

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // 카카오 로그인 API 호출 
  const handleKakaoLogin = () => {
    console.log("카카오 로그인 API 호출");

    // 카카오 로그인 로직 구현
    Kakao.Auth.login({                       
      success: function (authObj) {
        console.log("로그인 성공", authObj);
        // 로그인 성공 시 메인 페이지로 리다이렉트
        navigate("/");
      },
      fail: function (err) {
        console.error("로그인 실패", err);
      },
    });
  };

  useEffect(() => {
    // 카카오 SDK 초기화 (JavaScript 키 입력)
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("a74b826c442adaab288751d8543f9752");
      console.log("Kakao 초기화 완료");
    }
  }, []);

  return (
    <div style={loginStyle}>
      <h1>로그인</h1>
      <img
        src="kakao_login_medium_narrow.png"
        alt="카카오 로그인"
        style={{ cursor: "pointer" }}
        onClick={handleKakaoLogin}
      />
    </div>
  );
};

const loginStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  gap: "20px",
};

export default Login;
