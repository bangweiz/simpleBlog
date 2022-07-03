import React, {useCallback} from "react";
import styled from "@emotion/styled";
import {EditOutlined} from "@ant-design/icons";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../utils/authUtils";
import {useLocation} from "react-router";
import {breakpointVariables, colorVariables} from "../../config/style";
import {message} from "antd";
import classNames from "classnames";
import {LogoutLink} from "./LogoutLink";

export const Header = () => {
    const {user, logout} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();

    const onLogout = useCallback(async () => {
        await logout()
        message.info("You have logged out")
        if (location.pathname === '/new') {
            navigate("/")
        }
    }, [location.pathname, logout, navigate])

    const Login = (
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
    )

    return (
        <MyHeader>
            <Title>
                <Link to="/">
                    Simple Blog
                </Link>
            </Title>
            <List>
                <li>
                    <Link to="/" className={classNames({'active': location.pathname === '/'})}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/category" className={classNames({'active': location.pathname === '/category'})}>
                        Categories
                    </Link>
                </li>
                <li>
                    <Link to="/tag" className={classNames({'active': location.pathname === '/tag'})}>
                        Tags
                    </Link>
                </li>
                <li>
                    <Link to="/archive" className={classNames({'active': location.pathname.includes('/archive')})}>
                        Archive
                    </Link>
                </li>
                <li>
                    <Link to="new" className={classNames({'active': location.pathname === '/new'})}>
                        <EditOutlined />
                        Write a Blog
                    </Link>
                </li>
            </List>

            <List>
                {user?.id ? <LogoutLink onLogout={onLogout} user={user} /> : Login}
            </List>
        </MyHeader>
    )
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

const List = styled.ul`
  display: inline-block;
  list-style: none;
  padding: 0;
  
  li {
    display: inline-block;
    line-height: 6rem;
    margin: 0 1rem;
    
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