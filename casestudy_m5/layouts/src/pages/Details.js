import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NumericFormat } from "react-number-format";
import ProductModel from "../model/ProductModel";
import { SET_CART } from "../redux/action";
import MasterLayout from "../layouts/MasterLayout";

function Detail(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const image = "http://127.0.0.1:8000/";

  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
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
      if (element.id == id) {
        update = true;
        cart[index].quantity = cart[index].quantity + count;
      }
    }
    if (update) {
      var newCart = [...cart];
    } else {
      var newCart = [...cart, item];
    }
    localStorage.setItem('cart', JSON.stringify(newCart));
    dispatch({ type: SET_CART, payload: newCart });


  };


  useEffect(() => {
    ProductModel.find(id)
      .then((data) => {
        // console.log(data);
        setProduct(data);
      })
      .catch((err) => {
        throw err;
      });
  }, [id]);
  return (
    <>
      <MasterLayout>
        <div className="container-fluid">
          <div className="row px-xl-5">
            <div className="col-12">
              <nav className="breadcrumb bg-light mb-30">
                <a className="breadcrumb-item text-dark" href="#">
                  Home
                </a>
                <a className="breadcrumb-item text-dark" href="#">
                  Shop
                </a>
                <span className="breadcrumb-item active">Shop Detail</span>
              </nav>
            </div>
          </div>
        </div>
        <>
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
                        src={image + product.image}
                        alt="Image"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#product-carousel"
                    data-slide="prev"
                  >
                    <i className="fa fa-2x fa-angle-left text-dark" />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#product-carousel"
                    data-slide="next"
                  >
                    <i className="fa fa-2x fa-angle-right text-dark" />
                  </a>
                </div>
              </div>
              <div className="col-lg-7 h-auto mb-30">
                <div className="h-100 bg-light p-30">
                  <h3>{product.name}</h3>
                  <div className="d-flex mb-3">
                    <div className="text-primary mr-2">
                      <small className="fas fa-star" />
                      <small className="fas fa-star" />
                      <small className="fas fa-star" />
                      <small className="fas fa-star-half-alt" />
                      <small className="far fa-star" />
                    </div>
                    <small className="pt-1">(99 Reviews)</small>
                  </div>
                  <h3 className="font-weight-semi-bold mb-4">
                    <NumericFormat
                      value={product.price}
                      allowLeadingZeros
                      thousandSeparator="."
                      decimalSeparator=","
                      displayType="text"
                    />{" "}
                    VND
                  </h3>
                  <p
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></p>

                  <div className="d-flex align-items-center mb-4 pt-2">
                    <div
                      className="input-group quantity mr-3"
                      style={{ width: 130 }}
                    >
                      <div className="input-group-btn">
                        <button
                          onClick={() => {
                            if (count > 1) {
                              setCount(count - 1);
                            }
                          }}
                          className="btn btn-primary btn-minus"
                        >
                          <i className="fa fa-minus" />
                        </button>
                      </div>
                      <input
                        type="text"
                        min={1}
                        className="form-control bg-secondary border-0 text-center"
                        value={count}
                        onChange={(e) => setCount(parseInt(e.target.value))}
                      />
                      <div className="input-group-btn">
                        <button
                          onClick={() => setCount(count + 1)}
                          className="btn btn-primary btn-plus"
                        >
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className="btn btn-primary px-3"
                    >
                      <i className="fa fa-shopping-cart mr-1" /> Add To Cart
                    </button>
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
          {/* Shop Detail End */}
          {/* Products Start */}
          <div className="container-fluid py-5">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
              <span className="bg-secondary pr-3">You May Also Like</span>
            </h2>
            <div className="row px-xl-5">
              <div className="col">
                <div className="owl-carousel related-carousel">
                  <div className="product-item bg-light">
                    <div className="product-img position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-1.jpg"
                        alt=""
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
                        href=""
                      >
                        Product Name Goes Here
                      </a>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>$123.00</h5>
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
                  <div className="product-item bg-light">
                    <div className="product-img position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-2.jpg"
                        alt=""
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
                        href=""
                      >
                        Product Name Goes Here
                      </a>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>$123.00</h5>
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
                  <div className="product-item bg-light">
                    <div className="product-img position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-3.jpg"
                        alt=""
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
                        href=""
                      >
                        Product Name Goes Here
                      </a>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>$123.00</h5>
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
                  <div className="product-item bg-light">
                    <div className="product-img position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-4.jpg"
                        alt=""
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
                        href=""
                      >
                        Product Name Goes Here
                      </a>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>$123.00</h5>
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
                  <div className="product-item bg-light">
                    <div className="product-img position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="img/product-5.jpg"
                        alt=""
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
                        href=""
                      >
                        Product Name Goes Here
                      </a>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>$123.00</h5>
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
                </div>
              </div>
            </div>
          </div>
        </>
      </MasterLayout>
    </>
  );
}
export default Detail;

