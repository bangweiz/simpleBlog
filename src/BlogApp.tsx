import React from "react";
import styled from "@emotion/styled";
import {Outlet} from "react-router";

import {Header} from "./components/layout/Header";
import {Footer} from "./components/layout/Footer";
import {colorVariables} from "./config/style";

export const BlogApp = () => {
    return (
        <div style={{backgroundColor: `${colorVariables.bodyBGColor}`}}>
            <Header/>
            <Main>
                <Outlet />
            </Main>
            <Footer/>
        </div>
    )
}

const Main = styled.main`
  width: 96rem;
  margin: 0 auto;
  min-height: calc(100vh - 12rem);
  padding: 2.5rem 0;
`