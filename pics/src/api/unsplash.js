import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID hLX7GzGOGf9WWd17txgbJwaTiY8cWv7mNTN5wbr5n7Y",
  },
});
