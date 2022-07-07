import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Article} from "../types/article";
import {getArticleById} from "../service/articleService";
import {Alert, Avatar, Typography, BackTop} from "antd";
import styled from "@emotion/styled";
import {MDDisplay} from "../components/MDDisplay";
import {TagList} from "../components/TagList";
import {NestedComments} from "../components/NestedComments";
import {Link} from "react-router-dom";
import {useComments} from "../utils/commentUtils";
import {MyTextArea} from "../components/MyTextArea";
import {colorVariables} from "../config/style"
import {useWebsiteTitle} from "../utils/websiteUtils";
import {MySkeleton} from "../components/MySkeleton";
import {convertRowHeadings} from "../utils/stringUtils";
import {ArticleHeading} from "../types/articleHeading";
import {ArticleContent} from "../components/ArticleContent";
import {debounce} from "../utils/commonUtils";

export const ArticleView = () => {
    useWebsiteTitle("Article Detail")
    const { id } = useParams();
    const {comments} = useComments(id);

    const [article, setArticle] = useState<Article>()
    const [headings, setHeadings] = useState<ArticleHeading[]>([])
    const [loading, setLoading] = useState(false)
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        setLoading(true)
        getArticleById(id || '').then(data => {
            if (data) {
                const regXHeader = /#{2,6}.+/g
                setHeadings(convertRowHeadings(data.body?.content.match(regXHeader) || []))
                setArticle(data)
                setLoading(false)
            }
        })
    }, [id])

    useEffect(() => {
        window.addEventListener('scroll', debounce((e) => {
            if (window.scrollY !== scrollY) {
                setScrollY(window.scrollY)
            }
        }, 500), false)
    })

    useEffect(() => {
        const heading2 = document.getElementsByTagName('h3');
        for (let i = 0; i < heading2.length; i++) {
            console.log(heading2[i].offsetTop, scrollY)
        }
        // console.log(document.getElementsByTagName('h2'))
        // console.log(document.getElementsByTagName('h3'))
        // console.log(document.getElementsByTagName('h4'))
    }, [scrollY])

    return (
        <div style={{marginRight: "-30rem", display: "flex"}}>
            <div style={{width: "96rem"}}>
                <BackTop />
                <MySkeleton loading={loading}>
                    <div>
                        <Typography.Title level={1}>{article?.title}</Typography.Title>
                    </div>
                    <ProfileContainer>
                        <Avatar
                            src={<img src="https://i.ibb.co/y0gLb0N/default-avatar.jpg" alt="default-avatar" />}
                        />
                        <div style={{display: "inline-block"}}>
                            <div className="author">
                                <Typography.Text><strong>{article?.author}</strong></Typography.Text>
                            </div>
                            <div className="time">
                                <Typography.Text>
                                    {article?.createDate}, views: {article?.viewCounts}, comments: {article?.commentCounts}
                                </Typography.Text>
                            </div>
                        </div>
                    </ProfileContainer>
                    <MDContainer>
                        <MDDisplay content={article?.body?.content || ''} />
                    </MDContainer>
                    <Alert message="End of the article" type="success" style={{textAlign: "center"}}/>
                    <TagCategoryContainer>
                        Tags: <TagList tags={article?.tags || []} />
                    </TagCategoryContainer>
                    <TagCategoryContainer>
                        Category:
                        <Link to={`/articles?categoryId=${article?.category?.id}`}>
                            {article?.category?.categoryName}
                        </Link>
                    </TagCategoryContainer>
                </MySkeleton>
                <CommentsContainer>
                    <Typography.Title level={2}>Comments</Typography.Title>
                    <MyTextArea articleId={id || ''}/>
                    <NestedComments comments={comments} articleId={id || ''}/>
                </CommentsContainer>
            </div>
            <div style={{paddingTop: "12rem"}}>
                <ArticleContent content={headings} />
            </div>
        </div>
    )
}

const MDContainer = styled.div`
  background-color: ${colorVariables.white};
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
`

const ProfileContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  
  .ant-avatar {
    width: 4.5rem;
    height: 4.5rem;
    margin-right: .5rem;
  }
  
  .time {
    font-size: 1.4rem;
  }
`

const TagCategoryContainer = styled.div`
  height: 3rem;
  line-height: 3rem;
  margin: 3rem 0;
  padding-left: 1rem;
  border-left: .5rem solid ${colorVariables.borderColor};
  
  a {
    color: ${colorVariables.primaryColor};
    
    &:hover {
      color: ${colorVariables.primaryColor};
    }
  }
`

const CommentsContainer = styled.div`
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  
  .ant-divide:last-child {
    display: none;
  }
`
