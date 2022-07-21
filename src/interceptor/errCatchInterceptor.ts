import {AxiosStatic} from "axios";
import { Result } from "../types/result";

export const addErrCatchInterceptors = (axios: AxiosStatic) => {
    axios.interceptors.response.use(
        response => response,
        error => {
            const data: Result<any> = {
                code: 400,
                success: false,
                msg: "Cannot request data",
                data: null
            }
            console.log(error)
            return { data }
        }
    );
}

