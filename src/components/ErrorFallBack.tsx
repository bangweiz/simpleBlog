import React from "react";
import styled from "@emotion/styled";
import {Typography} from "antd";

export const ErrorFallBack = (props: Props) => {
    const {error} = props
    return (
        <FullPage>
            {error && <Typography.Text type="danger">{error.message}</Typography.Text>}
        </FullPage>
    )
}

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface Props {
    error: Error | null
}