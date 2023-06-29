import axios from "axios";

const config = {
  baseURL: "http://192.168.18.7:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
};

const instance = axios.create(config);

export default instance;