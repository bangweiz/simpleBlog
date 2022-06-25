import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Article, GetArticlesParam} from "../types/article";
import {getArticles} from "../service/articleService";
import {ArticleItem} from "../components/ArticleItem";
import {MyCard} from "../components/Card";
import {ArchiveList} from "../components/ArchiveList";
import {useArchives} from "../utils/archiveUtils";
import {useWebsiteTitle} from "../utils/websiteUtils";

export const ArchiveView = () => {
    useWebsiteTitle("Archive")
    const {archives} = useArchives();
    const {year, month} = useParams();
    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        const param: GetArticlesParam = {
            page: 1,
            pageSize: 10
        }
        if (year) {
            param.year = parseInt(year)
        }
        if (month) {
            param.month = parseInt(month)
        }
        getArticles(param).then(data => {
            setArticles(data)
        })
    }, [year, month])

    return (
        <div className="flex-space-between">
            <div style={{width: "30rem"}}>
                <MyCard title="Archive" content={<ArchiveList archives={archives} />}/>
            </div>
            <div style={{width: "65rem"}}>
                {articles.map(article => <ArticleItem article={article} key={article.id} />)}
            </div>
        </div>
    )
}
