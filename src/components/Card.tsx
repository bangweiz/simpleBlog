import React, {ReactNode} from "react";
import {Card} from "antd";
import styled from "@emotion/styled";
import {breakpointVariables} from "../config/style";

export const MyCard = (props: Props) => {
    const {title, content, className} = props
    return (
        <StyledCard className={className} title={title} bordered={false}>
            {content}
        </StyledCard>
    )
}

const StyledCard = styled(Card)`
  width: 30rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);

  @media screen and (max-width: ${breakpointVariables.tabletLandscape}) {
    width: 100%;
  }
  
  .ant-card-head-title {
    font-family: NanumGothic-ExtraBold;
    font-size: 1.8rem;
  }
`

interface Props {
    title: string
    content: ReactNode
    className?: string
}