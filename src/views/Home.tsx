import React, {useEffect, useState} from "react";
import {ArticleItem} from "../components/ArticleItem";
import styled from "@emotion/styled";
import {MyCard} from "../components/Card";
import {TagList} from "../components/TagList";
import {ArticleTitleList} from "../components/ArticleTitleList";
import {Article} from "../types/article";
import {getArticles} from "../service/articleService";
import {ArchiveList} from "../components/ArchiveList";
import {useArchives} from "../utils/archiveUtils";
import {useTags} from "../utils/tagUtils";
import {useArticles} from "../utils/articleUtils";
import {useWebsiteTitle} from "../utils/websiteUtils";
import {Spinner} from "../components/Spinner";

export const Home = () => {
    useWebsiteTitle("Home")
    const {archives} = useArchives()
    const {tags} = useTags()
    const {hotArticles, recentArticles} = useArticles();

    const [articles, setArticles] = useState<Article[]>([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getArticles({page: 1, pageSize: 10}).then(data => {
            setArticles(data)
            setLoading(false)
        })
    }, [])

    return (
        <div className="flex-space-between">
            <ArticleList>
                <Spinner loading={loading}>
                    {articles.map(article => <ArticleItem article={article} key={article.id} />)}
                </Spinner>
            </ArticleList>
            <CardList>
                <MyCard title="Simple Blog" content={<p>Hello</p>}/>
                <MyCard title="Hot Tags" content={<TagList tags={tags} />}/>
                <MyCard title="Hot Articles" content={<ArticleTitleList articles={hotArticles} />}/>
                <MyCard title="Archive" content={<ArchiveList archives={archives} />}/>
                <MyCard title="Recently Added" content={<ArticleTitleList articles={recentArticles} />}/>
            </CardList>
        </div>
    )
}

const CardList = styled.div`
  width: 30rem;
`

const ArticleList = styled.div`
  width: 65rem;
`