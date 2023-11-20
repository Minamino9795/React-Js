import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import FashionModel from "../../models/FashionModel";



function Show(props) {
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


    return (
        <div>
            <h1>Chi tiết sản phẩm</h1>
            <Formik
                initialValues={formData}
                enableReinitialize={true}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="name">Tên sản phẩm</label>
                        <Field name="name" />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <br />
                        <label htmlFor="price">Giá(đ)</label>
                        <Field name="price" />
                        {errors.price && touched.price ? (
                            <div>{errors.price}</div>
                        ) : null}
                        <br />
                        <label htmlFor="stock">Tồn kho</label>
                        <Field name="stock" />
                        {errors.stock && touched.stock ? (
                            <div>{errors.stock}</div>
                        ) : null}
                        <br />
                        <label htmlFor="description">Mô tả</label>
                        <Field name="description" />
                        {errors.description && touched.description ? (
                            <div>{errors.description}</div>
                        ) : null}
                        <br />

                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Show;