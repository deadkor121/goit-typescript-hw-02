import axios from "axios";
import { PHOTO_PER_PAGE } from "./utils/constants.js";

const clientID = "6tIE8k2rBkR87RyjfFfcTPOV49ZRQSm7puuLjjSnRsw";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${clientID}`,
  },
  params: {
    per_page: PHOTO_PER_PAGE,
    orientation: "landscape",
  },
});

export default instance;
