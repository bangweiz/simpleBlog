import axios from "axios";
import {Result} from "../types/result";
import {Article, GetArticlesParam, PublishArticleParam} from "../types/article";
import {BASE_URL} from "../config";

export const getArticles = async (param: GetArticlesParam): Promise<Article[]> => {
    const res = await axios.post<Result<Article[]>>(`${BASE_URL}/articles`, param)
    if (res.data.success) {
        return res.data.data
    }
    return []
}

export const getArticleById = async (id: string): Promise<Article | null> => {
    const res = await axios.get<Result<Article>>(`${BASE_URL}/articles/view/${id}`)
    if (res.data.success) {
        return res.data.data
    }
    return null
}

export const getHotArticles = async (): Promise<Article[]> => {
    const res = await axios.get<Result<Article[]>>(`${BASE_URL}/articles/hot`)
    if (res.data.success) {
        return res.data.data
    }
    return []
}

export const getRecentArticles = async (): Promise<Article[]> => {
    const res = await axios.get<Result<Article[]>>(`${BASE_URL}/articles/new`)
    if (res.data.success) {
        return res.data.data
    }
    return []
}

export const publishArticle = async (prams: PublishArticleParam): Promise<string> => {
    const res = await axios.post<Result<{id: string}>>(`${BASE_URL}/articles/publish`, prams)
    if (res.data.success) {
        return res.data.data.id
    }
    return ''
}