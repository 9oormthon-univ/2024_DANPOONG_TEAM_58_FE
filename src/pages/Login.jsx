import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // 카카오 로그인 API 호출
  const handleKakaoLogin = () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      console.error("Kakao SDK가 로드되지 않았습니다.");
      return;
    }

    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log("로그인 성공", authObj);

        fetch("https://your-backend-url.com/auth/kakao", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_token: authObj.access_token,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.token) {
              localStorage.setItem("authToken", data.token);
              navigate("/diary");
            } else {
              console.error("로그인 실패: 서버에서 토큰을 받지 못함");
            }
          })
          .catch((err) => {
            console.error("백엔드 인증 오류:", err);
          });
      },
      fail: function (err) {
        console.error("카카오 로그인 실패", err);
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