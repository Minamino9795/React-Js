import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import Swal from "sweetalert2";
import CustomerModel from "../model/CustomerModel";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Vui lòng nhập tên!"),
  email: Yup.string().required("Vui lòng nhập email!"),
  phone: Yup.number().required("Vui lòng nhập số điện thoại!"),
  address: Yup.string().required("Vui lòng nhập địa chỉ!"),
  password: Yup.string().required("Vui lòng nhập mật khẩu!"),
  repeatpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Mật khẩu nhập lại không khớp')
    .required('Vui lòng nhập lại mật khẩu'),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  password: "",
  repeatpassword: "",
};

function Register(props) {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("có nhấn nút submit", values);
    CustomerModel.register(values)
      .then((res) => {
        // console.log(values);
        handleRegisterSuccess();
        navigate("/login");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Email đã tồn tại",

        });
      });
  };

  const handleRegisterSuccess = () => {
    Swal.fire({
      icon: "success",
      title: "Đăng ký thành công vui lòng đăng nhập!",
      showConfirmButton: false,
      timer: 2000,
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
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                {/* <div className="col-lg-5 d-none d-lg-block bg-register-image" /> */}
                <div
                  className="col-lg-5 d-none d-lg-block"
                  style={{ backgroundImage: 'url("https://anh.eva.vn/upload/1-2015/images/2015-01-21/1421837207-david-beckham-langsao-eva--7-.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
                />

                <div className="col-lg-7">
                  <div className="p-5">

                    <div className="text-center">

                      <h1 className="h4 text-gray-900 mb-4">Đăng ký tài khoản</h1>
                    </div>
                    <Form className="user">
                      <div className="form-group row">
                        <>

                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <Field
                              type="text"
                              className="form-control form-control-user"
                              id="exampleFirstName"
                              placeholder="Nhập tên tài khoản"
                              name="name"
                            />
                            <ErrorMessage name="name" component="div" className="error-message" style={{ color: 'red' }} />

                          </div>
                          <div className="col-sm-6">
                            <Field
                              type="text"
                              className="form-control form-control-user"
                              id="examplePhone"
                              placeholder="Nhập số điện thoại"
                              name="phone"
                            />
                            <ErrorMessage name="phone" component="div" className="error-message" style={{ color: 'red' }} />
                          </div>
                        </>

                      </div>

                      <div className="form-group">
                        <Field
                          type="text"
                          className="form-control form-control-user"
                          id="exampleInputAddress"
                          placeholder="Nhập địa chỉ"
                          name="address"
                        />
                        <ErrorMessage name="address" component="div" className="error-message" style={{ color: 'red' }} />
                      </div>
                      <div className="form-group">
                        <Field
                          type="email"
                          name="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          placeholder="Nhập email"
                        />
                        <ErrorMessage name="email" component="div" className="error-message" style={{ color: 'red' }} />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <Field
                            type="password"
                            name="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Nhập mật khẩu"
                          />
                          <ErrorMessage name="password" component="div" className="error-message" style={{ color: 'red' }} />
                        </div>
                        <div className="col-sm-6">
                          <Field
                            type="password"
                            name="repeatpassword"
                            className="form-control form-control-user"
                            id="exampleRepeatPassword"
                            placeholder="Nhập lại mật khẩu"
                          />
                          <ErrorMessage name="repeatpassword" component="div" className="error-message" style={{ color: 'red' }} />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-facebook btn-user btn-block"
                      >
                        Đăng ký tài khoản
                      </button>


                      <hr />
                      <a
                        href="index.html"
                        className="btn btn-google btn-user btn-block"
                      >
                        <i className="fab fa-google fa-fw" /> Đăng ký bằng Gooogle
                      </a>

                    </Form >

                    <hr />
                    <div className="text-center">
                      <a className="small" href="forgot-password.html">
                        Quên mật khẩu?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="/login">
                        Bạn có sẵn sàng để tạo một tài khoản? Đăng nhập!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </Formik >

    </>



  );
}

export default Register;
