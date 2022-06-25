import {LoginParam, RegisterParam} from "../types/auth";
import axios from "axios";
import {Result} from "../types/result";
import {BASE_URL} from "../config";
import {User} from "../types/user";

export const login = async (data: LoginParam): Promise<User | null> => {
    try {
        const res = await axios.post<Result<User>>(`${BASE_URL}/login`, data)
        if (res.data.success) {
            return res.data.data
        }
        return null
    } catch (e) {
        console.error(e)
        return null
    }
}

export const register = async (data: RegisterParam): Promise<User | null> => {
    try {
        const res = await axios.post<Result<User>>(`${BASE_URL}/register`, data)
        if (res.data.success) {
            return res.data.data
        }
        return null
    } catch (e) {
        console.error(e)
        return null
    }
}

export const logout = async () => {
    try {
        await axios.get(`${BASE_URL}/logout`)
    } catch (e) {
        console.error(e)
    }
}

export const checkToken = async (token: string): Promise<User | null> => {
    try {
        const res = await axios.get<Result<User>>(`${BASE_URL}/token`, {
            headers: {
                Authorization: token
            }
        })
        if (res.data.success) {
            return res.data.data
        }
        return null
    } catch (e) {
        console.error(e)
        return null
    }
}