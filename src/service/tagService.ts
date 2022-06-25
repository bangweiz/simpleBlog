import axios from "axios";
import {Tag} from "../types/tag";
import {Result} from "../types/result";
import {BASE_URL} from "../config";

export const getHotTags = async (): Promise<Tag[]> => {
    try {
        const res = await axios.get<Result<Tag[]>>(`${BASE_URL}/tags/hot`)
        if (res.data.success) {
            return res.data.data;
        }
        return []
    } catch (e) {
        console.error(e)
        return []
    }
}

export const getTagsWithDetail = async (): Promise<Tag[]> => {
    try {
        const res = await axios.get<Result<Tag[]>>(`${BASE_URL}/tags/detail`)
        if (res.data.success) {
            return res.data.data;
        }
        return []
    } catch (e) {
        console.error(e)
        return []
    }
}