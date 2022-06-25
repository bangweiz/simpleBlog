import {createSlice} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "./index";
import {LoginParam, RegisterParam} from "../types/auth";

import * as authService from "../service/authService";

interface AuthState {
    user: {
        token: string
        avatar: string
        nickname: string
        id: string
    } | null
}

const initialState: AuthState = {
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        removeUser(state) {
            state.user = null
        }
    }
})

export const {setUser, removeUser} = authSlice.actions

export const selectUser = (state: RootState) => state.auth.user

export const login = (params: LoginParam) => async (dispatch: AppDispatch) => {
    const user = await authService.login(params)
    if (user) {
        dispatch(setUser(user))
    }
    return user
}

export const logout = () => async (dispatch: AppDispatch) => {
    await authService.logout()
    dispatch(removeUser())
}

export const register = (params: RegisterParam) => async (dispatch: AppDispatch) => {
    const user = await authService.register(params)
    if (user) {
        dispatch(setUser(user))
    }
    return user
}

export const checkToken = (token: string) => async (dispatch: AppDispatch) => {
    const user = await authService.checkToken(token)
    if (user) {
        dispatch(setUser(user))
    } else {
        dispatch(removeUser())
    }
    return user
}