import React from "react";
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomerModel from "../model/CustomerModel";

const SignupSchema = Yup.object().shape({
    email: Yup.string().required("Vui lòng nhập email !"),
    password: Yup.string().required("Vui lòng nhập mật khẩu !"),
});

const initialValues = {
    email: "",
    password: "",
};

function LogInForm(props) {
    const navigate = useNavigate();
    // const location = useLocation();

    const handleSubmit = (values) => {
        CustomerModel.login(values)
            .then((res) => {
                CustomerModel.setCookie("customer", JSON.stringify(res.customer), res.expires_in);
                localStorage.setItem("token", res.access_token);
                navigate("/checkout");
                // Kiểm tra nếu đăng nhập xuất phát từ trang checkout, chuyển đến trang checkout
                //  if (location.pathname === "/cart") {
                //     navigate("/checkout");
                // } else {
                //     // Nếu không, chuyển đến trang chủ
                //     navigate("/");
                // }
                handleLoginSuccess();
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Đăng nhập thất bại',

                    showConfirmButton: false,
                    timer: 1500, // Tăng thời gian hiển thị lên 1.5 giây
                    timerProgressBar: true, // Thêm thanh tiến trình thời gian
                    toast: true, // Sử dụng kiểu thông báo "toast"
                    showClass: {
                        popup: 'swal2-noanimation',
                        backdrop: 'swal2-noanimation',
                    },
                    hideClass: {
                        popup: '',
                        backdrop: '',
                    },
                });
            });
    };
    const handleLoginSuccess = () => {
        Swal.fire({
            icon: 'success',
            title: 'Đăng nhập thành công',
            position: 'top-end', // Hiển thị ở góc trên bên phải
            showConfirmButton: false,
            timer: 1500, // Tăng thời gian hiển thị lên 1.5 giây
            timerProgressBar: true, // Thêm thanh tiến trình thời gian
            iconColor: '#00a65a',
            toast: true,// Sử dụng kiểu thông báo "toast"
            showClass: {
                popup: 'swal2-noanimation',
                backdrop: 'swal2-noanimation',
            },
            hideClass: {
                popup: '',
                backdrop: '',
            },
        });
    };

    return (
        <>

            <link
                href="assets/vendor/fontawesome-free/css/all.min.css"
                rel="stylesheet"
                type="text/css"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                rel="stylesheet"
            />
            <link href="assets/css/sb-admin-2.min.css" rel="stylesheet" />
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">

                                    <div className="row">
                                        {/* <div className="col-lg-6 d-none d-lg-block bg-login-image" /> */}
                                        <div
                                            className="col-lg-5 d-none d-lg-block"
                                            style={{ backgroundImage: 'url("https://i.vietgiaitri.com/2015/1/27/david-beckham-quy-ong-phong-tran-va-lich-lam-ef5834.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
                                        />

                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                                </div>
                                                <Form className="user">
                                                    <div className="form-group">
                                                        <Field
                                                            type="email"
                                                            className="form-control form-control-user"
                                                            id="exampleInputEmail"
                                                            aria-describedby="emailHelp"
                                                            placeholder="Nhập địa chỉ Email..."
                                                            name="email"
                                                        />
                                                        <ErrorMessage name="email" component="div" className="error-message" style={{ color: 'red' }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <Field
                                                            type="password"
                                                            className="form-control form-control-user"
                                                            id="exampleInputPassword"
                                                            placeholder="Nhập mật khẩu"
                                                            name="password"
                                                        />
                                                        <ErrorMessage name="password" component="div" className="error-message" style={{ color: 'red' }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox small">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customCheck"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="customCheck"
                                                            >
                                                                Ghi nhớ tài khoản
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="btn btn-facebook btn-user btn-block"
                                                        type="submit"
                                                    >
                                                        Đăng nhập
                                                    </button>
                                                    <hr />
                                                    <a
                                                        href="index.html"
                                                        className="btn btn-google btn-user btn-block"
                                                    >
                                                        <i className="fab fa-google fa-fw" /> Đăng nhập bằng Google
                                                    </a>

                                                </Form>
                                                <hr />
                                                <div className="text-center">
                                                    <a className="small" href="forgot-password.html">
                                                        Quên mật khẩu?
                                                    </a>
                                                </div>
                                                <div className="text-center">
                                                    <a className="small" href="/register">
                                                        Đăng ký tài khoản!
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Formik>
        </>



    );
}

export default LogInForm;
