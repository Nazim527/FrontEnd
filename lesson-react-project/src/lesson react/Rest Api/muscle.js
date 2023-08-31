import {  instancess } from "./baseApi"

export const getMuscle = async (type = "neck") => {
    const res = await instancess.get(`exercises?muscle=${type}`)

    return res.data
}

