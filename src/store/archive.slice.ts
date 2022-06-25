import {Archive} from "../types/archive";
import {createSlice} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "./index";

import * as archiveService from "../service/archiveService"

interface ArchiveState {
    archives: Archive[]
}

const initialState: ArchiveState = {
    archives: []
}

export const archiveSlice = createSlice({
    name: "archives",
    initialState,
    reducers: {
        setArchives(state, action) {
            state.archives = action.payload
        }
    }
})

export const {setArchives} = archiveSlice.actions

export const selectArchives = (state: RootState) => state.archives.archives

export const getArchives = () => async (dispatch: AppDispatch) => {
    const res = await archiveService.getArchives()
    dispatch(setArchives(res))
    return res
}
