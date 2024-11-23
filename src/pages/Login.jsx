import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleKakaoLogin = () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      console.error("Kakao SDK가 로드되지 않았습니다.");
      return;
    }

    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log("로그인 성공", authObj);
        navigate("/diary");
      },
      fail: function (err) {
        console.error("로그인 실패", err);
      },
    });
  };

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("a74b826c442adaab288751d8543f9752");
      console.log("Kakao 초기화 완료");
    }
  }, []);

  return (
    <div style={loginStyle}>
      <h1>로그인</h1>
      <img
        src="/assets/kakao_login_medium_narrow.png"
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