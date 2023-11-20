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
        'stock': ''
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
        <div>
            <h1>Edit {params.id}</h1>
            <Formik
                initialValues={formData}
                validationSchema={rules}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field name="name" />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}

                        <label htmlFor="price">Price</label>
                        <Field name="price" />
                        {errors.price && touched.price ? (
                            <div>{errors.price}</div>
                        ) : null}

                        <label htmlFor="stock">Stock</label>
                        <Field name="stock" />
                        {errors.stock && touched.stock ? (
                            <div>{errors.stock}</div>
                        ) : null}

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Edit;