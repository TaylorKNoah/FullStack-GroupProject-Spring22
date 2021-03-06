import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:9000",
  headers: {
    "Content-type": "application/json"
  }
});

export default httpClient;