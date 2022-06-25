import React from "react";
import {Typography} from "antd";
import styled from "@emotion/styled";
import {Banner as BannerProps} from "../types/banner";
import {colorVariables} from "../config/style";

export const Banner = (props: BannerProps) => {
    const {img, title, description} = props
    return (
        <Container>
            <img src={img || ''} alt={title} />
            <Typography.Title level={2}>{title}</Typography.Title>
            <Typography.Text>{description}</Typography.Text>
        </Container>
    )
}

const Container = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 1.5rem 0;
  background-color: ${colorVariables.white};
  
  img {
    width: 6rem;
    height: 6rem;
  }
`