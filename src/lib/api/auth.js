import axios from "axios";

const AUTH_API_HOST = "https://moneyfulpublicpolicy.co.kr";

// 회원가입
export const register = async ({ id, password, nickname }) => {
  try {
    const response = await axios.post(`${AUTH_API_HOST}/register`, {
      id: id,
      password: password,
      nickname: nickname,
    });

    //accessToken
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};

// 로그인
export const logIn = async ({ id, password }) => {
  try {
    const response = await axios.post(`${AUTH_API_HOST}/login?expiresIn=10m`, {
      id: id,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};

// 회원정보 확인 - 역할: 로그인 상태 유지
export const getUserInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.get(`${AUTH_API_HOST}/user`, {
        headers: {
          Authorization: "Bearer AccessToken",
        },
      });
      return response.data;
    } catch (error) {
      alert("accessToken 이 만료되었습니다");
      localStorage.clear();
    }
  }
};

// 프로필 수정 - 역할: 닉네임 수정, 아바타 수정
export const updateProfile = async (formData) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.patch(`${AUTH_API_HOST}/profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      alert("accessToken 이 만료되었습니다");
      localStorage.clear();
    }
  }
};
