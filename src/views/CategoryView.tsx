import React from "react";
import {ImageCard} from "../components/ImageCard";
import {useCategories} from "../utils/categoryUtils";
import {useWebsiteTitle} from "../utils/websiteUtils";
import styled from "@emotion/styled";
import {breakpointVariables} from "../config/style";

export const CategoryView = () => {
    const {categories} = useCategories();
    useWebsiteTitle("Categories")

    return (
        <Container className="flex-space-between">
            {categories.map(category => {
                return (
                    <ImageCard
                        key={category.id}
                        title={category.categoryName}
                        description={category.description}
                        link={`/articles?categoryId=${category.id}`}
                        imageUrl={category.avatar}
                    />
                );
            })}
        </Container>
    )
}

export const Container = styled.div`
  flex-wrap: wrap;
  
  @media screen and (max-width: ${breakpointVariables.mobile}) {
    justify-content: space-around;
  }
`