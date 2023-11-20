import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import FashionModel from "../../models/FashionModel";
const rules = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    price: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    stock: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    description: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
});
function Create(props) {
    let navigate = useNavigate();
    // Làm việc với dữ liệu
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        'name': '',
        'price': '',
        'stock': '',
        'description': '',
    })
    const handleSubmit = (values) => {
        // console.log(values);
        let data = values;
        FashionModel.store(data).then((res) => {
            alert('Thêm thành công');
            // Chuyển hướng
            navigate("/")
        }).catch((res) => {
            alert('Thêm thất bại')
        })
    }
    return (
        <div className="form-container">
            <h1>Thêm sản phẩm</h1>
            <Formik
                initialValues={formData}
                validationSchema={rules}
                onSubmit={(values) => handleSubmit(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="name">Tên Sản phẩm</label>
                        <Field name="name" className="input-field" />
                        {errors.name && touched.name ? (
                            <div className="error-message">{errors.name}</div>
                        ) : null}
                        <br />
                        <label htmlFor="price">Giá</label>
                        <Field name="price" className="input-field"/>
                        {errors.price && touched.price ? (
                            <div className="error-message">{errors.price}</div>
                        ) : null}
                        <br />
                        <label htmlFor="stock">Tồn kho</label>
                        <Field name="stock" className="input-field" />
                        {errors.stock && touched.stock ? (
                            <div className="error-message">{errors.stock}</div>
                        ) : null}
                         <br />
                        <label htmlFor="description">Mô tả</label>
                        <Field name="description" className="input-field"/>
                        {errors.description && touched.description ? (
                            <div className="error-message">{errors.description}</div>
                        ) : null}

                        <br />
                        <button type="submit">Thêm</button>
                       
                    </Form>
                )}
            </Formik>
        </div>
    );
}
export default Create;