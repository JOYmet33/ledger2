import axios from "axios";

const JSON_SERVER_HOST = "https://fancy-abrupt-clavicle.glitch.me";

// expense 전부 가져오기
export const getExpenses = async () => {
  ``;
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses`);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("🚨데이터 조회 중 오류가 발생했습니다..");
  }
};

// expense 하나만 가져오기 - queryKey는 배열의 두번째[1]에 있음!!
export const getExpense = async ({ queryKey }) => {
  try {
    const response = await axios.get(
      `${JSON_SERVER_HOST}/expenses/${queryKey[1]}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    alert("🚨데이터 조회 중 오류가 발생했습니다..");
  }
};

export const postExpense = async (newExpense) => {
  try {
    const response = await axios.post(
      `${JSON_SERVER_HOST}/expenses`,
      newExpense
    );
    return response.data;
  } catch (error) {
    console.log(error);
    alert("🚨데이터가 들어가지 않았어요..");
  }
};
