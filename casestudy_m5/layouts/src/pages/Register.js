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
  password: Yup.string().required("Vui lòng nhập mật khẩu!")
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  password: "",
};

function Register(props) {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    CustomerModel.register(values)
    .then((res) => {
        // console.log(values);
        handleRegisterSuccess();
        navigate("/login");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Có lỗi xảy ra khi đăng ký!",
          text: err.message,
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
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="container py-5 h-100">
            <div className="bg-light p-30 mb-5">
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="name">Name</label>
                  <Field
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                   <ErrorMessage name="name" component="div" className="error-message" />
                </div>
                <div className="col-md-6 form-group">
                  <label>E-mail</label>
                  <Field
                    className="form-control"
                    type="email"
                    placeholder="example@email.com"
                    name="email"
                  />
                   <ErrorMessage name="email" component="div" className="error-message" />
                </div>
                <div className="col-md-6 form-group">
                  <label>Phone</label>
                  <Field
                    className="form-control"
                    type="text"
                    placeholder="+123 456 789"
                    name="phone"
                  />
                   <ErrorMessage name="phone" component="div" className="error-message" />
                </div>
                <div className="col-md-6 form-group">
                  <label>Address</label>
                  <Field
                    className="form-control"
                    type="text"
                    placeholder="......."
                    name="address"
                  />
                   <ErrorMessage name="address" component="div" className="error-message" />
                </div>
                <div className="col-md-6 form-group">
                  <label>Password</label>
                  <Field
                    className="form-control"
                    type="password"
                    placeholder="Pass word"
                    name="password"
                  />
                   <ErrorMessage name="password" component="div" className="error-message" />
                </div>
                <div className="col-md-4 offset-md-4">
                  <button
                    className="btn btn-dark btn-lg btn-block"
                    type="submit"
                  >
                    Register
                  </button>
                  <Link
                    className="btn btn-success btn-lg btn-block"
                    to="/login"
                  >
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default Register;
