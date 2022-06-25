import React from "react";
import {Skeleton} from "antd";

export const MySkeleton = (props: Props) => {
    const {children, loading} = props

    return (
        <>
            {loading ? <Skeleton /> : children}
        </>
    )
}

interface Props {
    children?: JSX.Element | JSX.Element[]
    loading: boolean
}