import axios from "axios";

const instance = axios.create({
  // baseURL: "https://localhost:5000",
  baseURL: "https://burger-valley-server.vercel.app/api/v1",
  withCredentials: true,
});

const UseAxios = () => {
  return instance;
};

export default UseAxios;
