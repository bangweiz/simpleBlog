import axios from "axios";
import {LoginParam, RegisterParam} from "../types/auth";
import {Result} from "../types/result";
import {BASE_URL} from "../config";
import {User} from "../types/user";
import {addErrCatchInterceptors} from "../interceptor/errCatchInterceptor";

addErrCatchInterceptors(axios)

export const login = async (data: LoginParam): Promise<User | null> => {
    const res = await axios.post<Result<User>>(`${BASE_URL}/login`, data)
    if (res.data.success) {
        return res.data.data
    }
    return null
}

export const register = async (data: RegisterParam): Promise<User | null> => {
    const res = await axios.post<Result<User>>(`${BASE_URL}/register`, data)
    if (res.data.success) {
        return res.data.data
    }
    return null
}

export const logout = async () => {
    await axios.get(`${BASE_URL}/logout`)
}

export const checkToken = async (token: string): Promise<User | null> => {
    const res = await axios.get<Result<User>>(`${BASE_URL}/token`, {
        headers: {
            Authorization: token
        }
    })
    if (res.data.success) {
        return res.data.data
    }
    return null
}