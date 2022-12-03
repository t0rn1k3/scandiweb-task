import React from "react";
import './ProductPage.scss';
import Product from "./Product";
import SHOP_DATA from "../shop/ShopData";

class ProductPage extends React.Component{
    constructor() {
        super();


        this.state = {
            products : SHOP_DATA
        }
       
    }

    render() {
        return (
            <div className="product-page">
                {this.state.products.map(item =>
                    <Product
                        key={item.id}
                        item={item}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                     />
                )}
            </div>
        )
    }
}

export default ProductPage;