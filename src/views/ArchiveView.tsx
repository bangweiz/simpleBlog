import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Article, GetArticlesParam} from "../types/article";
import {getArticles} from "../service/articleService";
import {ArticleItem} from "../components/ArticleItem";
import {MyCard} from "../components/Card";
import {ArchiveList} from "../components/ArchiveList";
import {useArchives} from "../utils/archiveUtils";
import {useWebsiteTitle} from "../utils/websiteUtils";
import {Spinner} from "../components/Spinner";
import styled from "@emotion/styled";
import {breakpointVariables} from "../config/style";

export const ArchiveView = () => {
    useWebsiteTitle("Archive")
    const {archives} = useArchives();
    const {year, month} = useParams();
    const [articles, setArticles] = useState<Article[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
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
            setLoading(false)
        })
    }, [year, month])

    return (
        <Container className="flex-space-between">
            <div className="archive">
                <MyCard title="Archive" content={<ArchiveList archives={archives} year={year} month={month} />}/>
            </div>
            <div className="articles">
                <Spinner loading={loading}>
                    {articles.map(article => <ArticleItem article={article} key={article.id} />)}
                </Spinner>
            </div>
        </Container>
    )
}

const Container = styled.div`
  @media screen and (max-width: ${breakpointVariables.tabletLandscape}) {
    flex-direction: column;
  }
  
  .archive {
    width: 30rem;

    @media screen and (max-width: ${breakpointVariables.tabletLandscape}) {
      width: 100%;
    }
  }
  
  .articles {
    width: 65rem;

    @media screen and (max-width: ${breakpointVariables.tabletLandscape}) {
      width: 100%;
    }
  }
`
