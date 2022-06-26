import {Category} from "../types/category";
import axios from "axios";
import {Result} from "../types/result";
import {BASE_URL} from "../config";

export const getCategories = async (): Promise<Category[]> => {
    const res = await axios.get<Result<Category[]>>(`${BASE_URL}/categories`)
    if (res.data.success) {
        return res.data.data
    }
    return []
}

export const getCategoriesWithDetail = async (): Promise<Category[]> => {
    const res = await axios.get<Result<Category[]>>(`${BASE_URL}/categories/detail`)
    if (res.data.success) {
        return res.data.data
    }
    return []
}