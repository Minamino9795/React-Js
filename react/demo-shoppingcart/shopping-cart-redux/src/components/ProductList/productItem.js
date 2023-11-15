import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVisibleProducts } from "../../reducers/products";
import ProductItem from "../ProductItem/productItem";
import { addToCart } from "../../action";
const ProductsList = () => {
    const products = useSelector(state => getVisibleProducts(state.products))
    const dispatch = useDispatch()
    const dispatchAddtoCart = (id) => dispatch(addToCart(id))

    
    return (
        <div>
            <h3>Products</h3>
            {products.map(product => 
                <ProductItem
                key={product.id}
                product={product}
                onAddToCartClicked={()=> dispatchAddtoCart(product.id)}
                />
                )}
        </div>
    )
}
export default ProductsList
