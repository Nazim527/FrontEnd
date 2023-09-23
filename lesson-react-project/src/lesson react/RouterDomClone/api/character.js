import { instanceClone } from ".";

export const getCharactersClone = async () => {
    const resClone = await instanceClone.get("Characters")

    return resClone.data
}