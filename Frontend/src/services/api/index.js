import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.149.82:3333",
});

export default api;
