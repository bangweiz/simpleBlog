import {Category} from "../types/category";
import {createSlice} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "./index";

import * as categoryService from "../service/categoryService"

interface CategoryState {
    categories: Category[]
}

const initialState: CategoryState = {
    categories: []
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload
        }
    }
})

export const {setCategories} = categorySlice.actions

export const selectCategories = (state: RootState) => state.categories.categories

export const getCategories = () => async (dispatch: AppDispatch) => {
    const categories = await categoryService.getCategoriesWithDetail()
    dispatch(setCategories(categories))
    return categories
}