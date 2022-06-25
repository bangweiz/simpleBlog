import React from "react";
import { Spin } from 'antd';
import styled from "@emotion/styled";
import {colorVariables} from "../config/style";


export const Spinner = (props: Props) => {
    const {children, loading} = props

    return (
        <>
            {loading ? <MySpin size="large" /> : children}
        </>
    )
}

const MySpin = styled(Spin)`
  display: block;
  margin: 0 auto;
  
  .ant-spin-dot-item {
    background-color: ${colorVariables.primaryColor};
  }
`

interface Props {
    children?: JSX.Element | JSX.Element[]
    loading: boolean
}