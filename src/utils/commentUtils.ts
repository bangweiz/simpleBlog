import {useCallback, useEffect} from "react";

import {Comment} from "../types/comment";
import {useAppDispatch, useAppSelector} from "./reduxUtils";
import {selectComments} from "../store/comment.slice";
import * as commentSlice from "../store/comment.slice"

export const useComments = (articleId: string | undefined) => {
    const comments = useAppSelector(selectComments);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        if (comments.articleId !== articleId) {
            dispatch(commentSlice.getCommentsByArticleBy(articleId || ''))
        }
    }, [articleId, comments.articleId, dispatch])
    
    return {
        comments: comments.comments
    }
}

export const usePublishComment = () => {
    const dispatch = useAppDispatch();

    const publishComment = useCallback((comment: Omit<Comment, "id">, articleId: string, parentId: string = '') => {
        dispatch(commentSlice.publishComment(comment, articleId, parentId))
    }, [dispatch])

    return {
        publishComment
    }
}
