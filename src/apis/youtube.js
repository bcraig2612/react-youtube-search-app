import axios from "axios";

const KEY = "AIzaSyCC3McTKCRCCPDmRwgc4aWVKpfctQWX6s4";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});
