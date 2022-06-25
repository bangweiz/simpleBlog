import React, {useState} from "react";
import {Comment as CommentComponent} from "antd";

import {Comment} from "../types/comment";
import {formatDate} from "../utils/dateUtils";
import {MyTextArea} from "./MyTextArea";

export const MyComment = (props: Props) => {
    const {comment, children, parent, articleId} = props
    const [openReply, setOpenReply] = useState(false)

    const content = comment.toUser?.nickname ?
        `@${comment.toUser?.nickname} ${comment.content}` :
        comment.content

    return (
        <CommentComponent
            content={(
                <div>
                    <p>{content}</p>
                    {openReply &&
                        <MyTextArea
                            row={2}
                            articleId={articleId}
                            parent={parent}
                            toUser={comment.author}
                            onCancel={() => setOpenReply(false)}
                        />
                    }
                </div>
            )}
            avatar={<img src="https://i.ibb.co/y0gLb0N/default-avatar.jpg" alt="default-avatar" />}
            author={`${comment.author.nickname} ${formatDate(comment.createDate || '')}`}
            actions={openReply ? [] : [<span onClick={() => setOpenReply(true)} key="comment-list-reply-to-0">Reply to</span>]}
        >
            {children}
        </CommentComponent>
    )
}

interface Props {
    comment: Comment
    children: JSX.Element
    articleId: string
    parent?: string
}