import {useAppDispatch, useAppSelector} from "./reduxUtils";
import {getCategories, selectCategories} from "../store/category.slice";
import {useEffect} from "react";
import {Banner} from "../types/banner";

export const useCategories = () => {
    const categories = useAppSelector(selectCategories)
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (categories.length === 0) {
            dispatch(getCategories())
        }
    }, [categories, dispatch])

    return {
        categories
    }
}

export const useCategoryBanner = (id: string | null): Banner | null => {
    const categories = useAppSelector(selectCategories)
    const category = categories.find(category => category.id === id)

    if (!category) {
        return null
    }

    return {
        img: category.avatar,
        title: category.categoryName,
        description: category.description
    }
}