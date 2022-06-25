import React from "react";
import styled from "@emotion/styled";
import {EditOutlined} from "@ant-design/icons";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../utils/authUtils";
import {useLocation} from "react-router";
import {breakpointVariables, colorVariables} from "../../config/style";

export const Header = () => {
    const {user, logout} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();

    const redirect = () => {
        if (location.pathname === '/new') {
            navigate("/")
        }
    }

    const onLogout = () => {
        logout(redirect)
    }

    const Login = (
        <>
            <li>
                <Link to="/login" style={{color: "#5FB878"}}>
                    Login
                </Link>
            </li>
            <li>
                <Link to="/register" style={{color: "#5FB878"}}>
                    Sign up
                </Link>
            </li>
        </>
    )

    const Logout = (
        <li
            onClick={onLogout}
            style={{cursor: "pointer", color: "#5FB878"}}
        >
            Logout
        </li>
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
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/category">
                        Categories
                    </Link>
                </li>
                <li>
                    <Link to="/tag">
                        Tags
                    </Link>
                </li>
                <li>
                    <Link to="/archive">
                        Archive
                    </Link>
                </li>
                <li>
                    <Link to="new">
                        <EditOutlined />
                        Write a Blog
                    </Link>
                </li>
            </List>

            <List>
                {user?.id ? Logout : Login}
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
    }
  }
`