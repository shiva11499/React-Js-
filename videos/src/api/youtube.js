import axios from "axios";

const KEY = "AIzaSyCUlxbXSWFHiWOWP2duCmTYoek2njcChf4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
