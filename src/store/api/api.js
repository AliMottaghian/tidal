import axios from "axios";

const baseUrl = "https://deezerdevs-deezer.p.rapidapi.com/";
const headers = {
  "x-rapidapi-key": "dde5247e8bmsh379ace8a1b5b062p1aec3cjsn62d0c22d002c",
  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
};

export const GET = async (url) => {
  try {
    const res = await axios.get(baseUrl + url, { headers: headers });
    return res;
  } catch (err) {
      throw new Error("Fetch was not successful!")
  }
};
