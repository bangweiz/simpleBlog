import React from "react";
import MDEditor from '@uiw/react-md-editor';

export const MDDisplay = (props: Props) => {
    const {content} = props

    return (
        <MDEditor.Markdown source={content} style={{ whiteSpace: 'pre-wrap' }} />
    )
}

interface Props {
    content: string
}