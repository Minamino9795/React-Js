import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VND } from "../extention/format";
import MasterLayout from "../layouts/MasterLayout";
import { addItemToCartLocalStore } from "../extention/cart";
import { SET_CART } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

function Detail(props) {
    const [details, setDetail] = useState([]);
    const { id } = useParams();
    const Urlnumber = 'http://127.0.0.1:8000/';
    // console.log(details);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
  
  
    
    const [count, setCount] = useState(1);
    const [product, setProduct] = useState({
      name: "",
      price: "",
      decscription: "",
      image: "",
    });
    const handleAddToCart = () => {
        let item = {
          id: id,
          quantity: count,
          product: product,
        };
        let update = false;
        for (let index = 0; index < cart.length; index++) {
          const element = cart[index];
          if (element.product_id == id) {
            update = true;
            cart[index].quantity = cart[index].quantity + count;
          }
        }
        if (update) {
          var newCart = [...cart];
        } else {
          var newCart = [...cart, item];
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
        dispatch({ type: SET_CART, payload: newCart });
      };
    

    useEffect(() => {
        // Gọi API để lấy danh sách sản phẩm
        axios.get(`http://127.0.0.1:8000/api/home/detail/${id}`)
            .then(response => {
                setDetail(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
            });
    }, []);
    
        
   


    return (
        <MasterLayout>

            <div className="container-fluid pb-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 mb-30">
                        <div
                            id="product-carousel"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <div className="carousel-inner bg-light">
                                <div className="carousel-item active">
                                    <img
                                        className="w-100 h-100"
                                        src={Urlnumber + details.image}
                                        alt="Image"
                                    />
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#product-carousel"
                                data-slide="prev"
                            ></a>
                            <a
                                className="carousel-control-next"
                                href="#product-carousel"
                                data-slide="next"
                            ></a>
                        </div>
                    </div>
                    <div className="col-lg-7 h-auto mb-30">
                        <div className="h-100 bg-light p-30">
                            <h3>
                                {details.name}

                            </h3>
                            <div className="d-flex mb-3">
                                <div className="text-primary mr-2">
                                    <small className="fas fa-star" />
                                    <small className="fas fa-star" />
                                    <small className="fas fa-star" />
                                    <small className="fas fa-star-half-alt" />
                                    <small className="far fa-star" />
                                </div>
                                <small className="pt-1">(99 Evaluate)</small>
                            </div>
                            <h3 className="font-weight-semi-bold mb-4">
                                {VND.format(details.price)}
                            </h3>
                            <p className="font-family"></p>
                            <h5>Description:</h5>
                            {details.decscription}
                            <p />
                            <p className="font-family"></p>
                            <h5>Category:</h5>
                            {details.name}
                            <p />
                            <p className="font-family"></p>

                            <p />
                            <div>
                                <p className="font-family">
                                    {details.quantity}
                                </p>
                            </div>
                            <div className="d-flex align-items-center mb-4 pt-2">
                                <div className="input-group quantity mr-3" style={{ width: 130 }}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-minus">
                                            <i className="fa fa-minus" />
                                        </button>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control bg-secondary border-0 text-center"
                                        defaultValue={1}
                                    />
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-plus">
                                            <i className="fa fa-plus" />
                                        </button>
                                    </div>
                                </div>
                                <div className="button-group">
                                    <div>
                                        <a
                                            href="/cart"
                                            id="{{ $products->id }}"
                                            className="btn btn-danger mt-20"
                                            onClick={() => handleAddToCart(details.id)}
                                        >
                                            Add to cart
                                        </a>
                                        <a
                                            href="/cart"
                                            className="btn btn-success"
                                        >
                                            Buy now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex pt-2">
                                <strong className="text-dark mr-2">Share on:</strong>
                                <div className="d-inline-flex">
                                    <a className="text-dark px-2" href="">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a className="text-dark px-2" href="">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a className="text-dark px-2" href="">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                    <a className="text-dark px-2" href="">
                                        <i className="fab fa-pinterest" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="container-fluid pt-5 pb-3">
                    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                        <span className="bg-secondary pr-3">Related Products</span>
                    </h2>
                    <div className="row px-xl-5">
                        @foreach ($relatedProducts as $relatedProduct)
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="product-item bg-light">
                                <div className="product-img position-relative overflow-hidden">
                                    <img
                                        className="img-fluid w-100"
                                        width={100}
                                        height={90}
                                        src="{{ asset($relatedProduct->image) }}"
                                        alt="Image"
                                    />
                                    <div className="product-action">
                                        <a className="btn btn-outline-dark btn-square" href="">
                                            <i className="fa fa-shopping-cart" />
                                        </a>
                                        <a className="btn btn-outline-dark btn-square" href="">
                                            <i className="far fa-heart" />
                                        </a>
                                        <a className="btn btn-outline-dark btn-square" href="">
                                            <i className="fa fa-sync-alt" />
                                        </a>
                                        <a className="btn btn-outline-dark btn-square" href="">
                                            <i className="fa fa-search" />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <a
                                        className="h6 text-decoration-none text-truncate"
                                        href="{{ route('shop.details', $relatedProduct->id) }}"
                                    >
                                        {"{"}
                                        {"{"} $relatedProduct-&gt;name {"}"}
                                        {"}"}
                                    </a>
                                    <h6>
                                        @if ($relatedProduct-&gt;status == 0)
                                        <span className="badge badge-success">
                                            <i className="fas fa-check-circle" /> In stock
                                        </span>
                                        @else
                                        <span className="badge badge-danger">
                                            <i className="fas fa-times-circle" /> Out stock
                                        </span>
                                        @endif
                                    </h6>
                                    <div className="d-flex align-items-center justify-content-center mt-2">
                                        <h5>
                                            {"{"}
                                            {"{"} number_format($relatedProduct-&gt;price) {"}"}
                                            {"}"} VNĐ
                                        </h5>
                                        <h6 className="text-muted ml-2">
                                            <del />
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
                        </div>
                        @endforeach
                    </div>
                </div> */}


        </MasterLayout>
    )
}
export default Detail;