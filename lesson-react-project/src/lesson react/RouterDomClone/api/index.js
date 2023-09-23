import axios from "axios";

export const instanceClone = axios.create({
    baseURL: "https://thronesapi.com/api/v2/"
})