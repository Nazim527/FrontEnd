import axios from 'axios';

export const instancess = axios.create({
    baseURL: "https://api.api-ninjas.com/v1/",
    headers: {
        "x-api-key": import.meta.env.VITE_ACCESS_TOKEN
    }
})