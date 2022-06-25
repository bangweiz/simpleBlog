import React, {ReactNode} from "react";
import {Card} from "antd";
import styled from "@emotion/styled";

export const MyCard = (props: Props) => {
    const {title, content} = props
    return (
        <StyledCard title={title} bordered={false} style={{ width: 300 }}>
            {content}
        </StyledCard>
    )
}

const StyledCard = styled(Card)`
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  
  .ant-card-head-title {
    font-family: NanumGothic-ExtraBold;
    font-size: 1.8rem;
  }
`

interface Props {
    title: string,
    content: ReactNode
}