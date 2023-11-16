import React from "react";
function Sidebar(props) {
    return (
        <>
            <>
                <div className="container-fluid bg-dark mb-30">
                    <div className="row px-xl-5">
                        <div className="col-lg-3 d-none d-lg-block">
                            <a
                                className="btn d-flex align-items-center justify-content-between bg-primary w-100"
                                data-toggle="collapse"
                                href="#navbar-vertical"
                                style={{ height: 65, padding: "0 30px" }}
                            >
                                <h6 className="text-dark m-0">
                                    <i className="fa fa-bars mr-2" />
                                    Categories
                                </h6>
                                <i className="fa fa-angle-down text-dark" />
                            </a>
                            <nav
                                className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                                id="navbar-vertical"
                                style={{ width: "calc(100% - 30px)", zIndex: 999 }}
                            >
                                <div className="navbar-nav w-100">
                                    <div className="nav-item dropdown dropright">
                                        <a
                                            href="#"
                                            className="nav-link dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Dresses <i className="fa fa-angle-right float-right mt-1" />
                                        </a>
                                        <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                            <a href="" className="dropdown-item">
                                                Men's Dresses
                                            </a>
                                            <a href="" className="dropdown-item">
                                                Women's Dresses
                                            </a>
                                            <a href="" className="dropdown-item">
                                                Baby's Dresses
                                            </a>
                                        </div>
                                    </div>
                                    <a href="" className="nav-item nav-link">
                                        Shirts
                                    </a>
                                    <a href="" className="nav-item nav-link">
                                        Jeans
                                    </a>
                                    <a href="" className="nav-item nav-link">
                                        Swimwear
                                    </a>
                                    <a href="" className="nav-item nav-link">
                                        Sleepwear
                                    </a>
                                    <a href="" className="nav-item nav-link">
                                        Sportswear
                                    </a>
                                    <a href="" className="nav-item nav-link">
                                        Jumpsuits
                                    </a>
                                    <a href="" className="nav-item nav-link">
                                        Blazers
                                    </a>
                                    <a href="" className="nav-item nav-link">
                                        Jackets
                                    </a>
                                    <a href="" className="nav-item nav-link">
                                        Shoes
                                    </a>
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-9">
                            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                                <a href="" className="text-decoration-none d-block d-lg-none">
                                    <span className="h1 text-uppercase text-dark bg-light px-2">
                                        Multi
                                    </span>
                                    <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                                        Shop
                                    </span>
                                </a>
                                <button
                                    type="button"
                                    className="navbar-toggler"
                                    data-toggle="collapse"
                                    data-target="#navbarCollapse"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div
                                    className="collapse navbar-collapse justify-content-between"
                                    id="navbarCollapse"
                                >
                                    <div className="navbar-nav mr-auto py-0">
                                        <a href="index.html" className="nav-item nav-link active">
                                            Home
                                        </a>
                                        <a href="/product" className="nav-item nav-link">
                                            Shop
                                        </a>
                                        <a href="detail.html" className="nav-item nav-link">
                                            Shop Detail
                                        </a>
                                        <div className="nav-item dropdown">
                                            <a
                                                href="#"
                                                className="nav-link dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                Pages <i className="fa fa-angle-down mt-1" />
                                            </a>
                                            <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                                <a href="cart.html" className="dropdown-item">
                                                    Shopping Cart
                                                </a>
                                                <a href="checkout.html" className="dropdown-item">
                                                    Checkout
                                                </a>
                                            </div>
                                        </div>
                                        <a href="contact.html" className="nav-item nav-link">
                                            Contact
                                        </a>
                                    </div>
                                    <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                        <a href="" className="btn px-0">
                                            <i className="fas fa-heart text-primary" />
                                            <span
                                                className="badge text-secondary border border-secondary rounded-circle"
                                                style={{ paddingBottom: 2 }}
                                            >
                                                0
                                            </span>
                                        </a>
                                        <a href="" className="btn px-0 ml-3">
                                            <i className="fas fa-shopping-cart text-primary" />
                                            <span
                                                className="badge text-secondary border border-secondary rounded-circle"
                                                style={{ paddingBottom: 2 }}
                                            >
                                                0
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mb-3">
                    <div className="row px-xl-5">
                        <div className="col-lg-8">
                            <div
                                id="header-carousel"
                                className="carousel slide carousel-fade mb-30 mb-lg-0"
                                data-ride="carousel"
                            >
                                <ol className="carousel-indicators">
                                    <li
                                        data-target="#header-carousel"
                                        data-slide-to={0}
                                        className="active"
                                    />
                                    <li data-target="#header-carousel" data-slide-to={1} />
                                    <li data-target="#header-carousel" data-slide-to={2} />
                                </ol>
                                <div className="carousel-inner">
                                    <div
                                        className="carousel-item position-relative active"
                                        style={{ height: 430 }}
                                    >
                                        <img
                                            className="position-absolute w-100 h-100"
                                            src="img/carousel-1.jpg"
                                            style={{ objectFit: "cover" }}
                                        />
                                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                            <div className="p-3" style={{ maxWidth: 700 }}>
                                                <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                                                    Men Fashion
                                                </h1>
                                                <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                                                    Lorem rebum magna amet lorem magna erat diam stet. Sadips
                                                    duo stet amet amet ndiam elitr ipsum diam
                                                </p>
                                                <a
                                                    className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                                                    href="#"
                                                >
                                                    Shop Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="carousel-item position-relative"
                                        style={{ height: 430 }}
                                    >
                                        <img
                                            className="position-absolute w-100 h-100"
                                            src="img/carousel-2.jpg"
                                            style={{ objectFit: "cover" }}
                                        />
                                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                            <div className="p-3" style={{ maxWidth: 700 }}>
                                                <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                                                    Women Fashion
                                                </h1>
                                                <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                                                    Lorem rebum magna amet lorem magna erat diam stet. Sadips
                                                    duo stet amet amet ndiam elitr ipsum diam
                                                </p>
                                                <a
                                                    className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                                                    href="#"
                                                >
                                                    Shop Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="carousel-item position-relative"
                                        style={{ height: 430 }}
                                    >
                                        <img
                                            className="position-absolute w-100 h-100"
                                            src="img/carousel-3.jpg"
                                            style={{ objectFit: "cover" }}
                                        />
                                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                            <div className="p-3" style={{ maxWidth: 700 }}>
                                                <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                                                    Kids Fashion
                                                </h1>
                                                <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                                                    Lorem rebum magna amet lorem magna erat diam stet. Sadips
                                                    duo stet amet amet ndiam elitr ipsum diam
                                                </p>
                                                <a
                                                    className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                                                    href="#"
                                                >
                                                    Shop Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="product-offer mb-30" style={{ height: 200 }}>
                                <img className="img-fluid" src="img/offer-1.jpg" alt="" />
                                <div className="offer-text">
                                    <h6 className="text-white text-uppercase">Save 20%</h6>
                                    <h3 className="text-white mb-3">Special Offer</h3>
                                    <a href="" className="btn btn-primary">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                            <div className="product-offer mb-30" style={{ height: 200 }}>
                                <img className="img-fluid" src="img/offer-2.jpg" alt="" />
                                <div className="offer-text">
                                    <h6 className="text-white text-uppercase">Save 20%</h6>
                                    <h3 className="text-white mb-3">Special Offer</h3>
                                    <a href="" className="btn btn-primary">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5">
                    <div className="row px-xl-5 pb-3">
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <div
                                className="d-flex align-items-center bg-light mb-4"
                                style={{ padding: 30 }}
                            >
                                <h1 className="fa fa-check text-primary m-0 mr-3" />
                                <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <div
                                className="d-flex align-items-center bg-light mb-4"
                                style={{ padding: 30 }}
                            >
                                <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
                                <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <div
                                className="d-flex align-items-center bg-light mb-4"
                                style={{ padding: 30 }}
                            >
                                <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
                                <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <div
                                className="d-flex align-items-center bg-light mb-4"
                                style={{ padding: 30 }}
                            >
                                <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
                                <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </>


        </>
    )
}
export default Sidebar;