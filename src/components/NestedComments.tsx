import React from "react";

import {Comment} from "../types/comment"
import {MyComment} from "./MyComment";
import {Divider} from "antd";

export const NestedComments = (props: Props) => {
    const {comments, parent, articleId} = props
    return (
        <>
            {comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <MyComment
                            articleId={articleId}
                            comment={comment}
                            parent={parent || comment.id}
                        >
                            <NestedComments
                                articleId={articleId}
                                parent={comment.id}
                                comments={comment.children || []}
                            />
                        </MyComment>
                        {parent ? null : <Divider />}
                    </div>

                )
            })}
        </>
    )
}

interface Props {
    comments: Comment[]
    articleId: string
    parent?: string
}