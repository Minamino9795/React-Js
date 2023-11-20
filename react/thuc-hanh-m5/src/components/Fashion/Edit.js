import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
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

function Edit(props) {
    let navigate = useNavigate();
    const params = useParams();
    const [id, setId] = useState(0);
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        'name': '',
        'price': '',
        'stock': '',
        'description': '',
    })


    // Chạy 1 lần duy nhất
    useEffect(() => {
        setId(params.id);

        FashionModel.find(params.id).then((res) => {
            setFormData(res.data);
        })
        // Thiết lập data cho form data
        // setFormData( products[params.id] )
    }, []);

    const handleSubmit = (values) => {
        let data = values;
        FashionModel.update(params.id, data).then((res) => {
            alert('Sửa Thành công')
            // Chuyển hướng
            navigate("/")
        }).catch((res) => {
            alert('Sửa Thất bại')
        })
    }
    return (
        <div className="form-container">
            <h1>Cập nhật sản phẩm</h1>
            <Formik
                initialValues={formData}
                validationSchema={rules}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="name">Tên Sản Phẩm</label>
                        <Field name="name" className="input-field"/>
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
                        <Field name="stock" className="input-field"/>
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
                        <button type="submit">Cập nhật</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Edit;