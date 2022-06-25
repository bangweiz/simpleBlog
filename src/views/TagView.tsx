import React from "react";
import {ImageCard} from "../components/ImageCard";
import {useTags} from "../utils/tagUtils";
import {useWebsiteTitle} from "../utils/websiteUtils";

export const TagView = () => {
    const {tags} = useTags()
    useWebsiteTitle("Tags")

    return (
        <div className="flex-space-between" style={{flexWrap: 'wrap'}}>
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
        </div>
    )
}