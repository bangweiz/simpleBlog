import {Archive} from "../types/archive";
import axios from "axios";
import {Result} from "../types/result";
import {BASE_URL} from "../config";

export const getArchives = async (): Promise<Archive[]> => {
    try {
        const res = await axios.get<Result<Archive[]>>(`${BASE_URL}/articles/listArchives`)
        if (res.data.success) {
            return res.data.data
        }
        return []
    } catch (e) {
        console.error(e)
        return []
    }
}