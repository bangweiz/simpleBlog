import {Article} from "../types/article";
import {createSlice} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "./index";

import * as articleService from "../service/articleService"

interface ArticleState {
    hotArticles: Article[],
    recentArticles: Article[]
}

const initialState: ArticleState = {
    hotArticles: [],
    recentArticles: []
}

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setHotArticles(state, action) {
            state.hotArticles = action.payload
        },
        setRecentArticles(state, action) {
            state.recentArticles = action.payload
        }
    }
})

export const {setHotArticles, setRecentArticles} = articleSlice.actions

export const selectHotArticles = (state: RootState) => state.articles.hotArticles
export const selectRecentArticles = (state: RootState) => state.articles.recentArticles

export const getHotArticles = () => async (dispatch: AppDispatch) => {
    const res = await articleService.getHotArticles()
    dispatch(setHotArticles(res))
    return res
}

export const getRecentArticles = () => async (dispatch: AppDispatch) => {
    const res = await articleService.getRecentArticles()
    dispatch(setRecentArticles(res))
    return res
}

