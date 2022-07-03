import React, {useCallback} from "react";
import {Archive} from "../types/archive";
import {Link} from "react-router-dom";
import {MyButton} from "./MyButton";

export const ArchiveList = (props: Props) => {
    const {archives, year, month} = props
    const isActive = useCallback((archiveYear: number, archiveMonth: number) => {
        if (!year || !month) {
            return false
        }
        const yearInNum = parseInt(year)
        const monthInNUM = parseInt(month)
        return yearInNum === archiveYear && monthInNUM === archiveMonth
    }, [year, month])

    return (
        <>
            {archives.map(archive => {
                const content = `${archive.year} - ${archive.month} (${archive.count})`
                return (
                    <Link key={content} to={`/archive/${archive.year}/${archive.month}`}>
                        <MyButton content={content} active={isActive(archive.year, archive.month)} />
                    </Link>
                )
            })}
        </>
    )
}

interface Props {
    archives: Archive[]
    year?: string
    month?: string
}
