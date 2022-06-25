import React from "react";
import MDEditor from '@uiw/react-md-editor';

export const MDDisplay = (props: Props) => {
    const {content} = props

    return (
        <MDEditor.Markdown source={content} />
    )
}

interface Props {
    content: string
}