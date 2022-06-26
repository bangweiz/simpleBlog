import {LoginParam} from "../types/auth";
import {TOKEN_KEY} from "../config";
import {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "./reduxUtils";
import {checkToken, login, logout, selectUser} from "../store/auth.slice";

export const useAuth = () => {
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch();

    const userLogin = useCallback(async (values: LoginParam) => {
        const user = await dispatch(login(values))
        if (user && user.token) {
            localStorage.setItem(TOKEN_KEY, user.token)
        }
        return user
    }, [dispatch])

    const userLogout = useCallback(async () => {
        await dispatch(logout())
    }, [dispatch])

    const appInit = useCallback(() => {
        const token = localStorage.getItem(TOKEN_KEY)
        if (token) {
            dispatch(checkToken(token))
        }
    }, [dispatch])

    return {
        user,
        login: userLogin,
        logout: userLogout,
        appInit
    }
}
