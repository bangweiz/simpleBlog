import React from "react";
import {Archive} from "../types/archive";
import {Link} from "react-router-dom";
import {MyButton} from "./MyButton";

export const ArchiveList = (props: Props) => {
    const {archives} = props
    return (
        <>
            {archives.map(archive => {
                const content = `${archive.year} - ${archive.month} (${archive.count})`
                return (
                    <Link key={content} to={`/archive/${archive.year}/${archive.month}`}>
                        <MyButton content={content} />
                    </Link>
                )
            })}
        </>
    )
}

interface Props {
    archives: Archive[]
}
