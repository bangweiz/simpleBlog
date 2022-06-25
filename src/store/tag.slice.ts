import {Tag} from "../types/tag";
import {createSlice} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "./index";

import * as tagService from "../service/tagService"

interface TagState {
    tags: Tag[]
    hotTags: Tag[]
}

const initialState: TagState = {
    tags: [],
    hotTags: []
}

export const tagSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        setTags(state, action) {
            state.tags = action.payload
        },
        setHotTags(state, action) {
            state.hotTags = action.payload
        }
    }
})

export const {setTags, setHotTags} = tagSlice.actions

export const selectTags = (state: RootState) => state.tags.tags
export const selectHotTags = (state: RootState) => state.tags.hotTags

export const getHotTags = () => async (dispatch: AppDispatch) => {
    const tags = await tagService.getHotTags()
    dispatch(setHotTags(tags))
    return tags
}

export const getTagsWithDetail = () => async (dispatch: AppDispatch) => {
    const tags = await tagService.getTagsWithDetail()
    dispatch(setTags(tags))
    return tags
}