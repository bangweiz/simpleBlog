import {useAppDispatch, useAppSelector} from "./reduxUtils";
import {getHotArticles, getRecentArticles, selectHotArticles, selectRecentArticles} from "../store/article.slice";
import {useEffect} from "react";

export const useArticles = () => {
    const dispatch = useAppDispatch()
    const hotArticles = useAppSelector(selectHotArticles);
    const recentArticles = useAppSelector(selectRecentArticles);

    useEffect(() => {
        if (hotArticles.length === 0) {
            dispatch(getHotArticles())
        }
    }, [hotArticles, dispatch])

    useEffect(() => {
        if (recentArticles.length === 0) {
            dispatch(getRecentArticles())
        }
    }, [recentArticles, dispatch])

    return {
        hotArticles,
        recentArticles
    }
}