import { Container } from "./Home";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../lib/api/auth";

export default function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    // 회원가입 유효성 검사
    if (id.length < 4 || id.length > 10) {
      alert("아이디는 4글자~10글자만 가능합니다.");
      return;
    }
    if (password.length < 4 || password.length > 15) {
      alert("비밀번호는 4글자~10글자만 가능합니다.");
      return;
    }
    if (nickname.length < 1 || nickname.length > 10) {
      alert("닉네임은 1글자~10글자만 가능합니다.");
      return;
    }
    // API 호출 코드
    const response = await register({
      id: id,
      password: password,
      nickname: nickname,
    });
    if (response) {
      confirm("회원가입이 완료되었습니다.");
      navigate("/sign_in");
    }
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
