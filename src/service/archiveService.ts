import axios from "axios";
import {Archive} from "../types/archive";
import {Result} from "../types/result";
import {BASE_URL} from "../config";
import {addErrCatchInterceptors} from "../interceptor/errCatchInterceptor";

addErrCatchInterceptors(axios)

export const getArchives = async (): Promise<Archive[]> => {
    const res = await axios.get<Result<Archive[]>>(`${BASE_URL}/articles/listArchives`)
    if (res.data.success) {
        return res.data.data
    }
    return []
}