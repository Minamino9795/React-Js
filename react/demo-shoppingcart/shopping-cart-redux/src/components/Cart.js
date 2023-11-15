import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts, getTotal } from "../reducers";
import Product from "./Product/product";
import { checkout } from "../action";
const Cart =()=>{
    const products= useSelector(getCartProducts)
    const total = useSelector(getTotal)

    const dispatch = useDispatch()

    const handleCheckout = () => {
        dispatch(checkout(products))
    }

    const hasProducts = products.length > 0
    const nodes = hasProducts ? (
        products.map(product =>
            <Product
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            key={product.id}
            />
            )
    ) : (
        <em>Vui lòng thêm sản phẩm vào giỏ hàng.</em>
    )
    return (
        <div>
            <h3>Your cart</h3>
            <div>{nodes}</div>
            <p>total: ${total}</p>
            <button onClick={handleCheckout} disabled={hasProducts ? '' : 'disabled'}>
                Checkout
            </button>
        </div>
    )
}
export default Cart;