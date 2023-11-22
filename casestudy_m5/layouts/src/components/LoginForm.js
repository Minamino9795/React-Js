import React from "react";
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
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

    const handleSubmit = (values) => {
        CustomerModel.login(values)
            .then((res) => {
                CustomerModel.setCookie("customer", JSON.stringify(res.customer), res.expires_in);
                localStorage.setItem("token", res.access_token);
                navigate("/checkout");
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
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
        >
            <Form clasName="login">

                <div className="d-flex align-items-center mb-3 pb-1">

                    <span className="h1 fw-bold mb-0">
                    <div className="">
                        <a href="" className="text-decoration-none">
                            <span className="h1 text-uppercase text-primary bg-dark px-2">
                            Watch
                            </span>
                            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                            Men97
                            </span>
                        </a>
                    </div>
                    </span>
                </div>
                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>
                    Sign into your account
                </h5>
                <div className="form-outline mb-4">
                    <Field
                        type="email"
                        id="form2Example17"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="Nhập địa chỉ email"

                    />
                    <label className="form-label" htmlFor="form2Example17">
                        Email
                    </label>
                </div>
                <div className="form-outline mb-4">
                    <Field
                        type="password"
                        id="form2Example27"
                        name="password"
                        className="form-control form-control-lg"
                        placeholder="Nhập password"
                    />
                    <label className="form-label" htmlFor="form2Example27">
                        Password
                    </label>
                </div>
                <div className="pt-1 mb-4">
                    <button className="btn btn-danger btn-lg btn-block" type="submit">
                        Login
                    </button>
                    <Link className="btn btn-info btn-lg btn-block" to="/register">
                        Register
                    </Link>
                </div>
                <a className="small text-muted" href="">
                    Forgot password?
                </a>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    <a href="#!" style={{ color: "#393f81" }}>
                        Register here
                    </a>
                </p>

            </Form>
        </Formik>


        // <>
        //     <meta charSet="utf-8" />
        //     <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        //     <meta
        //         name="viewport"
        //         content="width=device-width, initial-scale=1, shrink-to-fit=no"
        //     />
        //     <meta name="description" content="" />
        //     <meta name="author" content="" />
        //     <title>SB Admin 2 - Register</title>
        //     {/* Custom fonts for this template*/}
        //     <link
        //         href="assets/vendor/fontawesome-free/css/all.min.css"
        //         rel="stylesheet"
        //         type="text/css"
        //     />
        //     <link
        //         href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        //         rel="stylesheet"
        //     />
        //     {/* Custom styles for this template*/}
        //     <link href="assets/css/sb-admin-2.min.css" rel="stylesheet" />
        //     <div className="container">
        //         <div className="card o-hidden border-0 shadow-lg my-5">
        //             <div className="card-body p-0">
        //                 {/* Nested Row within Card Body */}
        //                 <div className="row">
        //                     <div className="col-lg-5 d-none d-lg-block bg-register-image" />
        //                     <div className="col-lg-7">
        //                         <div className="p-5">
        //                             <div className="text-center">
        //                                 <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
        //                             </div>
        //                             <form className="user">
        //                                 <div className="form-group row">
        //                                     <div className="col-sm-6 mb-3 mb-sm-0">
        //                                         <input
        //                                             type="text"
        //                                             className="form-control form-control-user"
        //                                             id="exampleFirstName"
        //                                             placeholder="First Name"
        //                                         />
        //                                     </div>
        //                                     <div className="col-sm-6">
        //                                         <input
        //                                             type="text"
        //                                             className="form-control form-control-user"
        //                                             id="exampleLastName"
        //                                             placeholder="Last Name"
        //                                         />
        //                                     </div>
        //                                 </div>
        //                                 <div className="form-group">
        //                                     <input
        //                                         type="email"
        //                                         className="form-control form-control-user"
        //                                         id="exampleInputEmail"
        //                                         placeholder="Email Address"
        //                                     />
        //                                 </div>
        //                                 <div className="form-group row">
        //                                     <div className="col-sm-6 mb-3 mb-sm-0">
        //                                         <input
        //                                             type="password"
        //                                             className="form-control form-control-user"
        //                                             id="exampleInputPassword"
        //                                             placeholder="Password"
        //                                         />
        //                                     </div>
        //                                     <div className="col-sm-6">
        //                                         <input
        //                                             type="password"
        //                                             className="form-control form-control-user"
        //                                             id="exampleRepeatPassword"
        //                                             placeholder="Repeat Password"
        //                                         />
        //                                     </div>
        //                                 </div>
        //                                 <a
        //                                     href=""
        //                                     className="btn btn-primary btn-user btn-block"
        //                                     style={{ color: "white" }}
        //                                     >
        //                                     Register Account
        //                                 </a>

        //                                 <hr />
        //                                 <a
        //                                     href="index.html"
        //                                     className="btn btn-google btn-user btn-block"
        //                                 >
        //                                     <i className="fab fa-google fa-fw" /> Register with Google
        //                                 </a>
        //                                 <a
        //                                     href="index.html"
        //                                     className="btn btn-facebook btn-user btn-block"
        //                                 >
        //                                     <i className="fab fa-facebook-f fa-fw" /> Register with
        //                                     Facebook
        //                                 </a>
        //                             </form>
        //                             <hr />
        //                             <div className="text-center">
        //                                 <a className="small" href="forgot-password.html">
        //                                     Forgot Password?
        //                                 </a>
        //                             </div>
        //                             <div className="text-center">
        //                                 <a className="small" href="login.html">
        //                                     Already have an account? Login!
        //                                 </a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     {/* Bootstrap core JavaScript*/}
        //     {/* Core plugin JavaScript*/}
        //     {/* Custom scripts for all pages*/}
        // </>

    );
}

export default LogInForm;
