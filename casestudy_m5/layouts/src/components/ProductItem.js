import React from "react";
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART } from "../redux/action";

function ProductItem({ product }) {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const image = "http://127.0.0.1:8000/";

  const handleAddToCart = () => {
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    //phải là mãng để có thể sử dụng find()
    const product_cart = cart.find((item) => item.product_id === product.id);

    if (product_cart) {
      // tồn tại => +1
      product_cart.quantity++;

      // Tạo một bản sao mới của giỏ hàng để cập nhật thông tin sản phẩm
      const updatedCart = [...cart];

      //lưu vào local
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      // Cập nhật lại thông tin sản phẩm trong giỏ hàng
      dispatch({ type: SET_CART, payload: updatedCart });
    } else {
      // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
      let item = {
        product_id: product.id,
        quantity: 1,
        product: product,
      };

      // Tạo một bản sao mới của giỏ hàng để thêm sản phẩm mới
      const updatedCart = [...cart, item];

      //lưu vào local
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      // Cập nhật giỏ hàng với sản phẩm mới
      dispatch({ type: SET_CART, payload: updatedCart });

    }
  };


  return (
    <>
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src={image + product.image} alt="" />
          <div className="product-action">
            <button onClick={handleAddToCart} className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-shopping-cart" />
            </button>
            <Link
              to={"/detail/" + product.id}
              className="btn btn-outline-dark btn-square"
            >
              <i className="fa fa-search" />
            </Link>
          </div>
        </div>
        <div className="text-center py-4">
          <a className="h6 text-decoration-none text-truncate" href="">
            {product.name}
          </a>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>
              <NumericFormat
                value={product.price}
                allowLeadingZeros
                thousandSeparator="."
                decimalSeparator=","
                displayType="text"
              />{" "}
                VND
            </h5>
            <h6 className="text-muted ml-2">
              <del>$123.00</del>
            </h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small>(99)</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
