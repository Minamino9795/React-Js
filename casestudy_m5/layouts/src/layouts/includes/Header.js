import React from "react";
import Swal from "sweetalert2";
import CustomerModel from "../../model/CustomerModel";
import { Link, useNavigate } from "react-router-dom";
function Header(props) {

    const navigate = useNavigate();

    const handleLogout = () => {
        CustomerModel.logout()
            .then((response) => {
                CustomerModel.deleteCookie("customer");
                alert('Bạn chắc chắn muốn đăng xuất khỏi hệ thống?')
                Swal.fire({
                    icon: "success",
                    title: "Đăng xuất thành công",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    navigate("/");
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Đăng xuất thất bại",
                });
            });
    };
    let customer = CustomerModel.getCookie("customer");
    customer = customer ? JSON.parse(customer) : "";

    return (
        <>


            <div className="col-lg-6 text-center text-lg-right">



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
                            0
                        </span>
                    </a>
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
                    {/* <p className="m-0">Dương Đình Nghĩa</p> */}
                    {/* <h5 className="m-0">+374 180 497</h5> */}
                    <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-sm btn-light dropdown-toggle"
                            data-toggle="dropdown"
                        >
                            {customer ? (
                                <>
                                    <i className="fas fa-user" /> {customer.name}
                                </>
                            ) : (
                                <>
                                <i className="fas fa-user" /> Đăng nhập
                              </>
                                
                            )}
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            {customer ? (
                                <Link to="/" onClick={handleLogout}>
                                    Đăng xuất
                                </Link>
                            ) : (
                                <div>
                                    <Link to="/login" type="" >
                                        Đăng nhập
                                    </Link>
                                </div>
                            )}
                            <div>
                                <Link to="/register" type="button">
                                    Đăng Ký
                                </Link>
                            </div>



                        </div>
                    </div>



                </div>
            </div>




        </>
    )
}


export default Header;