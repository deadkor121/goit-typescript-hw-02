import { AxiosResponse } from "axios";
import axios from "../axios.js";

export const getImages = async <T>(
  query = "",
  page = 1
): Promise<AxiosResponse<T, any>> => {
  const response = await axios.get("/search/photos/", {
    params: {
      page,
      query,
    },
  });
  if (response.status !== 200) {
    throw new Error("Failed to fetch images");
}
  return response;
};
