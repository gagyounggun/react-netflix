import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key: "b2d18ac6e6d3f7bfe0a97a0965179a2e",
        language:"ko-KR",
    },
});

export default instance;