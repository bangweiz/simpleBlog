import {Comment, PublishCommentParam} from "../types/comment";
import {createSlice} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "./index";

import * as commentService from "../service/commentService";

interface CommentState {
    articleId: string
    comments: Comment[]
}

const initialState: CommentState = {
    articleId: '',
    comments: []
}

export const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setComments(state, action) {
            state.comments = action.payload.comments
            state.articleId = action.payload.articleId
        },
        removeComments(state, action) {
            state.articleId = action.payload
            state.comments = []
        },
        addComment(state, action: {payload: { comment: Comment, parent: string }, type: string}) {
            if (action.payload.comment.level === 1) {
                state.comments = [action.payload.comment, ...state.comments]
            } else if (action.payload.comment.level === 2 && action.payload.parent ) {
                state.comments = state.comments.map(comment => {
                    if (comment.id === action.payload.parent) {
                        if (comment.children) {
                            comment.children = [action.payload.comment, ...comment.children]
                        } else {
                            comment.children = [action.payload.comment]
                        }
                        return comment
                    }
                    return comment;
                })
            }
        }
    }
})

export const {setComments, removeComments, addComment} = commentSlice.actions

export const selectComments = (state: RootState) => state.comments

export const getCommentsByArticleBy = (articleId: string) => async (dispatch: AppDispatch) => {
    const res = await commentService.getCommentsByArticleId(articleId)
    dispatch(setComments({articleId, comments: res}))
}

export const publishComment = (comment: Omit<Comment, "id">, articleId: string, parentId: string = '') => async (dispatch: AppDispatch) => {
    const param: PublishCommentParam = {
        content: comment.content,
        articleId
    }
    if (comment.toUser?.id) {
        param.toUserId = comment.toUser.id
    }
    if (parentId) {
        param.parent = parentId
    }
    const id = await commentService.publishComment(param)
    if (id) {
        const newComment = {
            id,
            ...comment
        }
        dispatch(addComment({comment: newComment, parent: parentId}))
    }
}