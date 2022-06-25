import React from "react";
import styled from "@emotion/styled";
import {Typography} from "antd";
import {Link} from "react-router-dom";
import {colorVariables} from "../config/style";

export const ImageCard = (props: Props) => {
    const {title, description, link, imageUrl} = props

    return (
        <Container>
            <Link to={link}>
                <img src={imageUrl} alt={title} />
                <div>
                    <Typography.Title level={3}>{title}</Typography.Title>
                    {description ? <p>{description}</p> : null}
                </div>
            </Link>
        </Container>
    )
}

const Container = styled.div`
  margin-top: 4rem;
  padding-bottom: 2rem;
  width: 22rem;
  display: inline-block;
  background-color: ${colorVariables.white};
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border-radius: 3px;
  
  img {
    display: block;
    width: 6rem;
    height: 6rem;
    transform: translate(8rem, -2rem);
    border: 1px solid ${colorVariables.borderColor};
  }
  
  h3, p {
    color: ${colorVariables.textColor};
    text-align: center;
  }
  
  h3 {
    text-transform: uppercase;
  }
  
  p {
    font-size: 1.6rem;
  }
`

interface Props {
    title: string
    description?: string
    link: string
    imageUrl: string
}