import React, {ChangeEvent, useState} from "react";
import {Button, Input, message} from "antd";
import {Comment} from "../types/comment";
import {PrimaryButton} from "./PrimaryButton";
import {useAuth} from "../utils/authUtils";
import {User} from "../types/user";
import {usePublishComment} from "../utils/commentUtils";

export const MyTextArea = (props: Props) => {
    const {articleId, parent, toUser, row, onCancel} = props
    const {user} = useAuth()
    const {publishComment} = usePublishComment()
    const [comment, setComment] = useState('')
    const onCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value)
    }

    const onSave = async () => {
        if (user === null) {
            message.info("Please login!")
            return
        }
        const newComment: Omit<Comment, "id"> = {
            author: user,
            content: comment,
            children: null,
            createDate: new Date().getTime().toString(),
            level: parent ? 2 : 1,
            toUser: null
        }
        if (toUser) {
            newComment.toUser = toUser
        }
        await publishComment(newComment, articleId, parent)
        if (onCancel) {
            onCancel()
        }
    }

    return (
        <div>
            <Input.TextArea
                value={comment}
                rows={row || 4}
                placeholder="Your Comments"
                onChange={onCommentChange}
            />
            <div style={{marginTop: "1.5rem", textAlign: "right"}}>
                {onCancel &&
                    <Button
                        style={{marginRight: "1.5rem"}}
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                }
                <PrimaryButton
                    content="submit"
                    onClick={() => onSave()}
                    disabled={!comment}
                />
            </div>
        </div>
    )
}

interface Props {
    articleId: string
    onCancel?: () => void
    parent?: string
    toUser?: User
    row?: number
}