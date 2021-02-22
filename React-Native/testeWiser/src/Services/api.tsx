import axios from "axios";

const api = axios.create({
  baseURL: "https://603272e0a223790017acf1dd.mockapi.io/api/v1/",
});

export default api