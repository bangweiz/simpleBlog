import {Comment, PublishCommentParam} from "../types/comment";
import axios from "axios";
import {Result} from "../types/result";
import {BASE_URL} from "../config";

export const getCommentsByArticleId = async (id: string): Promise<Comment[]> => {
    try {
        const res = await axios.get<Result<Comment[]>>(`${BASE_URL}/comments/${id}`)
        if (res.data.success) {
            return res.data.data
        }
        return []
    } catch (e) {
        console.error(e)
        return []
    }
}

export const publishComment = async (param: PublishCommentParam): Promise<string> => {
    try {
        const res = await axios.post<Result<string>>(`${BASE_URL}/comments/`, param)
        if (res.data.success) {
            return res.data.data
        }
        return ''
    } catch (e) {
        console.error(e)
        return ''
    }
}