import { useState } from "react";
import styled from "styled-components";
import { updateProfile } from "../lib/api/auth";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
  label {
    display: black;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #006bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export default function Profile() {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("avatar", avatar);
    await updateProfile(formData);
  };
  ``;

  return (
    <Container>
      <h2>프로필 수정</h2>
      <InputGroup>
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          placeholder="닉네임"
          minLength="1"
          maxLength="10"
          onChange={(e) => setNickname(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="avatar">아바타</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </InputGroup>
      <Button onClick={handleUpdateProfile}>프로필 업데이트</Button>
    </Container>
  );
}