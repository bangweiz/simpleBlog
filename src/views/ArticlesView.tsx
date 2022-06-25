import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {Alert} from "antd";
import {Article, GetArticlesParam} from "../types/article";
import {getArticles} from "../service/articleService";
import {ArticleItem} from "../components/ArticleItem";
import {useTagBanner} from "../utils/tagUtils";
import {useCategoryBanner} from "../utils/categoryUtils";
import {Banner} from "../components/Banner";
import {useWebsiteTitle} from "../utils/websiteUtils";
import {Spinner} from "../components/Spinner";

export const ArticlesView = () => {
    useWebsiteTitle("Article List")
    const [searchParams] = useSearchParams()
    const categoryId = searchParams.get('categoryId');
    const tagId = searchParams.get('tagId');
    const [loading, setLoading] = useState(false)

    const [articles, setArticles] = useState<Article[]>([])

    const tagBanner = useTagBanner(tagId);
    const categoryBanner = useCategoryBanner(categoryId);

    useEffect(() => {
        setLoading(true)
        const param: GetArticlesParam = {
            page: 1,
            pageSize: 10
        }
        if (tagId) {
            param.tagId = tagId
        }
        if (categoryId) {
            param.categoryId = categoryId
        }
        getArticles(param).then(data => {
            setArticles(data)
            setLoading(false)
        })
    }, [categoryId, tagId])

    return (
        <div>
            {tagBanner && <Banner img={tagBanner.img} title={tagBanner.title} description={tagBanner.description} />}
            {categoryBanner && <Banner img={categoryBanner.img} title={categoryBanner.title} description={categoryBanner.description} />}
            <div>
                <Spinner loading={loading}>
                    {
                        articles.length === 0 ?
                            <Alert message="No Articles" type="info" style={{textAlign: "center"}} /> :
                            articles.map(article => <ArticleItem article={article} key={article.id} />)
                    }
                </Spinner>
            </div>
        </div>
    )
}