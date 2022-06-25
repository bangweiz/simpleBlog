import {configureStore} from "@reduxjs/toolkit";
import {tagSlice} from "./tag.slice";
import {categorySlice} from "./category.slice";
import {articleSlice} from "./article.slice";
import {archiveSlice} from "./archive.slice";
import {authSlice} from "./auth.slice";
import {commentSlice} from "./comment.slice";

export const store = configureStore({
    reducer: {
        tags: tagSlice.reducer,
        categories: categorySlice.reducer,
        articles: articleSlice.reducer,
        archives: archiveSlice.reducer,
        auth: authSlice.reducer,
        comments: commentSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
