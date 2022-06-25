import React from "react";
import {Alert} from "antd";
import {useWebsiteTitle} from "../utils/websiteUtils";

export const UnauthenticatedView = () => {
    useWebsiteTitle("Unauthenticated")
    return (
        <Alert
            message="Please Login First"
            type="info"
            showIcon
        />
    )
}