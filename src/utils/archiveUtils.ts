import {useAppDispatch, useAppSelector} from "./reduxUtils";
import {getArchives, selectArchives} from "../store/archive.slice";
import {useEffect} from "react";

export const useArchives = () => {
    const archives = useAppSelector(selectArchives);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (archives.length === 0) {
            dispatch(getArchives())
        }
    }, [archives, dispatch])

    return {
        archives
    }
}