import React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import {breakpointVariables, colorVariables} from "../../config/style";
import {HeaderLinks} from "./HeaderLinks";
import {User} from "../../types/user";

export const DesktopHeader = (props: Props) => {
    const {path, user, onLogout} = props

    return (
        <MyHeader>
            <Title>
                <Link to="/">
                    Simple Blog
                </Link>
            </Title>
            <HeaderLinks onLogout={onLogout} user={user} path={path}/>
        </MyHeader>
    )
}

interface Props {
    path: string
    user: User | null
    onLogout: () => void
}

const MyHeader = styled.header`
  height: 6rem;
  border-bottom: 1px solid ${colorVariables.borderColor};
  background-color: ${colorVariables.white};
  display: grid;
  grid-template-columns: 24rem 1fr 36rem;
  position: sticky;
  top: 0;
  z-index: 10;
  
  @media screen and (max-width: ${breakpointVariables.tabletLandscape}) {
    display: none;
  }
`

const Title = styled.div`
  display: inline-block;
  line-height: 6rem;
  font-family: NanumGothic-ExtraBold;
  font-size: 2rem;
  text-align: center;
  
  a {
    color: ${colorVariables.primaryColor}
  }
`
