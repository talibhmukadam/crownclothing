import React from "react";
import SHOP_DATA from "./shopdata";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        console.log(collections)
        return (
            <div className={'shop-page'}>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}


export default ShopPage