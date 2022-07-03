import React from "react";
import styled from "@emotion/styled";
import {Button} from "antd";
import {colorVariables} from "../config/style";
import classNames from "classnames";

export const MyButton = (props: Props) => {
    const {content, active} = props
    return (
        <ButtonComponent className={classNames({'active': active})}>
            {content}
        </ButtonComponent>
    )
}

const ButtonComponent = styled(Button)`
  color: ${colorVariables.primaryColor};
  border-color: ${colorVariables.primaryColor};
  margin: .5rem;
  
  &:hover, &:active, &:focus {
    color: ${colorVariables.white};
    border-color: ${colorVariables.primaryColor};
    background-color: ${colorVariables.primaryColor};
  }
  
  &.active {
    color: ${colorVariables.white};
    border-color: ${colorVariables.primaryColor};
    background-color: ${colorVariables.primaryColor};
  }
`

interface Props {
    content: string,
    active?: boolean
}