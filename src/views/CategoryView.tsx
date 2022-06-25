import React from "react";
import {ImageCard} from "../components/ImageCard";
import {useCategories} from "../utils/categoryUtils";
import {useWebsiteTitle} from "../utils/websiteUtils";

export const CategoryView = () => {
    const {categories} = useCategories();
    useWebsiteTitle("Categories")

    return (
        <div className="flex-space-between" style={{flexWrap: 'wrap'}}>
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
        </div>
    )
}
