import React from "react";
import {ImageCard} from "../components/ImageCard";
import {useTags} from "../utils/tagUtils";
import {useWebsiteTitle} from "../utils/websiteUtils";
import {Container} from "./CategoryView";

export const TagView = () => {
    const {tags} = useTags()
    useWebsiteTitle("Tags")

    return (
        <Container className="flex-space-between">
            {tags.map(tag => {
                return (
                    <ImageCard
                        key={tag.id}
                        title={tag.tagName}
                        link={`/articles?tagId=${tag.id}`}
                        imageUrl={tag.avatar || ''}
                    />
                )
            })}
        </Container>
    )
}