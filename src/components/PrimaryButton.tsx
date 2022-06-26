import React from "react";
import {Button} from "antd";
import styled from "@emotion/styled";
import {colorVariables} from "../config/style";
import {ButtonHTMLType} from "antd/es/button/button";

export const PrimaryButton = (props: Props) => {
    const {content, onClick, disabled, type, style, loading} = props
    return (
        <MyButton
            onClick={onClick}
            disabled={disabled}
            htmlType={type}
            loading={loading}
            style={style}
        >
            {content}
        </MyButton>
    )
}

interface Props {
    type?: ButtonHTMLType
    content: string
    onClick?: () => void
    disabled?: boolean
    loading?: boolean
    style?: {[key: string]: string}
}

const MyButton = styled(Button)`
  border-color: ${colorVariables.primaryColor};
  background-color: ${colorVariables.primaryColor};
  color: ${colorVariables.white};
  
  &:hover {
    border-color: ${colorVariables.primaryColor};
    background-color: ${colorVariables.primaryColor};
    color: ${colorVariables.white};
  }
`