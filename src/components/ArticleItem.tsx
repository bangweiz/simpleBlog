import React from "react";
import {Article} from "../types/article";
import styled from "@emotion/styled";
import {EyeOutlined, ClockCircleOutlined, CommentOutlined} from "@ant-design/icons";
import {TagList} from "./TagList";
import {Link} from "react-router-dom";
import {breakpointVariables, colorVariables} from "../config/style";

export const ArticleItem = (props: Props) => {
    const {title, summary, author, tags, viewCounts, commentCounts, createDate, id} = props.article
    return (
        <ArticleContainer>
            <div className="flex-space-between article-title-container">
                <div className="article-title">
                    <Link to={`/article/${id}`}>
                        {title}
                    </Link>
                </div>
                <div className="flex-space-between article-view-comment">
                    <div className="article-view">
                        <EyeOutlined />
                        {viewCounts}
                    </div>
                    <div className="article-comment">
                        <CommentOutlined />
                        {commentCounts}
                    </div>
                </div>
            </div>
            <div className="article-summary">
                {summary}
            </div>
            <div className="flex-space-between article-author-container">
                <div className="article-author">
                    {author}
                </div>
                <div className="article-tags">
                    <TagList tags={tags} />
                </div>
                <div className="article-date">
                    <ClockCircleOutlined />
                    {createDate}
                </div>
            </div>
        </ArticleContainer>
    )
}

const ArticleContainer = styled.div`
  background-color: ${colorVariables.white};
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  
  .article-title-container {
    line-height: 3rem;
    
    @media screen and (max-width: ${breakpointVariables.mobile}) {
      flex-direction: column;
      
      .article-view-comment {
        justify-content: flex-start;
      }
    }
    
    .article-title {
      font-size: 2rem;
      font-family: NanumGothic-ExtraBold;
      
      a {
        color: ${colorVariables.textColor};

        &:hover {
          color: ${colorVariables.primaryColor};
        }
      }
    }
    
    .article-view-comment {
      .article-view {
        margin-right: 1rem;
      }
      
      .article-view, .article-comment {
        span {
          margin-right: .5rem;
        }
      }
    }
  }
  
  .article-summary {
    margin: 1.5rem 0;
  }
  
  .article-author-container {
    @media screen and (max-width: ${breakpointVariables.mobile}) {
      flex-direction: column;
    }
    
    .article-author {
      width: 5rem;

      @media screen and (max-width: ${breakpointVariables.mobile}) {
        width: 100%;
      }
    }
    
    .article-tags {
      width: calc(100% - 25rem);

      @media screen and (max-width: ${breakpointVariables.mobile}) {
        width: 100%;
      }
    }
    
    .article-date {
      text-align: right;
      width: 20rem;

      @media screen and (max-width: ${breakpointVariables.mobile}) {
        width: 100%;
        text-align: left;
      }
      
      span {
        margin-right: .5rem;
      }
    }
  }
`

interface Props {
    article: Article
}

