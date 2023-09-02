import { instance } from "."

export const getCharacters = async () => {
    const res = await instance.get("Characters")

    return res.data 
}

export const getSingleChar = async (id) => {
    const res = await instance.get(`Characters/${id}`)

    return res.data
}