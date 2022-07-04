import React, {useState} from "react";
import styled from "@emotion/styled";
import {CaretDownOutlined} from "@ant-design/icons";

import {breakpointVariables, colorVariables, fontVariables} from "../../config/style";
import classNames from "classnames";
import {HeaderLinks} from "./HeaderLinks";
import {User} from "../../types/user";

export const MobileHeader = (props: Props) => {
    const {path, user, onLogout} = props

    const [expand, setExpand] = useState(false)

    return (
        <MyHeader>
            <div className="mobile-header-title">
                Simple Blog
                <CaretDownOutlined
                    onClick={() => setExpand(!expand)}
                    className={classNames({'active': expand})}
                />
            </div>
            <div className={classNames({'active': expand, 'mobile-header-links': true})}>
                <HeaderLinks path={path} user={user} onLogout={onLogout} />
            </div>
        </MyHeader>
    )
}

interface Props {
    path: string
    user: User | null
    onLogout: () => void
}

const MyHeader = styled.header`
  display: none;
  background-color: ${colorVariables.white};

  @media screen and (max-width: ${breakpointVariables.tabletLandscape}) {
    display: block;
  }

  .mobile-header-title {
    height: 5rem;
    font-size: 2rem;
    line-height: 5rem;
    text-align: center;
    color: ${colorVariables.primaryColor};
    font-family: ${fontVariables.fontFamilyExtraBold};
    border-bottom: 1px solid ${colorVariables.borderColor};
    position: relative;
    
    .anticon-caret-down {
      position: absolute;
      top: 50%;
      right: 2rem;
      transform: translateY(-50%);
      transition: all ease-out 200ms;
      
      &.active {
        transform: rotateX(180deg) translateY(50%);
      }
    }
  }
  
  .mobile-header-links {
    display: none;
    
    &.active {
      display: block;
    }
  }
`
