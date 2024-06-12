// import styled from "styled-components";
import { Container } from "./Home";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log("id:", id);
    console.log("password:", password);
  };

  return (
    <Container>
      <div>
        <div>
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            placeholder="아이디"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={() => handleSignIn()}>로그인</button>
        <button onClick={() => navigate("/sign_up")}>회원가입</button>
      </div>
    </Container>
  );
}
