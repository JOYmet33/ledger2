import axios from "axios";

const JSON_SERVER_HOST = "http://localhost:5000";

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses`);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("데이터 조회 중 오류가 발생했습니다..ㅜㅜ");
  }
};

export const getExpense = async ({ queryKey }) => {
  try {
    const response = await axios.get(
      `${JSON_SERVER_HOST}/expenses${queryKey[0]}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    alert("데이터 조회 중 오류가 발생했습니다..ㅜㅜ");
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
    alert("데이터가 써주지 않아요..ㅜㅜ");
  }
};
