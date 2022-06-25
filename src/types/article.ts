import {Tag} from "./tag";
import {Category} from "./category";
import {ArticleBody} from "./articleBody";

export interface Article {
    id: string
    title: string
    summary: string
    commentCounts: number
    viewCounts: number
    weight: number
    createDate: string
    author: string
    body: ArticleBody | null
    tags: Tag[]
    category: Category | null
}

export interface GetArticlesParam {
    page: number
    pageSize: number
    categoryId?: string
    tagId?: string
    year?: number
    month?: number
}

export interface PublishArticleParam {
    summary: string
    title: string
    body: {
        content: string
        contentHtml: string
    }
    category: {
        id: string
    }
    tags: {id: string}[]
}