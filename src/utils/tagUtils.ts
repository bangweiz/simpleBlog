import {useAppDispatch, useAppSelector} from "./reduxUtils";
import {getTagsWithDetail, selectTags} from "../store/tag.slice";
import {useEffect} from "react";
import {Banner} from "../types/banner";

export const useTags = () => {
    const tags = useAppSelector(selectTags);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (tags.length === 0) {
            dispatch(getTagsWithDetail())
        }
    }, [tags, dispatch])

    return {
        tags
    }
}

export const useTagBanner = (id: string | null): Banner | null => {
    const tags = useAppSelector(selectTags)
    const tag = tags.find(tag => tag.id === id)

    if (!tag) {
        return null
    }

    return {
        img: tag.avatar,
        title: tag.tagName,
        description: ''
    }
}