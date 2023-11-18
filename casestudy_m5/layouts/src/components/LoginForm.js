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
    );
}

export default LogInForm;
