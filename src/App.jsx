import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import SingIn from "./pages/SingIn";
import SignUp from "./pages/SingUp";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  console.log("user : ", user);

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
