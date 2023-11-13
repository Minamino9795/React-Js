import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Books from "../../models/Books";

const rules = Yup.object().shape({
    Title: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    Quantity: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
});

function EditBook(props) {
    let navigate = useNavigate();
    const params = useParams();
    const [id, setId] = useState(0);
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        'Title': '',
        'Quantity': ''
    })


    // Chạy 1 lần duy nhất
    useEffect(() => {
        setId(params.id);

        Books.find(params.id).then((res) => {
            setFormData(res.data);
        })
        // Thiết lập data cho form data
        // setFormData( products[params.id] )
    }, []);

    const handleSubmit = (values) => {
        let data = values;
        Books.update(params.id, data).then((res) => {
            alert('Sửa Thành công')
            // Chuyển hướng
            navigate("/book")
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
                        <label htmlFor="Title">Name</label>
                        <Field name="Title" />
                        {errors.Title && touched.Title ? (
                            <div>{errors.Title}</div>
                        ) : null}

                        <label htmlFor="Quantity">Quantity</label>
                        <Field name="Quantity" />
                        {errors.Quantity && touched.Quantity ? (
                            <div>{errors.Quantity}</div>
                        ) : null}

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default EditBook;