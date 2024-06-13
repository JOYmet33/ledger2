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

const NavItem = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underLine;
  }
`;

const PageContainer = styled.div`
  padding: 6rem 2rem;
`;

export default function Layout({ user, setUser }) {
  const navigate = useNavigate();

  //새로고침 해도 로그인 상태 유지
  useEffect(() => {
    getUserInfo()
      .then((res) => {
        if (res) {
          setUser({
            userId: res.id,
            nickname: res.nickname,
            avatar: res.avatar,
          });
        }
      })
      .catch(() => {
        handleLogout();
      });
  }, []);

  const handleLogout = () => {
    setUser(null);
    navigate("/sign_in");
    localStorage.clear();
  };

  return (
    <>
      <Navbar>
        <div className="NavItems">
          <NavItem className="NavItem" to="/">
            Home
          </NavItem>
          <NavItem className="NavItem" to="/profile">
            내 프로필
          </NavItem>
        </div>
        <div className="UserProfile">
          {user && (
            <>
              <image
                className="UserAvatar"
                src={user.avetar}
                alt="User Avatar"
              />
              <h4 className="UserName">{user.nickname}</h4>
              <br />
              <button onClick={handleLogout}>로그아웃</button>
            </>
          )}
        </div>
      </Navbar>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </>
  );
}
