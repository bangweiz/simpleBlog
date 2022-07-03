import React, {memo} from "react";
import {colorVariables} from "../../config/style";
import styled from "@emotion/styled";
import {User} from "../../types/user";
import {Popover} from "antd";

const Logout = (props: Props) => {
    const {onLogout, user} = props
    return (
        <li>
            <Popover placement="bottom" content={<Link onClick={onLogout}>Logout</Link>}>
                Hello, {user?.nickname}
            </Popover>
        </li>
    )
}

const Link = styled.li`
  cursor: pointer;
  color: ${colorVariables.primaryColor};
  font-size: 1.6rem;
`

interface Props {
    onLogout: () => void
    user?: User
}

export const LogoutLink = memo(Logout)