import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.15.8:8081"
  // baseURL: "http://localhost:8081"
})