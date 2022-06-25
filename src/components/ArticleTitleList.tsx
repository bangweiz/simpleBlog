import React from "react";
import {Article} from "../types/article";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import {colorVariables} from "../config/style";

export const ArticleTitleList = (props: Props) => {
    const {articles} = props
    return (
        <List>
            {articles.map(article => {
                return (
                    <li key={article.id}>
                        <Link to={`/article/${article.id}`}>
                            {article.title}
                        </Link>
                    </li>
                )
            })}
        </List>
    )
}

const List = styled.ul`
  padding: 0;
  list-style: none;
  
  li {
    font-family: NanumGothic-Bold;
    font-size: 1.6rem;
    
    &:not(:last-child) {
      margin-bottom: .8rem;
    }
    
    a {
      color: ${colorVariables.primaryColor};
    }
  }
`


interface Props {
    articles: Article[]
}