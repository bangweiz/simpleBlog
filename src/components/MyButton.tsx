import React from "react";
import styled from "@emotion/styled";
import {Button} from "antd";
import {colorVariables} from "../config/style";

export const MyButton = (props: Props) => {
    const {content} = props
    return (
        <ButtonComponent>
            {content}
        </ButtonComponent>
    )
}

const ButtonComponent = styled(Button)`
  color: ${colorVariables.primaryColor};
  border-color: ${colorVariables.primaryColor};
  margin: .5rem;
  
  &:hover {
    color: ${colorVariables.primaryColor};
    border-color: ${colorVariables.primaryColor};
  }
`

interface Props {
    content: string
}