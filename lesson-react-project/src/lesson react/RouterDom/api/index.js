import axios from "axios";

export const instance = axios.create({
    baseURL: "https://thronesapi.com/api/v2/"
});