import React from "react";

import './CollectionPreview.scss'
import CollectionItem from "../collection-item/CollectionItem";
const CollectionPreview = ({title, items}) => {
    return (
        <div className={'collection-preview'}>
            <h1 className={'title'}>{title.toUpperCase()}</h1>
            <div className={'preview'}>
                {
                    items
                        .filter((items, idx) => idx < 4)
                        .map(({id, ...itemprops}) => (
                        <CollectionItem key={id} {...itemprops}></CollectionItem>
                    ))
                }
            </div>
        </div>
    )
}
export default CollectionPreview