import axios from "axios";
import { token } from "./token";

//  const BASE_URL = 'http://192.168.43.120:5000'
const BASE_URL = "http://127.0.0.1:8000";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000000,

  headers: {
    Authorization: "Bearer " + token(),
    "Content-Type": "application/json",
    // Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6IktlcmltIiwiaWF0IjoxNjE2NDUwNjU3fQ.v8iyHYmwNlKVhLUA7LzxybICB8zzbVjRyXeFZbV7IPw'
  },
});

const axiosInstanceFile = axios.create({
  baseURL: BASE_URL,
  timeout: 1000000,

  headers: {
    Authorization: "Bearer " + token(),
    "Content-Type": "multipart/form-data",
    // Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6IktlcmltIiwiaWF0IjoxNjE2NDUwNjU3fQ.v8iyHYmwNlKVhLUA7LzxybICB8zzbVjRyXeFZbV7IPw'
  },
});
export { BASE_URL, axiosInstance, axiosInstanceFile };
