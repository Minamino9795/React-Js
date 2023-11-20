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
        .required("Required")
});
function Create(props) {
    let navigate = useNavigate();
    // Làm việc với dữ liệu
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        'name': '',
        'price': '',
        'stock': ''
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
        <div>
            <h1>Create</h1>
            <Formik
                initialValues={formData}
                validationSchema={rules}
                onSubmit={(values) => handleSubmit(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field name="name" />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <br />
                        <label htmlFor="price">Price</label>
                        <Field name="price" />
                        {errors.price && touched.price ? (
                            <div>{errors.price}</div>
                        ) : null}
                        <br />
                        <label htmlFor="stock">Stock</label>
                        <Field name="stock" />
                        {errors.stock && touched.stock ? (
                            <div>{errors.stock}</div>
                        ) : null}
                        <br />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
export default Create;