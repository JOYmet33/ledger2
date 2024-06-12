import { Container } from "./Home";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log("id:", id);
    console.log("password:", password);
    console.log("nickname:", nickname);
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
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            value={nickname}
            placeholder="닉네임"
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <button onClick={() => handleSignUp()}>회원가입</button>
        <button onClick={() => navigate("/sign_in")}>돌아가기</button>
      </div>
    </Container>
  );
}
