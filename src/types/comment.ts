import {User} from "./user";

export interface Comment {
    id: string
    author: User
    content: string
    children: Comment[] | null
    createDate: string | null
    level: number
    toUser: User | null
}

export interface PublishCommentParam {
    articleId: string
    toUserId?: string
    content: string
    parent?: string
}