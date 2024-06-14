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
    //accessToken 로컬스토리지에 저장하기
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};

// 로그인 - 로그인 상태 유지방법: accessToken 로컬스토리지에 저장하기
export const logIn = async ({ id, password }) => {
  try {
    const response = await axios.post(`${AUTH_API_HOST}/login?expiresIn=60m`, {
      id: id,
      password: password,
    });
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};

// 회원정보 확인 - 역할: 로그인 상태 유지, 해더의 accessToken 가져오기
export const getUserInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.get(`${AUTH_API_HOST}/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      alert("accessToken 이 만료되었습니다");
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
    }
  }
};
