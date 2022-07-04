import React, {useCallback} from "react";
import {DesktopHeader} from "./DesktopHeader";
import {MobileHeader} from "./MobileHeader";
import {useAuth} from "../../utils/authUtils";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router";
import {message} from "antd";

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

    return (
        <div>
            <DesktopHeader path={location.pathname} user={user} onLogout={onLogout} />
            <MobileHeader path={location.pathname} user={user} onLogout={onLogout}/>
        </div>
    )
}