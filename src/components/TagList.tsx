import React from "react";
import {Tag as TagComponent} from "antd";
import {Tag} from "../types/tag";
import {Link} from "react-router-dom";

export const TagList = (props: Props) => {
    const {tags, color} = props
    return (
        <>
            {tags.map(tag => {
                return (
                    <Link key={tag.id} to={`/articles/?tagId=${tag.id}`}>
                        <TagComponent color={color || "green"}>{tag.tagName}</TagComponent>
                    </Link>
                )
            })}
        </>
    )
}

interface Props {
    tags: Tag[],
    color?: string
}