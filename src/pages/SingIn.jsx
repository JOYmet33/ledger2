// import styled from "styled-components";
import { Container } from "./Home";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "../lib/api/auth";

export default function SignIn({ setUser }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    // response(응답값) 구조분해할당 : userId, nickname, avatar
    const { userId, nickname, avatar } = await logIn({
      id: id,
      password: password,
    });
    alert("로그인이 되었습니다.");
    setUser({ userId, nickname, avatar });
    navigate("/");
  };

  return (
    <Container>
      <div>
        <div>
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            value={id}
            placeholder="아이디"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            value={password}
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
