import React, {useMemo} from "react";
import {Link} from "react-router-dom";
import classNames from "classnames";
import {EditOutlined} from "@ant-design/icons";
import styled from "@emotion/styled";
import {breakpointVariables, colorVariables} from "../../config/style";
import {LogoutLink} from "./LogoutLink";
import {User} from "../../types/user";

export const HeaderLinks = (props: Props) => {
    const {path, user, onLogout} = props

    const Login = useMemo(() => (
        <>
            <li>
                <Link to="/login" style={{color: colorVariables.primaryColor}}>
                    Login
                </Link>
            </li>
            <li>
                <Link to="/register" style={{color: colorVariables.primaryColor}}>
                    Sign up
                </Link>
            </li>
        </>
    ), [])

    return (
        <>
            <List>
                <li>
                    <Link to="/" className={classNames({'active': path === '/'})}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/category" className={classNames({'active': path === '/category'})}>
                        Categories
                    </Link>
                </li>
                <li>
                    <Link to="/tag" className={classNames({'active': path === '/tag'})}>
                        Tags
                    </Link>
                </li>
                <li>
                    <Link to="/archive" className={classNames({'active': path.includes('/archive')})}>
                        Archive
                    </Link>
                </li>
                <li>
                    <Link to="new" className={classNames({'active': path === '/new'})}>
                        <EditOutlined />
                        Write a Blog
                    </Link>
                </li>
            </List>
            <List>
                {user?.id ? <LogoutLink onLogout={onLogout} user={user} /> : Login}
            </List>
        </>

    )
}

interface Props {
    path: string
    user: User | null
    onLogout: () => void
}

const List = styled.ul`
  display: inline-block;
  list-style: none;
  padding: 0;

  @media screen and (max-width: ${breakpointVariables.tabletLandscape}) {
    display: block;
    margin: 0;
  }
  
  li {
    display: inline-block;
    line-height: 6rem;
    margin: 0 1rem;

    @media screen and (max-width: ${breakpointVariables.tabletLandscape}) {
      display: block;
      text-align: center;
      line-height: 3rem;
      font-size: 1.4rem;
    }
    
    a {
      color: ${colorVariables.textColor};
      
      &:hover {
        color: ${colorVariables.primaryColor};
      }
      
      &.active {
        color: ${colorVariables.primaryColor};
      }
    }
  }
`