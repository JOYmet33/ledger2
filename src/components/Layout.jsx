import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { getUserInfo } from "../lib/api/auth";

const Navbar = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: calc(100% - 2rem);
  top: 0;
  z-index: 1000;
  max-width: 1240px;
`;

export default function Layout({ setUser }) {
  const navigate = useNavigate();

  //새로고침 해도 로그인 상태 유지
  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setUser({
          userId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      } else {
        setUser(null);
        navigate("/sign_in");
        localStorage.clear();
      }
    });
  }, []);

  return (
    <>
      <Navbar>여기가 네이게이션 바</Navbar>
      <Outlet />
    </>
  );
}
