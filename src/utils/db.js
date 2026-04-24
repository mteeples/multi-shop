import axios from "axios";

const instance = axios.create({
  baseURL: "https://teeples-multi-shop-3252e-default-rtdb.firebaseio.com/",
});

export default instance;
