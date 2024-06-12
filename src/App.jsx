import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import SingIn from "./pages/SingIn";
import SignUp from "./pages/SingUp";
import { useEffect, useState } from "react";
import { getUserInfo } from "./lib/api/auth";

function App() {
  const [user, setUser] = useState(null);

  //새로고침 해도 로그인 상태 유지
  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        try {
          setUser({
            userId: res.id,
            nickname: res.nickname,
            avatar: res.avatar,
          });
        } catch (error) {
          console.log(error?.response?.data?.message);
          alert(error?.response?.data?.message);
        }
      }
    });
  }, []);

  console.log("회원 정보 확인 : ", user);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/sign_in" element={<SingIn setUser={setUser} />} />
            <Route path="/sign_up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
