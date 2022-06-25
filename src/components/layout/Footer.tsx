import React from "react";
import styled from "@emotion/styled";
import {colorVariables} from "../../config/style";

export const Footer = () => {
    return (
        <MyFooter>
            <p>Designed By <strong>MSZLU</strong></p>
        </MyFooter>
    )
}

const MyFooter = styled.footer`
  height: 6rem;
  text-align: center;
  border-top: 1px solid ${colorVariables.white};
  background-color: ${colorVariables.borderColor};
  
  p {
    margin: 0;
    line-height: 6rem;
    
    strong {
      color: ${colorVariables.primaryColor};
    }
  }
`