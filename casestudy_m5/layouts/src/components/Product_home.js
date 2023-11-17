import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { VND } from '../extention/format';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const Urlnumber = 'http://127.0.0.1:8000/';
    
    useEffect(() => {
        // Gọi API để lấy danh sách sản phẩm
        axios.get('http://127.0.0.1:8000/api/products')
            .then(response => {
                setProducts(response.data);
                console.log(response);
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
            });
    }, []);
    const [visibleProducts, setVisibleProducts] = useState(4);

    // Hàm xử lý khi nhấn vào nút "Show more"
    const handleShowMore = () => {
        setVisibleProducts(visibleProducts + 4);
    };
    
    return (
        <>


            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="bg-secondary pr-3">Featured Products</span>
                </h2>

                <div className="row px-xl-5">
                    {products.slice(0, visibleProducts).map((product) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={product.id}>
                            <div className="product-item bg-light mb-4">
                                <div className="product-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src={Urlnumber + product.image} alt="" />
                                    <div className="product-action">
                                        <a className="btn btn-outline-dark btn-square"  href=''>
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
                                    <a className="h6 text-decoration-none text-truncate" >
                                        <Link to={`/detail/${product.id}`} className="h6 text-decoration-none text-truncate">
                                            {product.name}
                                        </Link>
                                    </a>
                                    <div className="d-flex align-items-center justify-content-center mt-2">
                                        <h5>{VND.format(product.price)}</h5>
                                        <h6 className="text-muted ml-2">
                                            <del>{product.oldPrice}</del>
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
                    ))}
                </div>
            </div>
            {visibleProducts < products.length && (
                <div className="col-12 text-center m-3">
                    <button className="btn btn-warning load-more-product" onClick={handleShowMore}>
                        Show more
                    </button>
                </div>
            )}
        </>
    );

};

export default ProductList;