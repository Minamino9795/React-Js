import React from "react";
function Header(props) {
    return (
        <>

            <div className="container-fluid">
                <div className="row bg-secondary py-1 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center h-100">
                            <a className="text-body mr-3" href="">
                                Quay về
                            </a>
                            <a className="text-body mr-3" href="">
                                Liên hệ
                            </a>
                            <a className="text-body mr-3" href="">
                                Trợ giúp
                            </a>
                            <a className="text-body mr-3" href="">
                                Câu hỏi thường gặp
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-light dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    Tài khoản
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="/login">

                                    <button className="dropdown-item" type="button">
                                        Đăng nhập
                                    </button>
                                    </a>
                                    <a href="/register">

                                    <button className="dropdown-item" type="button">
                                        Đăng ký
                                    </button>
                                    </a>
                                </div>
                            </div>
                            <div className="btn-group mx-2">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-light dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    USD
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">
                                        EUR
                                    </button>
                                    <button className="dropdown-item" type="button">
                                        GBP
                                    </button>
                                    <button className="dropdown-item" type="button">
                                        CAD
                                    </button>
                                </div>
                            </div>
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-light dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    EN
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">
                                        FR
                                    </button>
                                    <button className="dropdown-item" type="button">
                                        AR
                                    </button>
                                    <button className="dropdown-item" type="button">
                                        RU
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="d-inline-flex align-items-center d-block d-lg-none">
                            <a href="" className="btn px-0 ml-2">
                                <i className="fas fa-heart text-dark" />
                                <span
                                    className="badge text-dark border border-dark rounded-circle"
                                    style={{ paddingBottom: 2 }}
                                >
                                    0
                                </span>
                            </a>
                            <a href="" className="btn px-0 ml-2">
                                <i className="fas fa-shopping-cart text-dark" />
                                <span
                                    className="badge text-dark border border-dark rounded-circle"
                                    style={{ paddingBottom: 2 }}
                                >
                                    Ơ
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-4">
                        <a href="" className="text-decoration-none">
                            <span className="h1 text-uppercase text-primary bg-dark px-2">
                            Watch
                            </span>
                            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                            Men97
                            </span>
                        </a>
                    </div>
                    <div className="col-lg-4 col-6 text-left">
                        <form action="" method="GET">
                            
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="search"
                                    placeholder="Nhập từ tìm kiếm"
                                />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary">
                                        <i className="fa fa-search" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-4 col-6 text-right">
                        <p className="m-0">Dương Đình Nghĩa</p>
                        <h5 className="m-0">+374 180 497</h5>
                    </div>
                </div>
            </div>



        </>
    )
}
export default Header;