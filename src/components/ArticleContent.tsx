import React, {useCallback, useMemo} from "react";
import {ArticleHeading} from "../types/articleHeading";
import styled from "@emotion/styled";
import {colorVariables, fontVariables} from "../config/style";
import classNames from "classnames";

export const ArticleContent = (props: Props) => {
    const {content, activeHeading} = props

    const onClick = useCallback((title: string, tag: string) => {
        const ele: HTMLHeadElement | undefined = Array.prototype.slice.call(document.getElementsByTagName(tag), 0).find((ele: HTMLHeadElement) => {
            return ele.textContent === title
        })

        if (ele) {
            window.scrollTo({
                top: ele.getBoundingClientRect().top + window.scrollY - 80,
                behavior: 'smooth'
            });
        }

    }, [])

    const List = useMemo(() => {
        if (content.length === 0) {
            return null
        } else {
            return (
                <Content>
                    {content.map(heading => {
                        return (
                            <div key={heading.label + heading.tag}>
                                <p
                                    className={classNames({'active': activeHeading === heading.label})}
                                    onClick={() => onClick(heading.label, heading.tag)}
                                >
                                    {heading.label}
                                </p>
                                <ArticleContent content={heading.children} activeHeading={activeHeading} />
                            </div>
                        )
                    })}
                </Content>
            )
        }
    }, [content, activeHeading, onClick])

    return List
}

interface Props {
    content: ArticleHeading[]
    activeHeading?: string
}

const Content = styled.div`
  padding-left: 2rem;
  width: 30rem;
  position: sticky;
  top: 10rem;
  
  p {
    font-family: ${fontVariables.fontFamilyBold};
    margin: 0;
    cursor: pointer;
    
    &.active {
      color: ${colorVariables.primaryColor}
    }
  }
`