import axios from "@/utils/axios";

export const getUserInfo = params => {
  return axios.get("/userInfo", { params }).then(response => response.data);
};
